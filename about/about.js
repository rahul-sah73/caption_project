/* ─── DEV CARD TOGGLE ─────────────────────────────────────────────────── */
const devCard    = document.getElementById("devCard");
const expandHint = document.getElementById("expandHint");

devCard.addEventListener("click", () => {
  devCard.classList.toggle("active");
  expandHint.textContent = devCard.classList.contains("active")
    ? "Click to close ↑"
    : "Click to read my story ↓";
});


/* ─── SCROLL REVEAL — also triggers for elements already in viewport ──── */
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: "0px 0px -20px 0px"
});

/* Run on page load — reveal anything already visible */
function checkInitialVisibility() {
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 20 && rect.bottom > 0) {
      el.classList.add("visible");
    } else {
      observer.observe(el);
    }
  });
}

/* Fire after a tiny delay so layout is settled */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => setTimeout(checkInitialVisibility, 60));
} else {
  setTimeout(checkInitialVisibility, 60);
}


/* ─── PHOTO TILT ON MOUSEMOVE ─────────────────────────────────────────── */
const photo = document.getElementById("devPhoto");

photo.addEventListener("mousemove", (e) => {
  const rect   = photo.getBoundingClientRect();
  const cx     = rect.left + rect.width  / 2;
  const cy     = rect.top  + rect.height / 2;
  const dx     = (e.clientX - cx) / (rect.width  / 2);
  const dy     = (e.clientY - cy) / (rect.height / 2);
  const rotX   = -dy * 14;
  const rotY   =  dx * 14;
  photo.querySelector("img").style.transform =
    `scale(1.18) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});

photo.addEventListener("mouseleave", () => {
  photo.querySelector("img").style.transform = "";
});


/* ─── CARD TILT ON MOUSEMOVE ──────────────────────────────────────────── */
devCard.addEventListener("mousemove", (e) => {
  const rect  = devCard.getBoundingClientRect();
  const cx    = rect.left + rect.width  / 2;
  const cy    = rect.top  + rect.height / 2;
  const dx    = (e.clientX - cx) / (rect.width  / 2);
  const dy    = (e.clientY - cy) / (rect.height / 2);
  const rotX  = -dy * 6;
  const rotY  =  dx * 6;
  devCard.style.transform =
    `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px) scale(1.02)`;
});

devCard.addEventListener("mouseleave", () => {
  devCard.style.transform = "";
});


/* ─── SECTION PARALLAX ORBS ON MOUSE MOVE ────────────────────────────── */
document.addEventListener("mousemove", (e) => {
  const orbs = document.querySelectorAll(".orb");
  const xFrac = (e.clientX / window.innerWidth  - 0.5);
  const yFrac = (e.clientY / window.innerHeight - 0.5);
  orbs.forEach((orb, i) => {
    const depth = (i % 3 + 1) * 10;
    orb.style.transform = `translate(${xFrac * depth}px, ${yFrac * depth}px)`;
  });
});


/* ─── FEATURE CARD HOVER — snappier spring on enter, smooth on leave ─── */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transition =
      "opacity 0.5s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transition =
      "opacity 0.5s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease";
  });
});
