const btnsToggleMode = document.querySelectorAll('.btn-toggle-mode');
const btnsLanguageSwitcher = document.querySelectorAll('.language-switcher');
const DEFAULT_LANG = 'es';
const btnOpenMenu = document.getElementById('btn-open-menu');
let menuOpen = false;
const overlay = document.getElementById('overlay');
const menuMobile = document.getElementById('menu-mobile');

function isDarkMode (){
    const mode = localStorage.getItem('mode');
    if(mode && mode === 'dark') return true;
    return false;
}

function setMode(mode){
    localStorage.setItem('mode', mode);
    const sunIcons = document.querySelectorAll('.sun-icon');
    const moonIcons = document.querySelectorAll('.moon-icon');
    if(mode){
        if(mode === 'dark'){
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('mode', 'dark');
            sunIcons.forEach(icon => icon.style.display = 'block');
            moonIcons.forEach(icon => icon.style.display = 'none');
        }else{
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('mode', 'light');
            sunIcons.forEach(icon => icon.style.display = 'none');
            moonIcons.forEach(icon => icon.style.display = 'block');
        }
    }
}

if(btnsToggleMode){
    btnsToggleMode.forEach(btnToggleMode => {
        btnToggleMode.addEventListener('click', () => {
            const mode = isDarkMode() ? 'light' : 'dark';
            setMode(mode);
        });
    })
}

async function loadLanguage(lang = 'es'){
    try{
        const response = await fetch(`/lang/${lang.toLowerCase()}.json`);
        const translations = await response.json();
        // Update project card buttons and projects after loading new language
        renderProjectCardButtons();
        renderprojects();
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const KEY = element.getAttribute('data-i18n');
            if(translations[KEY]){
                element.textContent = translations[KEY];
            }
        })
    }catch(error){
        console.error("Error while loading language and translations", error);
    }
}

if(btnsLanguageSwitcher){
    btnsLanguageSwitcher.forEach(btnLanguageSwitcher => {
        btnLanguageSwitcher.addEventListener('change', (e) => {
            const LANG = e.target.value;
            loadLanguage(LANG);
            localStorage.setItem('lang', LANG);
        })
    })
}

if(overlay){
    overlay.addEventListener('click', () =>{
        menuMobile.style.display = menuOpen? 'none' : 'flex';
        menuOpen = false;
        overlay.style.display = 'none';
    })
}

if(btnOpenMenu){
    btnOpenMenu.addEventListener('click', () =>{
        menuOpen = !menuOpen;
        menuOpen? overlay.style.display = 'block' : overlay.style.display = 'none';
        menuMobile.style.display = menuOpen ? 'flex' : 'none';
        console.log(menuOpen);
    });
}

function initMode(){
    const mode = isDarkMode() ? 'dark' : 'light';
    setMode(mode);
}

function initLang(){
    const lang = localStorage.getItem('lang') || DEFAULT_LANG;
    loadLanguage(lang);
    if(btnsLanguageSwitcher){
        btnsLanguageSwitcher.forEach(btnLanguageSwitcher => {
            btnLanguageSwitcher.value = lang;
        })
    }
}

let projects = [
    {id: 4, level:1},
    {id: 3, level:2},
    {id: 2, level:3},
    {id: 1, level:4},
]
const projectCardsContainer = document.getElementById('project-cards-container');
const projectselection = document.getElementById('project-selection');
async function getProjectTranslations(id){
    const LANG = await localStorage.getItem('lang')? localStorage.getItem('lang') : DEFAULT_LANG;
    let translations={};
    try{
        const response = await fetch(`/lang/${LANG}.json`);
        const allTranslations = await response.json();
        const KEY = `project-${id}`;
        translations = allTranslations[KEY];
    }catch(error){
        console.error("Error while loading language and translations", error);
    }
    return translations;
}
async function renderProjectCard(id, x_percent=0, y_percent=0){
    if (!projectCardsContainer) return;

    const translations = await getProjectTranslations(id);
    if(!translations) return;
    const projectCard = document.createElement('div');
    projectCard.style.translate = `${x_percent}% ${y_percent}%`;
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <h3>${translations.title}</h3>
        <p>${translations.description}</p>
    `;
    projectCardsContainer.appendChild(projectCard);
}

function pickProject(id){
    const chosen_project = projects.find(p => p.id === id);
    if(!chosen_project) return;
    projects = projects.filter(p => p.id !== id);
    let level = 1;
    projects = projects.map(p => {
        p.level = level;
        level++;
        return p;
    });
    chosen_project.level = level++;
    projects.push(chosen_project);
    renderprojects();
    projectCardsContainer.classList.add('fade-in');
    setTimeout(() => {
        projectCardsContainer.classList.remove('fade-in');
    }, 300);
}

function renderprojects(){
    let x_percent = 0;
    let y_percent = 0;
    projects = projects.sort((a,b) => a.level - b.level);
    if(projectCardsContainer) projectCardsContainer.innerHTML = '';
    projects.forEach(project => {
        renderProjectCard(project.id, x_percent, y_percent);
        x_percent += 2;
        y_percent += 10;
    })
}

function renderProjectCardButtons(){
    if(!projectselection) return;
    let projects_sorted = projects.sort((a,b) => a.id - b.id);
    projectselection.innerHTML = '';
    projects_sorted.forEach(project => {
        const button = document.createElement('button');
        button.textContent = project.id;
        button.classList.add('project-button');
        button.addEventListener('click', () => {
            pickProject(project.id);
            document.querySelectorAll('.project-button').forEach(btn => btn.classList.remove('project-button-active'));
            button.classList.add('project-button-active');
        });
        projectselection.appendChild(button);
    });
    const div = document.createElement('div');
    div.id = "line";
    projectselection.appendChild(div);
}


document.addEventListener('DOMContentLoaded', () => {
    initMode();
    initLang();
})