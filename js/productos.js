const carrito = [];
const productos = [];

const body = document.getElementById("body");
const main = document.createElement("main");
const articulo = document.createElement("article");
const divBotones = document.createElement("div");
const divCont = document.createElement("div");

const nombresMarcas = {
    samsumg: "samsumg",
    apple: "apple",
    huawei: "huawei",
    xiaomi: "xiaomi",
    motorola: "motorola",
    honor: "honor"
}

for (const marca in nombresMarcas) {
    const boton = document.createElement("button");
    boton.innerHTML = marca;
    boton.addEventListener('click', () => peticionML(nombresMarcas[marca]));
    divBotones.appendChild(boton);
}

articulo.classList.add("contProductos");
divBotones.classList.add("divBotones");
divCont.classList.add("divCont");

const peticionMLinicial = async() => {
    articulo.innerHTML = "";
    try {
        const respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=celulares`);
        const datos = await respuesta.json();
        const data = datos.results;
        productos.splice(0, productos.length);

        data.forEach((item, index) => {
            const producto = document.createElement("div");
            const productoA = {
                nombre: item.title,
                precio: item.price,
                imagen: item.thumbnail
            };
            producto.classList.add("producto");
            producto.innerHTML = `
                <img class="imagenProducto" src="${item.thumbnail}" alt="${item.title}" />
                <p>${item.title}</p>
                <p>Precio: $${item.price}</p>
                <button onclick="agregarCarrito(${index}, 1)">Comprar</button>`;

            productos.push(productoA);
            articulo.appendChild(producto);
        });

        console.clear();
        console.log(productos);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        articulo.innerHTML = "<p>No se pudieron cargar los productos.</p>";
    }
};
peticionMLinicial();
const peticionML = async (marca) => {
    articulo.innerHTML = "";
    try {
        const respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${marca}`);
        const datos = await respuesta.json();
        const data = datos.results;
        productos.splice(0, productos.length);

        data.forEach((item, index) => {
            const producto = document.createElement("div");
            const productoA = {
                nombre: item.title,
                precio: item.price,
                imagen: item.thumbnail
            };
            producto.classList.add("producto");
            producto.innerHTML = `
                <img class="imagenProducto" src="${item.thumbnail}" alt="${item.title}" />
                <p>${item.title}</p>
                <p>Precio: $${item.price}</p>
                <button onclick="agregarCarrito(${index}, 1)">Comprar</button>`;

            productos.push(productoA);
            articulo.appendChild(producto);
        });

        console.clear();
        console.log(productos);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        articulo.innerHTML = "<p>No se pudieron cargar los productos.</p>";
    }
};

function agregarCarrito(index, cantidad) {
    const itemCarrito = carrito.find(item => item.index === index);
    if (itemCarrito) {
        itemCarrito.cantidad += cantidad;
    } else {
        carrito.push({
            nombre: productos[index].nombre,
            precio: productos[index].precio,
            imagen: productos[index].imagen,
            index: index,
            cantidad: cantidad
        });
    }
    localStorage.setItem("ProductosCarrito", JSON.stringify(carrito));
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Agregado al carrito",
        showConfirmButton: false,
        timer: 800
    });
}

body.appendChild(main);
main.appendChild(divCont);
divCont.appendChild(divBotones);
divCont.appendChild(articulo);
