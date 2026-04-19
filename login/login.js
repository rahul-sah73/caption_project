/* ─── PASSWORD TOGGLE ─────────────────────────────────────────────────── */
const password = document.getElementById("password");
const toggle   = document.getElementById("toggle");

toggle.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    toggle.classList.replace("ri-eye-line", "ri-eye-off-line");
  } else {
    password.type = "password";
    toggle.classList.replace("ri-eye-off-line", "ri-eye-line");
  }
});


/* ─── ELEMENTS ─────────────────────────────────────────────────────────── */
const emailInput = document.getElementById("email");
const loginBtn   = document.getElementById("loginBtn");
const welcomeMsg = document.getElementById("welcomeMsg");

const emailError = document.createElement("small");
emailError.className = "field-error";
emailInput.after(emailError);

const passError = document.createElement("small");
passError.className = "field-error";
password.after(passError);


/* ─── EMAIL VALIDATOR ────────────────────────────────────────────────────
   Rules:
   • Must have exactly one @
   • Local part: letters, digits, dots, +, -, _ (no leading/trailing dot, no ..)
   • Domain: letters/digits/hyphens, at least one dot
   • TLD: must be in the VALID_TLDS allowlist                             */
const VALID_TLDS = new Set([
  /* Generic */
  "com","net","org","edu","gov","mil","int","info","biz","name","pro","aero",
  "coop","museum","mobi","tel","travel","jobs","post","xxx","cat","app","dev",
  "web","blog","shop","store","online","site","tech","media","news","cloud",
  "email","host","live","io","co","ai","tv","me","us",
  /* Country codes - commonly used */
  "ac","ad","ae","af","ag","ai","al","am","ao","aq","ar","as","at","au","aw",
  "ax","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bl","bm","bn","bo",
  "bq","br","bs","bt","bv","bw","by","bz","ca","cc","cd","cf","cg","ch","ci",
  "ck","cl","cm","cn","cr","cu","cv","cw","cx","cy","cz","de","dj","dk","dm",
  "do","dz","ec","ee","eg","er","es","et","eu","fi","fj","fk","fm","fo","fr",
  "ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs",
  "gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in",
  "io","iq","ir","is","it","je","jm","jo","jp","ke","kg","kh","ki","km","kn",
  "kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv",
  "ly","ma","mc","md","me","mf","mg","mh","mk","ml","mm","mn","mo","mp","mq",
  "mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni",
  "nl","no","np","nr","nu","nz","om","pa","pe","pf","pg","ph","pk","pl","pm",
  "pn","pr","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc",
  "sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","ss","st","su",
  "sv","sx","sy","sz","tc","td","tf","tg","th","tj","tk","tl","tm","tn","to",
  "tr","tt","tv","tw","tz","ua","ug","uk","um","us","uy","uz","va","vc","ve",
  "vg","vi","vn","vu","wf","ws","ye","yt","za","zm","zw",
  /* New gTLDs - popular ones */
  "academy","accountant","accountants","actor","adult","agency","airforce",
  "apartments","army","associates","attorney","auction","audio","band",
  "bargains","bike","black","blue","boutique","build","builders","business",
  "buzz","cab","camera","camp","capital","cards","care","careers","cash",
  "casino","catering","center","chat","cheap","christmas","church","city",
  "claims","cleaning","click","clinic","clothing","coach","codes","coffee",
  "community","company","computer","condos","construction","consulting",
  "contact","contractors","cool","coupons","credit","cruises","dance","dating",
  "deals","degree","democrat","dental","design","diamonds","digital","direct",
  "directory","discount","dog","domains","education","energy","engineering",
  "enterprises","equipment","estate","events","exchange","expert","exposed",
  "express","fail","farm","finance","financial","fish","fitness","flights",
  "florist","flowers","football","forsale","foundation","fun","fund","furniture",
  "fyi","gallery","games","gifts","glass","global","graphics","gratis","green",
  "gripe","guide","guru","healthcare","help","hockey","holdings","holiday",
  "homes","house","immo","industries","institute","insure","investments",
  "kitchen","land","lease","legal","life","lighting","limited","limo","link",
  "loan","loans","maison","management","marketing","mba","media","memorial",
  "mobile","moda","money","mortgage","network","ninja","partners","parts",
  "photography","photos","pictures","pizza","place","plumbing","plus","press",
  "productions","properties","pub","realty","recipes","red","rehab","rentals",
  "repair","report","republican","restaurant","reviews","rip","rocks","run",
  "sale","sarl","school","services","shoes","soccer","social","solar",
  "solutions","studio","style","support","surgery","systems","tax","taxi",
  "team","technology","tennis","theater","tips","today","tools","tours","town",
  "training","university","vacations","ventures","video","vision","voyage",
  "watch","website","wiki","works","world","wtf","yoga","zone"
]);

function isValidEmail(email) {
  const re = /^[a-zA-Z0-9]([a-zA-Z0-9._%+\-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) return false;
  if ((email.match(/@/g) || []).length !== 1) return false;
  const [local, domain] = email.split("@");
  if (local.includes("..")) return false;
  if (domain.includes("..") || !domain.includes(".")) return false;
  const tld = domain.split(".").pop().toLowerCase();
  if (!VALID_TLDS.has(tld)) return false;
  return true;
}

function getEmailError(email) {
  if (!email) return "";
  if (!email.includes("@"))                        return "Email must contain @";
  if ((email.match(/@/g)||[]).length > 1)          return "Only one @ allowed";
  const [local, domain] = email.split("@");
  if (!local)                                      return "Enter something before @";
  if (!domain || !domain.includes("."))            return "Enter a valid domain (e.g. gmail.com)";
  const tld = domain.split(".").pop().toLowerCase();
  if (!tld || tld.length < 2)                      return "TLD too short (e.g. .com, .in)";
  if (!/^[a-zA-Z]+$/.test(tld))                   return "TLD must contain only letters";
  if (!VALID_TLDS.has(tld))                        return `".${tld}" is not a recognised TLD — check your email`;
  if (!isValidEmail(email))                        return "Invalid email format";
  return "";
}


/* ─── PASSWORD VALIDATOR ─────────────────────────────────────────────────
   Requirements: min 6 chars, at least one uppercase, one lowercase, one digit */
function isValidPassword(pass) {
  return pass.length >= 6 &&
         /[A-Z]/.test(pass) &&
         /[a-z]/.test(pass) &&
         /[0-9]/.test(pass);
}

function getPasswordError(pass) {
  if (!pass) return "";
  if (pass.length < 6)         return "Minimum 6 characters required";
  if (!/[A-Z]/.test(pass))     return "Must include at least one uppercase letter";
  if (!/[a-z]/.test(pass))     return "Must include at least one lowercase letter";
  if (!/[0-9]/.test(pass))     return "Must include at least one number";
  return "";
}


/* ─── INLINE VALIDATION ─────────────────────────────────────────────────── */
emailInput.addEventListener("input", function () {
  emailError.textContent = getEmailError(emailInput.value.trim());
});

password.addEventListener("input", function () {
  passError.textContent = password.value.trim() === "" ? "" : getPasswordError(password.value);
});


/* ─── ACCOUNT STORAGE HELPERS ─────────────────────────────────────────── */
function getAccounts() {
  return JSON.parse(localStorage.getItem("oe_accounts") || "{}");
}
function accountExists(email) {
  return email.toLowerCase() in getAccounts();
}
function passwordMatches(email, pass) {
  return getAccounts()[email.toLowerCase()] === pass;
}

/* ─── SESSION HELPERS ─────────────────────────────────────────────────── */
function setLoggedIn(email) {
  localStorage.setItem("oe_loggedIn", "true");
  localStorage.setItem("oe_loggedInEmail", email.toLowerCase());
}

function isLoggedIn() {
  return localStorage.getItem("oe_loggedIn") === "true";
}


/* ─── IF ALREADY LOGGED IN → SKIP LOGIN PAGE ─────────────────────────── */
if (isLoggedIn()) {
  const dest = getDestination();
  sessionStorage.removeItem("pendingRestaurant");
  sessionStorage.removeItem("oe_pendingKey");
  sessionStorage.removeItem("oe_pendingDest");
  sessionStorage.removeItem("pendingRestaurantFolder");
  sessionStorage.removeItem("pendingRestaurantFile");
  if (dest && dest.dest) {
    window.location.href = `../${dest.dest}`;
  } else {
    window.location.href = "../index.html";
  }
}


/* ─── PENDING RESTAURANT ──────────────────────────────────────────────── */
function getDestination() {
  /* Uses oe_pendingDest set by goToRestaurant() in script.js */
  const dest = sessionStorage.getItem("oe_pendingDest");
  const name = sessionStorage.getItem("pendingRestaurant");
  return dest ? { dest, name } : null;
}

function redirectAfterLogin(email) {
  setLoggedIn(email);
  const dest = getDestination();
  /* Clear ALL pending keys */
  sessionStorage.removeItem("pendingRestaurant");
  sessionStorage.removeItem("oe_pendingKey");
  sessionStorage.removeItem("oe_pendingDest");
  sessionStorage.removeItem("pendingRestaurantFolder");
  sessionStorage.removeItem("pendingRestaurantFile");

  document.body.classList.add("page-exit");
  setTimeout(() => {
    if (dest && dest.dest) {
      /* dest.dest = "res_name/restaurant/restaurant.html?r=key"
         login.js is inside login/ so we go up one level: ../  */
      window.location.href = `../${dest.dest}`;
    } else {
      window.location.href = "../index.html";
    }
  }, 380);
}


/* ─── PENDING BANNER ──────────────────────────────────────────────────── */
(function showPendingBanner() {
  const dest = getDestination();
  if (!dest) return;
  const banner   = document.getElementById("pendingBanner");
  const label    = document.getElementById("pendingLabel");
  const closeBtn = document.getElementById("bannerClose");
  if (banner && label) {
    label.textContent = dest.name;
    banner.classList.add("visible");
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      banner.classList.remove("visible");
      sessionStorage.removeItem("pendingRestaurant");
      sessionStorage.removeItem("oe_pendingKey");
      sessionStorage.removeItem("oe_pendingDest");
      sessionStorage.removeItem("pendingRestaurantFolder");
      sessionStorage.removeItem("pendingRestaurantFile");
    });
  }
})();


/* ─── LOGIN BUTTON ──────────────────────────────────────────────────────── */
loginBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();
  const pass  = password.value;

  const emailErr = getEmailError(email);
  const passErr  = getPasswordError(pass);

  if (emailErr) { emailError.textContent = emailErr; return; }
  if (passErr)  { passError.textContent  = passErr;  return; }

  loginBtn.classList.add("btn-pulse");
  setTimeout(() => loginBtn.classList.remove("btn-pulse"), 600);

  if (accountExists(email)) {
    if (passwordMatches(email, pass)) {
      welcomeMsg.textContent = "Welcome back! Redirecting… 🍜";
      welcomeMsg.className   = "welcome success-anim";
      setTimeout(() => redirectAfterLogin(email), 1200);
    } else {
      welcomeMsg.textContent = "Wrong password. Try again.";
      welcomeMsg.className   = "welcome error-msg";
      password.classList.add("shake");
      setTimeout(() => password.classList.remove("shake"), 500);
    }
  } else {
    welcomeMsg.innerHTML = `No account found. <a href="signup.html" class="inline-link">Create one →</a>`;
    welcomeMsg.className = "welcome warn-msg";
  }
});


/* ─── TYPING EFFECT ─────────────────────────────────────────────────────── */
const textElement = document.getElementById("typingText");
const text  = "WELCOME BACK";
let   index = 0;

function typeEffect() {
  if (index <= text.length) {
    textElement.textContent = text.substring(0, index);
    index++;
    setTimeout(typeEffect, index === 8 ? 500 : 100);
  }
}
typeEffect();
