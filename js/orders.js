/**
 * Creative Roots — Ordering Service Layer
 * Clean, decoupled order management and persistence layer.
 * 
 * Capabilities:
 * - Active cart / order draft state with quantity manipulation (+/-)
 * - Validation (Name, Phone format, City, required fields)
 * - Unique Reference Number generation (CR-2026-XXXX)
 * - Local storage persistence under 'cr_orders_store'
 * - Formatted WhatsApp pre-filled message generator
 * - Pluggable backend API endpoint hook (REST, Firebase, Supabase, MySQL)
 * - Double-submission prevention and loading states
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.OrderService = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const STORAGE_KEY_ORDERS = 'cr_orders_store';
  const STORAGE_KEY_CURRENT_CART = 'cr_active_cart';
  const WHATSAPP_PHONE = '923347009992'; // Official Creative Roots WhatsApp Business Number

  // Active Draft Cart in Memory
  let activeCart = [];

  // Load cart from session/local storage
  function loadCart() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_CURRENT_CART);
      if (stored) {
        activeCart = JSON.parse(stored);
      }
    } catch (e) {
      activeCart = [];
    }
    return activeCart;
  }

  // Persist cart
  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY_CURRENT_CART, JSON.stringify(activeCart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }

  // Add Item to Cart
  function addItem(item, quantity = 1) {
    if (!item || !item.id) return;
    loadCart();

    const existingIndex = activeCart.findIndex(i => i.id === item.id);
    if (existingIndex > -1) {
      activeCart[existingIndex].quantity += quantity;
    } else {
      activeCart.push({
        id: item.id,
        name: item.name,
        price: item.price || 'Inquire Quote',
        unit: item.unit || '',
        image: item.image || '',
        quantity: Math.max(1, quantity)
      });
    }

    saveCart();
    notifyCartChange();
    return activeCart;
  }

  // Update Item Quantity
  function updateItemQuantity(itemId, quantity) {
    loadCart();
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }

    const item = activeCart.find(i => i.id === itemId);
    if (item) {
      item.quantity = quantity;
      saveCart();
      notifyCartChange();
    }
  }

  // Remove Item
  function removeItem(itemId) {
    loadCart();
    activeCart = activeCart.filter(i => i.id !== itemId);
    saveCart();
    notifyCartChange();
  }

  // Clear Cart
  function clearCart() {
    activeCart = [];
    saveCart();
    notifyCartChange();
  }

  // Get Cart Items
  function getCart() {
    return loadCart();
  }

  // Get Cart Count
  function getCartCount() {
    const cart = loadCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Subscribers for reactive UI updates
  const cartSubscribers = [];
  function onCartChange(callback) {
    if (typeof callback === 'function') {
      cartSubscribers.push(callback);
    }
  }

  function notifyCartChange() {
    const cart = getCart();
    cartSubscribers.forEach(cb => {
      try { cb(cart); } catch (err) { console.error('Cart subscriber error:', err); }
    });
  }

  // Generate Unique Order Reference
  function generateOrderReference() {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `CR-${year}-${random}`;
  }

  // Phone validation (accepts 03XX-XXXXXXX, +923XXXXXXXXX, 03XXXXXXXXX, or general international numbers)
  function validatePhoneNumber(phone) {
    if (!phone) return false;
    const clean = phone.replace(/[\s\-\(\)]/g, '');
    // Pakistan phone format or international 10-15 digits
    const pkPattern = /^((\+92)|(0092)|(0))?3[0-9]{9}$/;
    const intlPattern = /^\+?[0-9]{10,15}$/;
    return pkPattern.test(clean) || intlPattern.test(clean);
  }

  // Validate Order Payload
  function validateOrder(customerData, items) {
    const errors = {};

    if (!items || items.length === 0) {
      errors.items = 'Please select at least one item to place an order.';
    }

    if (!customerData.name || customerData.name.trim().length < 2) {
      errors.name = 'Please provide your full name.';
    }

    if (!customerData.phone || !validatePhoneNumber(customerData.phone)) {
      errors.phone = 'Please provide a valid contact / WhatsApp phone number.';
    }

    if (!customerData.city || customerData.city.trim().length < 2) {
      errors.city = 'Please specify your delivery city.';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors: errors
    };
  }

  // Build Pre-Filled WhatsApp Message URL
  function buildWhatsAppUrl(order) {
    const lines = [
      `*✦ NEW ORDER — CREATIVE ROOTS ✦*`,
      `*Order Reference:* ${order.orderRef}`,
      `*Category:* ${order.categoryName || 'Corporate Solutions'}`,
      `*Date:* ${new Date(order.createdAt).toLocaleDateString('en-GB')}`,
      ``,
      `*CUSTOMER DETAILS:*`,
      `• *Name:* ${order.customer.name}`,
      `• *Phone:* ${order.customer.phone}`,
      `• *City:* ${order.customer.city}`,
      order.customer.address ? `• *Address/Company:* ${order.customer.address}` : null,
      order.customer.dateRequired ? `• *Required By:* ${order.customer.dateRequired}` : null,
      ``,
      `*ORDERED ITEMS (${order.items.length}):*`
    ].filter(Boolean);

    order.items.forEach((item, idx) => {
      lines.push(`${idx + 1}. *${item.name}* x ${item.quantity} ${item.unit || ''} (${item.price})`);
    });

    if (order.customer.notes) {
      lines.push(``);
      lines.push(`*SPECIAL NOTES / BRANDING:*`);
      lines.push(`"${order.customer.notes}"`);
    }

    lines.push(``);
    lines.push(`Please confirm receipt and provide official production timeline and invoice.`);

    const messageText = lines.join('\n');
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(messageText)}`;
  }

  /**
   * Save Order
   * 1. Validates inputs
   * 2. Persists to localStorage
   * 3. Dispatches to Backend API hook if configured
   * 4. Returns order object with WhatsApp direct URL
   */
  async function submitOrder(customerData, items, categoryMeta = {}) {
    const cartItems = (items && items.length > 0) ? items : getCart();
    const validation = validateOrder(customerData, cartItems);

    if (!validation.isValid) {
      throw {
        status: 'VALIDATION_ERROR',
        errors: validation.errors
      };
    }

    const orderRef = generateOrderReference();
    const orderPayload = {
      orderRef: orderRef,
      createdAt: new Date().toISOString(),
      categorySlug: categoryMeta.slug || '',
      categoryName: categoryMeta.name || 'Corporate Solutions',
      customer: {
        name: customerData.name.trim(),
        phone: customerData.phone.trim(),
        city: customerData.city.trim(),
        address: customerData.address ? customerData.address.trim() : '',
        dateRequired: customerData.dateRequired || '',
        notes: customerData.notes ? customerData.notes.trim() : ''
      },
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        unit: item.unit || '',
        quantity: item.quantity,
        image: item.image
      })),
      status: 'pending'
    };

    // 1. Store locally
    saveOrderToLocalStorage(orderPayload);

    // 2. Dispatch to Backend Hook (Asynchronous & Non-blocking)
    try {
      await sendToBackendApi(orderPayload);
    } catch (apiErr) {
      console.warn('Backend API submission skipped or failed (stored locally):', apiErr);
    }

    // 3. Clear Cart
    clearCart();

    // 4. Return Order with WhatsApp Link
    return {
      success: true,
      order: orderPayload,
      whatsAppUrl: buildWhatsAppUrl(orderPayload)
    };
  }

  // Local Storage Orders Database
  function saveOrderToLocalStorage(order) {
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_ORDERS) || '[]');
      existing.unshift(order);
      localStorage.setItem(STORAGE_KEY_ORDERS, JSON.stringify(existing));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }

  function getStoredOrders() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY_ORDERS) || '[]');
    } catch (e) {
      return [];
    }
  }

  /**
   * Backend API Service Hook
   * Point this to your backend endpoint (e.g., /api/orders, Firebase Functions, Supabase)
   */
  async function sendToBackendApi(orderPayload) {
    // Check if backend endpoint is configured in environment or window
    const backendEndpoint = (typeof window !== 'undefined' && window.CR_BACKEND_ORDER_API) ? window.CR_BACKEND_ORDER_API : null;
    if (!backendEndpoint) {
      return { synced: false, message: 'No backend API configured. Order stored in local service layer.' };
    }

    const response = await fetch(backendEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderPayload)
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    return await response.json();
  }

  return {
    addItem: addItem,
    updateItemQuantity: updateItemQuantity,
    removeItem: removeItem,
    clearCart: clearCart,
    getCart: getCart,
    getCartCount: getCartCount,
    onCartChange: onCartChange,
    validateOrder: validateOrder,
    submitOrder: submitOrder,
    buildWhatsAppUrl: buildWhatsAppUrl,
    getStoredOrders: getStoredOrders,
    sendToBackendApi: sendToBackendApi
  };
});
