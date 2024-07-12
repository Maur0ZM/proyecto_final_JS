document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement("footer");
    footer.className = "footer";

    // Contenido del footer
    footer.innerHTML = `
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <nav>
            ${generateFooterLinks()} <!-- Generar los enlaces del footer según la página actual -->
        </nav>
    `;

    document.body.appendChild(footer);
});

// Función para generar los enlaces del footer según la página actual
function generateFooterLinks() {
    const currentPath = window.location.pathname;

    switch (currentPath) {
        case '/index.html':
        case '/':
            return `
                <a href="../index.html">Inicio</a>
                <a href="./pages/productos.html">Productos</a>
                <a href="./pages/contacto.html">Contacto</a>
            `;
        case '/pages/productos.html':
            return `
                <a href="../index.html">Inicio</a>
                <a href="./productos.html">Productos</a>
                <a href="./contacto.html">Contacto</a>
            `;
        case '/pages/contacto.html':
            return `
                <a href="../index.html">Inicio</a>
                <a href="./productos.html">Productos</a>
                <a href="#">Contacto</a>
            `;
        case '/pages/carrito.html':
            return `
                <a href="../index.html">Inicio</a>
                <a href="./productos.html">Productos</a>
                <a href="./contacto.html">Contacto</a>
            `;
        default:
            return `
                <a href="../index.html">Inicio</a>
                <a href="./productos.html">Productos</a>
                <a href="./pages/contacto.html">Contacto</a>
            `;
    }
}
