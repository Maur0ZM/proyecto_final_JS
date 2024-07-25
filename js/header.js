
const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

const contPaginas = {
        inicio:`<li><a href="#">Inicio</a></li>
                <li><a href="./pages/productos.html">Productos</a></li>
                <li><a href="./pages/contacto.html">Contacto</a></li>
                <li><a href="./pages/carrito.html"><img src="./assent/img/carrito.png" alt=""></a></li>

    `,
        productos:`<li><a href="../index.html">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li><a href="carrito.html"><img src="../assent/img/carrito.png" alt=""></a></li>

    `,
        contacto: `<li><a href="../index.html">Inicio</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="carrito.html"><img src="../assent/img/carrito.png" alt=""></a></li>

    `, 
        carrito: `  <li><a href="../index.html">Inicio</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    <li><a href="#"><img src="../assent/img/carrito.png" alt=""></a></li>
    `
}

header.appendChild(nav);
body.appendChild(header);

//Agregando clases
header.classList.add("header");
nav.classList.add("nav");
ul.classList.add("ul");

switch (window.location.pathname) {
    case './index.html':
    case '/':  
        ul.innerHTML = contPaginas.inicio;
        break;
    case './pages/productos.html':
        ul.innerHTML = contPaginas.productos;
        break;
    case './pages/contacto.html':
        ul.innerHTML = contPaginas.contacto;
        break;
    case './pages/carrito.html':
        ul.innerHTML = contPaginas.carrito;
        break;
    default:
        ul.innerHTML = contPaginas.inicio;  // Valor por defecto si no se encuentra la ruta
}

// Añadir ul al nav
nav.appendChild(ul);



