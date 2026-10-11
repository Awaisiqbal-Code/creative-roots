/**
 * Creative Roots — Dedicated Category Page Controller
 * Handles dynamic routing, rendering from CATEGORIES_CONFIG,
 * Order Drawer lifecycle, and Project Lightbox.
 */

document.addEventListener('DOMContentLoaded', function () {

  // Ensure config and orders services are loaded
  if (typeof CATEGORIES_CONFIG === 'undefined' || typeof OrderService === 'undefined') {
    console.error('CATEGORIES_CONFIG or OrderService is missing.');
    return;
  }

  // 1. EXTRACT SLUG FROM URL (Query param ?slug= or pathname /category/:slug)
  function resolveCurrentSlug() {
    const urlParams = new URLSearchParams(window.location.search);
    const querySlug = urlParams.get('slug');
    if (querySlug) return querySlug.toLowerCase().trim();

    // Check pathname (e.g. /category/corporate-giveaways)
    const pathMatch = window.location.pathname.match(/\/category\/([^\/\?#]+)/);
    if (pathMatch && pathMatch[1]) {
      return pathMatch[1].toLowerCase().trim();
    }

    return null;
  }

  const rawSlug = resolveCurrentSlug();
  const category = CATEGORIES_CONFIG.getCategoryBySlug(rawSlug);

  // If slug is missing or not found in canonical categories, redirect to 404 page
  if (!category) {
    console.warn(`Category slug "${rawSlug}" not found. Redirecting to 404.`);
    window.location.href = '404.html';
    return;
  }

  // Always scroll to top on dynamic category page load
  window.scrollTo({ top: 0, behavior: 'instant' });

  // 2. SET SEO & META TAGS
  function applySeoMeta() {
    const pageTitle = category.seo && category.seo.title ? category.seo.title : `${category.name} | Creative Roots`;
    const pageDesc = category.seo && category.seo.description ? category.seo.description : category.description;
    const ogImg = category.seo && category.seo.ogImage ? category.seo.ogImage : category.heroImage;

    document.title = pageTitle;

    const metaTitle = document.getElementById('metaPageTitle');
    if (metaTitle) metaTitle.textContent = pageTitle;

    const metaDesc = document.getElementById('metaPageDesc');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);

    const ogTitle = document.getElementById('ogMetaTitle');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.getElementById('ogMetaDesc');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    const ogImage = document.getElementById('ogMetaImage');
    if (ogImage) ogImage.setAttribute('content', ogImg);
  }
  applySeoMeta();

  // 3. RENDER CATEGORY HERO
  function renderHero() {
    const heroSection = document.getElementById('categoryHeroSection');
    if (heroSection) {
      heroSection.style.backgroundImage = `url('${category.heroImage}')`;
    }

    const breadcrumbName = document.getElementById('breadcrumbCategoryName');
    if (breadcrumbName) breadcrumbName.textContent = category.name;

    const heroBadge = document.getElementById('heroCategoryBadge');
    if (heroBadge) heroBadge.textContent = category.badge || '✦ PREMIUM SERVICES';

    const heroTitle = document.getElementById('heroCategoryTitle');
    if (heroTitle) heroTitle.textContent = category.name;

    const heroTagline = document.getElementById('heroCategoryTagline');
    if (heroTagline) heroTagline.textContent = category.tagline || '';

    const heroDesc = document.getElementById('heroCategoryDesc');
    if (heroDesc) heroDesc.textContent = category.description || '';

    const waMsg = encodeURIComponent(`Hello Creative Roots, I am interested in your ${category.name} services and products. Please provide details.`);
    const waUrl = `https://wa.me/923347009992?text=${waMsg}`;

    const heroWhatsApp = document.getElementById('heroBtnWhatsApp');
    if (heroWhatsApp) heroWhatsApp.href = waUrl;

    const finalCtaWhatsApp = document.getElementById('finalCtaWhatsAppBtn');
    if (finalCtaWhatsApp) finalCtaWhatsApp.href = waUrl;
  }
  renderHero();

  // 4. RENDER INTRO & HIGHLIGHTS
  function renderIntroHighlights() {
    const introHeading = document.getElementById('introCategoryHeading');
    if (introHeading) introHeading.textContent = `Why Choose Our ${category.name}`;

    const introParagraph = document.getElementById('introCategoryParagraph');
    if (introParagraph) introParagraph.textContent = category.description;

    const highlightsGrid = document.getElementById('categoryHighlightsGrid');
    if (!highlightsGrid || !category.highlights) return;

    highlightsGrid.innerHTML = category.highlights.map(h => `
      <div class="highlight-card">
        <div class="highlight-icon-wrap">
          <i class="${h.icon || 'fa-solid fa-check'}"></i>
        </div>
        <h3>${h.title}</h3>
        <p>${h.desc}</p>
      </div>
    `).join('');
  }
  renderIntroHighlights();

  // 5. RENDER ORDER SECTION & ITEMS GRID
  function renderItemsGrid() {
    const itemsGrid = document.getElementById('categoryItemsGrid');
    if (!itemsGrid || !category.items) return;

    const heading = document.getElementById('orderSectionHeading');
    if (heading) heading.textContent = `${category.name} Catalog & Direct Ordering`;

    itemsGrid.innerHTML = category.items.map(item => `
      <article class="category-item-card" data-item-id="${item.id}">
        <div class="item-card-image-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          ${item.badge ? `<span class="item-card-badge">${item.badge}</span>` : ''}
        </div>
        <div class="item-card-content">
          <h3>${item.name}</h3>
          <p class="item-card-desc">${item.description}</p>
          <div class="item-card-footer">
            <div class="item-card-price">
              ${item.price} <span>${item.unit || ''}</span>
            </div>
            <button type="button" class="btn-add-to-order" data-add-item="${item.id}">
              <i class="fa-solid fa-plus"></i> Order
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach Add to Order event listeners
    itemsGrid.querySelectorAll('[data-add-item]').forEach(btn => {
      btn.addEventListener('click', function () {
        const itemId = this.getAttribute('data-add-item');
        const selectedItem = category.items.find(i => i.id === itemId);
        if (selectedItem) {
          OrderService.addItem(selectedItem, 1);
          openDrawer();
        }
      });
    });
  }
  renderItemsGrid();

  // 6. RENDER CATEGORY PROJECTS (Reusing ProjectCard & Lightbox Modal)
  function renderCategoryProjects() {
    const projectsGrid = document.getElementById('categoryProjectsGrid');
    if (!projectsGrid || !category.projects) return;

    const heading = document.getElementById('projectsSectionHeading');
    if (heading) heading.textContent = `Delivered ${category.name} Projects`;

    projectsGrid.innerHTML = category.projects.map(p => `
      <div class="project-card" 
           data-category="${category.slug}" 
           data-title="${p.title}" 
           data-badge="${p.badge}" 
           data-desc="${p.desc}" 
           data-img="${p.img}">
        <div class="project-card-canvas">
          <span class="project-cat-pill">${p.badge}</span>
          <div class="project-img-frame">
            <img src="${p.img}" alt="${p.title}" loading="lazy">
          </div>
          <div class="project-card-hover-overlay">
            <span class="btn-expand-project"><i class="fa-solid fa-expand"></i> View Details</span>
          </div>
        </div>
        <div class="project-card-footer">
          <h4>${p.title}</h4>
          <span class="project-sub-tag"><i class="fa-solid fa-circle-check"></i> ${p.tag}</span>
        </div>
      </div>
    `).join('');

    // Bind Project Modal Lightbox
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modalProjectImg');
    const modalBadge = document.getElementById('modalProjectBadge');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalDesc = document.getElementById('modalProjectDesc');
    const modalCta = document.getElementById('modalProjectCta');
    const modalClose = document.getElementById('projectModalClose');
    const modalBackdrop = document.getElementById('projectModalBackdrop');

    function openProjectModal(card) {
      if (!modal) return;
      const img = card.getAttribute('data-img') || '';
      const title = card.getAttribute('data-title') || '';
      const badge = card.getAttribute('data-badge') || '';
      const desc = card.getAttribute('data-desc') || '';

      if (modalImg) modalImg.src = img;
      if (modalImg) modalImg.alt = title;
      if (modalTitle) modalTitle.textContent = title;
      if (modalBadge) modalBadge.textContent = badge;
      if (modalDesc) modalDesc.textContent = desc;

      if (modalCta) {
        const waMsg = encodeURIComponent(`Hello Creative Roots, I saw your project: "${title}" (${badge}). Please share specs and pricing.`);
        modalCta.href = `https://wa.me/923347009992?text=${waMsg}`;
      }

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      if (typeof window.lockBackgroundScroll === 'function') {
        window.lockBackgroundScroll();
      } else {
        document.body.style.overflow = 'hidden';
      }
    }

    function closeProjectModal() {
      if (!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      if (typeof window.unlockBackgroundScroll === 'function') {
        window.unlockBackgroundScroll();
      } else {
        document.body.style.overflow = '';
      }
    }

    projectsGrid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', function () {
        openProjectModal(this);
      });
    });

    if (modalClose) modalClose.addEventListener('click', closeProjectModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
        closeProjectModal();
      }
    });
  }
  renderCategoryProjects();

  // 7. RENDER PROCESS TIMELINE
  function renderProcess() {
    const processGrid = document.getElementById('processStepsGrid');
    if (!processGrid || !category.process) return;

    processGrid.innerHTML = category.process.map(step => `
      <div class="process-step-card">
        <span class="step-number-badge">${step.step}</span>
        <h3>${step.title}</h3>
        <p>${step.desc}</p>
      </div>
    `).join('');
  }
  renderProcess();

  // 8. RENDER TESTIMONIALS
  function renderTestimonials() {
    const testiGrid = document.getElementById('categoryTestimonialsGrid');
    if (!testiGrid || !category.testimonials) return;

    testiGrid.innerHTML = category.testimonials.map(t => `
      <div class="category-testi-card">
        <div class="testi-stars">
          ${'<i class="fa-solid fa-star"></i>'.repeat(t.rating || 5)}
        </div>
        <p class="testi-quote">"${t.quote}"</p>
        <div class="testi-author">
          <h4>${t.client}</h4>
          <p>${t.company}</p>
        </div>
      </div>
    `).join('');
  }
  renderTestimonials();

  // 9. RENDER RELATED CATEGORIES ("Explore More Services")
  function renderRelatedCategories() {
    const relatedGrid = document.getElementById('relatedCategoriesGrid');
    if (!relatedGrid) return;

    const otherCategories = CATEGORIES_CONFIG.getAllCategories().filter(c => c.slug !== category.slug);

    relatedGrid.innerHTML = otherCategories.map(other => `
      <a href="category.html?slug=${other.slug}" class="related-cat-card">
        <div class="related-cat-icon">
          <img src="${other.iconSvg}" alt="${other.name}" width="32" height="32" loading="lazy">
        </div>
        <h3>${other.name}</h3>
        <p>${other.tagline}</p>
        <span class="related-cat-link">
          Explore <i class="fa-solid fa-arrow-right"></i>
        </span>
      </a>
    `).join('');
  }
  renderRelatedCategories();

  // 10. ORDER DRAWER & CHECKOUT SYSTEM CONTROLLER
  const drawer = document.getElementById('orderDrawer');
  const drawerBackdrop = document.getElementById('orderDrawerBackdrop');
  const drawerCloseBtn = document.getElementById('orderDrawerCloseBtn');
  const drawerItemsList = document.getElementById('drawerItemsList');
  const stickyBar = document.getElementById('stickyOrderBar');
  const btnHeaderViewOrder = document.getElementById('btnHeaderViewOrder');
  const btnStickyCheckout = document.getElementById('btnStickyCheckout');
  const btnSubmitOrder = document.getElementById('btnSubmitOrder');
  const drawerOrderForm = document.getElementById('drawerOrderForm');
  const orderSuccessScreen = document.getElementById('orderSuccessScreen');
  const orderDrawerBody = document.getElementById('orderDrawerBody');
  const orderDrawerFooter = document.getElementById('orderDrawerFooter');
  const successOrderRefNumber = document.getElementById('successOrderRefNumber');
  const btnSendOrderWhatsApp = document.getElementById('btnSendOrderWhatsApp');
  const btnStartNewOrder = document.getElementById('btnStartNewOrder');

  let isSubmitting = false;

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    if (drawerBackdrop) {
      drawerBackdrop.classList.add('is-open');
      drawerBackdrop.setAttribute('aria-hidden', 'false');
    }
    if (typeof window.lockBackgroundScroll === 'function') {
      window.lockBackgroundScroll();
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('is-open');
      drawerBackdrop.setAttribute('aria-hidden', 'true');
    }
    if (typeof window.unlockBackgroundScroll === 'function') {
      window.unlockBackgroundScroll();
    } else {
      document.body.style.overflow = '';
    }
  }

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
  if (btnHeaderViewOrder) btnHeaderViewOrder.addEventListener('click', openDrawer);
  if (btnStickyCheckout) btnStickyCheckout.addEventListener('click', openDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  // Render items inside drawer
  function updateDrawerItems(cart) {
    // Update counter badges
    const totalCount = OrderService.getCartCount();
    document.querySelectorAll('.cart-items-counter').forEach(el => {
      el.textContent = totalCount;
    });

    // Sticky bar visibility
    if (stickyBar) {
      if (totalCount > 0) {
        stickyBar.classList.add('is-visible');
      } else {
        stickyBar.classList.remove('is-visible');
      }
    }

    if (!drawerItemsList) return;

    if (!cart || cart.length === 0) {
      drawerItemsList.innerHTML = `
        <div style="text-align: center; padding: 30px 10px; color: #94a3b8;">
          <i class="fa-solid fa-bag-shopping" style="font-size: 2.5rem; margin-bottom: 12px; color: #cbd5e1;"></i>
          <p style="font-size: 0.95rem; font-weight: 600; color: #475569;">Your order is currently empty</p>
          <p style="font-size: 0.82rem;">Select items from the catalog above to build your order.</p>
        </div>
      `;
      if (btnSubmitOrder) btnSubmitOrder.disabled = true;
      return;
    }

    if (btnSubmitOrder) btnSubmitOrder.disabled = false;

    drawerItemsList.innerHTML = cart.map(item => `
      <div class="drawer-item-row" data-cart-item="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="drawer-item-thumb">
        <div class="drawer-item-details">
          <div class="drawer-item-title">${item.name}</div>
          <div class="drawer-item-price">${item.price} ${item.unit || ''}</div>
        </div>
        <div class="drawer-qty-stepper">
          <button type="button" class="btn-qty-minus" data-id="${item.id}" aria-label="Decrease quantity">-</button>
          <span>${item.quantity}</span>
          <button type="button" class="btn-qty-plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
        </div>
        <button type="button" class="btn-remove-item" data-remove="${item.id}" aria-label="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    // Attach stepper events
    drawerItemsList.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        const item = cart.find(i => i.id === id);
        if (item) OrderService.updateItemQuantity(id, item.quantity - 1);
      });
    });

    drawerItemsList.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.getAttribute('data-id');
        const item = cart.find(i => i.id === id);
        if (item) OrderService.updateItemQuantity(id, item.quantity + 1);
      });
    });

    drawerItemsList.querySelectorAll('.btn-remove-item').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.getAttribute('data-remove');
        OrderService.removeItem(id);
      });
    });
  }

  // Subscribe to cart changes
  OrderService.onCartChange(updateDrawerItems);
  updateDrawerItems(OrderService.getCart());

  // Form Submission
  if (btnSubmitOrder) {
    btnSubmitOrder.addEventListener('click', async function (e) {
      e.preventDefault();
      if (isSubmitting) return;

      const nameInput = document.getElementById('orderCustomerName');
      const phoneInput = document.getElementById('orderCustomerPhone');
      const cityInput = document.getElementById('orderCustomerCity');
      const addressInput = document.getElementById('orderCustomerAddress');
      const dateInput = document.getElementById('orderCustomerDate');
      const notesInput = document.getElementById('orderCustomerNotes');

      // Reset errors
      [nameInput, phoneInput, cityInput].forEach(inp => inp && inp.classList.remove('has-error'));

      const customerData = {
        name: nameInput ? nameInput.value : '',
        phone: phoneInput ? phoneInput.value : '',
        city: cityInput ? cityInput.value : '',
        address: addressInput ? addressInput.value : '',
        dateRequired: dateInput ? dateInput.value : '',
        notes: notesInput ? notesInput.value : ''
      };

      const cart = OrderService.getCart();
      const validation = OrderService.validateOrder(customerData, cart);

      if (!validation.isValid) {
        if (validation.errors.name && nameInput) nameInput.classList.add('has-error');
        if (validation.errors.phone && phoneInput) phoneInput.classList.add('has-error');
        if (validation.errors.city && cityInput) cityInput.classList.add('has-error');
        if (validation.errors.items) {
          alert(validation.errors.items);
        }
        return;
      }

      // Start submission with loading state
      isSubmitting = true;
      btnSubmitOrder.disabled = true;
      btnSubmitOrder.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Placing Order...`;

      try {
        const result = await OrderService.submitOrder(customerData, cart, {
          slug: category.slug,
          name: category.name
        });

        // Switch to success view
        if (orderDrawerBody) orderDrawerBody.style.display = 'none';
        if (orderDrawerFooter) orderDrawerFooter.style.display = 'none';
        if (orderSuccessScreen) {
          orderSuccessScreen.style.display = 'block';
          if (successOrderRefNumber) successOrderRefNumber.textContent = result.order.orderRef;
          if (btnSendOrderWhatsApp) btnSendOrderWhatsApp.href = result.whatsAppUrl;
        }

      } catch (err) {
        console.error('Order submission error:', err);
        alert('There was an issue processing your order. Please try again or WhatsApp us directly.');
      } finally {
        isSubmitting = false;
        btnSubmitOrder.disabled = false;
        btnSubmitOrder.innerHTML = `<span>Place Order Now</span> <i class="fa-solid fa-arrow-right"></i>`;
      }
    });
  }

  // Reset Drawer for New Order
  if (btnStartNewOrder) {
    btnStartNewOrder.addEventListener('click', function () {
      if (orderSuccessScreen) orderSuccessScreen.style.display = 'none';
      if (orderDrawerBody) orderDrawerBody.style.display = 'block';
      if (orderDrawerFooter) orderDrawerFooter.style.display = 'block';
      if (drawerOrderForm) drawerOrderForm.reset();
      updateDrawerItems([]);
      closeDrawer();
    });
  }

  // Smooth Anchor Scrolling for Order Now button
  const heroBtnOrderNow = document.getElementById('heroBtnOrderNow');
  if (heroBtnOrderNow) {
    heroBtnOrderNow.addEventListener('click', function (e) {
      e.preventDefault();
      const orderSec = document.getElementById('order-section');
      if (orderSec) {
        const offset = 80;
        const targetPos = orderSec.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  }

});
