const btnToggleMode = document.getElementById('btn-toggle-mode');

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

function initMode(){
    const mode = isDarkMode() ? 'dark' : 'light';
    setMode(mode);
}

initMode();