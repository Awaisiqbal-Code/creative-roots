/**
 * Creative Roots — Central Categories Configuration Database
 * Single Source of Truth for all 6 Primary Categories
 * 
 * Schema:
 * {
 *   slug: string,
 *   aliases: string[],
 *   name: string,
 *   tagline: string,
 *   heroImage: string,
 *   badge: string,
 *   iconSvg: string,
 *   description: string,
 *   seo: { title: string, description: string, ogImage: string },
 *   highlights: Array<{ icon: string, title: string, desc: string }>,
 *   items: Array<{ id: string, name: string, description: string, image: string, price: string, unit?: string, badge?: string }>,
 *   projects: Array<{ id: string, title: string, badge: string, desc: string, img: string, tag: string }>,
 *   process: Array<{ step: string, title: string, desc: string }>,
 *   testimonials: Array<{ quote: string, client: string, company: string, rating: number }>
 * }
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
      aliases: ['gift', 'giveaways', 'corporate-gifts', 'gifts'],
      name: 'Corporate Giveaways',
      tagline: 'Custom Corporate Gifts & Promotional Merchandise',
      heroImage: 'images/banners/banner-1.jpg',
      badge: '✦ PREMIUM COLLECTION',
      iconSvg: 'images/services/corporate-giveaways.svg',
      description: 'Elevate your brand prestige and foster lasting business relationships with bespoke corporate gifts, executive onboarding kits, and premium customized giveaways tailored for leading enterprises across Pakistan.',
      seo: {
        title: 'Corporate Giveaways & Luxury Executive Gifts — Creative Roots',
        description: 'Explore bespoke corporate gift boxes, executive merchandise, drinkware, diaries, and promotional apparel with laser branding across Pakistan.',
        ogImage: 'images/banners/banner-1.jpg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-gift',
          title: 'Curated Luxury Gifting',
          desc: 'High-grade materials with laser engraving, gold foil debossing, and bespoke interior velvet inserts.'
        },
        {
          icon: 'fa-solid fa-gem',
          title: 'Bespoke Rigid Boxes',
          desc: '1200gsm heavy kappa board packaging crafted with custom magnetic closures and silk ribbons.'
        },
        {
          icon: 'fa-solid fa-truck-fast',
          title: 'Nationwide Delivery',
          desc: 'Reliable doorstep distribution directly to company head offices and branch networks throughout Pakistan.'
        },
        {
          icon: 'fa-solid fa-shield-halved',
          title: 'Bulk Tier Pricing',
          desc: 'Direct manufacturer pricing with transparent volume discounts on enterprise quantities from 50 to 50,000+ pcs.'
        }
      ],
      items: [
        {
          id: 'giveaway-box-01',
          name: 'Bespoke Luxury Giveaway Box',
          description: 'Handcrafted rigid presentation gift box featuring gold foil debossing and laser-cut velvet foam insert.',
          image: 'images/prod_box.jpg',
          price: 'Starting from PKR 1,850',
          unit: '/ set',
          badge: 'Best Seller'
        },
        {
          id: 'giveaway-drinkware-02',
          name: 'Executive Mug & Thermal Flask Set',
          description: 'Ceramic coffee mug paired with a double-wall vacuum insulated matte black stainless steel bottle (500ml).',
          image: 'images/promo_drinkware.jpg',
          price: 'Starting from PKR 2,450',
          unit: '/ set',
          badge: 'Popular'
        },
        {
          id: 'giveaway-polo-03',
          name: 'Luxury Branded Pique Polo Shirt',
          description: 'Heavyweight 240gsm combed cotton pique polo shirt with 3D high-density corporate embroidery.',
          image: 'images/promo_merch.jpg',
          price: 'Starting from PKR 1,250',
          unit: '/ pc',
          badge: 'Staff Choice'
        },
        {
          id: 'giveaway-tote-04',
          name: 'Premium Canvas Tote Bag Pack',
          description: 'Eco-conscious 12oz natural organic cotton canvas tote bags with reinforced cross-stitched handles.',
          image: 'images/promo_business.jpg',
          price: 'Starting from PKR 450',
          unit: '/ pc',
          badge: 'Eco-Friendly'
        },
        {
          id: 'giveaway-journal-05',
          name: 'Executive Hardcover Journal & Planner',
          description: 'Italian thermo PU leather notebook with debossed logo, 96 sheets of 100gsm ink-proof lined paper, and elastic band.',
          image: 'images/prod_notebook.jpg',
          price: 'Starting from PKR 1,150',
          unit: '/ pc',
          badge: 'Executive'
        },
        {
          id: 'giveaway-cap-06',
          name: 'Brushed Cotton Embroidered Cap',
          description: 'Structured 6-panel heavy brushed cotton twill cap with pre-curved peak and 3D puff logo embroidery.',
          image: 'images/cap_maroon.jpg',
          price: 'Starting from PKR 550',
          unit: '/ pc',
          badge: 'Trending'
        },
        {
          id: 'giveaway-pen-07',
          name: 'Metallic Executive Pen & Keychain Set',
          description: 'Matte lacquer twist ballpoint pen with matching heavy metal leather keychain in a velvet gift box.',
          image: 'images/pack_pen.jpg',
          price: 'Starting from PKR 950',
          unit: '/ set',
          badge: 'Quick Ship'
        },
        {
          id: 'giveaway-bottle-08',
          name: 'Stainless Steel Thermal Bottle (500ml)',
          description: 'Food-grade 304 double-wall vacuum insulated flask keeping drinks hot for 12h / cold for 24h with laser engraving.',
          image: 'images/pack_bottle.jpg',
          price: 'Starting from PKR 1,350',
          unit: '/ pc',
          badge: 'Corporate'
        }
      ],
      projects: [
        {
          id: 'proj-giveaways-1',
          title: 'Executive Luxury Gift Box Set',
          badge: 'Corporate Giveaways',
          desc: 'Custom rigid box packaging with matte black finish, laser-engraved metal pen, vacuum thermal flask, and branded ceramic mug.',
          img: 'images/projects/giveaways/giveaways-1.jpg',
          tag: 'Physical Production'
        },
        {
          id: 'proj-giveaways-2',
          title: 'Corporate Hardbound Diary & Pen Kit',
          badge: 'Corporate Giveaways',
          desc: 'Embossed leatherette corporate diary with matching metallic twist pen and custom bookmark ribbon.',
          img: 'images/projects/giveaways/giveaways-2.jpg',
          tag: 'Custom Branded'
        },
        {
          id: 'proj-giveaways-3',
          title: 'Branded Ceramic Coffee Mugs',
          badge: 'Corporate Giveaways',
          desc: 'Dual-tone ceramic mugs with scratch-resistant permanent corporate logo printing.',
          img: 'images/projects/giveaways/giveaways-3.jpg',
          tag: 'Bulk Merchandise'
        },
        {
          id: 'proj-giveaways-4',
          title: 'Enterprise Employee Welcome Kit',
          badge: 'Corporate Giveaways',
          desc: 'Complete corporate onboarding welcome package featuring stainless thermal bottle, lanyard, and tech accessories.',
          img: 'images/projects/giveaways/giveaways-4.jpg',
          tag: 'Nationwide Delivery'
        }
      ],
      process: [
        { step: '01', title: 'Choose & Consult', desc: 'Select items from our curated corporate catalog or request a custom gift set configuration.' },
        { step: '02', title: 'Virtual 3D Proof', desc: 'Receive complimentary 3D virtual mockups displaying your company logo and exact color codes.' },
        { step: '03', title: 'Precision Fabrication', desc: 'State-of-the-art laser engraving, metallic foil debossing, and strict ISO packaging QC.' },
        { step: '04', title: 'Doorstep Delivery', desc: 'Dispatched securely with live order tracking to your office doors across Pakistan.' }
      ],
      testimonials: [
        {
          quote: 'The executive gift boxes delivered for our annual management conference exceeded all expectations. The rigid finish and debossing were immaculate.',
          client: 'Senior HR Director',
          company: 'Multinational FMCG Lahore',
          rating: 5
        },
        {
          quote: 'Creative Roots manufactured 500 onboarding employee kits with zero defects and arrived 2 days before the scheduled event date.',
          client: 'Head of Procurement',
          company: 'Fintech Hub Karachi',
          rating: 5
        }
      ]
    },

    'digital-printing': {
      slug: 'digital-printing',
      aliases: ['digital', 'digital-print', 'short-run-printing'],
      name: 'Digital Printing',
      tagline: 'Ultra-Crisp HD On-Demand Printing Solutions',
      heroImage: 'images/banners/banner-2.jpg',
      badge: '✦ HD DIGITAL PRINT',
      iconSvg: 'images/services/digital-printing.svg',
      description: 'Lightning-fast, photographic-quality digital printing for product catalogs, marketing brochures, tamper-evident labels, and urgent corporate collateral with zero minimum order barriers.',
      seo: {
        title: 'Digital Printing Solutions — Creative Roots',
        description: 'High-definition digital printing for brochures, multi-page catalogs, product labels, and marketing collateral in Pakistan.',
        ogImage: 'images/banners/banner-2.jpg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-bolt',
          title: 'Rapid 24-48h Turnaround',
          desc: 'Direct-to-digital press workflow eliminates plate-making delays for urgent corporate deadlines.'
        },
        {
          icon: 'fa-solid fa-palette',
          title: 'Photographic 2400 DPI',
          desc: 'Expanded color gamut with ultra-fine dot resolution ensuring vibrant brand color fidelity.'
        },
        {
          icon: 'fa-solid fa-shapes',
          title: 'Digital Die-Cutting',
          desc: 'Precision laser kiss-cut and custom contoured shapes without expensive die mould charges.'
        },
        {
          icon: 'fa-solid fa-layer-group',
          title: 'Specialty Embellishments',
          desc: 'Digital raised tactile spot UV, metallic foils, and soft-touch velvet laminations on demand.'
        }
      ],
      items: [
        {
          id: 'digital-brochure-01',
          name: 'Luxury Corporate Tri-Fold Brochures',
          description: 'Printed on 260gsm silk art paper with soft-touch matte lamination and razor-sharp photographic clarity.',
          image: 'images/projects/digital/digital-1.jpg',
          price: 'Starting from PKR 45',
          unit: '/ pc',
          badge: 'Popular'
        },
        {
          id: 'digital-catalog-02',
          name: 'Multi-Page Product Catalogues (A4/A5)',
          description: 'Saddle-stitched or perfect-bound corporate showcase booklet with glossy spot UV highlights on cover.',
          image: 'images/projects/digital/digital-2.jpg',
          price: 'Starting from PKR 180',
          unit: '/ pc',
          badge: 'Enterprise'
        },
        {
          id: 'digital-labels-03',
          name: 'Custom Die-Cut Holographic & Vinyl Labels',
          description: 'Waterproof tamper-evident metallic foil security and brand product packaging stickers with custom contour cuts.',
          image: 'images/pkg_labels.png',
          price: 'Starting from PKR 12',
          unit: '/ label',
          badge: 'Waterproof'
        },
        {
          id: 'digital-folders-04',
          name: 'Corporate Presentation Folders',
          description: 'Heavy-weight 350gsm card presentation folders with die-cut business card slot and velvet matte finish.',
          image: 'images/projects/digital/digital-4.jpg',
          price: 'Starting from PKR 120',
          unit: '/ folder',
          badge: 'Essential'
        },
        {
          id: 'digital-flyers-05',
          name: 'Glossy Full-Color Flyers & Leaflets',
          description: 'High-speed commercial digital prints on 128gsm - 150gsm imported gloss paper for marketing campaigns.',
          image: 'images/pkg_flyers.png',
          price: 'Starting from PKR 18',
          unit: '/ pc',
          badge: 'Cost-Effective'
        },
        {
          id: 'digital-invitations-06',
          name: 'Luxury Hot-Foil Invitation Cards & Envelopes',
          description: 'Textured cotton cardstock with gold or rose-gold foil detailing and custom matching die-cut envelopes.',
          image: 'images/event_premium_card.jpg',
          price: 'Starting from PKR 220',
          unit: '/ card',
          badge: 'VIP Events'
        }
      ],
      projects: [
        {
          id: 'proj-digital-1',
          title: 'Luxury Corporate Tri-Fold Brochures',
          badge: 'Digital Printing',
          desc: 'High-definition full-color offset-grade digital printing on 260gsm silk art paper with soft-touch matte lamination.',
          img: 'images/projects/digital/digital-1.jpg',
          tag: 'HD Color Proof'
        },
        {
          id: 'proj-digital-2',
          title: 'Premium Multi-Page Product Catalogues',
          badge: 'Digital Printing',
          desc: 'Saddle-stitched corporate showcase booklet with glossy UV spot highlights on cover.',
          img: 'images/projects/digital/digital-2.jpg',
          tag: 'Saddle-Stitched'
        },
        {
          id: 'proj-digital-3',
          title: 'Custom Die-Cut Holographic Labels',
          badge: 'Digital Printing',
          desc: 'Waterproof tamper-evident metallic foil security and brand product packaging stickers.',
          img: 'images/projects/digital/digital-3.jpg',
          tag: 'Custom Die-Cut'
        },
        {
          id: 'proj-digital-4',
          title: 'Corporate Presentation Folders',
          badge: 'Digital Printing',
          desc: 'Heavy-weight 350gsm card presentation folders with business card slot and velvet matte finish.',
          img: 'images/projects/digital/digital-4.jpg',
          tag: 'Velvet Matte Finish'
        }
      ],
      process: [
        { step: '01', title: 'File Upload & Preflight', desc: 'Submit print-ready PDF/AI files or collaborate with our graphics studio for prepress optimization.' },
        { step: '02', title: 'Digital Proofing', desc: 'Instant PDF soft-proof or calibrated physical hard-proof delivered before volume printing.' },
        { step: '03', title: 'High-Speed Print', desc: 'Direct digital press production utilizing genuine Japanese high-pigment toner inks.' },
        { step: '04', title: 'Finishing & Shipping', desc: 'Laminated, creased, saddle-stitched, and dispatched safely with protective packaging.' }
      ],
      testimonials: [
        {
          quote: 'We needed 1,000 product catalogs printed and delivered to the Expo Centre within 48 hours. Creative Roots delivered flawless prints on time.',
          client: 'Marketing Director',
          company: 'Textile Group Faisalabad',
          rating: 5
        },
        {
          quote: 'The holographic labels and presentation folders are world-class. Sharp text registration and rich, saturated blacks.',
          client: 'Brand Strategist',
          company: 'Pharma Innovations Islamabad',
          rating: 5
        }
      ]
    },

    'offset-printing': {
      slug: 'offset-printing',
      aliases: ['offset', 'commercial-printing', 'bulk-printing'],
      name: 'Offset Printing',
      tagline: 'High-Volume Commercial Printing & Luxury Packaging',
      heroImage: 'images/banners/banner-3.jpg',
      badge: '✦ INDUSTRIAL PRECISION',
      iconSvg: 'images/services/offset-printing.svg',
      description: 'Industrial-scale Heidelberg offset press capabilities delivering consistent CMYK/Pantone color accuracy, metallic foils, hardbound publications, and bespoke corporate packaging at unmatched unit economics.',
      seo: {
        title: 'Industrial Offset Printing & Packaging — Creative Roots',
        description: 'Large-scale offset commercial printing, luxury hardbound profiles, corporate stationery, and custom packaging across Pakistan.',
        ogImage: 'images/banners/banner-3.jpg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-industry',
          title: 'Heidelberg Precision Press',
          desc: 'Multi-color offset presses calibrated to strict ISO 12647-2 international color standards.'
        },
        {
          icon: 'fa-solid fa-coins',
          title: 'Economies of Scale',
          desc: 'Dramatically lowering cost-per-unit on medium-to-large corporate runs (1,000 to 500,000+ pcs).'
        },
        {
          icon: 'fa-solid fa-stamp',
          title: 'Master Finishes',
          desc: 'Precision blind embossing, hot foil stamping, edge gilding, and spot UV coating.'
        },
        {
          icon: 'fa-solid fa-box-archive',
          title: 'Structural Packaging',
          desc: 'Engineered folding carton and rigid box solutions tested for industrial supply chain durability.'
        }
      ],
      items: [
        {
          id: 'offset-cards-01',
          name: 'Gold-Foil Embossed Luxury Cards (500 pcs)',
          description: 'Multi-layer 600gsm duplex textured board with metallic gold hot foil stamping and velvet matte lamination.',
          image: 'images/projects/offset/offset-1.jpg',
          price: 'PKR 4,500',
          unit: '/ box of 500',
          badge: 'Masterclass'
        },
        {
          id: 'offset-books-02',
          name: 'Hardbound Annual Company Profiles',
          description: 'Case-bound hard cover books with thread-sewn spine, ribbon marker, and spot UV enhancement.',
          image: 'images/pack_booklet.jpg',
          price: 'Starting from PKR 650',
          unit: '/ book',
          badge: 'Annual Report'
        },
        {
          id: 'offset-stationery-03',
          name: 'Spot-UV Corporate Stationery Suite',
          description: '1,000 matching spot UV letterheads (100gsm executive bond), matching envelopes, and note pads.',
          image: 'images/projects/offset/offset-3.jpg',
          price: 'Starting from PKR 8,500',
          unit: '/ complete suite',
          badge: 'Complete Suite'
        },
        {
          id: 'offset-packaging-04',
          name: 'Custom Rigid Corrugated Product Boxes',
          description: 'Full-color offset printed exterior laminated to sturdy E-flute or rigid board for consumer retail goods.',
          image: 'images/pkg_corrugated.png',
          price: 'Starting from PKR 140',
          unit: '/ box',
          badge: 'Custom Sized'
        },
        {
          id: 'offset-calendars-05',
          name: 'Executive Corporate Desk Calendars',
          description: '13-leaf full color offset desk tent calendars with wire-o binding and hardboard triangular stand.',
          image: 'images/pack_calendar.jpg',
          price: 'Starting from PKR 320',
          unit: '/ pc',
          badge: 'Year-End Gifts'
        },
        {
          id: 'offset-bags-06',
          name: 'Premium Shopping Bags with Rope Handles',
          description: 'Heavy 250gsm art card laminated retail bags with reinforced card base and twisted cotton rope handles.',
          image: 'images/pkg_bags.png',
          price: 'Starting from PKR 85',
          unit: '/ bag',
          badge: 'Retail Luxury'
        }
      ],
      projects: [
        {
          id: 'proj-offset-1',
          title: 'Gold-Foil Embossed Luxury Cards',
          badge: 'Offset Printing',
          desc: 'Multi-layer textured business cards featuring metallic gold hot foil stamping and edge-gilding.',
          img: 'images/projects/offset/offset-1.jpg',
          tag: 'Industrial Offset'
        },
        {
          id: 'proj-offset-2',
          title: 'Hardbound Annual Profile Books',
          badge: 'Offset Printing',
          desc: 'Case-bound luxury corporate annual report books with thread-sewn binding and spot-UV details.',
          img: 'images/projects/offset/offset-2.jpg',
          tag: 'Thread Sewn Bound'
        },
        {
          id: 'proj-offset-3',
          title: 'Spot-UV Corporate Stationery Set',
          badge: 'Offset Printing',
          desc: 'Complete corporate identity suites including spot-UV letterheads, matching envelopes, and note slips.',
          img: 'images/projects/offset/offset-3.jpg',
          tag: 'Flawless Registration'
        },
        {
          id: 'proj-offset-4',
          title: 'Custom Rigid Product Packaging Boxes',
          badge: 'Offset Printing',
          desc: 'High-volume offset printed corrugated retail boxes with CMYK color calibration.',
          img: 'images/projects/offset/offset-4.jpg',
          tag: 'High Volume CMYK'
        }
      ],
      process: [
        { step: '01', title: 'Color Profiling & CTP', desc: 'Direct-to-plate laser exposure with calibrated spectrophotometer density controls.' },
        { step: '02', title: 'Press Run & Inking', desc: 'Continuous in-line ink densitometry monitoring across entire commercial production.' },
        { step: '03', title: 'Post-Press Finishes', desc: 'Automated die-cutting, embossing, foil stamping, folding, and precision binding.' },
        { step: '04', title: 'Moisture-Proof Packing', desc: 'Shrink-wrapped in heavy craft cartons and palletized for safe long-distance freight.' }
      ],
      testimonials: [
        {
          quote: 'We print over 50,000 corporate annual report booklets every financial year. Creative Roots delivers impeccable consistency year after year.',
          client: 'Company Secretary',
          company: 'Listed Financial Institution',
          rating: 5
        },
        {
          quote: 'The gold foil stamping on our corporate letterheads and packaging boxes reflects the highest tier of artisanal luxury.',
          client: 'Creative Director',
          company: 'Luxury Retail Chain',
          rating: 5
        }
      ]
    },

    'outdoor-branding': {
      slug: 'outdoor-branding',
      aliases: ['outdoor', 'signage', 'signages', 'outdoor-signs'],
      name: 'Outdoor Branding',
      tagline: 'Architectural Signages, 3D Fascias & Fleet Wraps',
      heroImage: 'images/banners/banner-4.jpg',
      badge: '✦ HIGH VISIBILITY',
      iconSvg: 'images/services/outdoor-branding.svg',
      description: 'Command landmark authority with custom illuminated 3D LED storefront fascias, architectural pylons, vehicle wraps, and precision exterior branding engineered to withstand extreme weather conditions.',
      seo: {
        title: 'Outdoor Branding & 3D LED Signages — Creative Roots',
        description: 'Architectural exterior signboards, 3D acrylic LED channel letters, pylon signs, and vehicle fleet branding across Pakistan.',
        ogImage: 'images/banners/banner-4.jpg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-lightbulb',
          title: 'Waterproof Samsung LEDs',
          desc: 'IP68 waterproof rated LED modules delivering ultra-bright uniform illumination with 50,000h lifespan.'
        },
        {
          icon: 'fa-solid fa-shield',
          title: 'Weatherproof Engineering',
          desc: 'Rust-proof marine grade stainless steel, UV-stabilized acrylics, and electrostatic powder coatings.'
        },
        {
          icon: 'fa-solid fa-truck-moving',
          title: 'Full Fleet Wrapping',
          desc: 'Cast polymeric wrap films installed bubble-free with edge-seal primers for delivery fleets.'
        },
        {
          icon: 'fa-solid fa-screwdriver-wrench',
          title: 'Certified Rigging & Install',
          desc: 'Experienced rigging teams equipped with boom lifts and structural safety certifications nationwide.'
        }
      ],
      items: [
        {
          id: 'outdoor-fascia-01',
          name: '3D Acrylic LED Shopfront Fascia Signboard',
          description: 'CNC laser-cut 3D front-lit acrylic channel letters mounted on heavy aluminum composite panel (ACP) subframe.',
          image: 'images/projects/outdoor/outdoor-1.jpg',
          price: 'Starting from PKR 18,500',
          unit: '/ running ft',
          badge: 'Most Popular'
        },
        {
          id: 'outdoor-pylon-02',
          name: 'Architectural Heavy-Duty Steel Pylon Signage',
          description: 'Custom engineered structural I-beam pylon monument sign with dual-sided illuminated acrylic corporate branding.',
          image: 'images/projects/outdoor/outdoor-2.jpg',
          price: 'Request Custom Quote',
          unit: '/ custom structure',
          badge: 'Monument'
        },
        {
          id: 'outdoor-fleet-03',
          name: 'Commercial Fleet Vehicle Branding & Vinyl Wraps',
          description: 'Full or partial commercial vehicle wraps utilizing UV-laminated polymeric cast vinyl for corporate logistics vans.',
          image: 'images/projects/outdoor/outdoor-3.jpg',
          price: 'Starting from PKR 15,000',
          unit: '/ vehicle',
          badge: 'Fleet Transit'
        },
        {
          id: 'outdoor-reception-04',
          name: 'Brushed Stainless Steel Indoor Reception 3D Logo',
          description: 'High-gloss laser-cut 304 stainless steel or golden titanium letters mounted with brushed standoff spacers.',
          image: 'images/projects/outdoor/outdoor-4.jpg',
          price: 'Starting from PKR 12,000',
          unit: '/ logo suite',
          badge: 'Corporate Office'
        },
        {
          id: 'outdoor-neon-05',
          name: 'Custom Neon LED Flex Signboards',
          description: 'Energy-efficient silicone LED neon flex mounted on transparent acrylic backing for modern retail spaces.',
          image: 'images/hero_banner_luxury_packaging.jpg',
          price: 'Starting from PKR 8,500',
          unit: '/ unit',
          badge: 'Modern Trend'
        }
      ],
      projects: [
        {
          id: 'proj-outdoor-1',
          title: '3D Acrylic LED Shopfront Fascia',
          badge: 'Outdoor Branding',
          desc: 'Weatherproof precision CNC laser-cut acrylic 3D letters with high-lumen waterproof Samsung LED modules.',
          img: 'images/projects/outdoor/outdoor-1.jpg',
          tag: 'Samsung LED Fitted'
        },
        {
          id: 'proj-outdoor-2',
          title: 'Architectural Stainless Steel Pylon Sign',
          badge: 'Outdoor Branding',
          desc: 'Heavy structural steel frame pylon signage with illuminated corporate branding and anti-rust coating.',
          img: 'images/projects/outdoor/outdoor-2.jpg',
          tag: 'Structural Steel'
        },
        {
          id: 'proj-outdoor-3',
          title: 'Corporate Fleet Vehicle Branding Wraps',
          badge: 'Outdoor Branding',
          desc: 'Commercial UV-laminated polymeric cast vinyl wraps installed seamlessly across company logistics vans.',
          img: 'images/projects/outdoor/outdoor-3.jpg',
          tag: 'Cast Vinyl Wrap'
        },
        {
          id: 'proj-outdoor-4',
          title: 'Indoor Acrylic Reception Logo Sign',
          badge: 'Outdoor Branding',
          desc: 'High-gloss polished acrylic corporate insignia mounted with brushed stainless steel standoff spacers.',
          img: 'images/projects/outdoor/outdoor-4.jpg',
          tag: 'Standoff Spacers'
        }
      ],
      process: [
        { step: '01', title: 'Site Survey & Elevation', desc: 'Our civil and lighting engineers conduct laser site measurements and wind-load calculations.' },
        { step: '02', title: '3D Architectural Render', desc: 'Photorealistic daytime and nighttime lighting simulations showing scale on your actual building.' },
        { step: '03', title: 'CNC Fabrication', desc: 'Computerized laser cutting, acrylic fabrication, high-grade electronics assembly, and burn-in testing.' },
        { step: '04', title: 'On-Site Erection', desc: 'Heavy-duty anchoring, structural welding, certified electrical hookup, and safety compliance handoff.' }
      ],
      testimonials: [
        {
          quote: 'The 40-foot illuminated 3D rooftop fascia Creative Roots built has survived three severe monsoon storms without a single LED flickering.',
          client: 'Chief Operating Officer',
          company: 'Automotive Dealership Network',
          rating: 5
        },
        {
          quote: 'Branded 25 delivery vans across Lahore and Karachi in under 10 days. The print vibrancy and alignment on curved panels was perfect.',
          client: 'Logistics Manager',
          company: 'National E-Commerce Courier',
          rating: 5
        }
      ]
    },

    'panaflex-printing': {
      slug: 'panaflex-printing',
      aliases: ['panaflex', 'flex-printing', 'billboards', 'large-format'],
      name: 'Panaflex Printing',
      tagline: 'Wide-Format Billboards, Backlit Skins & Streamers',
      heroImage: 'images/banners/banner-5.jpg',
      badge: '✦ WIDE FORMAT',
      iconSvg: 'images/services/panaflex-printing.svg',
      description: 'Massive impact wide-format panaflex printing on imported Korean and Star grade flexible substrates with solvent and UV-cured inks engineered for high sun exposure and maximum visibility.',
      seo: {
        title: 'Panaflex Printing & Billboard Media — Creative Roots',
        description: 'Wide-format panaflex printing, backlit flex skins, roll-up standees, and stage backdrops across Pakistan.',
        ogImage: 'images/banners/banner-5.jpg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-sun',
          title: 'UV Sunlight Resistance',
          desc: 'High-density pigment inks providing up to 24 months of outdoor fade-resistance under intense UV radiation.'
        },
        {
          icon: 'fa-solid fa-arrows-maximize',
          title: 'Seamless 16-Foot Width',
          desc: 'Super-wide seamless printing without visible joining seams for monumental billboards and event stages.'
        },
        {
          icon: 'fa-solid fa-shield-virus',
          title: 'Heavy Grammage Substrates',
          desc: 'Star flex 380gsm to 440gsm anti-mildew, tear-resistant reinforced woven fabric base.'
        },
        {
          icon: 'fa-solid fa-truck',
          title: 'Rapid Deployment',
          desc: 'High-speed industrial grand-format machines capable of turning around 10,000+ sq.ft daily.'
        }
      ],
      items: [
        {
          id: 'panaflex-billboard-01',
          name: 'Star Heavy-Duty Backlit Flex Billboard Skin',
          description: 'High-translucency backlit panaflex skin with double-strike inking for intense nighttime light dispersion.',
          image: 'images/projects/panaflex/panaflex-1.jpg',
          price: 'Starting from PKR 45',
          unit: '/ sq.ft',
          badge: 'Highway Spec'
        },
        {
          id: 'panaflex-standee-02',
          name: 'Heavy-Base Retractable Roll-Up Standee',
          description: 'Premium aluminum alloy teardrop base with high-definition non-curl greyback synthetic film and carry bag.',
          image: 'images/projects/panaflex/panaflex-2.jpg',
          price: 'PKR 3,200',
          unit: '/ stand',
          badge: 'Top Pick'
        },
        {
          id: 'panaflex-backdrop-03',
          name: 'Grand Event Stage Truss Flex Backdrop',
          description: 'Seamless large-format flex banners with reinforced edge webbing and grommets mounted on structural stage trusses.',
          image: 'images/projects/panaflex/panaflex-3.jpg',
          price: 'Starting from PKR 35',
          unit: '/ sq.ft',
          badge: 'Conferences'
        },
        {
          id: 'panaflex-streamer-04',
          name: 'Outdoor Street & Event Banner Streamers',
          description: 'Double-hemmed flexible vinyl streamers with heavy brass eyelets for street poles and festival venue promotion.',
          image: 'images/projects/panaflex/panaflex-4.jpg',
          price: 'Starting from PKR 28',
          unit: '/ sq.ft',
          badge: 'Promotional'
        },
        {
          id: 'panaflex-frontlit-05',
          name: 'Wide-Format Frontlit High-Resolution Flex',
          description: 'Standard front-lit outdoor flex for hoardings, shopfront hoarding covers, and real-estate boundary branding.',
          image: 'images/printing_wide_format.jpg',
          price: 'Starting from PKR 30',
          unit: '/ sq.ft',
          badge: 'High Value'
        }
      ],
      projects: [
        {
          id: 'proj-panaflex-1',
          title: 'Highway Commercial Billboard Panaflex',
          badge: 'Panaflex Printing',
          desc: 'Heavy-gauge Star flex backlit panaflex skin printing with high-density UV fade-resistant Japanese inks.',
          img: 'images/projects/panaflex/panaflex-1.jpg',
          tag: 'UV Fade-Proof'
        },
        {
          id: 'proj-panaflex-2',
          title: 'Roll-Up Retractable Display Standees',
          badge: 'Panaflex Printing',
          desc: 'Heavy-base aluminum alloy retractable standees with high-resolution photographic greyback non-curl banner.',
          img: 'images/projects/panaflex/panaflex-2.jpg',
          tag: 'Portable & Durable'
        },
        {
          id: 'proj-panaflex-3',
          title: 'Grand Event Stage Flex Backdrop',
          badge: 'Panaflex Printing',
          desc: 'Seamless large-format flex banners mounted on structural truss frames for nationwide summit stages.',
          img: 'images/projects/panaflex/panaflex-3.jpg',
          tag: 'Large-Format Print'
        },
        {
          id: 'proj-panaflex-4',
          title: 'Promotional Banner Streamers',
          badge: 'Panaflex Printing',
          desc: 'Reinforced hemmed flex streamers with brass eyelets for high-traffic street and venue promotion.',
          img: 'images/projects/panaflex/panaflex-4.jpg',
          tag: 'Reinforced Eyelets'
        }
      ],
      process: [
        { step: '01', title: 'Resolution Proofing', desc: 'Vector scaling and DPI enhancement to prevent pixelation on massive viewing distances.' },
        { step: '02', title: 'Grand-Format Print', desc: 'Printed on 3.2m / 5m wide continuous roll industrial solvent and UV printers.' },
        { step: '03', title: 'Edge Welding & Hemming', desc: 'High-frequency thermo-welded borders with reinforced ropes and rust-proof brass eyelets.' },
        { step: '04', title: 'Rigging or Rolled Dispatch', desc: 'Rolled on solid cores or rigged on-site by our high-altitude rope-access technicians.' }
      ],
      testimonials: [
        {
          quote: 'Printed 40,000 square feet of highway billboard skins across Punjab during our national product launch. Zero delay, zero color banding.',
          client: 'Senior Brand Manager',
          company: 'Beverage Corporation',
          rating: 5
        },
        {
          quote: 'Their roll-up standees are noticeably sturdier than generic market options. The non-curl graphic stays flat even after 15 expos.',
          client: 'Public Relations Head',
          company: 'Tech Summit Asia',
          rating: 5
        }
      ]
    },

    'exhibition-stalls': {
      slug: 'exhibition-stalls',
      aliases: ['exhibition-hall', 'stalls', 'expo-stalls', 'trade-show-booths'],
      name: 'Exhibition Stalls',
      tagline: 'Turnkey 3D Trade Show Booths & Expo Pavilions',
      heroImage: 'images/banners/banner-6.jpg',
      badge: '✦ 3D FABRICATION',
      iconSvg: 'images/services/exhibition-stalls.svg',
      description: 'Transform your trade show presence into an architectural masterpiece with turnkey 3D exhibition stalls, bespoke woodwork, interactive demonstration podiums, and VIP lounge fabrication across Expo Centres in Lahore, Karachi, and Islamabad.',
      seo: {
        title: '3D Exhibition Stalls & Turnkey Expo Booths — Creative Roots',
        description: 'Bespoke trade show booth design, woodwork fabrication, illuminated reception desks, and expo stall management in Pakistan.',
        ogImage: 'images/banners/banner-6.jpg'
      },
      highlights: [
        {
          icon: 'fa-solid fa-cubes',
          title: 'Turnkey Concept to Handover',
          desc: 'Comprehensive 3D Max architectural visualization, CAD electrical plans, on-site fabrication, and dismantling.'
        },
        {
          icon: 'fa-solid fa-hammer',
          title: 'Master Carpentry & Paint',
          desc: 'Seamless MDF woodwork, duco spray paint finishes, tempered glass showcases, and raised wooden decking.'
        },
        {
          icon: 'fa-solid fa-tv',
          title: 'Integrated AV & Lighting',
          desc: 'Overhead truss lighting, warm LED back-glow accents, seamless video walls, and interactive touch screens.'
        },
        {
          icon: 'fa-solid fa-clipboard-check',
          title: 'Expo Centre Approvals',
          desc: 'Complete liaison with Expo Centre authorities for fire safety, structural stability, and power load compliance.'
        }
      ],
      items: [
        {
          id: 'stall-turnkey-01',
          name: 'Custom Turnkey 3D Exhibition Stall (3x3m, 6x3m)',
          description: 'Bespoke wooden architecture featuring raised platform, storage room, overhead branded canopy, and spot lighting.',
          image: 'images/projects/stalls/stalls-1.jpg',
          price: 'Starting from PKR 120,000',
          unit: '/ turnkey setup',
          badge: 'Turnkey Masterpiece'
        },
        {
          id: 'stall-counter-02',
          name: 'Custom Illuminated Woodwork Reception Counter',
          description: 'High-gloss painted MDF reception desk with warm LED under-glow and 3D metallic acrylic logo badge.',
          image: 'images/projects/stalls/stalls-2.jpg',
          price: 'PKR 35,000',
          unit: '/ unit',
          badge: 'High Impact'
        },
        {
          id: 'stall-podium-03',
          name: 'Brand Activation Experiential Display Booth',
          description: 'Interactive consumer engagement booth with product demo podiums, selfie wall backdrop, and LED arches.',
          image: 'images/projects/stalls/stalls-3.jpg',
          price: 'Request Custom Quote',
          unit: '/ custom activation',
          badge: 'Experiential'
        },
        {
          id: 'stall-modular-04',
          name: 'Modular Shell Scheme Expo Upgrade Booth',
          description: 'Upgrades standard Expo Centre aluminum shell booths into a customized branded wooden pavilion.',
          image: 'images/projects/stalls/stalls-4.jpg',
          price: 'Starting from PKR 65,000',
          unit: '/ booth',
          badge: 'Fast Turnaround'
        },
        {
          id: 'stall-popup-05',
          name: 'Pop-Up Tension Fabric Backwall Display (10ft)',
          description: 'Lightweight collapsible aluminum frame with dye-sublimation seamless stretch fabric graphic and carry case.',
          image: 'images/event_stall.jpg',
          price: 'PKR 28,000',
          unit: '/ set',
          badge: 'Portable'
        }
      ],
      projects: [
        {
          id: 'proj-stalls-1',
          title: 'Turnkey 3D Exhibition Stall Fabrication',
          badge: 'Exhibition Stalls',
          desc: 'Custom architectural expo pavilion featuring raised wooden flooring, high-gloss paint finish, and 3D back-lit acrylic logos.',
          img: 'images/projects/stalls/stalls-1.jpg',
          tag: 'Turnkey Fabrication'
        },
        {
          id: 'proj-stalls-2',
          title: 'Illuminated Reception Desk',
          badge: 'Exhibition Stalls',
          desc: 'Custom painted MDF reception desk with warm LED under-glow and metallic acrylic logo badge.',
          img: 'images/projects/stalls/stalls-2.jpg',
          tag: 'Custom Woodwork'
        },
        {
          id: 'proj-stalls-3',
          title: 'Activation Display Booth',
          badge: 'Exhibition Stalls',
          desc: 'High-impact experiential booth with interactive product demo podiums and overhead branded trusses.',
          img: 'images/projects/stalls/stalls-3.jpg',
          tag: 'Experiential Design'
        },
        {
          id: 'proj-stalls-4',
          title: 'Modular Expo Setup',
          badge: 'Exhibition Stalls',
          desc: 'Turnkey exhibition stall fabrication at Lahore Expo Centre with integrated lighting and storage room.',
          img: 'images/projects/stalls/stalls-4.jpg',
          tag: 'Expo Centre Lahore'
        }
      ],
      process: [
        { step: '01', title: '3D Concept Design', desc: 'We generate photorealistic 3D Max renderings tailored to your exact booth dimensions and brand theme.' },
        { step: '02', title: 'Engineering & Expo Approvals', desc: 'Structural calculations and official documentation submitted for Expo Centre engineering approvals.' },
        { step: '03', title: 'Pre-Fabrication', desc: 'All wooden modules, display pylons, and acrylic logos pre-assembled in our factory to guarantee fit.' },
        { step: '04', title: 'On-Site Build & Handover', desc: 'Flawless execution during expo setup hours, handed over 12 hours before doors open.' }
      ],
      testimonials: [
        {
          quote: 'Our 9x6m pavilion at ITCN Asia Lahore was the highlight of the hall. The finishes and LED lighting were executed to perfection.',
          client: 'Managing Director',
          company: 'Software Enterprise Islamabad',
          rating: 5
        },
        {
          quote: 'Creative Roots took care of everything from approvals to furniture and post-event teardown. Total peace of mind.',
          client: 'Marketing Head',
          company: 'Solar Technology International',
          rating: 5
        }
      ]
    }
  };

  // Helper method to resolve slug or alias to canonical category
  function getCategoryBySlug(inputSlug) {
    if (!inputSlug) return null;
    const cleanSlug = String(inputSlug).toLowerCase().trim().replace(/^\/category\//, '').replace(/\/$/, '');
    
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
  }

  // Get all canonical categories list
  function getAllCategories() {
    return Object.values(categories);
  }

  return {
    categories: categories,
    getCategoryBySlug: getCategoryBySlug,
    getAllCategories: getAllCategories
  };
});
