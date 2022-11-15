const btn = document.querySelector('.btn');
const btnText = document.querySelector('span');
const img = ['img/day-mode.png', 'img/night-mode (1).png'];
const moon = document.querySelector('img');

if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') == 'sombre') {
        modeSombre();
    }
}



btn.addEventListener('click', () => {
    if (document.body.classList.contains('dark') === true) {
        document.body.classList.remove('dark');
        btnText.textContent = 'Thème sombre'
        moon.src = img[1];
        localStorage.setItem('theme', 'clair');
    } else {
        modeSombre();
    }
});



function modeSombre() {
    document.body.classList.add('dark');
    btnText.textContent = 'Thème clair';
    moon.src = img[0];
    localStorage.setItem('theme', 'sombre');
}

