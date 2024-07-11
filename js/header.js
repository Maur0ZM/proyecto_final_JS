
const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

const contPaginas = {
        inicio:`<li><a href="">Inicio</a></li>
                <li><a href="./pages/productos.html">Productos</a></li>
                <li><a href="./pages/contacto.html">Contacto</a></li>
                <li><a href="./pages/ubicacion.html">Ubicación</a></li>
                <li><a href="./pages/sesion.html">Inicio de sesión</a></li>
    `,
        productos:`<li><a href="../index.html">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li><a href="ubicacion.html">Ubicación</a></li>
                    <li><a href="sesion.html">Inicio de sesión</a></li>
    `,
        contacto: `<li><a href="../index.html">Inicio</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href="ubicacion.html">Ubicación</a></li>
                    <li><a href="sesion.html">Inicio de sesión</a></li>
    `,
        ubicacion: `<li><a href="../index.html">Inicio</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li><a href="">Ubicación</a></li>
                    <li><a href="sesion.html">Inicio de sesión</a></li>
    `,  
        sesion: `   <li><a href="../index.html">Inicio</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li><a href="ubicacion.html">Ubicación</a></li>
                    <li><a href="">Inicio de sesión</a></li>
    `
}

header.appendChild(nav);
body.appendChild(header);

//Agregando clases
header.classList.add("header");
nav.classList.add("nav");
ul.classList.add("ul");

switch (window.location.pathname) {
    case '/index.html':
    case '/':  
        ul.innerHTML = contPaginas.inicio;
        break;
    case '/pages/productos.html':
        ul.innerHTML = contPaginas.productos;
        break;
    case '/pages/contacto.html':
        ul.innerHTML = contPaginas.contacto;
        break;
    case '/pages/ubicacion.html':
        ul.innerHTML = contPaginas.ubicacion;
        break;
    case '/pages/sesion.html':
        ul.innerHTML = contPaginas.sesion;
        break;
    default:
        ul.innerHTML = contPaginas.inicio;  // Valor por defecto si no se encuentra la ruta
}

// Añadir ul al nav
nav.appendChild(ul);

nav.appendChild(ul);

