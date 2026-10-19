document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.getElementById('enter-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainWebsite = document.getElementById('main-website');

    // Transición de la Pantalla de Bienvenida a la Página Interna
    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            mainWebsite.classList.remove('hidden');
            welcomeScreen.classList.add('fade-out');

            setTimeout(() => {
                welcomeScreen.style.display = 'none';
            }, 800);
        });
    }

    // Efecto interactivo para los botones de las tarjetas
    const buttons = document.querySelectorAll('.btn-card');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const cardTitle = e.target.closest('.card-body').querySelector('h3').innerText;
            alert(`Has seleccionado el emprendimiento: ${cardTitle}`);
        });
    });
});