const ToggleSwitch = document.querySelector('.theme-slider input[type="checkbox"]');
const Root = document.querySelector(':root');
const theme = window.localStorage.getItem("theme");

if (theme == 'dark') {
    ToggleSwitch.checked = true;
} else {
    ToggleSwitch.checked = false;
}
checked();

ToggleSwitch.addEventListener('click', checked);

function checked() {
    if (ToggleSwitch.checked) {
        Root.style.setProperty('--color-bg', 'var(--color-dark-bg)');
        Root.style.setProperty('--color-primary', 'var(--color-dark-primary)');
        Root.style.setProperty('--color-other', 'var(--color-dark-other)');
        Root.style.setProperty('--color-text', 'var(--color-dark-text)');
        localStorage.setItem('theme', 'dark');
        console.log('dark')
    }
    else {
        Root.style.setProperty('--color-bg', 'var(--color-light-bg)');
        Root.style.setProperty('--color-primary', 'var(--color-light-primary)');
        Root.style.setProperty('--color-other', 'var(--color-light-other)');
        Root.style.setProperty('--color-text', 'var(--color-light-text)');
        localStorage.setItem('theme', 'light');
        console.log('light')
    }
}
