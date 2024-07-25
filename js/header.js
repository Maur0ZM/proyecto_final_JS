const header = document.createElement("header");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

const contPaginas = {
    inicio: `<li><a href="/proyecto_final_JS/">Inicio</a></li>
             <li><a href="/proyecto_final_JS/pages/productos.html">Productos</a></li>
             <li><a href="/proyecto_final_JS/pages/contacto.html">Contacto</a></li>
             <li><a href="/proyecto_final_JS/pages/carrito.html"><img src="/proyecto_final_JS/assets/img/carrito.png" alt=""></a></li>
    `,
    productos: `<li><a href="/proyecto_final_JS/">Inicio</a></li>
                <li><a href="/proyecto_final_JS/pages/productos.html">Productos</a></li>
                <li><a href="/proyecto_final_JS/pages/contacto.html">Contacto</a></li>
                <li><a href="/proyecto_final_JS/pages/carrito.html"><img src="/proyecto_final_JS/assets/img/carrito.png" alt=""></a></li>
    `,
    contacto: `<li><a href="/proyecto_final_JS/">Inicio</a></li>
               <li><a href="/proyecto_final_JS/pages/productos.html">Productos</a></li>
               <li><a href="/proyecto_final_JS/pages/contacto.html">Contacto</a></li>
               <li><a href="/proyecto_final_JS/pages/carrito.html"><img src="/proyecto_final_JS/assets/img/carrito.png" alt=""></a></li>
    `,
    carrito: `<li><a href="/proyecto_final_JS/">Inicio</a></li>
              <li><a href="/proyecto_final_JS/pages/productos.html">Productos</a></li>
              <li><a href="/proyecto_final_JS/pages/contacto.html">Contacto</a></li>
              <li><a href="/proyecto_final_JS/pages/carrito.html"><img src="/proyecto_final_JS/assets/img/carrito.png" alt=""></a></li>
    `
};

header.appendChild(nav);
document.body.appendChild(header);

// Agregar clases
header.classList.add("header");
nav.classList.add("nav");
ul.classList.add("ul");

switch (window.location.pathname) {
    case '/proyecto_final_JS/index.html':
    case '/proyecto_final_JS/':
        ul.innerHTML = contPaginas.inicio;
        break;
    case '/proyecto_final_JS/pages/productos.html':
        ul.innerHTML = contPaginas.productos;
        break;
    case '/proyecto_final_JS/pages/contacto.html':
        ul.innerHTML = contPaginas.contacto;
        break;
    case '/proyecto_final_JS/pages/carrito.html':
        ul.innerHTML = contPaginas.carrito;
        break;
    default:
        ul.innerHTML = contPaginas.inicio; // Valor por defecto si no se encuentra la ruta
}

// Añadir ul al nav
nav.appendChild(ul);


