/**
 * MASHAL GROUPS - Core Interactive Controller
 */

// Data for Subsidiary Quick View
const BUSINESS_DATA = {
  petroleum: {
    category: "ENERGY & PETROCHEM",
    title: "Mashal Petroleum",
    image: "assets/images/mashal-petroleum.jpg",
    tagline: "Powering progress through reliable energy solutions and sustainable infrastructure.",
    description: "Mashal Petroleum operates modern downstream petroleum logistics, industrial bulk fuels, premium lubricants, and green energy transitional terminals. Serving critical infrastructure and commercial transportation networks across key regional corridors with safety, precision, and supply security.",
    specs: [
      { label: "Storage Capacity", value: "850K BBL" },
      { label: "Regional Terminals", value: "14 Facilities" },
      { label: "Annual Distribution", value: "2.4M Tons" }
    ],
    services: [
      "Bulk Commercial & Industrial Fuel Supply",
      "Specialty Lubricants & Heavy Machinery Fluids",
      "Strategic Maritime Bunkering Services",
      "Next-Gen Biofuel & Clean Energy Blending"
    ]
  },
  foods: {
    category: "FOOD & CONSUMER PRODUCTS",
    title: "Mashal Foods",
    image: "assets/images/mashal-foods.jpg",
    tagline: "Quality food for a better tomorrow through sustainable agriculture & distribution.",
    description: "Mashal Foods is a leading producer, processor, and international distributor of agricultural staples, gourmet edible oils, organic spices, and FMCG consumer packaged goods. We uphold the strictest international quality certifications to nourish families across continents.",
    specs: [
      { label: "Global Reach", value: "28 Countries" },
      { label: "Product Lines", value: "180+ SKUs" },
      { label: "Cold Storage", value: "45,000 SQM" }
    ],
    services: [
      "Organic Agricultural Sourcing & Milling",
      "FMCG Consumer Brand Distribution",
      "Temperature-Controlled Cold Chain Logistics",
      "Private Label Packaging for Tier-1 Supermarkets"
    ]
  },
  rentacar: {
    category: "MOBILITY & TRANSPORTATION",
    title: "Mashal Rent A Car",
    image: "assets/images/mashal-rent-a-car.jpg",
    tagline: "Your journey, our priority with luxury, corporate, and electric vehicle mobility.",
    description: "Mashal Rent A Car delivers world-class executive mobility, luxury chauffeur services, commercial fleet leasing, and EV transportation. With our meticulously maintained fleet of prestige marques, we offer seamless bespoke mobility for multinational executives, VIP delegations, and leisure travelers.",
    specs: [
      { label: "Fleet Vehicles", value: "1,200+ Units" },
      { label: "Executive Chauffeurs", value: "250+ Drivers" },
      { label: "Client Satisfaction", value: "99.4%" }
    ],
    services: [
      "Executive & VIP Chauffeur-Driven Sedans",
      "Prestige Supercar & Exotic Fleet Rentals",
      "Corporate Long-Term Commercial Fleet Leasing",
      "Airport Concierge & Diplomatic Protocol Transport"
    ]
  },
  shipping: {
    category: "GLOBAL LOGISTICS & FREIGHT",
    title: "Mashwani Shipping L.L.C.",
    image: "assets/images/mashwani-shipping.jpg",
    tagline: "Connecting markets. Delivering possibilities across global sea lanes.",
    description: "Mashwani Shipping L.L.C. is an international freight forwarder and maritime logistics operator providing container liner services, dry bulk shipping, breakbulk forwarding, and integrated customs logistics connecting Middle East hubs with Europe, Asia, and the Americas.",
    specs: [
      { label: "Annual TEU Volume", value: "320,000+" },
      { label: "Direct Port Calls", value: "65 Ports" },
      { label: "Customs Clearance", value: "24/7 Rapid" }
    ],
    services: [
      "Full Container Load (FCL) & Less Container Load (LCL)",
      "Vessel Chartering & Specialized Project Cargo",
      "End-to-End Customs Brokerage & Port Handling",
      "Multimodal Freight (Sea, Air, Rail, Overland)"
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Nav Drawer Toggle
  const navToggleBtn = document.getElementById('navToggleBtn');
  const navMenu = document.getElementById('navMenu');

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', () => {
      navToggleBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggleBtn.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. Subsidiary Modal System
  const modalOverlay = document.getElementById('businessModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalTagline = document.getElementById('modalTagline');
  const modalDescription = document.getElementById('modalDescription');
  const modalSpecsContainer = document.getElementById('modalSpecsContainer');
  const modalServicesContainer = document.getElementById('modalServicesContainer');

  function openBusinessModal(businessKey) {
    const data = BUSINESS_DATA[businessKey];
    if (!data || !modalOverlay) return;

    if (modalImg) modalImg.src = data.image;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalTagline) modalTagline.textContent = data.tagline;
    if (modalDescription) modalDescription.textContent = data.description;

    // Specs
    if (modalSpecsContainer) {
      modalSpecsContainer.innerHTML = data.specs.map(s => `
        <div class="spec-box">
          <div class="spec-value">${s.value}</div>
          <div class="spec-label">${s.label}</div>
        </div>
      `).join('');
    }

    // Services
    if (modalServicesContainer) {
      modalServicesContainer.innerHTML = data.services.map(srv => `
        <li style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; color: var(--text-dark-secondary); font-size: 0.9rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-wine)" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          ${srv}
        </li>
      `).join('');
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeBusinessModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Trigger buttons
  document.querySelectorAll('[data-business-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-business-trigger');
      openBusinessModal(key);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeBusinessModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeBusinessModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
      closeBusinessModal();
    }
  });

  // 4. Toast notification helper
  window.showToast = function(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };
});
