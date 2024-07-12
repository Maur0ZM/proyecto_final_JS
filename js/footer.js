document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement("footer");
    footer.className = "footer";

    footer.innerHTML = `
        <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        <nav>
            <a href="../index.html">Inicio</a>
            <a href="ubicacion.html">Ubiación</a>
            <a href="contacto.html">Contacto</a>
        </nav>
    `;

    document.body.appendChild(footer);
});
