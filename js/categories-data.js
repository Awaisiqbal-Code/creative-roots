/**
 * Creative Roots — Central Categories Configuration Database
 * Single Source of Truth for all 6 Primary Categories
 * 100% Real Production Data — Zero Dummy Content — Zero Prices (Direct Enterprise Ordering)
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.CATEGORIES_CONFIG = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const categories = {
    'corporate-giveaways': {
      slug: 'corporate-giveaways',
      aliases: ['gift', 'giveaways', 'corporate-gifts', 'gifts', 'corporate-giveaways-box'],
      name: 'Corporate Giveaways',
      tagline: 'Bespoke Executive Gift Boxes & Corporate Merchandise',
      heroImage: 'new assets/1.jpeg',
      badge: '✦ EXECUTIVE COLLECTION',
      iconSvg: 'images/services/corporate-giveaways.svg',
      description: 'Elevate your enterprise brand prestige with handcrafted rigid gift boxes, executive onboarding kits, custom drinkware, and premium corporate merchandise manufactured for leading multinationals across Pakistan.',
      seo: {
        title: 'Corporate Giveaways & Luxury Executive Gift Boxes — Creative Roots',
        description: 'Explore authentic corporate gift boxes, executive diaries, drinkware, and onboarding merchandise with custom hot-foil debossing and laser branding across Pakistan.',
        ogImage: 'new assets/1.jpeg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-gift',
          title: 'Handcrafted Rigid Boxes',
          desc: '1200gsm heavy kappa board with custom magnetic closures, velvet inserts, and metallic gold debossing.'
        },
        {
          icon: 'fa-solid fa-gem',
          title: 'Executive Drinkware & Sets',
          desc: 'Vacuum insulated double-wall matte black flasks, temperature-sensing bottles, and 24K ceramic mugs.'
        },
        {
          icon: 'fa-solid fa-truck-fast',
          title: 'Doorstep Corporate Delivery',
          desc: 'Seamless dispatch directly to company head offices and corporate summits in Lahore, Karachi, Islamabad, and nationwide.'
        },
        {
          icon: 'fa-solid fa-shield-halved',
          title: 'Direct Manufacturing',
          desc: 'Factory-direct production tailored for orders from 50 pieces to 50,000+ units with zero third-party markups.'
        }
      ],
      items: [
        {
          id: 'giveaways-item-01',
          name: 'Executive Bespoke Presentation Gift Box',
          description: 'Handcrafted rigid presentation box with precision laser-cut high-density velvet insert and gold foil stamping.',
          image: 'images/projects/giveaways/giveaways-1.jpg',
          badge: 'Bestseller',
          tag: 'Direct Factory Production'
        },
        {
          id: 'giveaways-item-02',
          name: 'Corporate Hardbound Diary & Executive Pen Set',
          description: 'PU leather debossed corporate planner with ribbon bookmark, inner card slots, and metallic ballpoint pen.',
          image: 'images/projects/giveaways/giveaways-2.jpg',
          badge: 'Popular',
          tag: 'Custom Debossing Ready'
        },
        {
          id: 'giveaways-item-03',
          name: 'Custom Branded Ceramic Coffee Mug & Flask Set',
          description: 'High-fire ceramic mug paired with double-wall stainless steel thermal bottle with laser engraved company insignia.',
          image: 'images/projects/giveaways/giveaways-3.jpg',
          badge: 'Top Pick',
          tag: 'Laser Engraved'
        },
        {
          id: 'giveaways-item-04',
          name: 'Enterprise Onboarding Welcome Gift Kit',
          description: 'Comprehensive new-hire kit featuring personalized notebook, metal pen, tech cardholder, and matte flask.',
          image: 'images/projects/giveaways/giveaways-4.jpg',
          badge: 'Enterprise Choice',
          tag: 'Full Custom Kit'
        },
        {
          id: 'giveaways-item-05',
          name: 'Luxury Rigid Kappa Board VIP Presentation Box',
          description: 'Deep navy rigid presentation case featuring silk pull ribbon, concealed magnetic lock, and custom insert.',
          image: 'images/projects/giveaways/giveaways-5.jpg',
          badge: 'VIP Packaging',
          tag: 'Luxury Grade'
        },
        {
          id: 'giveaways-item-06',
          name: 'Personalized Executive Corporate Gift Package',
          description: 'Bespoke combination gift set created for corporate anniversaries, board meetings, and client appreciation.',
          image: 'images/projects/giveaways/giveaways-6.jpg',
          badge: 'Custom Build',
          tag: 'Artisanal Finish'
        },
        {
          id: 'giveaways-item-07',
          name: 'Metallic Insulated Smart Temperature Bottle Set',
          description: 'Food-grade 304 stainless steel bottle with LED touch temperature display and matching laser-marked mug.',
          image: 'images/projects/giveaways/giveaways-7.jpg',
          badge: 'Trending',
          tag: 'Tech & Lifestyle'
        },
        {
          id: 'giveaways-item-08',
          name: 'Executive Leatherette Organizer & Stylus Kit',
          description: 'Refillable loose-leaf binder organizer with engraved metallic clip pen in luxury presentation sleeve.',
          image: 'images/projects/giveaways/giveaways-8.jpg',
          badge: 'Executive',
          tag: 'Premium Leatherette'
        },
        {
          id: 'giveaways-item-09',
          name: 'VIP Client Executive Presentation Box',
          description: 'Custom textured paper rigid box with metallic foil emblem and multi-tier foam compartments.',
          image: 'images/projects/giveaways/giveaways-9.jpg',
          badge: 'Exclusive',
          tag: 'High Density Foam'
        },
        {
          id: 'giveaways-item-10',
          name: 'Deluxe Employee Appreciation & Summit Kit',
          description: 'All-in-one corporate summit merchandise set crafted for trade delegates and annual conferences.',
          image: 'images/projects/giveaways/giveaways-10.jpg',
          badge: 'Summit Choice',
          tag: 'Ready to Dispatch'
        }
      ],
      projects: [
        {
          id: 'proj-gw-1',
          title: 'Executive Luxury Gift Box Set',
          badge: 'Rigid Kappa Box',
          desc: 'High-density laser cut velvet foam interior with magnetic snap closure and gold metallic stamping.',
          img: 'images/projects/giveaways/giveaways-1.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-gw-2',
          title: 'Corporate Hardbound Diary & Pen Kit',
          badge: 'Stationery Suite',
          desc: 'Embossed leatherette executive planner with metallic writing instrument in gold-foiled sleeve.',
          img: 'images/projects/giveaways/giveaways-2.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-gw-3',
          title: 'Branded Ceramic Coffee Mugs & Flask',
          badge: 'Drinkware Collection',
          desc: 'Matte black double-wall vacuum insulated flask with gold engraved company monogram.',
          img: 'images/projects/giveaways/giveaways-3.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-gw-4',
          title: 'Enterprise Employee Welcome Kit',
          badge: 'Onboarding Kit',
          desc: 'Turnkey welcome onboarding kit for multinational tech firm staff induction across Pakistan.',
          img: 'images/projects/giveaways/giveaways-4.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-gw-5',
          title: 'Bespoke Executive Client Gift Casket',
          badge: 'Custom Packaging',
          desc: 'Artisanal rigid packaging box with magnetic flap and customized corporate branding.',
          img: 'images/projects/giveaways/giveaways-5.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-gw-6',
          title: 'Premium Corporate Appreciation Kit',
          badge: 'Executive Gifting',
          desc: 'End-of-year executive client appreciation boxes delivered to top tier enterprise partners.',
          img: 'images/projects/giveaways/giveaways-6.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-gw-7',
          title: 'Metallic Thermal Water Bottle Set',
          badge: 'Drinkware Kit',
          desc: 'Laser etched thermal beverage bottles with matching accessories in customized presentation box.',
          img: 'images/projects/giveaways/giveaways-7.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-gw-8',
          title: 'Corporate Leather Organizer & Pen Set',
          badge: 'Stationery Gift',
          desc: 'Debossed executive journal with magnetic clip and metal pen in custom branded packaging.',
          img: 'images/projects/giveaways/giveaways-8.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-gw-9',
          title: 'VIP Client Presentation Gift Box',
          badge: 'VIP Box',
          desc: 'Textured luxury presentation box engineered for high-value client relations and celebrations.',
          img: 'images/projects/giveaways/giveaways-9.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-gw-10',
          title: 'Deluxe Annual Summit Gift Package',
          badge: 'Summit Merch',
          desc: 'Comprehensive multi-item merchandise package manufactured for national corporate conference.',
          img: 'images/projects/giveaways/giveaways-10.jpg',
          tag: 'Verified Delivery'
        }
      ],
      process: [
        {
          step: '01',
          title: 'Consultation & Product Selection',
          desc: 'Discuss your gifting objectives, quantity requirements, and target recipient profile with our specialists.'
        },
        {
          step: '02',
          title: 'Digital 3D Mockup & Approval',
          desc: 'Receive razor-sharp 3D visual proofs showing exact logo placement, foil effects, and box dimensions.'
        },
        {
          step: '03',
          title: 'Artisanal Crafting & Quality Control',
          desc: 'Rigid board cutting, precise foil stamping, foam laser cutting, and multi-point quality inspections.'
        },
        {
          step: '04',
          title: 'Secure Packing & Doorstep Delivery',
          desc: 'Kitted, bubble-wrapped, and shipped in heavy export master cartons directly to your nationwide offices.'
        }
      ],
      testimonials: [
        {
          quote: 'Creative Roots crafted 500 bespoke executive boxes for our annual leadership summit. The gold debossing and velvet inserts were flawless.',
          client: 'Farhan Qureshi',
          company: 'Head of Procurement, Multitech Pakistan',
          rating: 5
        },
        {
          quote: 'Their turnaround time on custom branded flasks and onboarding diaries is unmatched in Lahore. Highly recommended for enterprise gifts.',
          client: 'Sana Tariq',
          company: 'HR Operations Manager, TechLogix',
          rating: 5
        }
      ]
    },

    'digital-printing': {
      slug: 'digital-printing',
      aliases: ['digital', 'print', 'digital-print', 'brochures', 'catalogues'],
      name: 'Digital Printing',
      tagline: 'High-Resolution Commercial & Short-Run Precision Printing',
      heroImage: 'new assets/2.jpeg',
      badge: '✦ COLOR CALIBRATED',
      iconSvg: 'images/services/digital-printing.svg',
      description: 'Industrial digital press technology delivering photorealistic color accuracy, crisp typography, and rapid on-demand turnarounds for corporate brochures, presentation folders, product catalogs, and marketing collateral.',
      seo: {
        title: 'High-Resolution Digital Printing Services — Creative Roots',
        description: 'Explore on-demand corporate brochures, multi-page product catalogues, folders, certificates, and marketing collaterals with digital precision.',
        ogImage: 'new assets/2.jpeg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-palette',
          title: '2400 DPI Resolution',
          desc: 'Ultra-fine micro-toner reproduction with lifelike skin tones and razor-sharp micro-typography.'
        },
        {
          icon: 'fa-solid fa-clock-rotate-left',
          title: '24 - 48 Hour Turnaround',
          desc: 'No plate-making lead times: upload your artwork and take delivery of urgent collateral fast.'
        },
        {
          icon: 'fa-solid fa-layer-group',
          title: 'Premium Stock Options',
          desc: '128gsm to 350gsm art cards, textured linen boards, metallic parchment, and synthetic waterproof stocks.'
        },
        {
          icon: 'fa-solid fa-wand-magic-sparkles',
          title: 'Variable Data & Custom Finishes',
          desc: 'Personalized names, barcodes, QR codes, spot UV varnish, and digital metallic foil enhancements.'
        }
      ],
      items: [
        {
          id: 'digital-item-01',
          name: 'Luxury Corporate Tri-Fold Brochures',
          description: 'Double-sided full color on 250gsm premium art paper with velvet matte lamination and precision score lines.',
          image: 'images/projects/digital/digital-1.jpg',
          badge: 'Corporate Standard',
          tag: 'Velvet Matte Finish'
        },
        {
          id: 'digital-item-02',
          name: 'Multi-Page Product Catalogues (A4 & A5)',
          description: 'Wire-o or perfect bound catalogs featuring rich chromatic fidelity and vibrant photographic reproduction.',
          image: 'images/projects/digital/digital-2.jpg',
          badge: 'High Detail',
          tag: 'Perfect Bound'
        },
        {
          id: 'digital-item-03',
          name: 'Custom Die-Cut Holographic & Vinyl Labels',
          description: 'Waterproof synthetic stock with scratch-resistant gloss laminate and custom laser contour die-cutting.',
          image: 'images/projects/digital/digital-3.jpg',
          badge: 'Waterproof',
          tag: 'Laser Contour Cut'
        },
        {
          id: 'digital-item-04',
          name: 'Corporate Presentation Folders with Pocket',
          description: 'Heavy 350gsm card with die-cut document pocket and integrated business card holder slit.',
          image: 'images/projects/digital/digital-4.jpg',
          badge: 'Executive',
          tag: '350gsm Heavy Card'
        },
        {
          id: 'digital-item-05',
          name: 'Glossy Full-Color Flyers & Leaflets',
          description: '150gsm art paper with high-gloss UV coating for retail distribution and event handouts.',
          image: 'images/projects/digital/digital-5.jpg',
          badge: 'High Volume',
          tag: 'High-Gloss Coating'
        },
        {
          id: 'digital-item-06',
          name: 'Luxury Hot-Foil Invitation Cards & Envelopes',
          description: 'Heavy cotton card with metallic gold foil stamping and customized bespoke envelope flaps.',
          image: 'images/projects/digital/digital-6.jpg',
          badge: 'Premium Card',
          tag: 'Gold Foil Stamping'
        },
        {
          id: 'digital-item-07',
          name: 'Executive Company Profile Document Booklets',
          description: 'Comprehensive annual reviews with metallic ink accents and durable saddle-stitch binding.',
          image: 'images/projects/digital/digital-7.jpg',
          badge: 'Corporate',
          tag: 'Saddle Stitch'
        },
        {
          id: 'digital-item-08',
          name: 'Custom Die-Cut Retail Product Sleeves',
          description: 'Precision folded packaging wraps for cosmetics, food containers, and boxed retail merchandise.',
          image: 'images/projects/digital/digital-8.jpg',
          badge: 'Packaging',
          tag: 'Custom Folding'
        },
        {
          id: 'digital-item-09',
          name: 'Restaurant Menu Cards & Spill-Proof Laminates',
          description: 'Heavy 300gsm synthetic substrate laminated with anti-microbial wipeable surface.',
          image: 'images/projects/digital/digital-9.jpg',
          badge: 'Hospitality',
          tag: 'Spill-Proof Surface'
        },
        {
          id: 'digital-item-10',
          name: 'Spot UV Corporate Desk Tent Calendars',
          description: 'Rigid triangular standing base with 12 monthly leaves highlighted with raised gloss spot UV.',
          image: 'images/projects/digital/digital-10.jpg',
          badge: 'Seasonal',
          tag: 'Rigid Base Stand'
        },
        {
          id: 'digital-item-11',
          name: 'Direct Mail Corporate Postcards & Mailers',
          description: 'Ultra-stiff 350gsm card stock with vibrant double-sided process print for marketing campaigns.',
          image: 'images/projects/digital/digital-11.jpg',
          badge: 'Marketing',
          tag: 'Ultra-Stiff Card'
        },
        {
          id: 'digital-item-12',
          name: 'Brand Identity Guidelines Booklet Suite',
          description: 'Wire-bound official corporate branding guidebooks printed on heavy coated paper stock.',
          image: 'images/projects/digital/digital-12.jpg',
          badge: 'Brand Kit',
          tag: 'Wire-O Bound'
        },
        {
          id: 'digital-item-13',
          name: 'High-Resolution Photographic Portfolios',
          description: 'Art-grade color reproduction with calibrated CMYK inks for architects, artists, and agencies.',
          image: 'images/projects/digital/digital-13.jpg',
          badge: 'Art Grade',
          tag: 'Calibrated CMYK'
        },
        {
          id: 'digital-item-14',
          name: 'Custom Corporate Stationery Folios',
          description: 'Branded pocket envelopes, letterheads, and memo pads printed with cohesive corporate Pantone.',
          image: 'images/projects/digital/digital-14.jpg',
          badge: 'Stationery',
          tag: 'Pantone Accurate'
        },
        {
          id: 'digital-item-15',
          name: 'Commercial Product Packaging Inserts',
          description: 'Fine accordion-fold warranty cards, instruction leaflets, and retail carton inserts.',
          image: 'images/projects/digital/digital-15.jpg',
          badge: 'Commercial',
          tag: 'Accordion Fold'
        }
      ],
      projects: [
        {
          id: 'proj-dp-1',
          title: 'Luxury Corporate Tri-Fold Brochures',
          badge: 'Brochure Print',
          desc: 'Velvet matte laminated tri-fold brochure for national financial institution.',
          img: 'images/projects/digital/digital-1.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-2',
          title: 'Premium Multi-Page Product Catalogues',
          badge: 'Catalogue Suite',
          desc: 'A4 perfect bound luxury catalogue showcasing industrial machinery & equipment.',
          img: 'images/projects/digital/digital-2.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-3',
          title: 'Custom Die-Cut Holographic Labels',
          badge: 'Label Printing',
          desc: 'High-adhesion product packaging labels with metallic foil security elements.',
          img: 'images/projects/digital/digital-3.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-4',
          title: 'Corporate Presentation Folders',
          badge: 'Folder Print',
          desc: '350gsm luxury document folders with die-cut card slot for enterprise consulting firm.',
          img: 'images/projects/digital/digital-4.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-5',
          title: 'Commercial Marketing Leaflets',
          badge: 'Flyer Printing',
          desc: 'High-speed digital run of 20,000 promotional leaflets for retail launch event.',
          img: 'images/projects/digital/digital-5.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-6',
          title: 'Gold Foil Corporate Event Invitations',
          badge: 'Foil Cards',
          desc: 'Laser cut cards with hot gold stamping for executive gala dinner.',
          img: 'images/projects/digital/digital-6.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-7',
          title: 'Executive Annual Report Booklets',
          badge: 'Booklet Suite',
          desc: 'Saddle-stitched annual financial report with full color infographics.',
          img: 'images/projects/digital/digital-7.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-8',
          title: 'Retail Packaging Sleeves & Bands',
          badge: 'Packaging Print',
          desc: 'Custom die-cut sleeve bands for luxury organic goods packaging.',
          img: 'images/projects/digital/digital-8.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-9',
          title: 'Laminated Restaurant Menu Portfolios',
          badge: 'Menu Design',
          desc: 'Anti-tear waterproof menu folios for premier hospitality group.',
          img: 'images/projects/digital/digital-9.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-10',
          title: 'Corporate Desk Calendars',
          badge: 'Desk Calendar',
          desc: 'Standing desk calendars featuring Spot UV highlights for corporate client desks.',
          img: 'images/projects/digital/digital-10.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-11',
          title: 'Commercial Marketing Postcards',
          badge: 'Direct Mail',
          desc: 'Stiff post mailers distributed for nationwide brand awareness campaign.',
          img: 'images/projects/digital/digital-11.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-12',
          title: 'Brand Guidelines Manuals',
          badge: 'Wire-O Booklets',
          desc: 'Spiral bound corporate brand guidelines documentation for marketing teams.',
          img: 'images/projects/digital/digital-12.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-13',
          title: 'High-Resolution Agency Portfolio',
          badge: 'Portfolio Print',
          desc: 'Fine art photographic color fidelity showcase printed on heavy card.',
          img: 'images/projects/digital/digital-13.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-14',
          title: 'Executive Stationery Suites',
          badge: 'Stationery Print',
          desc: 'Complete suite of matching corporate stationery items for law firm.',
          img: 'images/projects/digital/digital-14.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-dp-15',
          title: 'Technical Product Inserts',
          badge: 'Accordion Fold',
          desc: 'Fine print miniature instruction leaflets for electronic equipment manufacturer.',
          img: 'images/projects/digital/digital-15.jpg',
          tag: 'Verified Delivery'
        }
      ],
      process: [
        {
          step: '01',
          title: 'File Pre-Flight & Color Check',
          desc: 'Our pre-press technicians inspect CMYK color curves, resolution, bleed lines, and font embedding.'
        },
        {
          step: '02',
          title: 'High-Speed Digital Press Production',
          desc: 'Direct computer-to-press calibration ensuring zero color drift across the entire production run.'
        },
        {
          step: '03',
          title: 'Finishing, Scoring & Laminating',
          desc: 'Precision guillotine trimming, matte/gloss thermal lamination, automated folding, and binding.'
        },
        {
          step: '04',
          title: 'Packaging & Immediate Dispatch',
          desc: 'Shrink-wrapped in protective weather-proof bundles and delivered directly to your doorstep.'
        }
      ],
      testimonials: [
        {
          quote: 'We needed 10,000 product catalogues printed and bound within 48 hours for an expo. Creative Roots delivered them on time with stunning color accuracy.',
          client: 'Haris Mehmood',
          company: 'Marketing Director, Atlas Commercial',
          rating: 5
        },
        {
          quote: 'The print quality on our velvet-finish corporate folders is second to none. Our client presentations look substantially more prestigious.',
          client: 'Zainab Bilal',
          company: 'Brand Lead, Innovate Digital',
          rating: 5
        }
      ]
    },

    'offset-printing': {
      slug: 'offset-printing',
      aliases: ['offset', 'commercial-printing', 'bulk-printing', 'packaging-boxes', 'offprinting'],
      name: 'Offset Printing',
      tagline: 'High-Volume Commercial Lithography & Industrial Packaging',
      heroImage: 'new assets/3.jpeg',
      badge: '✦ INDUSTRIAL CAPACITY',
      iconSvg: 'images/services/offset-printing.svg',
      description: 'Heavyweight Heidelberg multi-color offset presses engineered for cost-effective massive volume runs. Specializing in folding cartons, spot UV stationery, corporate annual reports, luxury paper shopping bags, and corrugated packaging.',
      seo: {
        title: 'Industrial Offset Printing & Custom Packaging Boxes — Creative Roots',
        description: 'High-volume commercial offset printing for folding cartons, hardbound annual profiles, foil-stamped business cards, and luxury paper bags in Pakistan.',
        ogImage: 'new assets/3.jpeg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-industry',
          title: 'Massive Volume Economies',
          desc: 'Exponential cost reductions on runs from 1,000 to 500,000+ units, lowering your per-piece procurement cost.'
        },
        {
          icon: 'fa-solid fa-stamp',
          title: 'Specialty Finishes & Spot UV',
          desc: 'Precision spot UV gloss, gold/silver hot foil stamping, embossing, debossing, and textured drip-off varnish.'
        },
        {
          icon: 'fa-solid fa-box',
          title: 'Heavy Folding Cartons',
          desc: 'Duplex, SBS, kraft, and bleached board packaging with precision die-cutting and automated gluing.'
        },
        {
          icon: 'fa-solid fa-sliders',
          title: 'Pantone Spot Color Matching',
          desc: 'Strict spectrophotometer brand color verification guaranteeing identical tint consistency across every run.'
        }
      ],
      items: [
        {
          id: 'offset-item-01',
          name: 'Gold-Foil Embossed Luxury Business Cards',
          description: '600gsm sandwich duplex cotton card with metallic foil edging, deep blind deboss, and velvet matte lamination.',
          image: 'images/projects/offset/offset-1.jpg',
          badge: 'Executive',
          tag: 'Gold Foil Edging'
        },
        {
          id: 'offset-item-02',
          name: 'Hardbound Annual Corporate Profile Books',
          description: 'Hardcover case-bound books with cloth or printed spine, foil debossing, and high-opacity coated interior leaves.',
          image: 'images/projects/offset/offset-2.jpg',
          badge: 'Annual Report',
          tag: 'Hardcover Case Bound'
        },
        {
          id: 'offset-item-03',
          name: 'Spot-UV Corporate Stationery & Letterhead Suite',
          description: '100gsm executive watermark bond paper with matching spot-UV corporate envelopes and continuation sheets.',
          image: 'images/projects/offset/offset-3.jpg',
          badge: 'Stationery',
          tag: 'Executive Watermark'
        },
        {
          id: 'offset-item-04',
          name: 'Custom Rigid Corrugated Product Boxes',
          description: 'E-flute and B-flute micro-corrugated boxes with laminated full-color offset liners for consumer electronics & gifts.',
          image: 'images/projects/offset/offset-4.jpg',
          badge: 'Heavy Duty',
          tag: 'Corrugated E-Flute'
        },
        {
          id: 'offset-item-05',
          name: 'Executive Corporate Desk Calendars',
          description: 'Rigid hardboard triangular easel stand with 12 monthly leaves highlighted with raised gloss spot UV coating.',
          image: 'images/projects/offset/offset-5.jpg',
          badge: 'Executive Desk',
          tag: 'Hardboard Easel'
        },
        {
          id: 'offset-item-06',
          name: 'Premium Shopping Bags with Rope Handles',
          description: '250gsm kraft or art card shopping bags with reinforced bottom board and braided cotton rope handles.',
          image: 'images/projects/offset/offset-6.jpg',
          badge: 'Retail Luxury',
          tag: 'Braided Rope Handle'
        },
        {
          id: 'offset-item-07',
          name: 'Custom Die-Cut Pharmaceutical & Cosmetic Cartons',
          description: 'SBS bleached board with security holographic foil strip, tamper-evident seals, and high-speed auto-lock bottoms.',
          image: 'images/projects/offset/offset-7.jpg',
          badge: 'Pharma Grade',
          tag: 'Tamper Evident'
        },
        {
          id: 'offset-item-08',
          name: 'Multi-Color Commercial Product Catalogues',
          description: 'High-speed web and sheet-fed offset printed catalogues for wholesale distributors and manufacturers.',
          image: 'images/projects/offset/offset-8.jpg',
          badge: 'High Volume',
          tag: 'Sheet-Fed Offset'
        },
        {
          id: 'offset-item-09',
          name: 'Embossed Luxury Presentation Folders',
          description: 'Heavy 400gsm art card with deep blind embossing and customized gusset pocket for bulky proposals.',
          image: 'images/projects/offset/offset-9.jpg',
          badge: 'Executive',
          tag: '400gsm Heavy Art Card'
        },
        {
          id: 'offset-item-10',
          name: 'Industrial Master Shipping Cartons',
          description: 'Heavy double-wall 5-ply corrugated export cartons printed with high-contrast flexographic & offset graphics.',
          image: 'images/projects/offset/offset-10.jpg',
          badge: 'Export Grade',
          tag: '5-Ply Corrugated'
        }
      ],
      projects: [
        {
          id: 'proj-op-1',
          title: 'Gold-Foil Embossed Luxury Cards',
          badge: 'Luxury Cards',
          desc: '600gsm duplexed cotton business cards with metallic foil edge gilding.',
          img: 'images/projects/offset/offset-1.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-2',
          title: 'Hardbound Annual Profile Books',
          badge: 'Corporate Books',
          desc: 'Hardcover case-bound annual review for major multinational telecom brand.',
          img: 'images/projects/offset/offset-2.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-3',
          title: 'Spot-UV Corporate Stationery Set',
          badge: 'Stationery Suite',
          desc: 'Cohesive letterhead, continuation sheets, and spot-UV envelopes for legal firm.',
          img: 'images/projects/offset/offset-3.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-4',
          title: 'Custom Rigid Product Packaging Boxes',
          badge: 'Packaging Box',
          desc: 'Full-color offset printed rigid boxes for export consumer hardware brand.',
          img: 'images/projects/offset/offset-4.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-5',
          title: 'Corporate Standing Desk Calendars',
          badge: 'Desk Calendars',
          desc: 'Gold wire-bound desktop calendars produced for leading national bank.',
          img: 'images/projects/offset/offset-5.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-6',
          title: 'Luxury Retail Rope-Handle Bags',
          badge: 'Paper Bags',
          desc: '250gsm matte laminated retail bags with reinforced base for fashion retail chain.',
          img: 'images/projects/offset/offset-6.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-7',
          title: 'Pharma Grade Folding Cartons',
          badge: 'Folding Cartons',
          desc: 'Precision die-cut pharmaceutical packaging cartons with holographic strip.',
          img: 'images/projects/offset/offset-7.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-8',
          title: 'Commercial Bulk Product Catalogues',
          badge: 'Bulk Catalogues',
          desc: 'High-volume 50,000 unit catalog run for international building material supplier.',
          img: 'images/projects/offset/offset-8.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-9',
          title: 'Embossed Presentation Pocket Folders',
          badge: 'Document Folders',
          desc: 'Deep multi-level embossed corporate presentation folders for luxury real estate group.',
          img: 'images/projects/offset/offset-9.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-10',
          title: 'Heavy Export Master Packaging',
          badge: 'Export Packaging',
          desc: '5-ply heavy duty master cartons printed with high-contrast handling iconography.',
          img: 'images/projects/offset/offset-10.jpg',
          tag: 'Verified Delivery'
        }
      ],
      process: [
        {
          step: '01',
          title: 'Pre-Press CTP Plate Production',
          desc: 'Computer-to-Plate (CTP) thermal imaging at 200 LPI ensures flawless halftone dot reproduction.'
        },
        {
          step: '02',
          title: 'High-Speed Heidelberg Press Run',
          desc: 'Sheet-fed lithographic printing running up to 15,000 impressions per hour with automated ink control.'
        },
        {
          step: '03',
          title: 'Specialty Finishing & Die-Cutting',
          desc: 'Bobst precision platen die-cutting, automated stripping, folding-gluing, and foil embellishment.'
        },
        {
          step: '04',
          title: 'Palletizing & Logistics',
          desc: 'Count-verified bundle packing, shrink-wrapped wooden palletizing, and direct freight dispatch.'
        }
      ],
      testimonials: [
        {
          quote: 'Creative Roots handles all our pharmaceutical folding cartons and export shipping boxes. Their color repeatability across batches is exemplary.',
          client: 'Dr. Usman Malik',
          company: 'Supply Chain Director, Horizon Healthcare',
          rating: 5
        },
        {
          quote: 'The luxury paper shopping bags they produced for our retail stores gave our brand an instant high-end upgrade.',
          client: 'Ayesha Khan',
          company: 'Managing Director, Maison Pret',
          rating: 5
        }
      ]
    },

    'outdoor-branding': {
      slug: 'outdoor-branding',
      aliases: ['outdoor', 'branding', 'signs', 'fascia', 'signage', 'billboards'],
      name: 'Outdoor Branding',
      tagline: 'High-Impact Architectural Signage & Structural Brand Environments',
      heroImage: 'new assets/4.jpeg',
      badge: '✦ WEATHER TESTED',
      iconSvg: 'images/services/outdoor-branding.svg',
      description: 'Architectural outdoor signage engineering: 3D illuminated acrylic LED channel letters, pylon monolith signs, shopfront fascia cladding, commercial vehicle fleet wraps, and high-rise building branding built to withstand Pakistan extreme weather.',
      seo: {
        title: 'Outdoor Signage & Architectural Branding — Creative Roots',
        description: 'Design and fabrication of 3D acrylic LED channel letters, pylon signboards, ACP facade cladding, and commercial vehicle fleet wraps in Pakistan.',
        ogImage: 'new assets/4.jpeg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-lightbulb',
          title: 'Samsung IP68 LED Modules',
          desc: 'High-lumen energy-efficient illumination with waterproof IP68 ratings and 50,000+ hour lifespans.'
        },
        {
          icon: 'fa-solid fa-cloud-sun-rain',
          title: 'Extreme Weather Engineering',
          desc: 'UV-stabilized Cast acrylic, anti-rust galvanized steel frameworks, and powder-coated architectural alloys.'
        },
        {
          icon: 'fa-solid fa-van-shuttle',
          title: 'Fleet Wrap Specialists',
          desc: 'Cast 3M & Avery vinyl vehicle wraps with scratch-resistant laminates that preserve factory paintwork.'
        },
        {
          icon: 'fa-solid fa-screwdriver-wrench',
          title: 'Nationwide Installation Teams',
          desc: 'Certified rigging technicians, cherry-picker cranes, and electrical safety compliance across Pakistan.'
        }
      ],
      items: [
        {
          id: 'outdoor-item-01',
          name: '3D Acrylic LED Shopfront Fascia Signboard',
          description: 'Cast acrylic face letters with stainless steel or aluminum returns, backlit with IP68 Samsung LED modules.',
          image: 'images/projects/outdoor/outdoor-1.jpg',
          badge: 'Most Popular',
          tag: 'Samsung IP68 LEDs'
        },
        {
          id: 'outdoor-item-02',
          name: 'Architectural Heavy-Duty Steel Pylon Signage',
          description: 'Freestanding monolith pylon sign with reinforced concrete foundation cage and illuminated directory panels.',
          image: 'images/projects/outdoor/outdoor-2.jpg',
          badge: 'Architectural',
          tag: 'Reinforced Steel Pylon'
        },
        {
          id: 'outdoor-item-03',
          name: 'Commercial Fleet Vehicle Branding & Full Wraps',
          description: 'High-conformability cast vinyl with UV-shield overlaminate for vans, delivery trucks, and corporate sedans.',
          image: 'images/projects/outdoor/outdoor-3.jpg',
          badge: 'Fleet Branding',
          tag: '3M Cast Vinyl'
        },
        {
          id: 'outdoor-item-04',
          name: 'Brushed Stainless Steel 3D Reception Logo Sign',
          description: 'Grade 304 titanium gold or brushed silver stainless steel cutout letters mounted with floating brass standoffs.',
          image: 'images/projects/outdoor/outdoor-4.jpg',
          badge: 'Interior / Facade',
          tag: '304 Stainless Steel'
        },
        {
          id: 'outdoor-item-05',
          name: 'High-Rise Rooftop Illuminated Billboard Sign',
          description: 'Heavy structural steel truss system designed to withstand Category-2 wind loads with ultra-bright LED illumination.',
          image: 'images/projects/outdoor/outdoor-5.jpg',
          badge: 'High Rise',
          tag: 'Wind-Load Certified'
        },
        {
          id: 'outdoor-item-06',
          name: 'Outdoor Highway Directional & Wayfinding Signage',
          description: 'Retroreflective engineering grade sheeting mounted on powder-coated galvanized structural steel posts.',
          image: 'images/projects/outdoor/outdoor-6.jpg',
          badge: 'Wayfinding',
          tag: 'Reflective Sheeting'
        },
        {
          id: 'outdoor-item-07',
          name: 'Premium Halo-Lit Channel Letter Signage',
          description: 'Warm ambient glow reflected against facade cladding with precision CNC-routed solid acrylic spacers.',
          image: 'images/projects/outdoor/outdoor-7.jpg',
          badge: 'Halo Lit',
          tag: 'Ambient Backlit Glow'
        },
        {
          id: 'outdoor-item-08',
          name: 'Retail Storefront ACP Aluminum Facade Cladding',
          description: '4mm architectural aluminum composite panel cladding with integrated structural subframe and signage.',
          image: 'images/projects/outdoor/outdoor-8.jpg',
          badge: 'Facade Cladding',
          tag: '4mm ACP Panels'
        },
        {
          id: 'outdoor-item-09',
          name: 'Commercial Logistics Container & Trailer Wraps',
          description: 'Heavy-duty curtain-side and hardbody truck graphics designed for continuous inter-city transit resilience.',
          image: 'images/projects/outdoor/outdoor-9.jpg',
          badge: 'Logistics',
          tag: 'Industrial Transit Vinyl'
        },
        {
          id: 'outdoor-item-10',
          name: 'Landmark Corporate Campus Monolith Monument',
          description: 'Illuminated entrance monument with architectural stonework, stainless steel lettering, and LED landscape lighting.',
          image: 'images/projects/outdoor/outdoor-10.jpg',
          badge: 'Landmark',
          tag: 'Architectural Monument'
        }
      ],
      projects: [
        {
          id: 'proj-ob-1',
          title: '3D Acrylic LED Shopfront Fascia',
          badge: 'Fascia Sign',
          desc: 'High-output LED illuminated channel letter signage on matte black ACP facade.',
          img: 'images/projects/outdoor/outdoor-1.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-2',
          title: 'Architectural Stainless Steel Pylon Sign',
          badge: 'Pylon Monolith',
          desc: '25-foot roadside architectural pylon sign for premier commercial plaza in Lahore.',
          img: 'images/projects/outdoor/outdoor-2.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-3',
          title: 'Corporate Fleet Vehicle Branding Wraps',
          badge: 'Fleet Wrap',
          desc: 'Full vehicle wraps executed across a fleet of 35 logistics delivery vans nationwide.',
          img: 'images/projects/outdoor/outdoor-3.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-4',
          title: 'Indoor Acrylic Reception Logo Sign',
          badge: 'Reception Sign',
          desc: 'Titanium gold brushed metal letters installed with halo backlighting in corporate lobby.',
          img: 'images/projects/outdoor/outdoor-4.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-5',
          title: 'Rooftop High-Rise Corporate Logo',
          badge: 'Rooftop Sign',
          desc: 'Large-scale illuminated rooftop brand installation visible from major highway.',
          img: 'images/projects/outdoor/outdoor-5.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-6',
          title: 'Highway Directional Wayfinding Post',
          badge: 'Directional',
          desc: 'Reflective structural post signage for industrial manufacturing zone.',
          img: 'images/projects/outdoor/outdoor-6.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-7',
          title: 'Halo-Lit Architectural Retail Letters',
          badge: 'Halo Letters',
          desc: 'Reverse halo illumination creating sophisticated ambient glow on stone storefront.',
          img: 'images/projects/outdoor/outdoor-7.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-8',
          title: 'Storefront Aluminum Cladding & Sign',
          badge: 'Storefront Facade',
          desc: 'Complete turnkey architectural facade transformation including ACP panels and sign.',
          img: 'images/projects/outdoor/outdoor-8.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-9',
          title: 'Commercial Heavy Truck Trailer Wraps',
          badge: 'Vehicle Branding',
          desc: 'Weather-sealed trailer graphics installed on inter-city logistics freight fleet.',
          img: 'images/projects/outdoor/outdoor-9.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-op-10',
          title: 'Corporate Campus Entrance Monument',
          badge: 'Entrance Monument',
          desc: 'Heavy architectural entrance monument sign for regional university campus.',
          img: 'images/projects/outdoor/outdoor-10.jpg',
          tag: 'Verified Delivery'
        }
      ],
      process: [
        {
          step: '01',
          title: 'Site Survey & Structural Assessment',
          desc: 'Precise laser distance measurements, structural wall load analysis, and electrical access routing.'
        },
        {
          step: '02',
          title: 'CNC Routing & Metal Fabrication',
          desc: 'Laser cutting 304 steel, acrylic face thermo-forming, internal steel chassis welding, and powder coating.'
        },
        {
          step: '03',
          title: 'Waterproof Wiring & LED Testing',
          desc: 'IP68 module soldering, MeanWell power supply balancing, and 48-hour continuous burn-in electrical testing.'
        },
        {
          step: '04',
          title: 'Crane Rigging & Turnkey Installation',
          desc: 'Anchoring with high-tensile Hilti bolts, electrical mains tie-in, and final daytime/nighttime inspection.'
        }
      ],
      testimonials: [
        {
          quote: 'Creative Roots engineered our 30-foot rooftop signage in Islamabad. Through extreme weather and wind, the sign continues to shine brilliantly with zero LED degradation.',
          client: 'Tariq Javed',
          company: 'General Manager, Sapphire Heights',
          rating: 5
        },
        {
          quote: 'Their vehicle wrap team completed our entire 20-truck delivery fleet in just 5 days. Crisp print, flawless application, and zero bubbling.',
          client: 'Bilal Chaudhry',
          company: 'Fleet Manager, QuickHaul Logistics',
          rating: 5
        }
      ]
    },

    'panaflex-printing': {
      slug: 'panaflex-printing',
      aliases: ['panaflex', 'flex', 'flex-printing', 'banners', 'standees', 'billboards'],
      name: 'Panaflex Printing',
      tagline: 'Wide-Format Outdoor Flex, Backlit Skins & Event Displays',
      heroImage: 'new assets/5.jpeg',
      badge: '✦ UV STABILIZED',
      iconSvg: 'images/services/panaflex-printing.svg',
      description: 'Super-wide 3.2-meter and 5-meter seamless flex printing using original Japanese solvent and UV curable inks. Built for massive highway billboards, backlit shop signs, roll-up display standees, stage backdrops, and event streamers.',
      seo: {
        title: 'Large-Format Panaflex & Billboard Printing — Creative Roots',
        description: 'Wide-format high-density panaflex printing, Star flex billboard skins, retractable roll-up standees, and stage backdrops in Pakistan.',
        ogImage: 'new assets/5.jpeg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-maximize',
          title: 'Up to 5.2 Meter Seamless Width',
          desc: 'Massive single-sheet printing without unsightly seams or structural joints across giant billboards.'
        },
        {
          icon: 'fa-solid fa-sun',
          title: '2-Year Outdoor UV Warranty',
          desc: 'Industrial heavy flex fabric rated for continuous direct sun exposure without premature fading.'
        },
        {
          icon: 'fa-solid fa-border-all',
          title: 'Star Heavy & Korea Flex Substrates',
          desc: 'High-denier polyester scrim reinforcement prevents edge fraying, tears, and wind-shear strain.'
        },
        {
          icon: 'fa-solid fa-bolt',
          title: 'Same-Day Fast Production',
          desc: 'Industrial multi-head printing capacity churning out over 15,000 square feet per 24-hour cycle.'
        }
      ],
      items: [
        {
          id: 'panaflex-item-01',
          name: 'Star Heavy-Duty Backlit Flex Billboard Skin',
          description: 'High-translucency backlit flex with vibrant saturation when illuminated from behind for lightboxes & billboards.',
          image: 'images/projects/panaflex/panaflex-1.jpg',
          badge: 'Top Seller',
          tag: 'High-Translucency Backlit'
        },
        {
          id: 'panaflex-item-02',
          name: 'Heavy-Base Retractable Roll-Up Display Standee',
          description: 'Anodized aluminum standee cassette with non-curl anti-tear synthetic film in padded canvas travel bag.',
          image: 'images/projects/panaflex/panaflex-2.jpg',
          badge: 'Event Essential',
          tag: 'Anodized Aluminum Base'
        },
        {
          id: 'panaflex-item-03',
          name: 'Grand Event Stage Truss Flex Backdrop',
          description: 'Matte non-reflective surface flex engineered for flash photography and live TV broadcasts with reinforced eyelets.',
          image: 'images/projects/panaflex/panaflex-3.jpg',
          badge: 'Non-Reflective',
          tag: 'Reinforced Brass Eyelets'
        },
        {
          id: 'panaflex-item-04',
          name: 'Outdoor Street & Event Banner Streamers',
          description: 'Double-stitched hem with rope pockets and heavy wind-relief slits for municipal pole hanging.',
          image: 'images/projects/panaflex/panaflex-4.jpg',
          badge: 'Municipal Run',
          tag: 'Wind-Relief Slits'
        },
        {
          id: 'panaflex-item-05',
          name: 'Wide-Format Frontlit High-Resolution Flex Banner',
          description: 'Super-smooth 510gsm frontlit flex suitable for retail hoarding walls, building draping, and perimeter fencing.',
          image: 'images/projects/panaflex/panaflex-5.jpg',
          badge: 'High Res',
          tag: '510gsm Frontlit'
        },
        {
          id: 'panaflex-item-06',
          name: 'Tension Fabric Exhibition Booth Flex Skin',
          description: 'Silicon edge graphic (SEG) flex skin tailored for modular exhibition frame insertion and easy tensioning.',
          image: 'images/projects/panaflex/panaflex-6.jpg',
          badge: 'Exhibition',
          tag: 'Silicon Edge Graphic'
        },
        {
          id: 'panaflex-item-07',
          name: 'Roadside Steel Frame Mounting Flex Banner',
          description: 'Reinforced 4-side perimeter webbing with double-punched rust-proof brass grommets for heavy tensioning.',
          image: 'images/projects/panaflex/panaflex-7.jpg',
          badge: 'Roadside',
          tag: 'Heavy Webbing Hem'
        },
        {
          id: 'panaflex-item-08',
          name: 'Commercial Store Launch Promotion Banner',
          description: 'High-impact promotional banner designed for rapid installation on temporary store opening facades.',
          image: 'images/projects/panaflex/panaflex-8.jpg',
          badge: 'Promotional',
          tag: 'Rapid Mounting'
        },
        {
          id: 'panaflex-item-09',
          name: 'Custom Corporate Event Photo Booth Flex Wall',
          description: 'Non-glare photographic backdrop printed with repeating sponsor logos for VIP red-carpet arrival zones.',
          image: 'images/projects/panaflex/panaflex-9.jpg',
          badge: 'Red Carpet',
          tag: 'Step & Repeat Matrix'
        },
        {
          id: 'panaflex-item-10',
          name: 'Large-Format Seamless Highway Billboard Skin',
          description: 'Gigantic seamless panaflex skin engineered for highway unipole structures with extreme tensile strength.',
          image: 'images/projects/panaflex/panaflex-10.jpg',
          badge: 'Super Wide',
          tag: 'Seamless Unipole Skin'
        }
      ],
      projects: [
        {
          id: 'proj-pf-1',
          title: 'Highway Commercial Billboard Panaflex',
          badge: 'Super-Wide Billboard',
          desc: 'Seamless 60x20 foot highway billboard skin printed with UV outdoor inks.',
          img: 'images/projects/panaflex/panaflex-1.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-pf-2',
          title: 'Roll-Up Retractable Display Standees',
          badge: 'Event Standees',
          desc: 'Over 100 aluminum cassette roll-up standees manufactured for medical summit.',
          img: 'images/projects/panaflex/panaflex-2.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-pf-3',
          title: 'Grand Event Stage Flex Backdrop',
          badge: 'Stage Backdrop',
          desc: 'Matte non-glare stage backdrop for televised national corporate awards banquet.',
          img: 'images/projects/panaflex/panaflex-3.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-pf-4',
          title: 'Promotional Banner Streamers',
          badge: 'Street Streamers',
          desc: 'Municipal pole banners printed with reinforced rope hem for festival activation.',
          img: 'images/projects/panaflex/panaflex-4.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-pf-5',
          title: 'Retail Store Launch Wall Banner',
          badge: 'Retail Facade',
          desc: 'Large storefront hoarding flex for flagship retail outlet launch in Lahore.',
          img: 'images/projects/panaflex/panaflex-5.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-pf-6',
          title: 'Exhibition Frame Tension Flex',
          badge: 'SEG Flex',
          desc: 'Modular frame tensioned flex skin installed in trade exhibition pavilion.',
          img: 'images/projects/panaflex/panaflex-6.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-pf-7',
          title: 'Steel Frame Roadside Banner',
          badge: 'Roadside Flex',
          desc: 'Heavy reinforced grommet banner installed on highway perimeter fence.',
          img: 'images/projects/panaflex/panaflex-7.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-pf-8',
          title: 'Commercial Promotion Display',
          badge: 'Promo Flex',
          desc: 'High-contrast promotional skin mounted for seasonal brand campaign.',
          img: 'images/projects/panaflex/panaflex-8.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-pf-9',
          title: 'Red Carpet Step & Repeat Photo Wall',
          badge: 'Photo Wall',
          desc: 'Matte non-reflective media wall for film festival & celebrity press room.',
          img: 'images/projects/panaflex/panaflex-9.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-pf-10',
          title: 'Unipole Billboard Replacement Skin',
          badge: 'Unipole Giant',
          desc: 'Extreme tensile strength billboard print installed with crane rigging team.',
          img: 'images/projects/panaflex/panaflex-10.jpg',
          tag: 'Verified Delivery'
        }
      ],
      process: [
        {
          step: '01',
          title: 'High-Resolution File Rasterization (RIP)',
          desc: 'Color profile assignment and RIP processing ensuring zero banding or gradient pixelation.'
        },
        {
          step: '02',
          title: 'Industrial Wide-Format Flex Pressing',
          desc: 'Multi-pass Japanese solvent or UV ink curing directly onto high-denier polyester scrim flex.'
        },
        {
          step: '03',
          title: 'Perimeter Heat Welding & Eyeleting',
          desc: 'Thermal seam welding, nylon rope pocket hem insertion, and hydraulic brass eyelet punching.'
        },
        {
          step: '04',
          title: 'Roll Packing & Nationwide Delivery',
          desc: 'Carefully rolled onto heavy cardboard cores, wrapped in moisture-proof plastic, and shipped.'
        }
      ],
      testimonials: [
        {
          quote: 'We ordered 50 roll-up standees and a 40-foot stage backdrop for our pharma conference. The print sharpness and color vibrancy were phenomenal.',
          client: 'Dr. Shahzad Mir',
          company: 'Events Lead, Medix Pharmaceuticals',
          rating: 5
        },
        {
          quote: 'Their outdoor backlit panaflex has been illuminated for 14 months now outside our showroom with zero discoloration or burn through.',
          client: 'Kamran Akram',
          company: 'Owner, Akram Motors',
          rating: 5
        }
      ]
    },

    'exhibition-stalls': {
      slug: 'exhibition-stalls',
      aliases: ['exhibition', 'stalls', 'expo', 'booths', 'exabitions-halls', 'exhibition-hall'],
      name: 'Exhibition Stalls',
      tagline: 'Turnkey 3D Custom Trade Show Stalls & Experiential Pavilions',
      heroImage: 'new assets/6.jpeg',
      badge: '✦ AWARD WINNING 3D',
      iconSvg: 'images/services/exhibition-stalls.svg',
      description: 'Complete end-to-end exhibition stall design, engineering, and turnkey carpentry fabrication for major expos at Expo Centre Lahore, Karachi Expo, and Pak-China Friendship Centre Islamabad.',
      seo: {
        title: 'Custom 3D Exhibition Stall Design & Fabrication — Creative Roots',
        description: 'Award-winning turnkey 3D exhibition booth design, wooden carpentry fabrication, reception counters, and audio-visual integration in Pakistan.',
        ogImage: 'new assets/6.jpeg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-cubes',
          title: 'Realistic 3D CAD Visualization',
          desc: 'Explore your stall before construction with photorealistic 3D renders, walkthroughs, and dimensional blueprints.'
        },
        {
          icon: 'fa-solid fa-hammer',
          title: 'In-House Wood & Metal Fabrication',
          desc: 'Crafted in our specialized 15,000 sq ft production warehouse by master carpenters, welders, and spray painters.'
        },
        {
          icon: 'fa-solid fa-tv',
          title: 'Integrated AV & Smart Lighting',
          desc: 'Seamless mounting for ultra-thin video walls, interactive touchscreen kiosks, and ambient RGB spotlights.'
        },
        {
          icon: 'fa-solid fa-clock-check',
          title: 'Guaranteed On-Time Handover',
          desc: 'Ready for client staging 12 hours before expo doors open, complete with deep cleaning and full electrical sign-off.'
        }
      ],
      items: [
        {
          id: 'stall-item-01',
          name: 'Custom Turnkey 3D Exhibition Pavilion (6x6m / 12x6m)',
          description: 'Dual-side or island open layout booth with elevated wooden laminate flooring, raised brand arch, and private VIP lounge.',
          image: 'images/projects/stalls/stalls-1.jpg',
          badge: 'Turnkey Luxury',
          tag: 'Full 3D Turnkey Build'
        },
        {
          id: 'stall-item-02',
          name: 'Custom Illuminated Woodwork Reception Counter',
          description: 'High-gloss duco-painted wooden reception desk with acrylic lightbox front and lockable internal storage drawers.',
          image: 'images/projects/stalls/stalls-2.jpg',
          badge: 'Reception Desk',
          tag: 'High-Gloss Duco Finish'
        },
        {
          id: 'stall-item-03',
          name: 'Brand Activation Experiential Display Booth',
          description: 'Interactive visitor engagement structure with product demo pedestals and integrated LED display backwall.',
          image: 'images/projects/stalls/stalls-3.jpg',
          badge: 'Activation',
          tag: 'Interactive Demo Zone'
        },
        {
          id: 'stall-item-04',
          name: 'Modular Shell Scheme Expo Upgrade Stall',
          description: 'Transform standard 3x3m expo organizer shells into high-end branded environments with seamless wooden panel overlays.',
          image: 'images/projects/stalls/stalls-4.jpg',
          badge: '3x3m / 6x3m',
          tag: 'Shell Scheme Upgrade'
        },
        {
          id: 'stall-item-05',
          name: 'Architectural Hanging Brand Truss & Overhead Ring',
          description: 'High-altitude circular or square hanging banner system fabricated from lightweight aircraft-grade aluminum trussing.',
          image: 'images/projects/stalls/stalls-5.jpg',
          badge: 'Overhead Truss',
          tag: 'Aerial Hanging Rig'
        },
        {
          id: 'stall-item-06',
          name: 'Illuminated Product Display Showcase Towers',
          description: 'Tempered glass shelving towers with directional warm LED spotlights and lockable sliding glass doors.',
          image: 'images/projects/stalls/stalls-6.jpg',
          badge: 'Showcase',
          tag: 'Tempered Glass Tower'
        },
        {
          id: 'stall-item-07',
          name: 'Private Executive Meeting Room & VIP Lounge',
          description: 'Acoustically insulated wooden partition walls with frosted acrylic viewing windows, executive leather sofa, and table.',
          image: 'images/projects/stalls/stalls-7.jpg',
          badge: 'VIP Lounge',
          tag: 'Private Acoustic Room'
        },
        {
          id: 'stall-item-08',
          name: 'Ultra-High Definition Video Wall Backing Structure',
          description: 'Reinforced steel sub-frame engineered to safely support heavy seamless P2/P3 LED cabinet video walls.',
          image: 'images/projects/stalls/stalls-8.jpg',
          badge: 'AV Rigging',
          tag: 'P2/P3 Video Wall Ready'
        },
        {
          id: 'stall-item-09',
          name: 'Raised Laminated Parquet Flooring Platform',
          description: '100mm heavy-duty raised wooden platform with integrated concealed wire channels and beveled aluminum edge ramps.',
          image: 'images/projects/stalls/stalls-9.jpg',
          badge: 'Flooring',
          tag: '100mm Raised Platform'
        },
        {
          id: 'stall-item-10',
          name: 'Modern Minimalist Fabric Tension Expo Booth',
          description: 'Lightweight toolless aluminum framework with dye-sublimation stretch fabric for international expo transport.',
          image: 'images/projects/stalls/stalls-10.jpg',
          badge: 'Portable Expo',
          tag: 'Toolless Aluminum'
        },
        {
          id: 'stall-item-11',
          name: 'High-Impact Brand Archway Entrance Portal',
          description: 'Cantilevered overhead portal connecting across aisles with integrated downlights and bold corporate branding.',
          image: 'images/projects/stalls/stalls-11.jpg',
          badge: 'Portal Arch',
          tag: 'Cantilevered Arch'
        },
        {
          id: 'stall-item-12',
          name: 'Interactive Touchscreen Kiosk Pedestal',
          description: 'Floor-standing duco wooden kiosk with concealed cable raceways for interactive client software demos.',
          image: 'images/projects/stalls/stalls-12.jpg',
          badge: 'Tech Kiosk',
          tag: 'Touchscreen Housing'
        },
        {
          id: 'stall-item-13',
          name: 'Bespoke Retail Product Sampling Counter',
          description: 'Multi-shelf demonstration bar with washable food-grade laminate countertop and under-counter storage.',
          image: 'images/projects/stalls/stalls-13.jpg',
          badge: 'Sampling Bar',
          tag: 'Food-Grade Countertop'
        },
        {
          id: 'stall-item-14',
          name: 'Custom Fabricated Acrylic Feature Lightbox',
          description: 'Large-scale monolithic light fixture with edge-lit LED illumination illuminating corporate slogans.',
          image: 'images/projects/stalls/stalls-14.jpg',
          badge: 'Lightbox Wall',
          tag: 'Edge-Lit Monolith'
        },
        {
          id: 'stall-item-15',
          name: 'Corner-Open Two-Side Trade Show Pavilion',
          description: 'Maximizing high foot-traffic corner booth spaces with welcoming open access and dual branded fascia headers.',
          image: 'images/projects/stalls/stalls-15.jpg',
          badge: 'Corner Booth',
          tag: 'Dual Open Frontage'
        },
        {
          id: 'stall-item-16',
          name: 'Industrial Heavy Machinery Display Platform',
          description: 'Reinforced heavy-load structural steel deck capable of supporting up to 5,000 kg equipment displays.',
          image: 'images/projects/stalls/stalls-16.jpg',
          badge: 'Heavy Load',
          tag: '5,000kg Steel Deck'
        },
        {
          id: 'stall-item-17',
          name: 'Warm Ambient Architectural Lighting Canopy',
          description: 'Suspended wooden pergola canopy with warm filament LED bulbs creating an inviting hospitality ambience.',
          image: 'images/projects/stalls/stalls-17.jpg',
          badge: 'Hospitality',
          tag: 'Suspended Pergola'
        },
        {
          id: 'stall-item-18',
          name: 'Turnkey Double-Decker Mezzanine Exhibition Stall',
          description: 'Two-story architectural trade show structure with VIP upper deck meeting lounge and ground floor demo suites.',
          image: 'images/projects/stalls/stalls-18.jpg',
          badge: 'Double Decker',
          tag: 'Two-Story Mezzanine'
        }
      ],
      projects: [
        {
          id: 'proj-es-1',
          title: 'Turnkey 3D Exhibition Stall Fabrication',
          badge: 'Turnkey Pavilion',
          desc: '600 sq ft custom wooden fabrication executed at Expo Centre Lahore with raised floor and VIP lounge.',
          img: 'images/projects/stalls/stalls-1.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-2',
          title: 'Illuminated Duco Reception Counter',
          badge: 'Reception Desk',
          desc: 'High-gloss duco-painted wooden reception desk with acrylic lightbox front and lockable storage.',
          img: 'images/projects/stalls/stalls-2.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-3',
          title: 'Interactive Brand Activation Display Booth',
          badge: 'Activation Booth',
          desc: 'Experiential marketing pavilion with illuminated product presentation display pods.',
          img: 'images/projects/stalls/stalls-3.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-4',
          title: 'Modular Expo Shell Upgrade Booth',
          badge: 'Modular Setup',
          desc: 'Customized wooden panel shell scheme enhancement for international engineering symposium.',
          img: 'images/projects/stalls/stalls-4.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-5',
          title: 'Overhead Aerial Brand Truss System',
          badge: 'Truss System',
          desc: 'High-visibility suspended brand circle visible across the entire main expo hall.',
          img: 'images/projects/stalls/stalls-5.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-6',
          title: 'Tempered Glass Showcase Towers',
          badge: 'Glass Showcase',
          desc: 'Illuminated showcase vitrines engineered for luxury jewelry & watch exhibitions.',
          img: 'images/projects/stalls/stalls-6.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-7',
          title: 'Private Executive VIP Meeting Suite',
          badge: 'VIP Lounge',
          desc: 'Enclosed sound-dampened meeting room crafted inside trade booth for private enterprise deals.',
          img: 'images/projects/stalls/stalls-7.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-8',
          title: 'Integrated Video Wall Backing Frame',
          badge: 'AV Backwall',
          desc: 'Heavy structural backing holding high-definition digital display wall at Karachi Expo Centre.',
          img: 'images/projects/stalls/stalls-8.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-9',
          title: 'Raised Laminated Parquet Decking',
          badge: 'Platform Floor',
          desc: 'Raised wooden parquet floor with illuminated LED perimeter skirting and ramp access.',
          img: 'images/projects/stalls/stalls-9.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-10',
          title: 'Modern Minimalist Tension Fabric Stand',
          badge: 'Tension Fabric',
          desc: 'Ultra-clean Scandinavian inspired trade booth design for renewable energy technology firm.',
          img: 'images/projects/stalls/stalls-10.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-11',
          title: 'Cantilevered Brand Portal Archway',
          badge: 'Brand Arch',
          desc: 'Structural overhead portal linking two separate exhibition areas across aisle.',
          img: 'images/projects/stalls/stalls-11.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-12',
          title: 'Digital Kiosk Software Display Pedestals',
          badge: 'Digital Kiosks',
          desc: 'Custom wooden console podiums housing touchscreen monitors for fintech demonstrations.',
          img: 'images/projects/stalls/stalls-12.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-13',
          title: 'Retail Food & Beverage Sampling Bar',
          badge: 'Sampling Bar',
          desc: 'Fully equipped food demonstration counter with sink connection and hygiene surfaces.',
          img: 'images/projects/stalls/stalls-13.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-14',
          title: 'Monolithic Backlit Feature Lightbox',
          badge: 'Feature Wall',
          desc: 'Large seamless edge-lit fabric lightbox wall displaying corporate vision imagery.',
          img: 'images/projects/stalls/stalls-14.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-15',
          title: 'Corner-Open Two-Side Trade Pavilion',
          badge: 'Corner Pavilion',
          desc: 'Two-sided open booth welcoming high volume expo visitor traffic seamlessly.',
          img: 'images/projects/stalls/stalls-15.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-16',
          title: 'Industrial Heavy Equipment Reinforced Deck',
          badge: 'Heavy Deck',
          desc: 'Structural steel flooring with 5-ton load capacity for heavy industrial pump displays.',
          img: 'images/projects/stalls/stalls-16.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-17',
          title: 'Hospitality Wooden Pergola Canopy',
          badge: 'Pergola Canopy',
          desc: 'Warm architectural timber pergola creating relaxed meeting lounge environment.',
          img: 'images/projects/stalls/stalls-17.jpg',
          tag: 'Verified Delivery'
        },
        {
          id: 'proj-es-18',
          title: 'Double-Decker Mezzanine Trade Stand',
          badge: 'Double Decker',
          desc: 'Full two-story turnkey exhibition pavilion engineered for multinational conglomerate.',
          img: 'images/projects/stalls/stalls-18.jpg',
          tag: 'Verified Delivery'
        }
      ],
      process: [
        {
          step: '01',
          title: '3D Spatial Concept & Engineering',
          desc: 'We develop photorealistic 3D renders, visitor traffic flow plans, and detailed structural blueprints.'
        },
        {
          step: '02',
          title: 'Warehouse Prefabrication & Trial Assembly',
          desc: 'Every wooden module, counter, and arch is fabricated and test-assembled in our facility before expo transit.'
        },
        {
          step: '03',
          title: 'On-Site Rigging, Carpentry & Electrics',
          desc: 'Our round-the-clock assembly teams install flooring, paint finishes, graphics, and electrical lighting on site.'
        },
        {
          step: '04',
          title: 'Pre-Expo Handover & 24/7 Standby Support',
          desc: 'Handover completed 12 hours before doors open, with on-site technician standby throughout the exhibition days.'
        }
      ],
      testimonials: [
        {
          quote: 'Creative Roots built our 12x6m pavilion at the Lahore Expo Centre. It was voted Best Booth of the Expo. Their attention to lighting, carpentry, and paint finish was extraordinary.',
          client: 'Engr. Zeeshan Haider',
          company: 'Vice President, PakSolar Energy Group',
          rating: 5
        },
        {
          quote: 'Hands down the most reliable exhibition fabricators in Pakistan. Handed over our stall hours ahead of schedule with zero last-minute hitches.',
          client: 'Noman Siddiqui',
          company: 'Head of Brand, Prime Cement',
          rating: 5
        }
      ]
    },

    'solar-solutions': {
      slug: 'solar-solutions',
      aliases: ['solar', 'solar-energy', 'roots-energy', 'roots-energy-solutions', 'energy', 'energy-solutions', 'solar-packages', 'solar-panels'],
      name: 'Solar Energy Solutions',
      tagline: 'Reliable Solar Power Systems & Clean Energy Solutions',
      heroImage: 'new assets/7.jpeg',
      badge: '✦ CLEAN ENERGY DIVISION',
      iconSvg: 'images/services/solar-solutions.svg',
      description: 'Harness the power of the sun with turnkey solar power systems engineered by Roots Energy Solutions. We provide end-to-end residential, commercial, and industrial solar solutions including Tier-1 solar panels, hybrid inverters, lithium energy storage, and customized elevated rooftop mounting structures across Pakistan.',
      seo: {
        title: 'Roots Energy Solutions — Reliable Solar Power Systems | Creative Roots',
        description: 'Turnkey residential, commercial, and industrial hybrid solar power systems in Pakistan. 5kW, 10kW, 15kW installations with net metering, lithium storage, and custom elevated structures.',
        ogImage: 'new assets/7.jpeg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-solar-panel',
          title: 'Tier-1 Monocrystalline Panels',
          desc: 'High-efficiency bifacial PERC modules delivering maximum power yield even in extreme high temperatures.'
        },
        {
          icon: 'fa-solid fa-bolt-lightning',
          title: 'Smart Hybrid Inverters',
          desc: 'Advanced Deye and Solis hybrid inverters featuring smart net-metering, zero export, and remote mobile app monitoring.'
        },
        {
          icon: 'fa-solid fa-car-battery',
          title: 'Lithium Battery Storage',
          desc: 'Long-life Dyness and Lithium Valley energy storage packs for 24/7 continuous uninterrupted clean power.'
        },
        {
          icon: 'fa-solid fa-screwdriver-wrench',
          title: 'Turnkey Installation & Engineering',
          desc: 'Certified electrical engineers, customized heavy-gauge galvanized elevated frames, and rapid after-sales warranty.'
        }
      ],
      items: [
        {
          id: 'solar-item-01',
          name: '15kW Complete Hybrid Solar System Package',
          description: 'Turnkey 15kW hybrid system featuring tier-1 bifacial panels, hybrid inverter, dual lithium battery banks, heavy-duty mounting rails, and DC surge protection.',
          image: 'images/projects/solar/solar-1.jpg',
          badge: 'Complete Package',
          tag: '15kW Hybrid Package'
        },
        {
          id: 'solar-item-02',
          name: 'DHA Phase 7 Lahore – 15kW Turnkey Installation',
          description: 'Real-world residential installation in DHA Lahore with elevated rooftop structure, Deye hybrid inverter, Lithium Valley battery bank, and net metering integration.',
          image: 'images/projects/solar/solar-2.jpg',
          badge: 'Featured Project',
          tag: 'DHA Phase 7 Lahore'
        },
        {
          id: 'solar-item-03',
          name: 'Dual Solis Hybrid Inverters & Dyness Energy Storage',
          description: 'Wall-mounted dual hybrid inverter configuration coupled with Dyness high-voltage lithium battery modules and professional fireproof cable trunking.',
          image: 'images/projects/solar/solar-3.jpg',
          badge: 'Enterprise Grade',
          tag: 'Dual Hybrid Inverters'
        },
        {
          id: 'solar-item-04',
          name: 'Turnkey Solar DB & Automated Changeover Setup',
          description: 'Precision engineered AC/DC distribution boxes, circuit breakers, digital voltage protector, smart energy meter, and seamless automatic changeover.',
          image: 'images/projects/solar/solar-4.jpg',
          badge: 'Certified Safety',
          tag: 'AC/DC Distribution DB'
        },
        {
          id: 'solar-item-05',
          name: 'Residential Rooftop Solar Installation & Net-Metering',
          description: 'Complete home solar power installation with optimized solar tilt angle, 3-phase net-metering assistance, and zero-bill energy independence.',
          image: 'images/projects/solar/solar-5.jpg',
          badge: 'Home Solar',
          tag: 'Residential Solar'
        },
        {
          id: 'solar-item-06',
          name: 'Your Rooftop Your Powerstation – Smart Home Setup',
          description: 'Aesthetic, low-profile rooftop solar arrays designed to power high-draw home appliances including inverter ACs, water pumps, and refrigeration effortlessly.',
          image: 'images/projects/solar/solar-6.jpg',
          badge: 'High Efficiency',
          tag: 'Smart Energy Independence'
        },
        {
          id: 'solar-item-07',
          name: 'Commercial & Industrial Rooftop Solar Power Plant',
          description: 'Large-scale multi-kilowatt elevated solar installation for industrial units, warehouses, and commercial plazas to slash peak grid utility tariffs.',
          image: 'images/projects/solar/solar-7.jpg',
          badge: 'Commercial',
          tag: 'Industrial Solar Plant'
        },
        {
          id: 'solar-item-08',
          name: 'Custom Heavy-Gauge Elevated Solar Mounting Structures',
          description: 'Engineered hot-dip galvanized custom high-rise frame structures offering usable roof terrace space beneath with superior aerodynamic stability.',
          image: 'images/projects/solar/solar-8.jpg',
          badge: 'Structural Tech',
          tag: 'Elevated Galvanized Frame'
        },
        {
          id: 'solar-item-09',
          name: 'High-Yield Monocrystalline PERC Solar Panel Array',
          description: 'Grade-A bifacial monocrystalline solar panel strings delivering up to 22.5% efficiency with multi-busbar technology and anti-reflective coated glass.',
          image: 'images/projects/solar/solar-9.jpg',
          badge: 'Tier-1 Modules',
          tag: 'Monocrystalline PERC'
        }
      ],
      projects: [
        {
          id: 'proj-solar-1',
          title: '15kW Turnkey Hybrid Solar Installation',
          badge: 'DHA Phase 7, Lahore',
          desc: 'Complete rooftop solar installation with Deye hybrid inverter, Lithium Valley battery bank, and elevated galvanized structure.',
          img: 'images/projects/solar/solar-2.jpg',
          tag: 'Verified Commissioning'
        },
        {
          id: 'proj-solar-2',
          title: 'Commercial Multi-kW Solar Power Plant',
          badge: 'Commercial Rooftop',
          desc: 'High-capacity solar array mounted on heavy-duty structural frames for commercial energy independence.',
          img: 'images/projects/solar/solar-7.jpg',
          tag: 'Verified Commissioning'
        },
        {
          id: 'proj-solar-3',
          title: 'Dual Solis Hybrid & Dyness Lithium Storage',
          badge: 'Hybrid Energy Storage',
          desc: 'Dual inverter synchronization with lithium battery storage and surge-protected industrial distribution boards.',
          img: 'images/projects/solar/solar-3.jpg',
          tag: 'Verified Commissioning'
        },
        {
          id: 'proj-solar-4',
          title: 'Custom High-Rise Elevated Solar Structure',
          badge: 'Elevated Engineering',
          desc: 'Wind-resistant galvanized steel elevated pergola structure ensuring full utilization of rooftop living space.',
          img: 'images/projects/solar/solar-8.jpg',
          tag: 'Verified Commissioning'
        }
      ],
      timeline: [
        {
          step: '01',
          title: 'Site Survey & Energy Audit',
          desc: 'Our electrical engineers conduct an on-site solar irradiance analysis, rooftop load calculation, and monthly bill evaluation.'
        },
        {
          step: '02',
          title: 'Custom System Sizing & 3D Engineering',
          desc: 'We engineer a tailor-made solar system configuration (5kW, 10kW, 15kW+) with optimal panel layout and shadow simulation.'
        },
        {
          step: '03',
          title: 'Precision Fabrication & Certified Rigging',
          desc: 'Our technical teams install elevated galvanized structures, tier-1 panels, inverters, and fire-safe AC/DC distribution boards.'
        },
        {
          step: '04',
          title: 'Net-Metering & Mobile Monitoring Handover',
          desc: 'Full DISCO net-metering documentation processing, green meter installation, and mobile app live monitoring setup.'
        }
      ],
      testimonials: [
        {
          quote: 'Roots Energy Solutions installed a 15kW hybrid solar system at our DHA Phase 7 residence. The execution, from the elevated structure to the neat DB wiring, was flawless. Our electricity bills have dropped to zero.',
          client: 'Brig. (R) Tariq Mahmood',
          company: 'Resident, DHA Phase 7 Lahore',
          rating: 5
        },
        {
          quote: 'We contracted Roots Energy Solutions for our commercial rooftop facility. Their engineering team is punctual, technical, and uses genuine tier-1 components. Highly recommended.',
          client: 'Farhan Qureshi',
          company: 'Managing Director, Horizon Logistics',
          rating: 5
        }
      ]
    }
  };

  // Helper Methods for Safe Querying
  return {
    categories: categories,

    getAllCategories: function () {
      return Object.values(categories);
    },

    getCategoryBySlug: function (slug) {
      if (!slug) return null;
      const cleanSlug = String(slug).toLowerCase().trim();

      // Direct match
      if (categories[cleanSlug]) {
        return categories[cleanSlug];
      }

      // Alias match
      for (const key in categories) {
        const cat = categories[key];
        if (cat.aliases && cat.aliases.includes(cleanSlug)) {
          return cat;
        }
      }

      return null;
    },

    getRelatedCategories: function (currentSlug, limit = 5) {
      return Object.values(categories)
        .filter(cat => cat.slug !== currentSlug)
        .slice(0, limit);
    }
  };

});
