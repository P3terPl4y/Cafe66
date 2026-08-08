document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid-3');
    if (!grid) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento está al menos al 50% visible en el viewport
            if (entry.intersectionRatio >= 0.5) {
                grid.classList.add('visible');
            } else {
                // (opcional) si quieres que vuelva a ocultarse al salir:
                // grid.classList.remove('visible');
            }
        });
    }, {
        threshold: [0.5] // se activa cuando el 50% del elemento es visible
        // rootMargin: '0px', // ajusta si quieres un margen adicional
    });

    observer.observe(grid);
});