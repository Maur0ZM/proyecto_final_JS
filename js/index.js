Swal.fire({
    title: "Para ver solo siguientes productos haz click en la imagen",
    showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
        `
    },
    hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
        `
    }
});


const body = document.getElementById("body");
const indexCont = document.createElement("section");
const carruselCont = document.createElement("div");
const imagenIndex = document.createElement("img");
const imagenIndex2 = document.createElement("img");
const infoBtn = document.createElement("button");

indexCont.classList.add("indexCont");
carruselCont.classList.add("carruselCont");
imagenIndex.classList.add("imagenIndex");
imagenIndex2.classList.add("imagenIndex2");

imagenIndex2.src = "./assent/img/celulares.png";

infoBtn.textContent = "Más información del celular";

infoBtn.style = "display: block; width: 100px; border-radius: 5px;"

body.appendChild(indexCont);
indexCont.appendChild(imagenIndex2);
indexCont.appendChild(carruselCont);
carruselCont.appendChild(imagenIndex);
indexCont.appendChild(infoBtn);

let currentIndex = 0;
let productos = [];

// Función para mostrar el carrusel
const mostrarCarrusel = () => {
    if (productos.length === 0) {
        console.warn("No hay productos para mostrar en el carrusel.");
        return;
    }

    const productoActual = productos[currentIndex];
    imagenIndex.src = productoActual.imagen;
    imagenIndex.alt = productoActual.nombre;

    // Mostrar el botón al hacer clic en la imagen
    imagenIndex.addEventListener("click", () => {
        siguienteProducto();
    });

    // Mostrar información detallada del celular al hacer clic en el botón
    infoBtn.addEventListener("click", () => {
        Swal.fire({
            title: productoActual.nombre,
            html: `
                <img src="${productoActual.imagen}" style="max-width: 100%; height: auto;" />
                <p><strong>Precio:</strong> $${productoActual.precio}</p>
                <p><strong>Condicion:</strong> ${productoActual.condicion}</p>
                <p><strong>Tienda oficial:</strong> ${productoActual.tiendaOficial}</p>
                <a href="${productoActual.linkMercadoLibre}" class="enlace-estilizado" target="_blank">Más informacion en mercadolibre.com</a>
            `,
            showCloseButton: true,
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
    });
};

// Función para avanzar al siguiente producto
const siguienteProducto = () => {
    currentIndex = (currentIndex + 1) % productos.length;
    mostrarCarrusel();
};

const peticionMLinicial = async () => {
    try {
        const respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celulares`);
        const datos = await respuesta.json();
        const data = datos.results;

        productos = data.map(item => ({
            nombre: item.title,
            precio: item.price,
            imagen: item.thumbnail,
            condicion: item.condition,
            linkMercadoLibre: item.permalink,
            tiendaOficial: item.official_store_name
         // Puedes ajustar esto según la estructura de los datos
        }));
        mostrarCarrusel();

    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
};

peticionMLinicial();
