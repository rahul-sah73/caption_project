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
const nameInput  = document.getElementById("name");
const emailInput = document.getElementById("email");
const signupBtn  = document.getElementById("signupBtn");
const successMsg = document.getElementById("successMsg");

const nameError  = document.createElement("small");
nameError.className = "field-error";
nameInput.after(nameError);

const emailError = document.createElement("small");
emailError.className = "field-error";
emailInput.after(emailError);

const passError  = document.createElement("small");
passError.className = "field-error";
password.after(passError);

/* Password strength bar */
const strengthWrap = document.createElement("div");
strengthWrap.className = "strength-wrap";
strengthWrap.innerHTML = `<div class="strength-bar"><div class="strength-fill" id="strengthFill"></div></div>
<span class="strength-label" id="strengthLabel"></span>`;
password.closest(".password-box").after(strengthWrap);


/* ─── EMAIL VALIDATOR ─────────────────────────────────────────────────── */
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
  if (local.includes("..") || domain.includes("..") || !domain.includes(".")) return false;
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


/* ─── NAME VALIDATOR ──────────────────────────────────────────────────── */
function isValidName(name) { return /^[A-Za-z ]+$/.test(name.trim()) && name.trim().length > 0; }


/* ─── PASSWORD VALIDATOR ─────────────────────────────────────────────────
   Requirements: min 6 chars, at least one uppercase, one lowercase, one digit */
function isValidPassword(pass) {
  return pass.length >= 6 &&
         /[A-Z]/.test(pass) &&
         /[a-z]/.test(pass) &&
         /[0-9]/.test(pass);
}

function getPasswordError(pass) {
  if (pass.length === 0)       return "";
  if (pass.length < 6)         return "At least 6 characters required";
  if (!/[A-Z]/.test(pass))     return "Must include at least one uppercase letter (A–Z)";
  if (!/[a-z]/.test(pass))     return "Must include at least one lowercase letter (a–z)";
  if (!/[0-9]/.test(pass))     return "Must include at least one number (0–9)";
  return "";
}

function getPasswordStrength(pass) {
  let score = 0;
  if (pass.length >= 6)               score++;
  if (pass.length >= 10)              score++;
  if (/[A-Z]/.test(pass))            score++;
  if (/[0-9]/.test(pass))            score++;
  if (/[^A-Za-z0-9]/.test(pass))     score++;
  return score;
}


/* ─── INLINE VALIDATION ─────────────────────────────────────────────────── */
nameInput.addEventListener("input", () => {
  nameError.textContent = nameInput.value === "" ? ""
    : !isValidName(nameInput.value) ? "Only letters and spaces allowed" : "";
});

emailInput.addEventListener("input", () => {
  emailError.textContent = getEmailError(emailInput.value.trim());
});

password.addEventListener("input", () => {
  passError.textContent = getPasswordError(password.value);

  /* Update strength bar */
  const fill  = document.getElementById("strengthFill");
  const label = document.getElementById("strengthLabel");
  if (!fill) return;
  const score = getPasswordStrength(password.value);
  const pct   = password.value.length === 0 ? 0 : Math.max(20, score * 20);
  const colors = ["#e74c3c","#e74c3c","#f39c12","#2ecc71","#27ae60","#1abc9c"];
  const labels = ["","Weak","Weak","Fair","Strong","Very Strong"];
  fill.style.width = pct + "%";
  fill.style.background = colors[score];
  label.textContent = password.value.length > 0 ? labels[score] : "";
  label.style.color = colors[score];
});


/* ─── ACCOUNT STORAGE HELPERS ────────────────────────────────────────────*/
function getAccounts() {
  return JSON.parse(localStorage.getItem("oe_accounts") || "{}");
}
function saveAccount(email, pass) {
  const accounts = getAccounts();
  accounts[email.toLowerCase()] = pass;
  localStorage.setItem("oe_accounts", JSON.stringify(accounts));
}
function accountExists(email) {
  return email.toLowerCase() in getAccounts();
}


/* ─── REDIRECT AFTER SIGNUP → LOGIN ─────────────────────────────────────*/
function redirectToLogin() {
  document.body.classList.add("page-exit");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 380);
}


/* ─── SIGNUP BUTTON ─────────────────────────────────────────────────────── */
signupBtn.addEventListener("click", function () {
  const nameErr  = !isValidName(nameInput.value) ? "Only letters and spaces allowed" : "";
  const emailErr = getEmailError(emailInput.value.trim());
  const passErr  = getPasswordError(password.value);

  if (nameErr)  { nameError.textContent  = nameErr;  return; }
  if (emailErr) { emailError.textContent = emailErr; return; }
  if (passErr)  { passError.textContent  = passErr;  return; }

  /* Also check empty password */
  if (!password.value) { passError.textContent = "Password is required"; return; }

  if (accountExists(emailInput.value)) {
    successMsg.textContent = "Email already registered. Please login.";
    successMsg.className   = "success error-msg";
    return;
  }

  signupBtn.classList.add("btn-pulse");
  setTimeout(() => signupBtn.classList.remove("btn-pulse"), 600);

  saveAccount(emailInput.value, password.value);

  successMsg.textContent = "Account created! Taking you to login… 🎉";
  successMsg.className   = "success success-anim";
  setTimeout(redirectToLogin, 1400);
});


/* ─── TYPING EFFECT ─────────────────────────────────────────────────────── */
const textElement = document.getElementById("typingText");
const text  = "Welcome to OtakuEats";
let   index = 0;

function typeEffect() {
  if (index <= text.length) {
    textElement.textContent = text.substring(0, index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();
