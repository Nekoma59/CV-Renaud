const darkMode = document.getElementById('dark-mode');
const body = document.querySelector('.body');

darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    body.classList.toggle('dark');
});