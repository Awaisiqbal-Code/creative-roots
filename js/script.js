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

  // ============================================================
  // 1. PRODUCT CATALOG DATABASE FOR DETAIL MODAL
  // ============================================================
  const productDatabase = {
    'boxes': {
      title: 'Bespoke Luxury Giveaway Box',
      category: 'Corporate Gifting',
      rating: '5.0 ★★★★★ (142 Corporate Reviews)',
      image: 'images/promo_giftbox.jpg',
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
      image: 'images/promo_drinkware.jpg',
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
      image: 'images/promo_merch.jpg',
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
      image: 'images/promo_business.jpg',
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
      image: 'images/promo_merch.jpg',
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
      image: 'images/hero_studio_banner.jpg',
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
      image: 'images/promo_giftbox.jpg',
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
      image: 'images/hero_studio_banner.jpg',
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
      image: 'images/promo_drinkware.jpg',
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
    'stall': {
      title: 'Turnkey Exhibition Stall & Booth',
      category: 'Exhibitions & Events',
      rating: '5.0 ★★★★★ (55 Enterprise Reviews)',
      image: 'images/hero_studio_banner.jpg',
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
      modalDetailsBtn.href = `product-detail.html?item=${encodeURIComponent(key)}`;
    }

    updateWhatsAppLink();
    prodModal.classList.add('active');
  }

  function updateWhatsAppLink() {
    if (!modalWhatsAppBtn) return;
    const data = productDatabase[activeProductKey] || productDatabase['boxes'];
    const msg = encodeURIComponent(
      `Hello Creative Roots Team! 👋\nI am interested in ordering:\n*Product:* ${data.title}\n*Quantity Tier:* ${activeTierQty}\n*Company:* \nPlease provide a formal corporate invoice / digital mock-up.`
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

  // Bind to cards with [data-product] -> Navigate directly to dedicated Product Detail page
  document.querySelectorAll('[data-product]').forEach(card => {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      const key = this.getAttribute('data-product') || 'boxes';
      window.location.href = `product-detail.html?item=${encodeURIComponent(key)}`;
    });
  });

  // ============================================================
  // 3. ADVANCED DIRECTIONAL SCROLL REVEALS (1.05s Staggered Wave)
  // ============================================================
  const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-zoom');
  
  // Create & mount top luxury scroll progress bar
  if (!document.getElementById('scroll-progress-bar')) {
    const scrollBar = document.createElement('div');
    scrollBar.id = 'scroll-progress-bar';
    scrollBar.className = 'scroll-progress-bar';
    document.body.prepend(scrollBar);

    window.addEventListener('scroll', () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTotal > 0 ? (window.scrollY / scrollTotal) * 100 : 0;
      scrollBar.style.width = `${Math.min(100, Math.max(0, scrollProgress))}%`;
    }, { passive: true });
  }

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
      link: 'collection.html?cat=cards'
    },
    {
      headline: '"The finishing could be a little sharper, but overall the color fidelity and binding look great."',
      name: 'Maheen Qureshi',
      company: 'Iqbal Town, Lahore',
      badgeTitle: 'Hardcover Journal',
      badgeImg: 'images/prod_notebook.jpg',
      lifestyleImg: 'images/pack_booklet.jpg',
      link: 'collection.html?cat=notebook'
    },
    {
      headline: '"Delivered an exceptional corporate gifting experience. Quality and attention to detail was remarkable."',
      name: 'Ahmed Hassan',
      company: 'Huasu Solar Pakistan',
      badgeTitle: 'Magnetic Gift Box',
      badgeImg: 'images/prod_box.jpg',
      lifestyleImg: 'images/promo_giftbox.jpg',
      link: 'collection.html?cat=boxes'
    },
    {
      headline: '"Heavyweight organic cotton canvas with razor-sharp screen printing. Top tier physical giveaways."',
      name: 'Sara Malik',
      company: 'Zero Carbon Solar',
      badgeTitle: 'Organic Canvas Tote',
      badgeImg: 'images/promo_business.jpg',
      lifestyleImg: 'images/promo_business.jpg',
      link: 'collection.html?cat=bag'
    },
    {
      headline: '"Matte ceramic finish with 24K gold rim. Our executive welcome hampers looked prestigious."',
      name: 'Usman Ali',
      company: 'Sazgar Engineering Works',
      badgeTitle: '24K Gold Rim Mug',
      badgeImg: 'images/prod_mug.jpg',
      lifestyleImg: 'images/promo_drinkware.jpg',
      link: 'product-detail.html?item=mug'
    },
    {
      headline: '"Breathable cotton fabric and 3D chest embroidery that withstands repeated industrial washes."',
      name: 'Omar Sheikh',
      company: 'Lahore Grammar School (LGS)',
      badgeTitle: 'Embroidered Polo Shirt',
      badgeImg: 'images/prod_shirt.jpg',
      lifestyleImg: 'images/promo_merch.jpg',
      link: 'product-detail.html?item=shirt'
    },
    {
      headline: '"Pre-curved peak, heavy brushed cotton twill, and crisp 3D puff embroidery. Outstanding craftsmanship."',
      name: 'Fatima Khan',
      company: 'Defence Raya Golf Club',
      badgeTitle: 'Brushed Cotton Cap',
      badgeImg: 'images/cap_maroon.jpg',
      lifestyleImg: 'images/cap_maroon.jpg',
      link: 'collection.html?cat=cap'
    },
    {
      headline: '"The exhibition stall designed for Lahore Expo was a showstopper. Our brand stood out remarkably."',
      name: 'Hassan Raza',
      company: 'Grand City Developers',
      badgeTitle: 'Exhibition Expo Booth',
      badgeImg: 'images/hero_studio_banner.jpg',
      lifestyleImg: 'images/hero_studio_banner.jpg',
      link: 'products.html'
    },
    {
      headline: '"Double-wall thermal vacuum insulation keeps drinks ice cold for 24 hours. Engraved logo never fades."',
      name: 'Bilal Ahmed',
      company: 'Kayseria Corporate',
      badgeTitle: 'Thermal Matte Bottle',
      badgeImg: 'images/pack_bottle.jpg',
      lifestyleImg: 'images/pack_bottle.jpg',
      link: 'collection.html?cat=bottle'
    },
    {
      headline: '"Genuine cowhide leather with debossed crest. High-value gift for our VIP board directors."',
      name: 'Brig. (R) Tariq Mahmood',
      company: 'Fauji Foundation',
      badgeTitle: 'Leather Executive Wallet',
      badgeImg: 'images/pack_wallet.jpg',
      lifestyleImg: 'images/pack_wallet.jpg',
      link: 'collection.html?cat=wallet'
    },
    {
      headline: '"High-speed memory chip encased in heavy brushed metal. Laser engraving came out crystal clear."',
      name: 'Zainab Nawaz',
      company: 'FAST-NUCES',
      badgeTitle: 'Brushed Swivel USB',
      badgeImg: 'images/pack_usb.jpg',
      lifestyleImg: 'images/pack_usb.jpg',
      link: 'collection.html?cat=usb'
    },
    {
      headline: '"Reliable execution, fair pricing, and extraordinary customer responsiveness for over three years."',
      name: 'Nadia Qureshi',
      company: 'National Incubation Center',
      badgeTitle: 'Executive Desk Tent',
      badgeImg: 'images/pack_calendar.jpg',
      lifestyleImg: 'images/pack_calendar.jpg',
      link: 'collection.html?cat=calendar'
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

  // Initialize auto-rotation immediately
  startInterval();

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
  // 9. HEADER SHADOW & BACK TO TOP
  // ============================================================
  const header = document.querySelector('.header');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function () {
    if (header) {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    if (backToTop) {
      if (window.scrollY > 300) backToTop.classList.add('visible');
      else backToTop.classList.remove('visible');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
  const searchableProducts = [
    { key: 'cap', title: 'Luxury Embroidered Cap', category: 'Headwear & Uniforms', price: 'Inquire on WhatsApp', image: 'images/cap_maroon.jpg', keywords: 'cap hat maroon baseball embroidery crest uniform merchandise headwear' },
    { key: 'shirt', title: 'Executive Crewneck / T-Shirt', category: 'Custom Apparel', price: 'Inquire on WhatsApp', image: 'images/prod_shirt.jpg', keywords: 'shirt t-shirt tshirt tee cotton screen print dtf apparel clothes' },
    { key: 'polo', title: 'Heavyweight Pique Polo Shirt', category: 'Custom Apparel', price: 'Inquire on WhatsApp', image: 'images/promo_merch.jpg', keywords: 'polo shirt pique collar embroidered uniform corporate staff apparel' },
    { key: 'boxes', title: 'Luxury Rigid Magnetic Gift Box', category: 'Packaging & Gifting', price: 'Inquire on WhatsApp', image: 'images/promo_giftbox.jpg', keywords: 'box boxes giveaway packaging rigid magnet magnetic foil gift hamper carton kappa' },
    { key: 'notebook', title: 'Hardcover Gold Foil Executive Journal', category: 'Executive Stationery', price: 'Inquire on WhatsApp', image: 'images/prod_notebook.jpg', keywords: 'notebook journal diary planner pad stationery leather spiral gold foil' },
    { key: 'cards', title: 'Triple-Ply Velvet Edge Business Cards', category: 'Offset Printing', price: 'Inquire on WhatsApp', image: 'images/prod_cards.jpg', keywords: 'card cards business visiting foil gilded edge cotton kraft print' },
    { key: 'drinkware', title: 'Smart Matte Thermal Flask & Mug Set', category: 'Drinkware', price: 'Inquire on WhatsApp', image: 'images/promo_drinkware.jpg', keywords: 'drinkware flask thermal bottle tumbler mug ceramic vacuum laser etched water' },
    { key: 'bottle', title: 'Matte Stainless Steel Vacuum Bottle', category: 'Drinkware', price: 'Inquire on WhatsApp', image: 'images/pack_bottle.jpg', keywords: 'bottle water flask stainless steel matte vacuum cold hot thermal laser' },
    { key: 'mug', title: 'Grade-A Glazed Ceramic Office Mug', category: 'Drinkware', price: 'Inquire on WhatsApp', image: 'images/prod_mug.jpg', keywords: 'mug coffee tea cup ceramic glazed office kitchen print decal' },
    { key: 'pen', title: 'Solid Brass Laser-Engraved Ballpoint Pen', category: 'Executive Stationery', price: 'Inquire on WhatsApp', image: 'images/pack_pen.jpg', keywords: 'pen pens ballpoint rollerball metal brass gold laser executive writing' },
    { key: 'business', title: 'Heavy Organic Canvas Tote Bag', category: 'Promotional Merchandise', price: 'Inquire on WhatsApp', image: 'images/promo_business.jpg', keywords: 'bag bags tote canvas cotton shopping carry giveaway exhibition eco' },
    { key: 'wallet', title: 'Genuine Leather Bifold Executive Wallet', category: 'Leather Goods', price: 'Inquire on WhatsApp', image: 'images/pack_wallet.jpg', keywords: 'wallet leather bifold card holder cash luxury accessory gift' },
    { key: 'calendar', title: 'Desk Tent Calendar 2026', category: 'Stationery & Printing', price: 'Inquire on WhatsApp', image: 'images/pack_calendar.jpg', keywords: 'calendar desk tent stand spiral dates 2026 table stationery' },
    { key: 'booklet', title: 'Corporate Profile Brochure Booklet', category: 'Offset Printing', price: 'Inquire on WhatsApp', image: 'images/pack_booklet.jpg', keywords: 'booklet brochure catalog catalogue profile magazine book offset print heidelberg' },
    { key: 'keychain', title: 'Pebble Leather & Metal Key Fob', category: 'Promotional Merchandise', price: 'Inquire on WhatsApp', image: 'images/pack_keychain.jpg', keywords: 'keychain key fob ring leather metal accessory gift' },
    { key: 'stall', title: 'Turnkey 3D Exhibition Stall & Booth', category: 'Exhibitions & Events', price: 'Inquire on WhatsApp', image: 'images/event_stall.jpg', keywords: 'stall booth exhibition expo trade show display pavilion stage backdrop fabrication' }
  ];

  // Initialize Search Bars
  const searchWrappers = document.querySelectorAll('.search-bar, .header-search-wrap');
  searchWrappers.forEach(wrap => {
    const input = wrap.querySelector('input');
    const button = wrap.querySelector('button');
    if (!input) return;

    // Create dropdown element if not exists
    let dropdown = wrap.querySelector('.search-results-dropdown');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.className = 'search-results-dropdown';
      wrap.appendChild(dropdown);
    }

    function doSearch(query) {
      const q = (query || '').toLowerCase().trim();
      if (!q) {
        dropdown.classList.remove('active');
        dropdown.innerHTML = '';
        return;
      }

      const matches = searchableProducts.filter(item => {
        return item.title.toLowerCase().includes(q) ||
               item.category.toLowerCase().includes(q) ||
               item.keywords.toLowerCase().includes(q) ||
               item.key.toLowerCase().includes(q);
      });

      if (matches.length === 0) {
        dropdown.innerHTML = `
          <div class="search-no-results">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div>No matching products for "<strong>${escapeHtml(q)}</strong>"</div>
            <a href="products.html" style="color: var(--primary-emerald); font-weight:700; margin-top:8px; display:inline-block;">Browse Full Product Store &rarr;</a>
          </div>
        `;
        dropdown.classList.add('active');
        return;
      }

      let html = '';
      const topMatches = matches.slice(0, 5);
      topMatches.forEach(item => {
        html += `
          <a href="product-detail.html?item=${encodeURIComponent(item.key)}" class="search-result-item">
            <img src="${item.image}" alt="${escapeHtml(item.title)}" class="search-result-thumb">
            <div class="search-result-info">
              <span class="search-result-title">${escapeHtml(item.title)}</span>
              <span class="search-result-cat">${escapeHtml(item.category)}</span>
            </div>
            <span class="search-result-price" style="color: #25d366; font-size: 0.82rem; font-weight: 700;"><i class="fa-brands fa-whatsapp"></i> ${escapeHtml(item.price)}</span>
          </a>
        `;
      });

      html += `
        <div class="search-dropdown-footer">
          <a href="products.html?search=${encodeURIComponent(q)}">
            <span>View all ${matches.length} results in Store</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      `;

      dropdown.innerHTML = html;
      dropdown.classList.add('active');
    }

    // Input event
    input.addEventListener('input', function () {
      doSearch(this.value);
      // If we are on products.html, also live-filter cards
      if (typeof filterStoreCardsLive === 'function') {
        filterStoreCardsLive(this.value);
      }
    });

    // Focus event
    input.addEventListener('focus', function () {
      if (this.value.trim().length > 0) {
        doSearch(this.value);
      }
    });

    // Enter key submit
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const q = this.value.trim();
        dropdown.classList.remove('active');
        if (window.location.href.includes('products.html')) {
          if (typeof filterStoreCardsLive === 'function') {
            filterStoreCardsLive(q);
          }
        } else {
          window.location.href = `products.html?search=${encodeURIComponent(q)}`;
        }
      }
    });

    // Button click submit
    if (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();
        const q = input.value.trim();
        dropdown.classList.remove('active');
        if (window.location.href.includes('products.html')) {
          if (typeof filterStoreCardsLive === 'function') {
            filterStoreCardsLive(q);
          }
        } else {
          window.location.href = `products.html?search=${encodeURIComponent(q)}`;
        }
      });
    }
  });

  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-bar') && !e.target.closest('.header-search-wrap')) {
      document.querySelectorAll('.search-results-dropdown').forEach(d => d.classList.remove('active'));
    }
  });

  // Helper escape
  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // ============================================================
  // 12. STORE PAGE (products.html) URL PARAMETER & LIVE SEARCH
  // ============================================================
  window.filterStoreCardsLive = function(query) {
    const q = (query || '').toLowerCase().trim();
    const cards = document.querySelectorAll('.store-card');
    const grid = document.querySelector('.store-grid');
    if (!cards || cards.length === 0) return;

    let banner = document.getElementById('store-search-notice-banner');
    if (!banner && grid) {
      banner = document.createElement('div');
      banner.id = 'store-search-notice-banner';
      banner.className = 'store-search-banner';
      grid.parentNode.insertBefore(banner, grid);
    }

    if (!q) {
      cards.forEach(c => c.style.display = 'flex');
      if (banner) banner.style.display = 'none';
      return;
    }

    let matchCount = 0;
    cards.forEach(card => {
      const title = (card.querySelector('h3') ? card.querySelector('h3').textContent : '').toLowerCase();
      const desc = (card.querySelector('p') ? card.querySelector('p').textContent : '').toLowerCase();
      const tag = (card.querySelector('.store-card-tag') ? card.querySelector('.store-card-tag').textContent : '').toLowerCase();
      const cat = (card.getAttribute('data-category') || '').toLowerCase();
      const prod = (card.getAttribute('data-product') || '').toLowerCase();

      if (title.includes(q) || desc.includes(q) || tag.includes(q) || cat.includes(q) || prod.includes(q)) {
        card.style.display = 'flex';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (banner) {
      banner.style.display = 'flex';
      banner.innerHTML = `
        <span>Showing results for "<strong>${escapeHtml(q)}</strong>" (${matchCount} products found)</span>
        <button type="button" class="btn-clear-search" onclick="clearStoreSearch()"><i class="fa-solid fa-xmark"></i> Clear</button>
      `;
    }
  };

  window.clearStoreSearch = function() {
    const input = document.querySelector('.search-bar input, .header-search-input');
    if (input) input.value = '';
    filterStoreCardsLive('');
    history.replaceState(null, '', 'products.html');
  };

  // Run on page load if ?search= is in URL on products.html
  if (window.location.href.includes('products.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
      const searchInput = document.querySelector('.search-bar input, .header-search-input');
      if (searchInput) searchInput.value = searchParam;
      filterStoreCardsLive(searchParam);
    }
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

});
