/* ================================================================
   Creative Roots - Advanced Master JavaScript
   - Dynamic Product Detail Quick-View Modal
   - WhatsApp Quote Generator
   - Cutting-Edge Scroll Directional Reveals (Left, Right, Zoom, Up)
   - 3D Card Hover Tilt Effects
   - Countdown Timer & 12-Review Testimonial Slider
   - Full Modal System for Policies & Inquiries
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Ensure body scroll is unlocked immediately on page load
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';

  // Prevent browser scroll restoration jitter on reload
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Global scroll lock helpers to coordinate Lenis and modals
  window.lockBackgroundScroll = function () {
    document.body.style.overflow = 'hidden';
    if (window.lenisInstance && typeof window.lenisInstance.stop === 'function') {
      window.lenisInstance.stop();
    }
  };

  window.unlockBackgroundScroll = function () {
    document.body.style.overflow = '';
    if (window.lenisInstance && typeof window.lenisInstance.start === 'function') {
      window.lenisInstance.start();
    }
  };

  // ============================================================
  // 1. PRODUCT CATALOG DATABASE FOR DETAIL MODAL
  // ============================================================
  const productDatabase = {
    'boxes': {
      title: 'Bespoke Luxury Giveaway Box',
      category: 'Corporate Gifting',
      rating: '5.0 ★★★★★ (142 Corporate Reviews)',
      image: 'images/projects/giveaways/giveaways-1.jpg',
      badge: 'Best Seller',
      desc: 'Handcrafted rigid presentation gift box featuring metallic gold debossing, custom high-density EVA foam cutouts tailored to your gifts, and magnetic snap closure. The pinnacle of executive onboarding and client appreciation.',
      specs: {
        'Material': '1200gsm Rigid Kappa Board + Linen/Matte Paper',
        'Branding': 'Gold/Silver Hot Foil Stamping, Spot UV, Emboss',
        'Interior': 'Custom Laser-Cut Velvet Foam Insert',
        'Min Order (MOQ)': '50 Pieces',
        'Turnaround': '4 - 7 Business Days'
      },
      tiers: [
        { qty: '50-100 pcs', price: 'Inquire on WhatsApp' },
        { qty: '101-300 pcs', price: 'Inquire on WhatsApp' },
        { qty: '500+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'drinkware': {
      title: 'Executive Mug & Thermal Flask Set',
      category: 'Drinkware & Tumblers',
      rating: '4.9 ★★★★★ (98 Corporate Reviews)',
      image: 'images/projects/giveaways/giveaways-3.jpg',
      badge: 'Trending Now',
      desc: 'Grade-A ceramic coffee mug with 24K gold rim and custom gold embossed insignia, paired with a double-wall vacuum insulated matte black stainless steel bottle that keeps beverages hot for 12h / cold for 24h.',
      specs: {
        'Material': 'Ceramic + 304 Food-Grade Stainless Steel',
        'Branding': 'Fiber Laser Engraving / High-Fire Decal Print',
        'Capacity': 'Mug: 350ml | Tumbler: 500ml',
        'Min Order (MOQ)': '36 Sets',
        'Turnaround': '3 - 5 Business Days'
      },
      tiers: [
        { qty: '36-100 pcs', price: 'Inquire on WhatsApp' },
        { qty: '101-300 pcs', price: 'Inquire on WhatsApp' },
        { qty: '500+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'merch': {
      title: 'Luxury Branded Pique Polo Shirt',
      category: 'Custom Apparel',
      rating: '4.9 ★★★★★ (210 Corporate Reviews)',
      image: 'images/projects/giveaways/giveaways-2.jpg',
      badge: 'Staff Choice',
      desc: 'Heavyweight combed cotton pique polo shirt with ribbed contrast collar and premium Japanese embroidery threading. Designed to maintain structural integrity, vibrant coloration, and softness across industrial wash cycles.',
      specs: {
        'Fabric': '220-240 GSM 100% Combed Pique Cotton',
        'Branding': '3D High-Density Gold/Color Embroidery',
        'Sizes': 'S, M, L, XL, XXL, Custom Tailored',
        'Min Order (MOQ)': '50 Pieces',
        'Turnaround': '5 - 7 Business Days'
      },
      tiers: [
        { qty: '50-100 pcs', price: 'Inquire on WhatsApp' },
        { qty: '101-300 pcs', price: 'Inquire on WhatsApp' },
        { qty: '500+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'business': {
      title: 'Premium Canvas Tote Bag Pack',
      category: 'Promotional Merchandise',
      rating: '4.8 ★★★★★ (84 Corporate Reviews)',
      image: 'images/projects/giveaways/giveaways-4.jpg',
      badge: 'Eco-Friendly',
      desc: 'Eco-conscious 12oz heavy organic cotton canvas tote bags with reinforced cross-stitched handles and razor-sharp screen / DTF typography. The essential physical giveaway for trade expos, seminars, and retail activations.',
      specs: {
        'Fabric': '12oz 100% Natural Organic Cotton Canvas',
        'Branding': 'Multi-Color Screen Print or Full Color DTF',
        'Dimensions': '15" x 16" with 3" Bottom Gusset',
        'Min Order (MOQ)': '100 Pieces',
        'Turnaround': '3 - 5 Business Days'
      },
      tiers: [
        { qty: '100-250 pcs', price: 'Inquire on WhatsApp' },
        { qty: '251-500 pcs', price: 'Inquire on WhatsApp' },
        { qty: '1000+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'shirt': {
      title: 'Corporate Executive Crewneck / T-Shirt',
      category: 'Custom Apparel',
      rating: '4.9 ★★★★★ (135 Reviews)',
      image: 'images/projects/giveaways/giveaways-6.jpg',
      badge: 'Bestseller',
      desc: '100% Ring-Spun breathable cotton shirts customized with subtle breast-pocket embroidery or metallic gold screen printing for staff, conferences, and brand ambassador kits.',
      specs: {
        'Fabric': '190 GSM Combed Cotton',
        'Branding': 'Screen Printing, Vinyl Heat Transfer, DTF',
        'Min Order (MOQ)': '50 Pieces',
        'Turnaround': '3 - 5 Business Days'
      },
      tiers: [
        { qty: '50-100 pcs', price: 'Inquire on WhatsApp' },
        { qty: '101-300 pcs', price: 'Inquire on WhatsApp' },
        { qty: '500+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'cap': {
      title: 'Brushed Cotton Embroidered Cap',
      category: 'Headwear',
      rating: '4.8 ★★★★★ (76 Reviews)',
      image: 'images/projects/giveaways/giveaways-7.jpg',
      badge: 'Popular',
      desc: 'Structured 6-panel heavy brushed cotton cap with pre-curved peak, brass buckle strap adjuster, and 3D puff embroidery of your corporate logo.',
      specs: {
        'Material': '100% Heavy Brushed Cotton Twill',
        'Closure': 'Embossed Metal Buckle with Grommet',
        'Min Order (MOQ)': '50 Pieces',
        'Turnaround': '4 - 6 Business Days'
      },
      tiers: [
        { qty: '50-100 pcs', price: 'Inquire on WhatsApp' },
        { qty: '101-300 pcs', price: 'Inquire on WhatsApp' },
        { qty: '500+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'notebook': {
      title: 'Executive Hardcover Journal & Planner',
      category: 'Executive Stationery',
      rating: '5.0 ★★★★★ (160 Reviews)',
      image: 'images/projects/giveaways/giveaways-8.jpg',
      badge: 'Premium',
      desc: 'Thermo PU Italian leather notebook with custom debossed logo, 96 sheets of 100gsm cream fountain-pen friendly lined paper, ribbon marker, and elastic closure band.',
      specs: {
        'Cover': 'Textured Italian Thermo PU Leather',
        'Paper': '100gsm Ink-Proof Ivory Woodfree Paper',
        'Min Order (MOQ)': '50 Pieces',
        'Turnaround': '3 - 5 Business Days'
      },
      tiers: [
        { qty: '50-100 pcs', price: 'Inquire on WhatsApp' },
        { qty: '101-300 pcs', price: 'Inquire on WhatsApp' },
        { qty: '500+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'cards': {
      title: 'Velvet Soft-Touch Business Cards',
      category: 'Offset Printing',
      rating: '5.0 ★★★★★ (320 Reviews)',
      image: 'images/projects/offset/offset-1.jpg',
      badge: 'Ultra Luxury',
      desc: 'Multi-layer 600gsm laminated cards with rose gold foil accents, raised spot UV gloss elements, and painted gilded metallic edges.',
      specs: {
        'Stock': '600gsm Triple-Ply Cotton Board',
        'Finish': 'Velvet Soft-Touch + Gold Foil + Gilded Edge',
        'Min Order (MOQ)': '200 Cards',
        'Turnaround': '3 Business Days'
      },
      tiers: [
        { qty: '200 Cards', price: 'Inquire on WhatsApp' },
        { qty: '500 Cards', price: 'Inquire on WhatsApp' },
        { qty: '1000 Cards', price: 'Inquire on WhatsApp' }
      ]
    },
    'bottle': {
      title: 'Smart Matte Thermal Bottle',
      category: 'Drinkware',
      rating: '4.9 ★★★★★ (110 Reviews)',
      image: 'images/projects/giveaways/giveaways-7.jpg',
      badge: 'Hot Item',
      desc: '500ml double-insulated stainless steel flask with precision laser engraved company identity that never scratches or fades.',
      specs: {
        'Insulation': '24H Cold / 12H Hot Thermal Retention',
        'Finish': 'Matte Powder Coating + Laser Etching',
        'Min Order (MOQ)': '50 Pieces',
        'Turnaround': '3 - 5 Business Days'
      },
      tiers: [
        { qty: '50-100 pcs', price: 'Inquire on WhatsApp' },
        { qty: '101-300 pcs', price: 'Inquire on WhatsApp' },
        { qty: '500+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'mug': {
      title: 'Executive Ceramic Office Mug',
      category: 'Drinkware',
      rating: '4.9 ★★★★★ (124 Reviews)',
      image: 'images/projects/giveaways/giveaways-3.jpg',
      badge: 'Best Seller',
      desc: 'High-density ceramic coffee mug with comfortable ergonomic C-handle, kiln-fired high-fire custom corporate branding that resists commercial dishwashing, and smooth glazed finish.',
      specs: {
        'Material': 'Grade-A High-Fire Ceramic',
        'Finish': 'High-Gloss Glaze + Kiln Screen Decal',
        'Capacity': '350ml / 11.8 oz',
        'Min Order (MOQ)': '36 Pieces',
        'Turnaround': '3 - 5 Business Days'
      },
      tiers: [
        { qty: '36-100 pcs', price: 'Inquire on WhatsApp' },
        { qty: '101-300 pcs', price: 'Inquire on WhatsApp' },
        { qty: '500+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'stall': {
      title: 'Turnkey Exhibition Stall & Booth',
      category: 'Exhibitions & Events',
      rating: '5.0 ★★★★★ (55 Enterprise Reviews)',
      image: 'images/projects/stalls/stalls-1.jpg',
      badge: 'Turnkey Service',
      desc: 'Custom 3D exhibition booth architecture, fabrication, high-resolution tension fabric graphics, illuminated reception counter, and on-ground expo setup at Lahore Expo, Karachi Expo, or Pak-China Center Islamabad.',
      specs: {
        'Services': '3D Concept + Fabrication + Lighting + Teardown',
        'Sizes': '3x3m, 6x3m, 6x6m, Custom Island Pavilion',
        'Turnaround': '7 - 14 Days Lead Time'
      },
      tiers: [
        { qty: '3x3m Booth', price: 'Inquire on WhatsApp' },
        { qty: '6x3m Booth', price: 'Inquire on WhatsApp' },
        { qty: 'Custom Island', price: 'Custom Quote' }
      ]
    },
    'brochure': {
      title: 'Company Profiles & Catalogs',
      category: 'Offset Printing',
      rating: '5.0 ★★★★★ (185 Corporate Reviews)',
      image: 'images/projects/digital/digital-1.jpg',
      badge: 'Corporate Choice',
      desc: 'High-definition offset printed corporate company profiles, multi-page catalogs, and presentation folders with velvet soft-touch lamination, gold foil accents, and precision spot UV detailing.',
      specs: {
        'Cover': '350gsm Premium Art Card + Soft-Touch Finish',
        'Inner Pages': '150gsm Silk Art Paper Full Color',
        'Binding': 'Saddle Stitch / Wire-O / Perfect Binding',
        'Min Order (MOQ)': '100 Copies',
        'Turnaround': '3 - 5 Business Days'
      },
      tiers: [
        { qty: '100-250 pcs', price: 'Inquire on WhatsApp' },
        { qty: '251-500 pcs', price: 'Inquire on WhatsApp' },
        { qty: '1000+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'offset': {
      title: 'Commercial Offset Printing Solutions',
      category: 'Offset & Commercial Printing',
      rating: '5.0 ★★★★★ (240 Enterprise Reviews)',
      image: 'images/projects/offset/offset-1.jpg',
      badge: 'High Volume',
      desc: 'Industrial Heidelberg multi-color offset printing for large volume packaging, corporate marketing collateral, annual reports, brochures, and promotional displays with precise PMS color matching.',
      specs: {
        'Press': 'Heidelberg Speedmaster 4-Color & 5-Color',
        'Finishing': 'Matte/Gloss Lamination, Foil, Die-Cutting',
        'Turnaround': '3 - 6 Business Days'
      },
      tiers: [
        { qty: 'High Volume Run', price: 'Inquire on WhatsApp' },
        { qty: 'Custom Packaging', price: 'Inquire on WhatsApp' },
        { qty: 'Annual Reports', price: 'Inquire on WhatsApp' }
      ]
    },
    'chase-box': {
      title: 'CHASE Executive Welcome Hamper Box',
      category: 'Corporate Boxes',
      rating: '5.0 ★★★★★ (188 Enterprise Reviews)',
      image: 'images/real_work/box_chase_black.jpg',
      badge: 'Client Favorite',
      desc: 'Real physical client project manufactured for CHASE. Satin-lined luxury rigid black hamper containing matte black ceramic coffee mug, laser-debossed executive diary, metal twist pen, and engraved metallic keychain.',
      specs: {
        'Box': '1200gsm Rigid Kappa Board + Satin Lining',
        'Contents': 'Mug + Diary + Metal Pen + Keychain',
        'Branding': 'Silver Foil Debossing + Fiber Laser Etching',
        'Min Order (MOQ)': '30 Sets',
        'Turnaround': '4 - 6 Business Days'
      },
      tiers: [
        { qty: '30-50 sets', price: 'Inquire on WhatsApp' },
        { qty: '51-150 sets', price: 'Inquire on WhatsApp' },
        { qty: '200+ sets', price: 'Inquire on WhatsApp' }
      ]
    },
    'rabia-box': {
      title: 'Rabia Amber VIP Gift Hamper',
      category: 'Corporate Boxes',
      rating: '5.0 ★★★★★ (145 Enterprise Reviews)',
      image: 'images/real_work/box_rabia_amber.jpg',
      badge: 'Luxury Kit',
      desc: 'Real physical corporate hamper crafted for Rabia Amber. Pure white magnetic presentation box with crimson thermal bottle, customized executive journal, ceramic mug, ballpoint pen, and swivel USB flash drive.',
      specs: {
        'Box': 'Magnetic Clasp White Presentation Hamper',
        'Contents': 'Thermal Flask + Journal + Mug + Pen + USB',
        'Branding': 'Color DTF + Screen Decal + Laser Etch',
        'Min Order (MOQ)': '30 Sets',
        'Turnaround': '4 - 6 Business Days'
      },
      tiers: [
        { qty: '30-50 sets', price: 'Inquire on WhatsApp' },
        { qty: '51-150 sets', price: 'Inquire on WhatsApp' },
        { qty: '200+ sets', price: 'Inquire on WhatsApp' }
      ]
    },
    'ccl-drinkware': {
      title: 'CCL Executive Thermal Flask & Pen Set',
      category: 'Executive Drinkware',
      rating: '5.0 ★★★★★ (212 Enterprise Reviews)',
      image: 'images/real_work/box_ccl_bottle.jpg',
      badge: 'Pharma Choice',
      desc: 'Delivered for CCL Pharmaceuticals. High-density EVA foam presentation box with double-wall matte black thermal bottle, luxury metallic stylus pen, and heavy metal keychain with crisp laser-etched corporate emblem.',
      specs: {
        'Bottle': '500ml 304 Food-Grade Stainless Steel (12H Hot/24H Cold)',
        'Pen & Tag': 'Solid Brass Body + Fiber Laser Marking',
        'Min Order (MOQ)': '50 Sets',
        'Turnaround': '3 - 5 Business Days'
      },
      tiers: [
        { qty: '50-100 sets', price: 'Inquire on WhatsApp' },
        { qty: '101-300 sets', price: 'Inquire on WhatsApp' },
        { qty: '500+ sets', price: 'Inquire on WhatsApp' }
      ]
    },
    'huasun-box': {
      title: 'Huasun VIP Presentation Box',
      category: 'Corporate Boxes',
      rating: '5.0 ★★★★★ (96 Enterprise Reviews)',
      image: 'images/real_work/box_huasun_golf.jpg',
      badge: 'VIP Tournament',
      desc: 'Produced for Huasun Solar Golf Tournament. Bespoke rigid clamshell presentation box featuring high-definition printed invitation inner lid, artificial turf greenbed, personalized badge, and golf kit.',
      specs: {
        'Box': 'Heavyweight Rigid Clamshell Box',
        'Features': 'Full-Color Inner Lid Print + Synthetic Grass Insert',
        'Min Order (MOQ)': '25 Boxes',
        'Turnaround': '5 - 7 Business Days'
      },
      tiers: [
        { qty: '25-50 boxes', price: 'Inquire on WhatsApp' },
        { qty: '51-100 boxes', price: 'Inquire on WhatsApp' },
        { qty: '150+ boxes', price: 'Inquire on WhatsApp' }
      ]
    },
    'calendar': {
      title: 'Executive Desk Tent Calendar 2026',
      category: 'Stationery & Planners',
      rating: '4.9 ★★★★★ (160 Enterprise Reviews)',
      image: 'images/real_work/promo_desk_calendar.jpg',
      badge: 'Annual Corporate',
      desc: 'Commercial offset printed 12-month desk easel calendar on 300gsm matte art card with gold wire-o binding, heavy triangular easel stand, and customized corporate branding leaves.',
      specs: {
        'Stock': '300gsm Imported Matte Art Card',
        'Binding': 'Gold / Black Spiral Twin-Loop Wire',
        'Min Order (MOQ)': '100 Pieces',
        'Turnaround': '3 - 5 Business Days'
      },
      tiers: [
        { qty: '100-250 pcs', price: 'Inquire on WhatsApp' },
        { qty: '251-500 pcs', price: 'Inquire on WhatsApp' },
        { qty: '1000+ pcs', price: 'Inquire on WhatsApp' }
      ]
    },
    'promo': {
      title: 'Retail POS Displays & Marketing Collaterals',
      category: 'Offset Printing',
      rating: '5.0 ★★★★★ (130 Enterprise Reviews)',
      image: 'images/real_work/promo_her_beauty.jpg',
      badge: 'Brand Activations',
      desc: 'Delivered for HER Beauty & commercial FMCG brands. Precision die-cut acrylic shelf talkers, promotional wobblers, product hanging tags, and retail point-of-sale display collaterals.',
      specs: {
        'Substrates': 'Optically Clear Cast Acrylic / 400gsm Bleached Board',
        'Cutting': 'Laser Contour Cutting / High-Speed Die-Cutting',
        'Min Order (MOQ)': '100 Pieces',
        'Turnaround': '3 - 5 Business Days'
      },
      tiers: [
        { qty: '100-300 pcs', price: 'Inquire on WhatsApp' },
        { qty: '301-1000 pcs', price: 'Inquire on WhatsApp' },
        { qty: '1000+ pcs', price: 'Inquire on WhatsApp' }
      ]
    }
  };

  // ============================================================
  // 2. PRODUCT MODAL OPEN & RENDER LOGIC
  // ============================================================
  const prodModal = document.getElementById('product-detail-modal');
  const prodModalClose = document.getElementById('product-modal-close');
  const modalVisual = document.getElementById('modal-product-visual');
  const modalBadge = document.getElementById('modal-product-badge');
  const modalTitle = document.getElementById('modal-product-title');
  const modalRating = document.getElementById('modal-product-rating');
  const modalDesc = document.getElementById('modal-product-desc');
  const modalSpecs = document.getElementById('modal-product-specs');
  const modalTiers = document.getElementById('modal-price-tiers');
  const modalWhatsAppBtn = document.getElementById('modal-whatsapp-btn');

  let activeProductKey = 'boxes';
  let activeTierQty = '50-100 pcs';
  let activeTierPrice = 'Inquire on WhatsApp';

  function openProductModal(key) {
    if (!prodModal) return;
    const data = productDatabase[key] || productDatabase['boxes'];
    activeProductKey = key;

    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalRating) modalRating.textContent = data.rating;
    if (modalDesc) modalDesc.textContent = data.desc;

    // Visual image or svg
    if (modalVisual) {
      if (data.image.endsWith('.jpg') || data.image.endsWith('.png')) {
        modalVisual.innerHTML = `<img src="${data.image}" alt="${data.title}">`;
      } else {
        modalVisual.innerHTML = data.image;
      }
    }

    // Specifications table
    if (modalSpecs) {
      let specHtml = '';
      for (const [k, v] of Object.entries(data.specs)) {
        specHtml += `<div><span>${k}</span><strong>${v}</strong></div>`;
      }
      modalSpecs.innerHTML = specHtml;
    }

    // Price Tiers
    if (modalTiers) {
      let tierHtml = '';
      data.tiers.forEach((t, idx) => {
        const isAct = idx === 0 ? 'active' : '';
        tierHtml += `
          <div class="price-tier-btn ${isAct}" data-qty="${t.qty}" data-rate="${t.price}">
            <span class="price-tier-qty">${t.qty}</span>
            <span class="price-tier-rate" style="color: #25d366;"><i class="fa-brands fa-whatsapp"></i> Inquire</span>
          </div>`;
      });
      modalTiers.innerHTML = tierHtml;

      // Tier click handlers
      modalTiers.querySelectorAll('.price-tier-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          modalTiers.querySelectorAll('.price-tier-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          activeTierQty = this.getAttribute('data-qty');
          activeTierPrice = this.getAttribute('data-rate');
          updateWhatsAppLink();
        });
      });

      activeTierQty = data.tiers[0].qty;
      activeTierPrice = data.tiers[0].price;
    }

    // Update Full Details Page link inside modal
    const modalDetailsBtn = document.getElementById('modal-details-btn') || prodModal.querySelector('.btn-quote-modal');
    if (modalDetailsBtn) {
      modalDetailsBtn.href = key === 'stall' ? 'category.html?slug=exhibition-stalls' : (key === 'offset' || key === 'brochure' ? 'category.html?slug=offset-printing' : 'category.html?slug=corporate-giveaways');
    }

    updateWhatsAppLink();
    prodModal.classList.add('active');
  }

  function updateWhatsAppLink() {
    if (!modalWhatsAppBtn) return;
    const data = productDatabase[activeProductKey] || productDatabase['boxes'];
    const msg = encodeURIComponent(
      `Hello Creative Roots Team! 👋\nI am interested in inquiring about:\n*Service/Project:* ${data.title}\n*Quantity Tier:* ${activeTierQty}\n*Company:* \nPlease provide a formal corporate invoice / consultation.`
    );
    modalWhatsAppBtn.setAttribute('href', `https://wa.me/923347009992?text=${msg}`);
  }

  function closeProductModal() {
    if (prodModal) prodModal.classList.remove('active');
  }

  if (prodModalClose) {
    prodModalClose.addEventListener('click', closeProductModal);
  }
  if (prodModal) {
    prodModal.addEventListener('click', function (e) {
      if (e.target === prodModal) closeProductModal();
    });
  }

  // Bind to cards with [data-product] -> Navigate directly to dedicated Category page
  document.querySelectorAll('[data-product]').forEach(card => {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      const key = this.getAttribute('data-product') || 'boxes';
      if (key === 'stall') {
        window.location.href = 'category.html?slug=exhibition-stalls';
      } else if (key === 'cards' || key === 'brochure' || key === 'offset') {
        window.location.href = 'category.html?slug=offset-printing';
      } else {
        window.location.href = 'category.html?slug=corporate-giveaways';
      }
    });
  });

  // ============================================================
  // 3. ADVANCED DIRECTIONAL SCROLL REVEALS (1.05s Staggered Wave)
  // ============================================================
  const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-zoom');
  
  // Pre-calculate organic staggered delays for card grids
  const isMobileScreen = window.innerWidth <= 768;
  const gridContainers = document.querySelectorAll('.services-grid, .packaging-cards, .event-grid, .products-grid, .promo-cards, .about-why-grid');
  gridContainers.forEach(grid => {
    const colCount = isMobileScreen ? 2 : 6;
    Array.from(grid.children).forEach((child, idx) => {
      if (!child.style.transitionDelay) {
        child.style.transitionDelay = `${(idx % colCount) * (isMobileScreen ? 70 : 120)}ms`;
      }
    });
  });

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { 
      threshold: isMobileScreen ? 0.02 : 0.08, 
      rootMargin: isMobileScreen ? '0px 0px 100px 0px' : '0px 0px -20px 0px' 
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // ============================================================
  // 4. ADVANCED 3D MAGNETIC PERSPECTIVE & PARALLAX HOVER PHYSICS
  // ============================================================
  const magneticCards = document.querySelectorAll('.promo-card, .service-card, .packaging-card, .event-card, .about-why-card, .store-card, .product-item');
  
  magneticCards.forEach(card => {
    card.classList.add('card-hover-physics');

    card.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Subtly damped 3D tilt
      const tiltX = ((y - centerY) / centerY) * -6.5;
      const tiltY = ((x - centerX) / centerX) * 6.5;

      this.style.transform = `perspective(1200px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-6px)`;
      
      // Inverse Parallax on Inner Image
      const innerImg = this.querySelector('img');
      if (innerImg) {
        const moveX = ((x - centerX) / centerX) * -4;
        const moveY = ((y - centerY) / centerY) * -4;
        innerImg.style.transform = `translate(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px) scale(1.06)`;
      }
    });

    card.addEventListener('mouseleave', function () {
      this.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
      this.style.transform = '';
      const innerImg = this.querySelector('img');
      if (innerImg) {
        innerImg.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
        innerImg.style.transform = '';
      }
      setTimeout(() => {
        this.style.transition = '';
        if (innerImg) innerImg.style.transition = '';
      }, 650);
    });
  });

  // ============================================================
  // 5. COUNTDOWN TIMER
  // ============================================================
  const countdownDays = document.getElementById('timer-days');
  const countdownHours = document.getElementById('timer-hours');
  const countdownMinutes = document.getElementById('timer-minutes');
  const countdownSeconds = document.getElementById('timer-seconds');

  if (countdownDays && countdownHours && countdownMinutes && countdownSeconds) {
    const targetTime = new Date().getTime() + (3 * 86400 + 4 * 3600 + 2 * 60 + 4) * 1000;
    let prevS = '', prevM = '', prevH = '', prevD = '';

    function triggerTick(el, newVal, oldVal) {
      if (newVal !== oldVal) {
        el.textContent = newVal;
        el.classList.add('tick-pulse');
        setTimeout(() => el.classList.remove('tick-pulse'), 280);
      }
    }

    function updateTimer() {
      const now = new Date().getTime();
      const diff = targetTime - now;

      if (diff <= 0) {
        countdownDays.textContent = '00';
        countdownHours.textContent = '00';
        countdownMinutes.textContent = '00';
        countdownSeconds.textContent = '00';
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      const dStr = String(d).padStart(2, '0');
      const hStr = String(h).padStart(2, '0');
      const mStr = String(m).padStart(2, '0');
      const sStr = String(s).padStart(2, '0');

      triggerTick(countdownDays, dStr, prevD);
      triggerTick(countdownHours, hStr, prevH);
      triggerTick(countdownMinutes, mStr, prevM);
      triggerTick(countdownSeconds, sStr, prevS);

      prevD = dStr;
      prevH = hStr;
      prevM = mStr;
      prevS = sStr;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // ============================================================
  // 6. FAQ ACCORDION
  // ============================================================
  document.querySelectorAll('.faq-question').forEach(function (question) {
    question.addEventListener('click', function () {
      const parent = this.closest('.faq-item');
      const answer = parent.querySelector('.faq-answer');
      const isAlreadyActive = parent.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(function (item) {
        item.classList.remove('active');
        const a = item.querySelector('.faq-answer');
        if (a) a.style.maxHeight = null;
      });

      if (!isAlreadyActive) {
        parent.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ============================================================
  // 7. TESTIMONIAL SHOWCASE (3-PART ANIMATED ROTATING SHOWCASE - REFERENCE MATCH)
  // ============================================================
  const reviews = [
    {
      headline: '"Ordered business cards. Simple, neat, and professional — just what I needed."',
      name: 'Ifra Muskan',
      company: 'EME Society, Lahore',
      badgeTitle: 'Embossed Business Card',
      badgeImg: 'images/prod_cards.jpg',
      lifestyleImg: 'images/prod_cards.jpg',
      link: 'category.html?slug=offset-printing'
    },
    {
      headline: '"The finishing could be a little sharper, but overall the color fidelity and binding look great."',
      name: 'Maheen Qureshi',
      company: 'Iqbal Town, Lahore',
      badgeTitle: 'Hardcover Journal',
      badgeImg: 'images/prod_notebook.jpg',
      lifestyleImg: 'images/pack_booklet.jpg',
      link: 'category.html?slug=corporate-giveaways'
    },
    {
      headline: '"Delivered an exceptional corporate gifting experience. Quality and attention to detail was remarkable."',
      name: 'Ahmed Hassan',
      company: 'Huasu Solar Pakistan',
      badgeTitle: 'Magnetic Gift Box',
      badgeImg: 'images/prod_box.jpg',
      lifestyleImg: 'images/promo_giftbox.jpg',
      link: 'category.html?slug=corporate-giveaways'
    },
    {
      headline: '"Heavyweight organic cotton canvas with razor-sharp screen printing. Top tier physical giveaways."',
      name: 'Sara Malik',
      company: 'Zero Carbon Solar',
      badgeTitle: 'Organic Canvas Tote',
      badgeImg: 'images/promo_business.jpg',
      lifestyleImg: 'images/promo_business.jpg',
      link: 'category.html?slug=corporate-giveaways'
    },
    {
      headline: '"Matte ceramic finish with 24K gold rim. Our executive welcome hampers looked prestigious."',
      name: 'Usman Ali',
      company: 'Sazgar Engineering Works',
      badgeTitle: '24K Gold Rim Mug',
      badgeImg: 'images/prod_mug.jpg',
      lifestyleImg: 'images/promo_drinkware.jpg',
      link: 'category.html?slug=corporate-giveaways'
    },
    {
      headline: '"Breathable cotton fabric and 3D chest embroidery that withstands repeated industrial washes."',
      name: 'Omar Sheikh',
      company: 'Lahore Grammar School (LGS)',
      badgeTitle: 'Embroidered Polo Shirt',
      badgeImg: 'images/prod_shirt.jpg',
      lifestyleImg: 'images/promo_merch.jpg',
      link: 'category.html?slug=corporate-giveaways'
    },
    {
      headline: '"Pre-curved peak, heavy brushed cotton twill, and crisp 3D puff embroidery. Outstanding craftsmanship."',
      name: 'Fatima Khan',
      company: 'Defence Raya Golf Club',
      badgeTitle: 'Brushed Cotton Cap',
      badgeImg: 'images/cap_maroon.jpg',
      lifestyleImg: 'images/cap_maroon.jpg',
      link: 'category.html?slug=corporate-giveaways'
    },
    {
      headline: '"The exhibition stall designed for Lahore Expo was a showstopper. Our brand stood out remarkably."',
      name: 'Hassan Raza',
      company: 'Grand City Developers',
      badgeTitle: 'Exhibition Expo Booth',
      badgeImg: 'images/hero_studio_banner.jpg',
      lifestyleImg: 'images/hero_studio_banner.jpg',
      link: 'category.html?slug=exhibition-stalls'
    },
    {
      headline: '"Double-wall thermal vacuum insulation keeps drinks ice cold for 24 hours. Engraved logo never fades."',
      name: 'Bilal Ahmed',
      company: 'Kayseria Corporate',
      badgeTitle: 'Thermal Matte Bottle',
      badgeImg: 'images/pack_bottle.jpg',
      lifestyleImg: 'images/pack_bottle.jpg',
      link: 'category.html?slug=corporate-giveaways'
    },
    {
      headline: '"Genuine cowhide leather with debossed crest. High-value gift for our VIP board directors."',
      name: 'Brig. (R) Tariq Mahmood',
      company: 'Fauji Foundation',
      badgeTitle: 'Leather Executive Wallet',
      badgeImg: 'images/pack_wallet.jpg',
      lifestyleImg: 'images/pack_wallet.jpg',
      link: 'category.html?slug=corporate-giveaways'
    },
    {
      headline: '"High-speed memory chip encased in heavy brushed metal. Laser engraving came out crystal clear."',
      name: 'Zainab Nawaz',
      company: 'FAST-NUCES',
      badgeTitle: 'Brushed Swivel USB',
      badgeImg: 'images/pack_usb.jpg',
      lifestyleImg: 'images/pack_usb.jpg',
      link: 'category.html?slug=corporate-giveaways'
    },
    {
      headline: '"Reliable execution, fair pricing, and extraordinary customer responsiveness for over three years."',
      name: 'Nadia Qureshi',
      company: 'National Incubation Center',
      badgeTitle: 'Executive Desk Tent',
      badgeImg: 'images/pack_calendar.jpg',
      lifestyleImg: 'images/pack_calendar.jpg',
      link: 'category.html?slug=offset-printing'
    }
  ];

  let currentReviewIdx = 0;
  let isTransitioning = false;
  let activeVisualLayer = 'a';
  const ROTATION_INTERVAL = 2800; // Rotates every 2.8s (between 2 and 3 seconds)

  const reviewHeadline = document.getElementById('review-headline');
  const reviewAuthor = document.getElementById('review-author');
  const reviewCompany = document.getElementById('review-company');
  const reviewAuthorBox = document.getElementById('review-author-box');
  const reviewCounter = document.getElementById('review-counter');
  const reviewPrevBtn = document.getElementById('review-prev');
  const reviewNextBtn = document.getElementById('review-next');
  const reviewBadgeCard = document.getElementById('review-badge-card');
  const reviewBadgeImg = document.getElementById('review-badge-img');
  const reviewBadgeTitle = document.getElementById('review-badge-title');
  const reviewLifestyleImgA = document.getElementById('review-lifestyle-img-a');
  const reviewLifestyleImgB = document.getElementById('review-lifestyle-img-b');
  const reviewProgressBar = document.getElementById('review-progress-bar');
  const showcaseContainer = document.querySelector('.testimonial-showcase-container');

  // Preload all review imagery for zero-lag silky smooth transitions
  reviews.forEach(item => {
    if (item.lifestyleImg) {
      const img = new Image();
      img.src = item.lifestyleImg;
    }
    if (item.badgeImg) {
      const img = new Image();
      img.src = item.badgeImg;
    }
  });

  function resetProgressBar() {
    if (!reviewProgressBar) return;
    reviewProgressBar.style.transition = 'none';
    reviewProgressBar.style.width = '0%';
    void reviewProgressBar.offsetWidth; // Force DOM reflow
    reviewProgressBar.style.transition = `width ${ROTATION_INTERVAL}ms linear`;
    reviewProgressBar.style.width = '100%';
  }

  function pauseProgressBar() {
    if (!reviewProgressBar) return;
    const computedWidth = window.getComputedStyle(reviewProgressBar).width;
    reviewProgressBar.style.transition = 'none';
    reviewProgressBar.style.width = computedWidth;
  }

  function renderShowcase(idx) {
    if (isTransitioning || !reviewHeadline) return;
    isTransitioning = true;

    const item = reviews[idx];

    // Phase 1: Smooth Exit Fade on Left Text & Center Badge
    reviewHeadline.classList.add('text-fade-out');
    if (reviewAuthorBox) reviewAuthorBox.classList.add('text-fade-out');
    if (reviewBadgeCard) reviewBadgeCard.classList.add('badge-morphing');

    // Dual-Layer Seamless Dissolve for Right Lifestyle Visual
    const incomingLayer = activeVisualLayer === 'a' ? reviewLifestyleImgB : reviewLifestyleImgA;
    const outgoingLayer = activeVisualLayer === 'a' ? reviewLifestyleImgA : reviewLifestyleImgB;

    if (incomingLayer && item.lifestyleImg) {
      incomingLayer.src = item.lifestyleImg;
      incomingLayer.classList.add('active');
    }
    if (outgoingLayer) {
      outgoingLayer.classList.remove('active');
    }
    activeVisualLayer = activeVisualLayer === 'a' ? 'b' : 'a';

    // Phase 2: Content Swap at midpoint of exit fade
    setTimeout(() => {
      // Update text
      reviewHeadline.textContent = item.headline;
      if (reviewAuthor) reviewAuthor.textContent = item.name;
      if (reviewCompany) reviewCompany.textContent = item.company;
      if (reviewCounter) reviewCounter.textContent = `${idx + 1}/${reviews.length}`;

      // Update center floating badge
      if (reviewBadgeImg) reviewBadgeImg.src = item.badgeImg;
      if (reviewBadgeTitle) reviewBadgeTitle.textContent = item.badgeTitle;
      if (reviewBadgeCard) reviewBadgeCard.href = item.link;

      // Prepare text for silky upward glide
      reviewHeadline.classList.remove('text-fade-out');
      reviewHeadline.classList.add('text-enter-prep');
      if (reviewAuthorBox) {
        reviewAuthorBox.classList.remove('text-fade-out');
        reviewAuthorBox.classList.add('text-enter-prep');
      }

      // Next tick: glide smoothly into active position
      requestAnimationFrame(() => {
        void reviewHeadline.offsetWidth; // trigger reflow
        reviewHeadline.classList.remove('text-enter-prep');
        if (reviewAuthorBox) reviewAuthorBox.classList.remove('text-enter-prep');
        if (reviewBadgeCard) reviewBadgeCard.classList.remove('badge-morphing');
      });

      // Reset auto-advancing progress bar for the new slide
      resetProgressBar();

      // Unlock after full 1.0s transition completes
      setTimeout(() => {
        isTransitioning = false;
      }, 900);
    }, 320);
  }

  function nextSlide() {
    currentReviewIdx = (currentReviewIdx + 1) % reviews.length;
    renderShowcase(currentReviewIdx);
  }

  function prevSlide() {
    currentReviewIdx = (currentReviewIdx - 1 + reviews.length) % reviews.length;
    renderShowcase(currentReviewIdx);
  }

  // Hook interactive buttons
  if (reviewPrevBtn) {
    reviewPrevBtn.addEventListener('click', () => {
      prevSlide();
      restartInterval();
    });
  }
  if (reviewNextBtn) {
    reviewNextBtn.addEventListener('click', () => {
      nextSlide();
      restartInterval();
    });
  }

  // Automatic rotation timer (2.8 seconds)
  let reviewInterval = null;

  function startInterval() {
    clearInterval(reviewInterval);
    resetProgressBar();
    reviewInterval = setInterval(nextSlide, ROTATION_INTERVAL);
  }

  function restartInterval() {
    clearInterval(reviewInterval);
    startInterval();
  }

  // Initialize auto-rotation only if testimonial showcase exists
  if (reviewHeadline) {
    startInterval();
  }

  // Pause on hover, resume on mouse leave
  if (showcaseContainer) {
    showcaseContainer.addEventListener('mouseenter', () => {
      clearInterval(reviewInterval);
      pauseProgressBar();
    });
    showcaseContainer.addEventListener('mouseleave', () => {
      startInterval();
    });
  }

  // ============================================================
  // 8. MOBILE NAVIGATION & DROPDOWNS
  // ============================================================
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const mobileBackdrop = document.querySelector('.mobile-nav-backdrop');

  function closeMobileNav() {
    if (navLinks) navLinks.classList.remove('active');
    if (mobileBackdrop) mobileBackdrop.classList.remove('active');
  }

  function openMobileNav() {
    if (navLinks) navLinks.classList.add('active');
    if (mobileBackdrop) mobileBackdrop.classList.add('active');
  }

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (navLinks.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', closeMobileNav);
    }

    document.addEventListener('click', function (e) {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileNav();
      }
    });

    // Close mobile nav when clicking a regular link
    navLinks.querySelectorAll('a:not(.has-dropdown > a)').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          closeMobileNav();
        }
      });
    });
  }

  document.querySelectorAll('.has-dropdown > a').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        this.closest('.has-dropdown').classList.toggle('active');
      }
    });
  });

  // ============================================================
  // 9. BACK TO TOP CLICK HANDLER
  // ============================================================
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.lenisInstance && typeof window.lenisInstance.scrollTo === 'function') {
        window.lenisInstance.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // ============================================================
  // 10. INFORMATION MODALS (POLICIES, APPOINTMENTS, CATALOGUE)
  // ============================================================
  const infoModal = document.getElementById('info-modal');
  const infoTitle = document.getElementById('modal-title');
  const infoBody = document.getElementById('modal-body');
  const infoClose = document.getElementById('modal-close');

  const modalContents = {
    privacy: {
      title: 'Privacy Policy',
      content: '<p>At Creative Roots, your corporate privacy is paramount. We only record contact information necessary to provide design mockups, issue formal commercial invoices, and arrange courier delivery.</p><p>All vector logos, proprietary brand guides, and custom client assets are kept securely under strict non-disclosure compliance.</p>'
    },
    terms: {
      title: 'Terms of Service',
      content: '<p>All custom corporate orders begin with a digital or physical prototype proof for your formal approval. Production commences upon sign-off and deposit receipt.</p><p>We provide nationwide dispatch across Pakistan with dedicated cargo tracking and dispatch manifests.</p>'
    },
    returns: {
      title: 'Quality Guarantee & Returns',
      content: '<p>Every batch produced by Creative Roots undergoes multi-stage quality inspection. If an item exhibits printing defects or discrepancies from your approved proof, we will immediately remake or replace it at no added cost.</p>'
    },
    appointment: {
      title: 'Schedule a Design & Sampling Session',
      content: '<p>Visit our Lahore corporate design studio at Gohar Centre, or request our mobile material sampling box dispatched to your office in Islamabad or Karachi.</p><p><strong>Direct Phone:</strong> +92 334 7009992 / +92 307 7009992<br><strong>Email:</strong> creativeroots77@gmail.com</p>'
    },
    catalogue: {
      title: 'Download 2026 Corporate Catalogue',
      content: '<p>Our 2026 Corporate Catalogue contains detailed volume pricing, packaging specifications, and our full portfolio of promotional merchandise.</p><p>Message us directly on WhatsApp at <strong>+92 334 7009992</strong> or email <strong>creativeroots77@gmail.com</strong> to receive the high-resolution PDF catalogue immediately.</p>'
    },
    store: {
      title: 'Find a Store — Creative Roots Locations',
      content: '<div class="modal-store-grid"><div class="modal-store-item"><div class="modal-store-thumb"><img src="images/map_gohar.jpg" alt="Gohar Centre Lahore Map"></div><div class="modal-store-desc"><h4>Lahore Office: Gohar Centre, Lahore</h4><p><i class="fa-solid fa-location-dot"></i> Lahore Office: Gohar Centre, Lahore, Pakistan<br><i class="fa-solid fa-phone"></i> +92 334 7009992<br><i class="fa-regular fa-clock"></i> Mon–Sat: 10:00 AM – 8:00 PM</p><a href="https://www.google.com/maps/dir/?api=1&destination=Gohar+Centre+Lahore" target="_blank" class="modal-store-btn"><i class="fa-solid fa-diamond-turn-right"></i> Get Direction</a></div></div><div class="modal-store-item"><div class="modal-store-thumb"><img src="images/map_islamabad.jpg" alt="Islamabad Map"></div><div class="modal-store-desc"><h4>Islamabad, Pakistan</h4><p><i class="fa-solid fa-location-dot"></i> Islamabad, Pakistan<br><i class="fa-solid fa-phone"></i> +92 334 7009992<br><i class="fa-regular fa-clock"></i> Mon–Sat: 10:00 AM – 8:00 PM</p><a href="https://www.google.com/maps/dir/?api=1&destination=Blue+Area+Islamabad+Pakistan" target="_blank" class="modal-store-btn"><i class="fa-solid fa-diamond-turn-right"></i> Get Direction</a></div></div><div class="modal-store-item"><div class="modal-store-thumb"><img src="images/map_karachi.jpg" alt="Karachi Map"></div><div class="modal-store-desc"><h4>Karachi, Pakistan</h4><p><i class="fa-solid fa-location-dot"></i> Karachi, Pakistan<br><i class="fa-solid fa-phone"></i> +92 334 7009992<br><i class="fa-regular fa-clock"></i> Mon–Sat: 10:00 AM – 8:00 PM</p><a href="https://www.google.com/maps/dir/?api=1&destination=Clifton+Karachi+Pakistan" target="_blank" class="modal-store-btn"><i class="fa-solid fa-diamond-turn-right"></i> Get Direction</a></div></div></div><div style="margin-top: 18px; text-align: center;"><a href="find-a-store.html" style="display: inline-block; background: #111; color: #fff; padding: 10px 24px; border-radius: 50px; font-weight: 700; text-decoration: none; font-size: 0.88rem;">Open Full Store Locator Page <i class="fa-solid fa-arrow-right"></i></a></div>'
    }
  };

  function openInfoModal(key) {
    if (!infoModal || !modalContents[key]) return;
    infoTitle.textContent = modalContents[key].title;
    infoBody.innerHTML = modalContents[key].content;
    infoModal.classList.add('active');
  }

  function closeInfoModal() {
    if (infoModal) infoModal.classList.remove('active');
  }

  if (infoClose) infoClose.addEventListener('click', closeInfoModal);
  if (infoModal) {
    infoModal.addEventListener('click', function (e) {
      if (e.target === infoModal) closeInfoModal();
    });
  }

  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const key = this.getAttribute('data-modal');
      openInfoModal(key);
    });
  });

  // Smooth scroll for hash links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#' && !this.hasAttribute('data-modal') && !this.hasAttribute('data-product')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ============================================================
  // 11. GLOBAL REAL-TIME SEARCH ENGINE & AUTOCOMPLETE
  // ============================================================
  const searchCatalog = [
    // 6 Primary Enterprise Categories (Direct Routing to category.html)
    {
      title: 'Corporate Giveaways & Executive Gift Boxes',
      category: 'Corporate Gifting',
      type: 'service',
      url: 'category.html?slug=corporate-giveaways',
      image: 'new assets/1.jpeg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'corporate giveaways gifts gift box boxes executive diary diary set pen set flask mug thermal bottle new hire onboarding welcome kit vip hamper stationery merchandise bespoke polo shirt cap tote bag wallet keychain usb'
    },
    {
      title: 'High-Speed Digital Printing',
      category: 'Digital Printing',
      type: 'service',
      url: 'category.html?slug=digital-printing',
      image: 'new assets/2.jpeg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'digital printing urgent short run xerox ricoh color posters certificates vouchers stickers labels flyers booklets postcards cards marketing collateral'
    },
    {
      title: 'Commercial Offset Printing & Packaging',
      category: 'Offset Printing',
      type: 'service',
      url: 'category.html?slug=offset-printing',
      image: 'new assets/3.jpeg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'offset printing bulk packaging brochures flyers booklets magazines heidelberg cmyk books catalogs visiting cards business cards annual reports calendars rigid cartons'
    },
    {
      title: 'Architectural Signage & Outdoor Branding',
      category: 'Outdoor Branding',
      type: 'service',
      url: 'category.html?slug=outdoor-branding',
      image: 'new assets/4.jpeg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'signage outdoor advertising 3d acrylic letters neon led billboards hoardings shop front pylon signs building facade acp cladding frosted glass window graphics'
    },
    {
      title: 'Panaflex & Large Format Printing',
      category: 'Large Format Printing',
      type: 'service',
      url: 'category.html?slug=panaflex-printing',
      image: 'new assets/5.jpeg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'panaflex printing wide format solvent uv backlit flex signboards banners standees roll up rollups x-banner vinyl pasting window frosting backdrop skin'
    },
    {
      title: 'Turnkey 3D Exhibition Stalls & Booths',
      category: 'Exhibitions & Events',
      type: 'service',
      url: 'category.html?slug=exhibition-stalls',
      image: 'new assets/6.jpeg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'exhibition stall booth trade show display expo pavilion 3d design fabrication branding backdrop stage corporate event conference setup lahore expo karachi expo'
    },
    {
      title: 'Corporate Event Management & Staging',
      category: 'Event Production',
      type: 'service',
      url: 'category.html?slug=exhibition-stalls',
      image: 'images/projects/stalls/stalls-2.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'corporate event management conferences annual dinners seminars gala stage av lighting sound trussing backdrop fabrication launch event'
    },
    {
      title: 'Graphic Design & Corporate Branding',
      category: 'Design & Identity',
      type: 'service',
      url: 'category.html?slug=digital-printing',
      image: 'images/projects/digital/digital-3.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'graphic design branding logo identity brand guide creative packaging mockup 3d visual typography corporate brand design'
    },

    // Authentic Production Capabilities & Sub-Services
    {
      title: 'Handcrafted Rigid Kappa Board Magnetic Gift Boxes',
      category: 'Corporate Gifting',
      type: 'service',
      url: 'category.html?slug=corporate-giveaways',
      image: 'images/projects/giveaways/giveaways-1.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'boxes rigid box magnetic closure kappa board gold foil velvet insert gift hamper luxury packaging bespoke'
    },
    {
      title: 'Corporate Hardbound Diary & Executive Pen Sets',
      category: 'Corporate Gifting',
      type: 'service',
      url: 'category.html?slug=corporate-giveaways',
      image: 'images/projects/giveaways/giveaways-2.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'notebook notepad diary journal planner leather debossed metallic ballpoint pen executive writing set corporate stationery'
    },
    {
      title: 'Custom Laser-Etched Thermal Flasks & Ceramic Mugs',
      category: 'Corporate Gifting',
      type: 'service',
      url: 'category.html?slug=corporate-giveaways',
      image: 'images/projects/giveaways/giveaways-3.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'drinkware thermal flask stainless steel bottle ceramic mug coffee tea cup laser engraved insignia corporate drinkware'
    },
    {
      title: 'Enterprise Onboarding Welcome Gift Kits',
      category: 'Corporate Gifting',
      type: 'service',
      url: 'category.html?slug=corporate-giveaways',
      image: 'images/projects/giveaways/giveaways-4.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'onboarding welcome kit new hire corporate gift box employee package branded swag cardholder diary flask pen'
    },
    {
      title: 'Custom Branded Corporate Apparel & Uniforms',
      category: 'Corporate Gifting',
      type: 'service',
      url: 'category.html?slug=corporate-giveaways',
      image: 'images/promo_merch.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'apparel polo shirt t-shirt tshirt uniform cap embroidered cotton dtf screen print staff clothes headwear'
    },
    {
      title: 'Triple-Ply Velvet Edge Visiting & Business Cards',
      category: 'Offset Printing',
      type: 'service',
      url: 'category.html?slug=offset-printing',
      image: 'images/projects/offset/offset-3.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'business cards visiting cards triple ply velvet edge metallic foil debossed spot uv offset printing executive card'
    },
    {
      title: 'Multi-Page Saddle-Stitch Catalogs & Booklets',
      category: 'Digital Printing',
      type: 'service',
      url: 'category.html?slug=digital-printing',
      image: 'images/projects/digital/digital-2.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'catalogs company profiles brochures booklets saddle stitch wire-o binding art card digital printing'
    },
    {
      title: 'Executive Desk Tent Easel Calendars 2026',
      category: 'Offset Printing',
      type: 'service',
      url: 'category.html?slug=offset-printing',
      image: 'images/projects/offset/offset-5.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'calendar desk calendar tent stand wire-o dates 2026 corporate desk easel new year offset print'
    },
    {
      title: 'Architectural 3D Acrylic & LED Channel Letter Signage',
      category: 'Outdoor Branding',
      type: 'service',
      url: 'category.html?slug=outdoor-branding',
      image: 'images/projects/outdoor/outdoor-1.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: '3d acrylic letters led signage illuminated channel letters building facade outdoor advertising neon sign board'
    },
    {
      title: 'Retractable Rollup Standees & Trade Show Banners',
      category: 'Large Format Printing',
      type: 'service',
      url: 'category.html?slug=panaflex-printing',
      image: 'images/projects/panaflex/panaflex-4.jpg',
      badge: 'Service',
      badgeClass: 'badge-service',
      keywords: 'rollup standee retractable banner stand trade show expo x-banner panaflex printing outdoor display'
    },

    // Corporate Pages
    {
      title: 'Find a Store / Lahore Gohar Center Location',
      category: 'Store Outlets',
      type: 'page',
      url: 'find-a-store.html',
      image: 'images/map_gohar.jpg',
      badge: 'Page',
      badgeClass: 'badge-page',
      keywords: 'find a store location branch address map karachi gohar center royal arcade timings wahdat road lahore'
    },
    {
      title: 'About Creative Roots & Heritage',
      category: 'Company Profile',
      type: 'page',
      url: 'about.html',
      image: 'images/hero_studio_banner.jpg',
      badge: 'Page',
      badgeClass: 'badge-page',
      keywords: 'about us story company background team equipment factory mission vision'
    },
    {
      title: 'Book an Appointment & Contact Us',
      category: 'Customer Support',
      type: 'page',
      url: 'contact.html',
      image: 'images/company_contact_slide.jpg',
      badge: 'Page',
      badgeClass: 'badge-page',
      keywords: 'contact us book appointment phone email address inquiry quote consultation whatsapp'
    }
  ];

  // Helper: Highlight matches safely
  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const escapedText = escapeHtml(text);
    const regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return escapedText.replace(regex, '<mark class="search-match">$1</mark>');
  }

  // Initialize Search Bars
  const searchWrappers = document.querySelectorAll('.search-bar, .header-search-wrap');
  searchWrappers.forEach(wrap => {
    const input = wrap.querySelector('input');
    const submitBtn = wrap.querySelector('.search-submit-btn, button:not(.search-clear-btn)');
    const clearBtn = wrap.querySelector('.search-clear-btn');
    if (!input) return;

    // Create dropdown container if missing
    let dropdown = wrap.querySelector('.search-results-dropdown');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'search-results-dropdown';
      wrap.appendChild(dropdown);
    }

    let searchTimer = null;
    let selectedIndex = -1;

    function updateClearBtn() {
      if (clearBtn) {
        clearBtn.style.display = input.value.trim().length > 0 ? 'flex' : 'none';
      }
    }

    function doSearch(query) {
      const q = (query || '').toLowerCase().trim();
      updateClearBtn();
      selectedIndex = -1;

      if (!q) {
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
        return;
      }

      const tokens = q.split(/\s+/).filter(Boolean);

      const matches = searchCatalog.filter(item => {
        const fullString = (
          item.title + ' ' +
          item.category + ' ' +
          (item.keywords || '') + ' ' +
          (item.key || '')
        ).toLowerCase();
        return tokens.every(tok => fullString.includes(tok));
      });

      // Sort matches: Exact title match or startsWith gets priority
      matches.sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        const aStarts = aTitle.startsWith(q);
        const bStarts = bTitle.startsWith(q);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        return 0;
      });

      if (matches.length === 0) {
        dropdown.innerHTML = `
          <div class="search-no-results">
            <i class="fa-solid fa-magnifying-glass" style="font-size: 1.5rem; color: #94a3b8; margin-bottom: 6px;"></i>
            <div>No exact services found for "<strong>${escapeHtml(q)}</strong>"</div>
            <div style="font-size: 0.8rem; color: #64748b; margin-top: 4px;">Explore our corporate services:</div>
            <div class="search-quick-tags">
              <button type="button" class="search-quick-tag" data-query="Corporate Giveaways">Corporate Giveaways</button>
              <button type="button" class="search-quick-tag" data-query="Offset Printing">Offset Printing</button>
              <button type="button" class="search-quick-tag" data-query="Digital Printing">Digital Printing</button>
              <button type="button" class="search-quick-tag" data-query="Exhibition Stalls">Exhibition Stalls</button>
              <button type="button" class="search-quick-tag" data-query="Outdoor Branding">Outdoor Branding</button>
              <button type="button" class="search-quick-tag" data-query="Panaflex Printing">Panaflex Printing</button>
            </div>
            <a href="index.html#services" style="color: #F47721; font-weight: 700; margin-top: 12px; display: inline-block; font-size: 0.85rem;">
              Explore All Services &rarr;
            </a>
          </div>
        `;

        dropdown.querySelectorAll('.search-quick-tag').forEach(tag => {
          tag.addEventListener('click', (e) => {
            e.stopPropagation();
            const tagQuery = tag.getAttribute('data-query');
            input.value = tagQuery;
            doSearch(tagQuery);
            input.focus();
          });
        });

        dropdown.classList.add('active');
        return;
      }

      let html = '';
      const topMatches = matches.slice(0, 6);
      topMatches.forEach((item, idx) => {
        const targetUrl = item.url || 'index.html#services';
        const badgeHtml = item.badge ? `<span class="search-result-badge ${item.badgeClass || ''}">${escapeHtml(item.badge)}</span>` : '';

        html += `
          <a href="${targetUrl}" class="search-result-item" data-index="${idx}">
            <img src="${item.image}" alt="${escapeHtml(item.title)}" class="search-result-thumb" onerror="this.src='new assets/1.jpeg'">
            <div class="search-result-info">
              <span class="search-result-title">${highlightMatch(item.title, q)}</span>
              <span class="search-result-cat">${escapeHtml(item.category)}</span>
              ${badgeHtml}
            </div>
          </a>
        `;
      });

      html += `
        <div class="search-dropdown-footer">
          <a href="${topMatches[0] ? topMatches[0].url : 'index.html#services'}">
            <span>Explore all ${matches.length} matching services</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      `;

      dropdown.innerHTML = html;
      dropdown.classList.add('active');
    }

    // Debounced input handler
    input.addEventListener('input', function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        doSearch(this.value);
      }, 120);
    });

    // Clear button click
    if (clearBtn) {
      clearBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        input.value = '';
        updateClearBtn();
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
        input.focus();
      });
    }

    // Focus event
    input.addEventListener('focus', function () {
      updateClearBtn();
      if (this.value.trim().length > 0) {
        doSearch(this.value);
      }
    });

    // Keyboard navigation (ArrowDown, ArrowUp, Enter, Escape)
    input.addEventListener('keydown', function (e) {
      const items = dropdown.querySelectorAll('.search-result-item');
      if (dropdown.classList.contains('active') && items.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          selectedIndex = (selectedIndex + 1) % items.length;
          items.forEach((it, i) => it.classList.toggle('is-selected', i === selectedIndex));
          if (items[selectedIndex]) items[selectedIndex].scrollIntoView({ block: 'nearest' });
          return;
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          selectedIndex = (selectedIndex - 1 + items.length) % items.length;
          items.forEach((it, i) => it.classList.toggle('is-selected', i === selectedIndex));
          if (items[selectedIndex]) items[selectedIndex].scrollIntoView({ block: 'nearest' });
          return;
        } else if (e.key === 'Enter') {
          if (selectedIndex >= 0 && items[selectedIndex]) {
            e.preventDefault();
            items[selectedIndex].click();
            return;
          }
        } else if (e.key === 'Escape') {
          e.preventDefault();
          dropdown.classList.remove('active');
          return;
        }
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        const q = this.value.trim().toLowerCase();
        dropdown.classList.remove('active');
        if (q) {
          const tokens = q.split(/\s+/).filter(Boolean);
          const currentMatches = searchCatalog.filter(item => {
            const fullString = (item.title + ' ' + item.category + ' ' + (item.keywords || '')).toLowerCase();
            return tokens.every(tok => fullString.includes(tok));
          });
          if (currentMatches.length > 0) {
            window.location.href = currentMatches[0].url;
            return;
          }
        }
        window.location.href = 'index.html#services';
      }
    });

    // Submit button click
    if (submitBtn) {
      submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const q = input.value.trim().toLowerCase();
        dropdown.classList.remove('active');
        if (q) {
          const tokens = q.split(/\s+/).filter(Boolean);
          const currentMatches = searchCatalog.filter(item => {
            const fullString = (item.title + ' ' + item.category + ' ' + (item.keywords || '')).toLowerCase();
            return tokens.every(tok => fullString.includes(tok));
          });
          if (currentMatches.length > 0) {
            window.location.href = currentMatches[0].url;
            return;
          }
        }
        window.location.href = 'index.html#services';
      });
    }
  });

  // Mobile search toggle button logic
  const mobileSearchToggles = document.querySelectorAll('.mobile-search-toggle');
  mobileSearchToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const mobileRow = document.querySelector('.mobile-search-bar-row');
      if (mobileRow) {
        mobileRow.classList.toggle('is-open');
        if (mobileRow.classList.contains('is-open')) {
          const mobileInput = mobileRow.querySelector('input');
          if (mobileInput) {
            setTimeout(() => mobileInput.focus(), 100);
          }
        }
      }
    });
  });

  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar') && !e.target.closest('.header-search-wrap') && !e.target.closest('.mobile-search-toggle')) {
      document.querySelectorAll('.search-results-dropdown').forEach(d => d.classList.remove('active'));
    }
  });

  // Helper escape
  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }


  // ============================================================
  // 12. STORE PAGE REDIRECT & SAFEGUARDS
  // ============================================================
  window.filterStoreCardsLive = function(query) {
    if (window.location.href.includes('products.html')) {
      window.location.replace('index.html#services');
    }
  };

  window.clearStoreSearch = function() {
    const inputs = document.querySelectorAll('.search-bar input, .header-search-input');
    inputs.forEach(inp => inp.value = '');
  };

  // Run on page load if visiting products.html
  if (window.location.href.includes('products.html')) {
    window.location.replace('index.html#services');
  }

  // ============================================================
  // LUXURY ANNOUNCEMENT CRAWL & NEXT-PHASE TICKER
  // (Scrolls text fully into view so entire text is read, then triggers next phase)
  // ============================================================
  const announcementBars = document.querySelectorAll('.announcement-bar');
  announcementBars.forEach(bar => {
    const slider = bar.querySelector('.announcement-slider');
    if (!slider) return;
    const slides = slider.querySelectorAll('.announcement-slide');
    if (!slides.length) return;

    let currentIdx = 0;
    let timerId = null;

    function playSlide(idx) {
      if (timerId) clearTimeout(timerId);

      slides.forEach((s, i) => {
        const inner = s.querySelector('.ticker-inner');
        if (inner) {
          inner.style.transition = 'none';
          inner.style.transform = 'translateX(0)';
        }
        if (i === idx) {
          s.classList.remove('prev');
          s.classList.add('active');
        } else if (i === currentIdx && i !== idx) {
          s.classList.remove('active');
          s.classList.add('prev');
        } else {
          s.classList.remove('active', 'prev');
        }
      });

      currentIdx = idx;
      const activeSlide = slides[idx];
      const track = activeSlide.querySelector('.ticker-track');
      const inner = activeSlide.querySelector('.ticker-inner');

      if (!track || !inner) {
        timerId = setTimeout(nextSlide, 3800);
        return;
      }

      // Check overflow amount
      const overflow = inner.scrollWidth - track.clientWidth;

      if (overflow > 6) {
        // Content overflows the visible container (e.g. mobile screens):
        // Phase 1: Hold at start for 1.2s so user can read beginning
        // Phase 2: Smoothly scroll text left so entire sentence is revealed
        // Phase 3: Hold at end for 1.8s so user finishes reading
        // Phase 4: Advance to next slide
        const scrollSpeed = 38; // 38px/sec (comfortable human reading speed)
        const scrollDuration = Math.max(1.6, (overflow + 14) / scrollSpeed);

        timerId = setTimeout(() => {
          if (currentIdx !== idx) return;
          inner.style.transition = 'transform ' + scrollDuration.toFixed(2) + 's cubic-bezier(0.25, 0.1, 0.25, 1)';
          inner.style.transform = 'translateX(-' + (overflow + 12) + 'px)';

          // After scroll finishes + 1.8s reading pause, proceed to next phase
          const totalWait = (scrollDuration * 1000) + 1800;
          timerId = setTimeout(nextSlide, totalWait);
        }, 1200);

      } else {
        // Fits completely without overflow (e.g. tablet / desktop)
        timerId = setTimeout(nextSlide, 3800);
      }
    }

    function nextSlide() {
      const nextIdx = (currentIdx + 1) % slides.length;
      playSlide(nextIdx);
    }

    // Start ticker
    playSlide(0);
  });

  // ============================================================
  // HERO BANNER 4-SLIDE AUTO CAROUSEL
  // - Smooth fade & slide transition
  // - 5s auto-rotation
  // - Pause on hover
  // - Arrow controls & pagination dots
  // - Touch swipe support for mobile
  // - Keyboard accessibility (ArrowLeft / ArrowRight)
  // ============================================================
  const heroCarousel = document.getElementById('heroCarousel');
  if (heroCarousel) {
    const slides = heroCarousel.querySelectorAll('.hero-slide');
    const dots = heroCarousel.querySelectorAll('.hero-dot');
    const prevBtn = heroCarousel.querySelector('.hero-nav-prev');
    const nextBtn = heroCarousel.querySelector('.hero-nav-next');
    let currentIndex = 0;
    let autoTimer = null;
    const ROTATION_INTERVAL = 5000; // 5 seconds per slide

    function showSlide(index) {
      if (!slides.length) return;
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }

      currentIndex = index;

      slides.forEach((slide, idx) => {
        const isActive = idx === currentIndex;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', !isActive);
      });

      dots.forEach((dot, idx) => {
        const isActive = idx === currentIndex;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // Synchronize Mobile Services Quick Cards (Highlight matching active slide)
      const mobileServiceCards = document.querySelectorAll('.mobile-service-card');
      if (mobileServiceCards.length) {
        mobileServiceCards.forEach((c, idx) => {
          c.classList.toggle('active', idx === currentIndex);
        });
      }
    }

    function advanceSlide() {
      showSlide(currentIndex + 1);
    }

    function retreatSlide() {
      showSlide(currentIndex - 1);
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoTimer = setInterval(advanceSlide, ROTATION_INTERVAL);
    }

    function stopAutoPlay() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    // Next / Prev Button Controls
    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        advanceSlide();
        startAutoPlay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        retreatSlide();
        startAutoPlay();
      });
    }

    // Indicator Dot Controls
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', function (e) {
        e.preventDefault();
        showSlide(idx);
        startAutoPlay();
      });
    });

    // Pause on Hover
    heroCarousel.addEventListener('mouseenter', stopAutoPlay);
    heroCarousel.addEventListener('mouseleave', startAutoPlay);

    // Keyboard Arrow Keys
    heroCarousel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        retreatSlide();
        startAutoPlay();
      } else if (e.key === 'ArrowRight') {
        advanceSlide();
        startAutoPlay();
      }
    });

    // Touch Swipe Support for Mobile Devices
    let touchStartX = 0;
    let touchStartY = 0;

    heroCarousel.addEventListener('touchstart', function (e) {
      if (e.touches && e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        stopAutoPlay();
      }
    }, { passive: true });

    heroCarousel.addEventListener('touchend', function (e) {
      if (e.changedTouches && e.changedTouches.length > 0) {
        const diffX = e.changedTouches[0].clientX - touchStartX;
        const diffY = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0) {
            advanceSlide();
          } else {
            retreatSlide();
          }
        }
        startAutoPlay();
      }
    }, { passive: true });

    // Initialize slide 0 and begin autoplay
    showSlide(0);
    startAutoPlay();
  }

  // ============================================================
  // MOBILE BOTTOM TAB BAR (Show on scroll up, hide on scroll down)
  // ============================================================
  const mobileBottomBar = document.getElementById('mobileBottomBar');
  if (mobileBottomBar) {
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
          if (currentScrollY > lastScrollY && currentScrollY > 120) {
            // Scrolling down -> hide tab bar
            mobileBottomBar.classList.add('hide-bar');
          } else {
            // Scrolling up -> show tab bar
            mobileBottomBar.classList.remove('hide-bar');
          }
          lastScrollY = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================================
  // 14. LUXURY PAGE TRANSITION (400ms - 500ms Brand Experience)
  // ============================================================
  function initPageTransitions() {
    // Check if user prefers reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Create overlay element dynamically if not present
    let overlay = document.getElementById('page-transition-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'page-transition-overlay';
      overlay.className = 'page-transition-overlay';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.innerHTML = `
        <div class="page-transition-brand">
          <img src="images/logo-wordmark-light.svg" alt="CreativeRoots" class="page-transition-logo" width="180" height="35">
          <div class="page-transition-bar-wrap">
            <div class="page-transition-bar"></div>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
    }

    // Dismiss overlay when page loads or is shown from cache (back/forward cache)
    window.addEventListener('pageshow', function () {
      if (overlay) {
        overlay.classList.remove('is-active');
      }
    });

    // Intercept internal page navigation links
    document.addEventListener('click', function (e) {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      const target = link.getAttribute('target');

      // Skip non-navigational links, external links, anchor scrolls, and modals
      if (!href ||
          href.startsWith('#') ||
          href.startsWith('javascript:') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          href.startsWith('https://wa.me') ||
          target === '_blank' ||
          e.metaKey || e.ctrlKey || e.shiftKey || e.altKey ||
          link.hasAttribute('download')) {
        return;
      }

      // Check if it's an internal relative link (.html or same origin)
      const isInternal = href.endsWith('.html') ||
                         href.includes('.html?') ||
                         href.includes('.html#') ||
                         href.startsWith('./') ||
                         href.startsWith('/');

      if (!isInternal && !href.startsWith('index.html') && !href.startsWith('about.html') &&
          !href.startsWith('products.html') && !href.startsWith('product-detail.html') &&
          !href.startsWith('contact.html') && !href.startsWith('find-a-store.html')) {
        return;
      }

      e.preventDefault();
      overlay.classList.add('is-active');

      // Seamlessly navigate after smooth 400ms brand transition
      setTimeout(function () {
        window.location.href = href;
      }, 400);
    });
  }

  /* ================================================================
     16. Services Projects Showcase Controller
     - Rotating / Slider Carousel with pause on hover
     - Filter tabs for All + 6 Services
     - Seamless click-through from Top Categories & Hero Banner buttons
     - Lightbox Modal with instant WhatsApp inquiry
     ================================================================ */
  function initServicesProjectsShowcase() {
    const section = document.getElementById('projects');
    if (!section) return;

    const sliderWrapper = document.getElementById('projectsSliderWrapper');
    const prevBtn = document.getElementById('projectsPrevBtn');
    const nextBtn = document.getElementById('projectsNextBtn');
    const filterBtns = section.querySelectorAll('.project-filter-btn');
    const allCards = Array.from(section.querySelectorAll('.project-card'));

    // Modal elements
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modalProjectImg');
    const modalBadge = document.getElementById('modalProjectBadge');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalDesc = document.getElementById('modalProjectDesc');
    const modalCta = document.getElementById('modalProjectCta');
    const modalClose = document.getElementById('projectModalClose');
    const modalBackdrop = document.getElementById('projectModalBackdrop');

    let currentFilter = 'all';
    let autoScrollTimer = null;
    let isHovered = false;

    // Filter functionality
    function setFilter(category) {
      currentFilter = category;

      // Update button states
      filterBtns.forEach(btn => {
        const isMatch = btn.getAttribute('data-filter') === category;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
      });

      // Filter cards
      allCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });

      // Update View All in Category button
      const viewAllBtn = document.getElementById('projectsCategoryViewAllBtn');
      if (viewAllBtn) {
        const catMap = {
          'giveaways': { slug: 'corporate-giveaways', name: 'Corporate Giveaways' },
          'digital': { slug: 'digital-printing', name: 'Digital Printing' },
          'offset': { slug: 'offset-printing', name: 'Offset Printing' },
          'outdoor': { slug: 'outdoor-branding', name: 'Outdoor Branding' },
          'panaflex': { slug: 'panaflex-printing', name: 'Panaflex Printing' },
          'stalls': { slug: 'exhibition-stalls', name: 'Exhibition Stalls' }
        };
        if (catMap[category]) {
          viewAllBtn.href = `category.html?slug=${catMap[category].slug}`;
          viewAllBtn.innerHTML = `<span>View All in ${catMap[category].name}</span> <i class="fa-solid fa-arrow-right"></i>`;
        } else {
          viewAllBtn.href = 'category.html?slug=corporate-giveaways';
          viewAllBtn.innerHTML = `<span>Explore All Services &amp; Order</span> <i class="fa-solid fa-arrow-right"></i>`;
        }
      }

      // Reset scroll position
      if (sliderWrapper) {
        sliderWrapper.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }

    // Filter Button Clicks
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const cat = this.getAttribute('data-filter') || 'all';
        setFilter(cat);
      });
    });

    // Slider Navigation Arrows
    function scrollSlider(direction) {
      if (!sliderWrapper) return;
      const cardWidth = 364; // card width + gap
      const currentScroll = sliderWrapper.scrollLeft;
      const targetScroll = direction === 'next' ? currentScroll + cardWidth : currentScroll - cardWidth;
      sliderWrapper.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => scrollSlider('prev'));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => scrollSlider('next'));
    }

    // Auto-advance slider (rotating smoothly like corporate clients marquee)
    function startAutoScroll() {
      stopAutoScroll();
      autoScrollTimer = setInterval(function () {
        if (!sliderWrapper || isHovered) return;
        const maxScroll = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
        if (sliderWrapper.scrollLeft >= maxScroll - 20) {
          sliderWrapper.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollSlider('next');
        }
      }, 3500);
    }

    function stopAutoScroll() {
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
        autoScrollTimer = null;
      }
    }

    if (sliderWrapper) {
      sliderWrapper.addEventListener('mouseenter', () => { isHovered = true; });
      sliderWrapper.addEventListener('mouseleave', () => { isHovered = false; });
      sliderWrapper.addEventListener('touchstart', () => { isHovered = true; }, { passive: true });
      sliderWrapper.addEventListener('touchend', () => { isHovered = false; }, { passive: true });
      startAutoScroll();
    }

    // Modal Lightbox for Project Details
    function openModal(card) {
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
        const waMsg = encodeURIComponent(`Hello Creative Roots, I am interested in your project: "${title}" (${badge}). Please provide more details and pricing.`);
        modalCta.href = `https://wa.me/923347009992?text=${waMsg}`;
      }

      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      window.lockBackgroundScroll();
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      window.unlockBackgroundScroll();
    }

    allCards.forEach(card => {
      card.addEventListener('click', function () {
        openModal(this);
      });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
        closeModal();
      }
    });

    // Top Categories Sidebar "Inquire All Services" button scroll
    const inquireAllBtn = document.querySelector('.view-all-btn[data-category="all"]');
    if (inquireAllBtn) {
      inquireAllBtn.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#projects') {
          e.preventDefault();
          setFilter('all');
          const headerOffset = 80;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    }
  }

  /* ================================================================
     17. LENIS SMOOTH SCROLL ENGINE
  /* ================================================================
     17. LENIS SMOOTH SCROLL ENGINE (NATIVE COMPOSITOR HARDWARE ACCELERATED)
     - smoothWheel: false leaves mouse wheel & trackpad to native browser compositor
     - 0ms input latency on scroll up / reversal (completely eliminates delay and jerks)
     - Programmatic scrollTo remains active for smooth anchors
     ================================================================ */
  function initLenisSmoothScroll() {
    // 100% Native browser momentum scrolling on mobile & touch screens - zero interference
    const isTouchOrMobile = (window.innerWidth <= 1024) || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (isTouchOrMobile) {
      window.lenisInstance = null;
      return;
    }

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (typeof Lenis !== 'undefined') {
      try {
        const lenis = new Lenis({
          smoothWheel: false,
          syncTouch: false,
          autoRaf: true
        });

        window.lenisInstance = lenis;

        window.addEventListener('beforeunload', () => {
          lenis.destroy();
        });
      } catch (err) {
        console.warn('Lenis initialization skipped:', err);
      }
    }
  }

  /* ================================================================
     18. UNIFIED 60FPS/120FPS MASTER SCROLL CONTROLLER
     - Single passive RAF-throttled scroll listener for entire site
     - Cached document height to eliminate Forced Synchronous Layout / Reflow thrashing
     - Fixed header state (threshold: 40px post-announcement bar, GPU-isolated layer)
     - Back-to-top button visibility (compositor-only opacity/transform)
     - Window scroll progress bar (GPU scaleX transform)
     ================================================================ */
  function initMasterScrollController() {
    const bar = document.getElementById('scrollProgressBar');
    const header = document.querySelector('.header');
    const backToTop = document.querySelector('.back-to-top');
    let ticking = false;
    let isHeaderScrolled = false;
    let isBackToTopVisible = false;

    // Cache document scrollable height outside the per-frame tick to prevent layout thrashing
    let cachedDocHeight = 1;
    function recalculateDocHeight() {
      cachedDocHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    }
    recalculateDocHeight();
    window.addEventListener('resize', recalculateDocHeight, { passive: true });
    window.addEventListener('load', recalculateDocHeight, { passive: true });

    function onScrollTick() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // 1. Header scrolled styling (GPU layer, zero layout shift, state gated)
      if (header) {
        if (scrollY > 40) {
          if (!isHeaderScrolled) {
            header.classList.add('scrolled');
            isHeaderScrolled = true;
          }
        } else {
          if (isHeaderScrolled) {
            header.classList.remove('scrolled');
            isHeaderScrolled = false;
          }
        }
      }

      // 2. Back-to-top button (GPU layer, zero reflow, state gated)
      if (backToTop) {
        if (scrollY > 300) {
          if (!isBackToTopVisible) {
            backToTop.classList.add('visible');
            isBackToTopVisible = true;
          }
        } else {
          if (isBackToTopVisible) {
            backToTop.classList.remove('visible');
            isBackToTopVisible = false;
          }
        }
      }

      // 3. Scroll progress bar (Hardware accelerated GPU transform scaleX)
      if (bar && cachedDocHeight > 0) {
        const pct = Math.min(1, Math.max(0, scrollY / cachedDocHeight));
        bar.style.transform = `scaleX(${pct})`;
      }

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(onScrollTick);
        ticking = true;
      }
    }, { passive: true });

    onScrollTick();
  }

  /* ================================================================
     19. ANIMATED NUMBER COUNTERS (Trust & Milestones)
     - Smooth spring-based count up
     - Triggered once via IntersectionObserver
     ================================================================ */
  function initNumberCounters() {
    const counterElements = document.querySelectorAll('.stat-number[data-target]');
    if (!counterElements.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target')) || 0;
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          const duration = 1800; // 1.8s
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(1, elapsed / duration);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeProgress;

            if (decimals > 0) {
              el.textContent = currentVal.toFixed(decimals);
            } else {
              el.textContent = Math.floor(currentVal).toLocaleString();
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              if (decimals > 0) {
                el.textContent = target.toFixed(decimals);
              } else {
                el.textContent = target.toLocaleString();
              }
            }
          }

          requestAnimationFrame(updateCounter);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.35 });

    counterElements.forEach(el => observer.observe(el));
  }

  /* ================================================================
     20. BUTTON RIPPLE & MICRO-INTERACTIONS
     - Material/Luxury expanding ripple on click
     - Touch feedback
     ================================================================ */
  function initButtonRipples() {
    const rippleSelector = '.btn-shop-now, .hero-btn-pill, .btn-quote, .btn-project-inquire, .view-all-btn, .btn-return-home';
    document.addEventListener('click', function (e) {
      const btn = e.target.closest(rippleSelector);
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'btn-ripple-effect';
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.clientX - rect.left - radius}px`;
      ripple.style.top = `${e.clientY - rect.top - radius}px`;

      const existingRipple = btn.querySelector('.btn-ripple-effect');
      if (existingRipple) {
        existingRipple.remove();
      }

      btn.appendChild(ripple);
      setTimeout(() => {
        if (ripple.parentNode) ripple.remove();
      }, 650);
    });
  }

  /* ================================================================
     21. SMOOTH ANCHOR NAVIGATION WITH LENIS / NATIVE FALLBACK
     ================================================================ */
  function initSmoothAnchorNavigation() {
    document.addEventListener('click', function (e) {
      const anchor = e.target.closest('a[href^="#"]:not([href="#"]):not([data-modal])');
      if (!anchor) return;

      const hash = anchor.getAttribute('href');
      if (hash.startsWith('#') && hash.length > 1) {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 76;
          const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;

          if (window.lenisInstance) {
            window.lenisInstance.scrollTo(targetTop, { duration: 1.1 });
          } else {
            window.scrollTo({
              top: targetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  }

  // Master Initializations
  initLenisSmoothScroll();
  initMasterScrollController();
  initNumberCounters();
  initButtonRipples();
  initSmoothAnchorNavigation();
  initServicesProjectsShowcase();
  initPageTransitions();

});

