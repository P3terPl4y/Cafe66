document.addEventListener('DOMContentLoaded', () => {
    const grids = document.querySelectorAll('.grid-3'); // Todos los elementos

    if (grids.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.5) {
                entry.target.classList.add('visible');
            } else {
                // Si quieres que se oculten al salir, descomenta la siguiente línea:
                // entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 // Se activa cuando el 50% del elemento es visible
        // rootMargin: '0px 0px -10% 0px' // Opcional: ajusta el margen
    });

    grids.forEach(grid => observer.observe(grid));
});