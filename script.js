/* ═══════════════════════════════════════════
   WILDER NEPAL — script.js
   Handles: SPA navigation, data rendering,
   dark mode, modals, search, filters, toast
═══════════════════════════════════════════ */

/* ─── DATA: DESTINATIONS ─── */
const destinations = [
  {
    id: 1,
    name: "Annapurna Base Camp",
    tagline: "Trek into the heart of the Himalayas",
    category: "trek",
    location: "Gandaki Province",
    altitude: "4,130m",
    duration: "10–14 days",
    difficulty: "Moderate",
    bestSeason: "Oct–Nov, Mar–Apr",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585016495481-91613ec03b71?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&auto=format&fit=crop&q=80"
    ],
    description: "The Annapurna Base Camp trek is one of Nepal's most iconic trails, leading you through terraced rice paddies, dense rhododendron forests, and dramatic alpine scenery to arrive at a breathtaking amphitheater of snow-capped peaks.",
    fullDescription: `Surrounded by some of the world's highest mountains — including Annapurna I (8,091m), Machhapuchhre (6,993m), and Hiunchuli — the base camp sits at 4,130 metres, offering a 360-degree panorama that will stay with you for the rest of your life.

The trail begins in Nayapul or Phedi near Pokhara and winds through traditional Gurung and Magar villages, past steaming hot springs at Jhinu Danda, and up through the Modi Khola gorge. The final ascent through the sanctuary feels almost otherworldly — a high, silent bowl of ice and stone.`,
    highlights: [
      "360° panorama of Annapurna massif",
      "Natural hot springs at Jhinu Danda",
      "Traditional Gurung village homestays",
      "Sunrise over Machhapuchhre (Fishtail)",
      "Dense rhododendron forests in bloom",
      "Ghorepani Poon Hill optional add-on"
    ],
    mapsUrl: "https://maps.google.com/?q=Annapurna+Base+Camp+Nepal",
    tag: "Trekking"
  },
  {
    id: 2,
    name: "Everest Base Camp",
    tagline: "Stand at the foot of the world's highest peak",
    category: "trek",
    location: "Khumbu, Solukhumbu",
    altitude: "5,364m",
    duration: "12–16 days",
    difficulty: "Challenging",
    bestSeason: "Oct–Nov, Apr–May",
    image: "https://images.unsplash.com/photo-1468413253076-92eed2296d73?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583233194253-fc9f6dd8faaf?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606117331785-2ee7e8bb6e42?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568048689711-5a5e3f0af685?w=400&auto=format&fit=crop&q=80"
    ],
    description: "The Everest Base Camp trek is the journey of a lifetime, taking you through the legendary Khumbu Valley to the foot of the world's highest mountain at 8,849 metres.",
    fullDescription: `The trek typically begins with a scenic flight to Lukla (2,860m), then follows the ancient trading routes of the Sherpa people through pine and juniper forests, across high suspension bridges draped with prayer flags, and past the famous Tengboche Monastery.

The Khumbu region is home to some of Nepal's warmest and most resilient people — the Sherpas. Along the way, you'll acclimatize in Namche Bazaar, visit the Sagarmatha National Park headquarters, and push higher through Dingboche and Lobuche before the final stretch to Base Camp.`,
    highlights: [
      "Iconic flight into Lukla airport",
      "Namche Bazaar — the Sherpa capital",
      "Tengboche Monastery with Everest views",
      "Khumbu Icefall views from Base Camp",
      "Kala Patthar sunrise (5,545m)",
      "Sagarmatha National Park UNESCO site"
    ],
    mapsUrl: "https://maps.google.com/?q=Everest+Base+Camp+Nepal",
    tag: "Trekking"
  },
  {
    id: 3,
    name: "Pokhara",
    tagline: "Nepal's adventure capital by a mirror lake",
    category: "nature",
    location: "Gandaki Province",
    altitude: "820m",
    duration: "3–5 days",
    difficulty: "Easy",
    bestSeason: "Year-round",
    image: "https://images.unsplash.com/photo-1585016495481-91613ec03b71?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=400&auto=format&fit=crop&q=80"
    ],
    description: "Pokhara is Nepal's adventure capital — a lakeside city with dramatic views of the Annapurna range, clear skies for paragliding, and a relaxed bohemian vibe.",
    fullDescription: `Nestled at 820m altitude beside the serene Phewa Lake, Pokhara offers one of the most dramatic backdrops in Asia — the Annapurna and Dhaulagiri ranges reflected in tranquil waters. On clear mornings, Machhapuchhre rises behind the city like a painted backdrop.

Beyond the lake, the city pulses with adventure energy. It's the launching point for the Annapurna Circuit and ABC treks, world-class paragliding off Sarangkot Hill, and white-water rafting on the Seti and Modi rivers. Lakeside (Baidam) offers a buzzing café and restaurant scene — a perfect recovery base after trails.`,
    highlights: [
      "Paragliding over Phewa Lake",
      "Sarangkot Hill sunrise views",
      "Phewa Lake sunrise boat ride",
      "World Peace Pagoda hilltop stupa",
      "Gupteshwor Cave and Davis Falls",
      "Vibrant Lakeside café and market scene"
    ],
    mapsUrl: "https://maps.google.com/?q=Pokhara+Nepal",
    tag: "Nature"
  },
  {
    id: 4,
    name: "Chitwan National Park",
    tagline: "Wild encounters in Nepal's terai jungle",
    category: "wildlife",
    location: "Narayani Province",
    altitude: "150m",
    duration: "2–4 days",
    difficulty: "Easy",
    bestSeason: "Oct–Apr",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585016495481-91613ec03b71?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=400&auto=format&fit=crop&q=80"
    ],
    description: "Chitwan National Park is a UNESCO World Heritage Site and one of Asia's finest wildlife preserves — home to the one-horned rhinoceros, Bengal tiger, and gharial crocodile.",
    fullDescription: `Covering 952 km² of terai floodplain and sal forests, Chitwan is Nepal's oldest and most celebrated national park. The landscape shifts dramatically from the mountains — dense subtropical jungle, tall elephant grass, and winding river channels alive with wildlife.

Chitwan rose to fame as a rhinoceros conservation success story; the one-horned rhino population has grown from fewer than 100 in the 1960s to over 700 today. Jeep safaris, canoe rides on the Rapti and Narayani rivers, and guided jungle walks make for truly immersive wildlife experiences.`,
    highlights: [
      "One-horned rhinoceros sightings",
      "Bengal tiger jeep safari",
      "Canoe safari on Rapti River",
      "Elephant bathing experience",
      "Gharial crocodile spotting",
      "Tharu cultural dance performances"
    ],
    mapsUrl: "https://maps.google.com/?q=Chitwan+National+Park+Nepal",
    tag: "Wildlife"
  },
  {
    id: 5,
    name: "Lumbini",
    tagline: "The sacred birthplace of the Buddha",
    category: "culture",
    location: "Lumbini Province",
    altitude: "150m",
    duration: "1–2 days",
    difficulty: "Easy",
    bestSeason: "Oct–Mar",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606117331785-2ee7e8bb6e42?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585016495481-91613ec03b71?w=400&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568048689711-5a5e3f0af685?w=400&auto=format&fit=crop&q=80"
    ],
    description: "Lumbini is one of the holiest sites on earth — the birthplace of Siddhartha Gautama, who became the Buddha. A UNESCO World Heritage Site of profound spiritual significance.",
    fullDescription: `In 623 BC, Queen Maya Devi gave birth to Siddhartha Gautama under a sala tree in this grove. Today, Lumbini is a place of pilgrimage for millions of Buddhists from around the world, and one of Nepal's most important UNESCO World Heritage Sites.

The Lumbini Development Zone covers 4.8 km² and includes the sacred Maya Devi Temple marking the exact birth spot, the ancient Ashoka Pillar inscribed by Emperor Ashoka in 249 BC, and the sacred Bodhi tree and Pushkarni pool. Monasteries from across the Buddhist world — Myanmar, Japan, Thailand, China, Sri Lanka — ring the zone in a remarkable display of international devotion.`,
    highlights: [
      "Maya Devi Temple — exact birthplace",
      "Ashoka Pillar from 249 BC",
      "Sacred Bodhi tree & Pushkarni pool",
      "International monastery complex",
      "Eternal flame peace monument",
      "Lumbini Museum and research centre"
    ],
    mapsUrl: "https://maps.google.com/?q=Lumbini+Nepal",
    tag: "Culture"
  }
];

/* ─── DATA: BLOG POSTS ─── */
const blogPosts = [
  {
    id: 1,
    title: "Surviving the Khumbu: 14 Days to Everest Base Camp",
    category: "Trekking",
    excerpt: "I didn't know if my knees would make it to 5,364m. They did. Here's everything I wish I'd known before setting foot on the world's most famous trail.",
    date: "Oct 12, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1468413253076-92eed2296d73?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Paragliding Over Pokhara: A First-Timer's Guide",
    category: "Adventure",
    excerpt: "Launching off Sarangkot Hill into clear October air with the Annapurna range filling your entire field of vision — it's the most alive you'll ever feel.",
    date: "Sep 5, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1585016495481-91613ec03b71?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Inside Chitwan: A 3-Day Wildlife Safari Diary",
    category: "Wildlife",
    excerpt: "On day one, we saw a tiger. I cried. Day two brought rhinos, gharials, and a sunset canoe trip that felt like a dream. Here's the full diary.",
    date: "Aug 20, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Lumbini on a Budget: The Complete Pilgrim's Guide",
    category: "Culture",
    excerpt: "You don't need to be Buddhist to feel the weight of silence at Lumbini. The birthplace of the Buddha is one of the most moving sites in the world — and surprisingly affordable.",
    date: "Jul 8, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "The Annapurna Base Camp Trek: A Complete Guide for 2025",
    category: "Trekking",
    excerpt: "Everything you need to plan the ABC trek: permits, costs, route options, best teahouses, altitude sickness tips, and why this is the best first Himalayan trek.",
    date: "Jun 15, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Nepal Packing List: What I Actually Use vs What I Leave Home",
    category: "Travel Tips",
    excerpt: "After a decade of trekking in Nepal, I've made every packing mistake in the book. Here's the ruthlessly edited list that fits in a 40L bag and covers every scenario.",
    date: "May 3, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=700&auto=format&fit=crop&q=80"
  }
];

/* ═══════════════════════════════════════════
   NAVIGATION & PAGE SYSTEM
═══════════════════════════════════════════ */
let currentPage = 'home';

function navigateTo(page) {
  /* Hide all pages */
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  /* Show target page */
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    currentPage = page;
  }
  /* Update nav active states */
  document.querySelectorAll('.nav-link, .sidebar-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
  /* Close mobile nav */
  document.getElementById('mobile-nav').classList.remove('open');
}

/* Handle all data-page anchor clicks */
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-page]');
  if (trigger) {
    e.preventDefault();
    navigateTo(trigger.dataset.page);
  }
});

/* ═══════════════════════════════════════════
   DARK MODE
═══════════════════════════════════════════ */
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

/* Persist theme */
const savedTheme = localStorage.getItem('wn-theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('wn-theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'ph ph-moon' : 'ph ph-sun';
}

/* ═══════════════════════════════════════════
   HAMBURGER MENU
═══════════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

/* ═══════════════════════════════════════════
   AUTH MODAL
═══════════════════════════════════════════ */
const authModal = document.getElementById('auth-modal');
const openLoginBtns = document.querySelectorAll('#btn-open-login, #btn-open-login-mobile');
const modalClose = document.getElementById('modal-close');

openLoginBtns.forEach(btn => {
  btn.addEventListener('click', () => authModal.classList.add('open'));
});

modalClose.addEventListener('click', () => authModal.classList.remove('open'));

authModal.addEventListener('click', (e) => {
  if (e.target === authModal) authModal.classList.remove('open');
});

/* Auth tabs */
document.querySelectorAll('.auth-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + target).classList.add('active');
  });
});

/* Tab switch links inside forms */
document.querySelectorAll('[data-tab-switch]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.dataset.tabSwitch;
    document.querySelectorAll('.auth-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === target);
    });
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.getElementById('tab-' + target).classList.add('active');
  });
});

/* ═══════════════════════════════════════════
   TOAST NOTIFICATION
═══════════════════════════════════════════ */
function showToast(message, icon = '✓') {
  const toast = document.getElementById('toast');
  toast.innerHTML = `<span>${icon}</span> ${message}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ═══════════════════════════════════════════
   RENDER: DESTINATION CARDS
═══════════════════════════════════════════ */
function createDestCard(dest) {
  const card = document.createElement('div');
  card.className = 'dest-card';
  card.dataset.category = dest.category;
  card.dataset.name = dest.name.toLowerCase();
  card.innerHTML = `
    <div class="dest-card-img">
      <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
      <span class="dest-card-tag">${dest.tag}</span>
      <span class="dest-card-alt">${dest.altitude}</span>
    </div>
    <div class="dest-card-body">
      <h3>${dest.name}</h3>
      <p>${dest.description}</p>
      <div class="dest-card-meta">
        <span class="dest-card-loc">
          <i class="ph ph-map-pin"></i> ${dest.location}
        </span>
        <div class="dest-card-arrow"><i class="ph ph-arrow-up-right"></i></div>
      </div>
    </div>
  `;
  /* Click → destination detail page */
  card.addEventListener('click', () => showDestinationDetail(dest));
  return card;
}

/* Populate featured grid (home page — show 3) */
function renderFeaturedGrid() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  destinations.slice(0, 3).forEach(d => grid.appendChild(createDestCard(d)));
}

/* Populate all-destinations grid */
function renderAllDestinations(data = destinations) {
  const grid = document.getElementById('all-destinations-grid');
  if (!grid) return;
  grid.innerHTML = '';
  if (data.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-sub);grid-column:1/-1;">No destinations found. Try a different search.</p>';
    return;
  }
  data.forEach(d => grid.appendChild(createDestCard(d)));
}

/* ═══════════════════════════════════════════
   DESTINATION DETAIL VIEW
═══════════════════════════════════════════ */
function showDestinationDetail(dest) {
  const container = document.getElementById('detail-content');

  const galleryHTML = dest.gallery.map(img =>
    `<img src="${img}" alt="Gallery" loading="lazy" />`
  ).join('');

  const highlightsHTML = dest.highlights.map(h =>
    `<div class="highlight-item"><i class="ph ph-check-circle"></i><span>${h}</span></div>`
  ).join('');

  container.innerHTML = `
    <div class="detail-hero">
      <img src="${dest.image}" alt="${dest.name}" />
      <button class="detail-back" id="detail-back-btn">
        <i class="ph ph-arrow-left"></i> Back
      </button>
      <div class="detail-hero-content">
        <span class="section-tag">${dest.tag}</span>
        <h1>${dest.name}</h1>
        <p>${dest.tagline}</p>
      </div>
    </div>

    <div class="detail-body">
      <div class="detail-main">
        <h3>About This Destination</h3>
        <p>${dest.description}</p>
        <p>${dest.fullDescription.replace(/\n\n/g, '</p><p>')}</p>

        <h3 style="margin-top:40px;">Highlights</h3>
        <div class="highlights-list">${highlightsHTML}</div>

        <h3 style="margin-top:40px;">Gallery</h3>
        <div class="gallery-grid">${galleryHTML}</div>
      </div>

      <aside class="detail-sidebar">
        <div class="detail-info-card">
          <h4>Quick Info</h4>
          <div class="info-row"><span class="label">Altitude</span><span class="value">${dest.altitude}</span></div>
          <div class="info-row"><span class="label">Duration</span><span class="value">${dest.duration}</span></div>
          <div class="info-row"><span class="label">Difficulty</span><span class="value">${dest.difficulty}</span></div>
          <div class="info-row"><span class="label">Best Season</span><span class="value">${dest.bestSeason}</span></div>
          <div class="info-row"><span class="label">Location</span><span class="value">${dest.location}</span></div>
        </div>
        <a href="${dest.mapsUrl}" target="_blank" rel="noopener" class="map-link">
          <i class="ph ph-map-pin"></i> Open in Google Maps
        </a>
        <div class="detail-info-card">
          <h4>Download Guide</h4>
          <p style="font-size:0.85rem;margin-bottom:16px;">Get our free PDF guide for ${dest.name} including routes, costs, and tips.</p>
          <a href="#" class="btn-outline" style="width:100%;justify-content:center;">
            <i class="ph ph-download-simple"></i> Download PDF
          </a>
        </div>
      </aside>
    </div>
  `;

  /* Navigate to detail page */
  navigateTo('detail');

  /* Back button */
  document.getElementById('detail-back-btn').addEventListener('click', () => {
    navigateTo(currentPage === 'detail' ? 'destinations' : currentPage);
  });
}

/* ═══════════════════════════════════════════
   RENDER: BLOG CARDS
═══════════════════════════════════════════ */
function createBlogCard(post) {
  const card = document.createElement('div');
  card.className = 'blog-card';
  card.innerHTML = `
    <div class="blog-card-img">
      <img src="${post.image}" alt="${post.title}" loading="lazy" />
    </div>
    <div class="blog-card-body">
      <div class="blog-card-cat">${post.category}</div>
      <h4>${post.title}</h4>
      <p>${post.excerpt}</p>
      <div class="blog-card-meta">
        <span>${post.date} · ${post.readTime}</span>
        <span class="blog-card-read">Read →</span>
      </div>
    </div>
  `;
  card.addEventListener('click', () => showToast('Full article coming soon!', '📖'));
  return card;
}

function renderBlogPreview() {
  const grid = document.getElementById('blog-preview-grid');
  if (!grid) return;
  blogPosts.slice(0, 3).forEach(p => grid.appendChild(createBlogCard(p)));
}

function renderBlogFull() {
  const grid = document.getElementById('blog-full-grid');
  if (!grid) return;
  blogPosts.forEach(p => grid.appendChild(createBlogCard(p)));
}

/* ═══════════════════════════════════════════
   SEARCH FUNCTIONALITY
═══════════════════════════════════════════ */
/* Home search */
const homeSearch = document.getElementById('home-search');
if (homeSearch) {
  homeSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = homeSearch.value.trim().toLowerCase();
      navigateTo('destinations');
      const destSearchInput = document.getElementById('dest-search');
      if (destSearchInput && q) {
        destSearchInput.value = q;
        filterDestinations(q, 'all');
      }
    }
  });
  document.querySelector('.search-btn')?.addEventListener('click', () => {
    const q = homeSearch.value.trim().toLowerCase();
    navigateTo('destinations');
    const destSearchInput = document.getElementById('dest-search');
    if (destSearchInput && q) {
      destSearchInput.value = q;
      filterDestinations(q, 'all');
    }
  });
}

/* Destinations page search */
const destSearch = document.getElementById('dest-search');
if (destSearch) {
  destSearch.addEventListener('input', () => {
    const q = destSearch.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
    filterDestinations(q, activeFilter);
  });
}

/* Filter buttons */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const q = document.getElementById('dest-search')?.value.toLowerCase() || '';
    filterDestinations(q, btn.dataset.filter);
  });
});

function filterDestinations(query, category) {
  const filtered = destinations.filter(d => {
    const matchesQuery = query === '' ||
      d.name.toLowerCase().includes(query) ||
      d.location.toLowerCase().includes(query) ||
      d.description.toLowerCase().includes(query) ||
      d.tag.toLowerCase().includes(query);
    const matchesCat = category === 'all' || d.category === category;
    return matchesQuery && matchesCat;
  });
  renderAllDestinations(filtered);
}

/* ═══════════════════════════════════════════
   FORM SUBMISSIONS
═══════════════════════════════════════════ */
/* Contact form */
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Message sent! I\'ll get back to you soon. 🙏', '✉️');
  e.target.reset();
});

/* Newsletter form */
document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Welcome to the trail! Check your inbox. 🏔️', '✓');
  e.target.reset();
});

/* ═══════════════════════════════════════════
   SCROLL: HEADER SHADOW
═══════════════════════════════════════════ */
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 40
    ? '0 4px 20px rgba(0,0,0,0.1)'
    : 'none';
}, { passive: true });

/* ═══════════════════════════════════════════
   INTERSECTION OBSERVER: CARD ANIMATIONS
═══════════════════════════════════════════ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

/* Observe cards as they're added */
function observeCards() {
  document.querySelectorAll('.dest-card, .blog-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
}

/* Re-observe when cards added */
const mutationObserver = new MutationObserver(() => {
  document.querySelectorAll('.dest-card:not(.observed), .blog-card:not(.observed)').forEach(card => {
    card.classList.add('observed');
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 50);
  });
});

mutationObserver.observe(document.body, { childList: true, subtree: true });

/* ═══════════════════════════════════════════
   INIT — RUN ON LOAD
═══════════════════════════════════════════ */
function init() {
  renderFeaturedGrid();
  renderBlogPreview();
  renderBlogFull();
  renderAllDestinations();
  navigateTo('home');
}

document.addEventListener('DOMContentLoaded', init);
