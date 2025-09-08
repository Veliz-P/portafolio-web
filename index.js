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
        const transalations = await response.json();
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const KEY = element.getAttribute('data-i18n');
            if(transalations[KEY]){
                element.textContent = transalations[KEY];
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


document.addEventListener('DOMContentLoaded', () => {
    initMode();
    initLang();
})