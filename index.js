const btnsToggleMode = document.querySelectorAll(".btn-toggle-mode");
const btnsLanguageSwitcher = document.querySelectorAll(".language-switcher");
const DEFAULT_LANG = "es";
const btnOpenMenu = document.getElementById("btn-open-menu");
let menuOpen = false;
let resultMessageOpen = false;
const overlay = document.getElementById("overlay");
const menuMobile = document.getElementById("menu-mobile");
const form = document.getElementById("form");
const closeMessageBtn = document.getElementById("close-message-btn");
const messageResult = document.getElementById("message-result");
const messageText = document.getElementById("message-text");
const successIcon = document.getElementById("success-icon");
const errorIcon = document.getElementById("error-icon");

function isDarkMode() {
  const mode = localStorage.getItem("mode");
  if (mode && mode === "dark") return true;
  return false;
}

function setMode(mode) {
  localStorage.setItem("mode", mode);
  const sunIcons = document.querySelectorAll(".sun-icon");
  const moonIcons = document.querySelectorAll(".moon-icon");
  if (mode) {
    if (mode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("mode", "dark");
      sunIcons.forEach((icon) => (icon.style.display = "block"));
      moonIcons.forEach((icon) => (icon.style.display = "none"));
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("mode", "light");
      sunIcons.forEach((icon) => (icon.style.display = "none"));
      moonIcons.forEach((icon) => (icon.style.display = "block"));
    }
  }
}

if (btnsToggleMode) {
  btnsToggleMode.forEach((btnToggleMode) => {
    btnToggleMode.addEventListener("click", () => {
      const mode = isDarkMode() ? "light" : "dark";
      setMode(mode);
    });
  });
}

async function loadLanguage(lang = "es") {
  try {
    const response = await fetch(`/lang/${lang.toLowerCase()}.json`);
    const translations = await response.json();
    // Update project card buttons and projects after loading new language
    renderProjectCardButtons();
    renderprojects();
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const KEY = element.getAttribute("data-i18n");
      if (translations[KEY]) {
        element.textContent = translations[KEY];
      }
    });
  } catch (error) {
    console.error("Error while loading language and translations", error);
  }
}

if (btnsLanguageSwitcher) {
  btnsLanguageSwitcher.forEach((btnLanguageSwitcher) => {
    btnLanguageSwitcher.addEventListener("change", (e) => {
      const LANG = e.target.value;
      loadLanguage(LANG);
      localStorage.setItem("lang", LANG);
    });
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    menuMobile.style.display = "none";
    messageResult.style.display = "none";
    menuOpen = false;
    resultMessageOpen = false;
    overlay.style.display = "none";
  });
}

if (closeMessageBtn) {
  closeMessageBtn.addEventListener("click", () => {
    resultMessageOpen = false;
    if (overlay) overlay.style.display = "none";
    if (messageResult) messageResult.style.display = "none";
  });
}

if (btnOpenMenu) {
  btnOpenMenu.addEventListener("click", () => {
    menuOpen = !menuOpen;
    menuOpen
      ? (overlay.style.display = "block")
      : (overlay.style.display = "none");
    menuMobile.style.display = menuOpen ? "flex" : "none";
    console.log(menuOpen);
  });
}

function initMode() {
  const mode = isDarkMode() ? "dark" : "light";
  setMode(mode);
}

function initLang() {
  const lang = localStorage.getItem("lang") || DEFAULT_LANG;
  loadLanguage(lang);
  if (btnsLanguageSwitcher) {
    btnsLanguageSwitcher.forEach((btnLanguageSwitcher) => {
      btnLanguageSwitcher.value = lang;
    });
  }
}

let projects = [
  { id: 4, level: 1 },
  { id: 3, level: 2 },
  { id: 2, level: 3 },
  { id: 1, level: 4 },
];
const projectCardsContainer = document.getElementById(
  "project-cards-container"
);
const projectselection = document.getElementById("project-selection");
async function getProjectTranslations(id) {
  const LANG = (await localStorage.getItem("lang"))
    ? localStorage.getItem("lang")
    : DEFAULT_LANG;
  let translations = {};
  try {
    const response = await fetch(`/lang/${LANG}.json`);
    const allTranslations = await response.json();
    const KEY = `project-${id}`;
    translations = allTranslations[KEY];
  } catch (error) {
    console.error("Error while loading language and translations", error);
  }
  return translations;
}
async function renderProjectCard(id, x_percent = 0, y_percent = 0) {
  if (!projectCardsContainer) return;

  const translations = await getProjectTranslations(id);
  if (!translations) return;
  const projectCard = document.createElement("div");
  projectCard.style.translate = `${x_percent}% ${y_percent}%`;
  projectCard.classList.add("project-card");
  projectCard.innerHTML = `
        <h3>${translations.title}</h3>
        <p>${translations.description}</p>
    `;
  projectCardsContainer.appendChild(projectCard);
}

function pickProject(id) {
  const chosen_project = projects.find((p) => p.id === id);
  if (!chosen_project) return;
  projects = projects.filter((p) => p.id !== id);
  let level = 1;
  projects = projects.map((p) => {
    p.level = level;
    level++;
    return p;
  });
  chosen_project.level = level++;
  projects.push(chosen_project);
  renderprojects();
  projectCardsContainer.classList.add("fade-in");
  setTimeout(() => {
    projectCardsContainer.classList.remove("fade-in");
  }, 300);
}

function renderprojects() {
  let x_percent = 0;
  let y_percent = 0;
  projects = projects.sort((a, b) => a.level - b.level);
  if (projectCardsContainer) projectCardsContainer.innerHTML = "";
  projects.forEach((project) => {
    renderProjectCard(project.id, x_percent, y_percent);
    x_percent += 2;
    y_percent += 10;
  });
}

function renderProjectCardButtons() {
  if (!projectselection) return;
  let projects_sorted = projects.sort((a, b) => a.id - b.id);
  projectselection.innerHTML = "";
  projects_sorted.forEach((project) => {
    const button = document.createElement("button");
    button.textContent = project.id;
    button.classList.add("project-button");
    button.addEventListener("click", () => {
      pickProject(project.id);
      document
        .querySelectorAll(".project-button")
        .forEach((btn) => btn.classList.remove("project-button-active"));
      button.classList.add("project-button-active");
    });
    projectselection.appendChild(button);
  });
  const div = document.createElement("div");
  div.id = "line";
  const div2 = document.createElement("div");
  div2.id = "project-shape";
  projectselection.appendChild(div);
  projectselection.appendChild(div2);
}

document.addEventListener("DOMContentLoaded", () => {
  initMode();
  initLang();

  if (form) {
    form.addEventListener("submit", async (e) => {
      try {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const email = document.getElementById("email").value.trim();
        const time = new Date().toLocaleString();
        let params = {
          name: name,
          subject: subject,
          message: message,
          email: email,
          time: time,
        };

        const result = await emailjs.send(
          "service_r8z1b8l",
          "template_2ur7fou",
          params
        );
        console.log("Email sent successfully", result);
        successIcon.style.display = "inline";
        errorIcon.style.display = "none";
        messageText.textContent = "Message sent successfully!";
        form.reset();
      } catch (error) {
        console.error("Error sending email" + JSON.stringify(error));
        successIcon.style.display = "none";
        errorIcon.style.display = "inline";
        messageText.textContent = "Error sending message, try again later.";
      }
      if (overlay) overlay.style.display = "flex";
      if (messageResult) messageResult.style.display = "flex";
      resultMessageOpen = true;
      setTimeout(() => {
        if (resultMessageOpen) {
          resultMessageOpen = false;
          if (overlay) overlay.style.display = "none";
          if (messageResult) messageResult.style.display = "none";
          successIcon.style.display = "none";
          errorIcon.style.display = "none";
          messageText.textContent = "";
        }
      }, 3500);
    });
  }
});
