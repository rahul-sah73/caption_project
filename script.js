/* ─── RESTAURANT DATA ─────────────────────────────────────────────────── */

const restaurants = [
  { name: "Murugan Idli Shop",         cuisine: "South Indian · Breakfast",   rating: 4.6, reviews: 2800, img: "images/murgan.jpg"      },
  { name: "Annalakshmi",               cuisine: "Pure Veg · Fine Dining",     rating: 4.5, reviews: 1400, img: "images/annalakshmi.jpg" },
  { name: "Barbeque Nation",           cuisine: "BBQ · Buffet",               rating: 4.4, reviews: 3100, img: "images/barbeque.jpg"    },
  { name: "Absolute Barbeques",        cuisine: "BBQ · Continental",          rating: 4.3, reviews: 2200, img: "images/absolute.jpg"    },
  { name: "The Marina",                cuisine: "Seafood · Coastal",          rating: 4.5, reviews: 980,  img: "images/the_marina.jpg"  },
  { name: "A2B - Adyar Ananda Bhavan", cuisine: "South Indian · Sweets",      rating: 4.6, reviews: 4500, img: "images/a2b.jpg"         },
  { name: "The Flying Elephant",       cuisine: "Multi-Cuisine · Bar",        rating: 4.4, reviews: 1600, img: "images/flying.jpg"      },
  { name: "Ponnusamy Hotel",           cuisine: "Chettinad · Non-Veg",        rating: 4.7, reviews: 3800, img: "images/ponnusamy.jpg"   },
  { name: "Saravana Bhavan",           cuisine: "South Indian · Veg",         rating: 4.5, reviews: 6200, img: "images/saravana.jpg"    },
  { name: "Dakshin",                   cuisine: "Fine Dining · South Indian", rating: 4.8, reviews: 1100, img: "images/dakshin.jpg"     },
];

let favourites = new Set();


/* ─── SESSION HELPERS ─────────────────────────────────────────────────── */

function isLoggedIn() {
  return localStorage.getItem("oe_loggedIn") === "true";
}

function getLoggedInEmail() {
  return localStorage.getItem("oe_loggedInEmail") || "";
}

function logOut() {
  localStorage.removeItem("oe_loggedIn");
  localStorage.removeItem("oe_loggedInEmail");
  updateNavAuth();
}


/* ─── RESTAURANT REDIRECT ─────────────────────────────────────────────── */

/*
  RESTAURANT KEY MAP — matches keys in RESTAURANTS object in restaurant.js
  URL format: res_name/restaurant/restaurant.html?r=<key>
*/
const RES_KEY_MAP = {
  "Murugan Idli Shop":          "murugan",
  "Annalakshmi":                "annalakshmi",
  "Barbeque Nation":            "barbeque",
  "Absolute Barbeques":         "absolute",
  "The Marina":                 "the_marina",
  "A2B - Adyar Ananda Bhavan":  "a2b",
  "The Flying Elephant":        "flying",
  "Ponnusamy Hotel":            "ponnusamy",
  "Saravana Bhavan":            "saravana",
  "Dakshin":                    "dakshin"
};

function goToRestaurant(restaurantName) {
  const key = RES_KEY_MAP[restaurantName];
  if (!key) return;

  /* Single shared restaurant page — restaurant identified by ?r=key */
  const dest = `res_name/restaurant/restaurant.html?r=${key}`;

  document.body.classList.add("page-exit");

  if (isLoggedIn()) {
    /* Already logged in → go straight to restaurant page */
    setTimeout(() => {
      window.location.href = dest;
    }, 350);
  } else {
    /* Not logged in → store destination and redirect to login */
    sessionStorage.setItem("pendingRestaurant",    restaurantName);
    sessionStorage.setItem("oe_pendingKey",        key);
    sessionStorage.setItem("oe_pendingDest",       dest);
    setTimeout(() => {
      window.location.href = "login/login.html";
    }, 350);
  }
}


/* ─── NAV AUTH: show/hide Login link vs Profile icon ─────────────────── */

function updateNavAuth() {
  const loginLi   = document.getElementById("navLoginLi");
  const profileLi = document.getElementById("navProfileLi");
  const emailSpan = document.getElementById("profileEmail");

  if (isLoggedIn()) {
    if (loginLi)   loginLi.style.display   = "none";
    if (profileLi) profileLi.style.display = "flex";
    if (emailSpan) {
      /* Show first part of email as display name */
      const email = getLoggedInEmail();
      emailSpan.textContent = email.split("@")[0];
      /* Also populate the full email in the dropdown header */
      const fullSpan = document.getElementById("profileEmailFull");
      if (fullSpan) fullSpan.textContent = email;
    }
  } else {
    if (loginLi)   loginLi.style.display   = "";
    if (profileLi) profileLi.style.display = "none";
  }
}


/* ─── PROFILE DROPDOWN TOGGLE ─────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  updateNavAuth();

  const profileBtn     = document.getElementById("profileBtn");
  const profileDropdown = document.getElementById("profileDropdown");
  const logoutBtn      = document.getElementById("logoutBtn");

  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle("open");
    });

    document.addEventListener("click", () => {
      profileDropdown.classList.remove("open");
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logOut();
      /* Brief exit animation then reload */
      document.body.classList.add("page-exit");
      setTimeout(() => window.location.reload(), 350);
    });
  }
});


/* ─── STAR HELPER ──────────────────────────────────────────────────────── */

function starsHTML(rating) {
  let html = '';
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.3;
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < full;  i++) html += '<span class="star full">&#9733;</span>';
  if (half)                        html += '<span class="star half">&#9734;</span>';
  for (let i = 0; i < empty; i++) html += '<span class="star empty">&#9733;</span>';
  return html;
}


/* ─── CAROUSEL ────────────────────────────────────────────────────────── */

const items   = document.querySelectorAll(".item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let current   = 0;

function buildDots() {
  const container = document.getElementById("carouselDots");
  if (!container) return;
  container.innerHTML = "";
  restaurants.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "c-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => { current = i; updateCarousel(); });
    container.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll(".c-dot").forEach((d, i) => {
    d.classList.toggle("active", i === current);
  });
}

function updateCarouselInfo() {
  const r = restaurants[current];
  const cuisineEl = document.getElementById("carouselCuisineLabel");
  const starsEl   = document.getElementById("carouselStars");
  if (cuisineEl) cuisineEl.textContent = r.cuisine;
  if (starsEl)   starsEl.innerHTML = starsHTML(r.rating) +
    `<span class="carousel-review-count">★ ${r.rating} (${r.reviews.toLocaleString()} reviews)</span>`;
}

function updateCarousel() {
  items.forEach(item => {
    item.style.opacity   = "0";
    item.style.zIndex    = "0";
    item.style.transform = "translate(-50%, -50%) scale(0.7)";
    const name = item.querySelector("h3");
    if (name) name.style.opacity = "0";
  });

  const center = items[current];
  const left   = items[(current - 1 + items.length) % items.length];
  const right  = items[(current + 1) % items.length];

  center.style.opacity   = "1";
  center.style.zIndex    = "3";
  center.style.transform = "translate(-50%, -50%) scale(1.2)";
  center.querySelector("h3").style.opacity = "1";

  left.style.opacity   = "1";
  left.style.zIndex    = "2";
  left.style.transform = "translate(calc(-50% - 320px), -50%) scale(0.8)";

  right.style.opacity   = "1";
  right.style.zIndex    = "2";
  right.style.transform = "translate(calc(-50% + 320px), -50%) scale(0.8)";

  updateDots();
  updateCarouselInfo();
}

nextBtn.onclick = () => { current = (current + 1) % items.length; updateCarousel(); };
prevBtn.onclick = () => { current = (current - 1 + items.length) % items.length; updateCarousel(); };

buildDots();
updateCarousel();

/* Carousel items clickable → restaurant redirect */
items.forEach(item => {
  const name = item.dataset.name;
  const imgWrap = item.querySelector(".item-img-wrap");
  imgWrap.style.cursor = "pointer";
  imgWrap.addEventListener("click", (e) => {
    if (e.target.closest(".fav-btn")) return;
    goToRestaurant(name);
  });
  const h3 = item.querySelector("h3");
  if (h3) {
    h3.style.cursor = "pointer";
    h3.addEventListener("click", () => goToRestaurant(name));
  }
});


/* ─── FAVOURITES ──────────────────────────────────────────────────────── */

function updateBadge() {
  const badge = document.getElementById("favBadge");
  const count = favourites.size;
  badge.textContent = count;
  badge.classList.toggle("visible", count > 0);
}

function toggleFavourite(name) {
  if (favourites.has(name)) {
    favourites.delete(name);
  } else {
    favourites.add(name);
  }
  updateBadge();
  syncFavButtons();
  if (document.getElementById("favModal").classList.contains("open")) {
    renderFavModal();
  }
}

function syncFavButtons() {
  document.querySelectorAll(".item").forEach(item => {
    const name = item.dataset.name;
    const btn  = item.querySelector(".fav-btn");
    if (btn) btn.classList.toggle("active", favourites.has(name));
  });
  document.querySelectorAll(".modal-card").forEach(card => {
    const name = card.dataset.name;
    const btn  = card.querySelector(".card-fav-btn");
    if (btn) btn.classList.toggle("active", favourites.has(name));
  });
}

document.querySelectorAll(".item").forEach(item => {
  const name = item.dataset.name;
  const btn  = item.querySelector(".fav-btn");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavourite(name);
  });
});


/* ─── SEARCH ──────────────────────────────────────────────────────────── */

const searchInput    = document.getElementById("searchInput");
const searchDropdown = document.getElementById("searchDropdown");

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { closeSearch(); return; }
  const matches = restaurants.filter(r => r.name.toLowerCase().includes(q));
  renderSearchDropdown(matches);
});

searchInput.addEventListener("focus", () => {
  if (searchInput.value.trim()) searchDropdown.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) closeSearch();
});

function closeSearch() {
  searchDropdown.classList.remove("open");
  searchDropdown.innerHTML = "";
}

function renderSearchDropdown(matches) {
  searchDropdown.innerHTML = "";
  if (matches.length === 0) {
    searchDropdown.innerHTML = `<div class="search-no-result">No restaurants found</div>`;
  } else {
    matches.forEach(r => {
      const div = document.createElement("div");
      div.className = "search-item";
      div.innerHTML = `<img src="${r.img}" alt="${r.name}"><span>${r.name}</span>`;
      div.addEventListener("click", () => {
        searchInput.value = r.name;
        closeSearch();
        goToRestaurant(r.name);
      });
      searchDropdown.appendChild(div);
    });
  }
  searchDropdown.classList.add("open");
}


/* ─── EXPLORE MODAL ───────────────────────────────────────────────────── */

const exploreModal = document.getElementById("exploreModal");
const exploreGrid  = document.getElementById("exploreGrid");

document.getElementById("exploreBtn").addEventListener("click", () => {
  renderExploreGrid();
  exploreModal.classList.add("open");
});

const viewAllBtn = document.getElementById("viewAllBtn");
if (viewAllBtn) {
  viewAllBtn.addEventListener("click", () => {
    renderExploreGrid();
    exploreModal.classList.add("open");
  });
}

document.getElementById("closeExplore").addEventListener("click", () => {
  exploreModal.classList.remove("open");
});

exploreModal.addEventListener("click", (e) => {
  if (e.target === exploreModal) exploreModal.classList.remove("open");
});

function renderExploreGrid() {
  exploreGrid.innerHTML = "";
  restaurants.forEach((r) => {
    const card = document.createElement("div");
    card.className    = "modal-card";
    card.dataset.name = r.name;
    card.innerHTML = `
      <div class="modal-card-img-wrap">
        <img src="${r.img}" alt="${r.name}">
        <button class="card-fav-btn ${favourites.has(r.name) ? 'active' : ''}" title="Add to Favourites">&#9829;</button>
      </div>
      <div class="modal-card-info">
        <p class="modal-card-name">${r.name}</p>
        <p class="modal-card-cuisine">${r.cuisine}</p>
        <div class="modal-card-rating">
          ${starsHTML(r.rating)}
          <span class="modal-rating-num">${r.rating} (${r.reviews.toLocaleString()} reviews)</span>
        </div>
      </div>
    `;
    card.querySelector(".card-fav-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavourite(r.name);
    });
    card.addEventListener("click", () => {
      exploreModal.classList.remove("open");
      goToRestaurant(r.name);
    });
    exploreGrid.appendChild(card);
  });
}


/* ─── FAVOURITES MODAL ────────────────────────────────────────────────── */

const favModal = document.getElementById("favModal");
const favGrid  = document.getElementById("favGrid");
const emptyFav = document.getElementById("emptyFav");

document.getElementById("favIcon").addEventListener("click", () => {
  renderFavModal();
  favModal.classList.add("open");
});

document.getElementById("closeFav").addEventListener("click", () => {
  favModal.classList.remove("open");
});

favModal.addEventListener("click", (e) => {
  if (e.target === favModal) favModal.classList.remove("open");
});

function renderFavModal() {
  favGrid.innerHTML = "";
  const favList = restaurants.filter(r => favourites.has(r.name));

  if (favList.length === 0) {
    emptyFav.classList.add("visible");
  } else {
    emptyFav.classList.remove("visible");
    favList.forEach(r => {
      const card = document.createElement("div");
      card.className    = "modal-card";
      card.dataset.name = r.name;
      card.innerHTML = `
        <div class="modal-card-img-wrap">
          <img src="${r.img}" alt="${r.name}">
          <button class="card-fav-btn active" title="Remove from Favourites">&#9829;</button>
        </div>
        <div class="modal-card-info">
          <p class="modal-card-name">${r.name}</p>
          <p class="modal-card-cuisine">${r.cuisine}</p>
          <div class="modal-card-rating">
            ${starsHTML(r.rating)}
            <span class="modal-rating-num">${r.rating} (${r.reviews.toLocaleString()} reviews)</span>
          </div>
        </div>
      `;
      card.querySelector(".card-fav-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavourite(r.name);
        renderFavModal();
      });
      card.addEventListener("click", () => {
        favModal.classList.remove("open");
        goToRestaurant(r.name);
      });
      favGrid.appendChild(card);
    });
  }
}


/* ─── ESC TO CLOSE MODALS ─────────────────────────────────────────────── */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    exploreModal.classList.remove("open");
    favModal.classList.remove("open");
    closeSearch();
  }
});
