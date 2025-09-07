const btnToggleMode = document.getElementById('btn-toggle-mode');
const btnLanguageSwitcher = document.getElementById('language-switcher');
const DEFAULT_LANG = 'es';

function isDarkMode (){
    const mode = localStorage.getItem('mode');
    if(mode && mode === 'dark') return true;
    return false;
}

function setMode(mode){
    localStorage.setItem('mode', mode);
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if(mode){
        if(mode === 'dark'){
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('mode', 'dark');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }else{
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('mode', 'light');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }
}

if(btnToggleMode){
    btnToggleMode.addEventListener('click', () => {
        const mode = isDarkMode() ? 'light' : 'dark';
        setMode(mode);
    });
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

if(btnLanguageSwitcher){
    btnLanguageSwitcher.addEventListener('change', (e) => {
        const LANG = e.target.value;
        loadLanguage(LANG);
        localStorage.setItem('lang', LANG);
    })
}

function initMode(){
    const mode = isDarkMode() ? 'dark' : 'light';
    setMode(mode);
}

function initLang(){
    const lang = localStorage.getItem('lang') || DEFAULT_LANG;
    loadLanguage(lang);
    if(btnLanguageSwitcher){
        btnLanguageSwitcher.value = lang;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initMode();
    initLang();
})