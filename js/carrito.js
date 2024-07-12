const body = document.getElementById("body");
const main = document.createElement("main");
const divCont = document.createElement("div");

divCont.classList.add("divCont");

body.appendChild(main);

const carrito = [];

const storedProducts = localStorage.getItem('ProductosCarrito');
if (storedProducts) {
    carrito.push(...JSON.parse(storedProducts));
}

function mostrarCarrito() {
    // Limpiar el contenido anterior
    divCont.innerHTML = "";

    // Crear el contenedor principal del carrito
    const listaCarrito = document.createElement("div");
    listaCarrito.classList.add("contProductos");

    if (carrito.length === 0) {
        const divAlerta = crearDivAlerta();
        divCont.appendChild(divAlerta);
    } else {
        carrito.forEach((producto, index) => {
            const productoDiv = crearProductoDiv(producto, index);
            listaCarrito.appendChild(productoDiv);
        });

        divCont.appendChild(listaCarrito); // Asegurarse de que el contenedor de productos se agregue primero

        const sumaDiv = document.createElement("div");
        sumaDiv.innerHTML = `
            <h1>Suma total: $${calcularTotal()}</h1>
        `;

        const botonEliminarTodo = document.createElement("button");
        botonEliminarTodo.textContent = "Eliminar todo";
        botonEliminarTodo.style.cssText = `
            background-color: red; 
            color: white; 
            padding: 10px 20px; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer;
            font-size: 16px;
        `;
        botonEliminarTodo.addEventListener("click", eliminarTodoElCarrito);

        divCont.appendChild(sumaDiv); // Agregar la suma total al final
        divCont.appendChild(botonEliminarTodo); // Agregar el botón de eliminar todo al final
    }

    main.appendChild(divCont);
}

function crearDivAlerta() {
    const divAlerta = document.createElement("div");
    divAlerta.classList.add("divAlerta");
    divAlerta.innerHTML = `
        <h1>Tienes que comprar para tener tu carrito</h1>
        <button style="background-color: blue; width: 300px; height: 100px; border-radius: 20px; border: none; cursor: pointer; display: flex; justify-content: center; align-items: center;" onclick="window.location.href = 'productos.html';">
            <span style="color: white; font-size: 20px;">Compra Aquí</span>
        </button>
        <img style="width: 80%;" src="../assent/img/triste.png" alt="triste" />
    `;
    return divAlerta;
}

function crearProductoDiv(producto, index) {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    const nombreP = document.createElement("p");
    nombreP.textContent = `${producto.nombre}`;

    const precioP = document.createElement("p");
    precioP.textContent = `Precio: $${producto.precio}`;

    const imagenP = document.createElement("img");
    imagenP.src = `${producto.imagen}`;
    imagenP.classList.add("imagenProducto");

    const cantidadP = document.createElement("p");
    cantidadP.innerHTML = `Cantidad: ${producto.cantidad}`;

    const eliminarP = document.createElement("button");
    eliminarP.textContent = "Eliminar";
    eliminarP.style.cssText = `
        background-color: red; 
        color: white; 
        padding: 5px 10px; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer;
    `;
    eliminarP.addEventListener("click", function () {
        eliminarCarro(index);
    });

    productoDiv.appendChild(nombreP);
    productoDiv.appendChild(imagenP);
    productoDiv.appendChild(cantidadP);
    productoDiv.appendChild(precioP);
    productoDiv.appendChild(eliminarP);

    return productoDiv;
}

function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
}

function eliminarCarro(index) {
    carrito[index].cantidad -= 1;
    if (carrito[index].cantidad === 0) {
        carrito.splice(index, 1);
    }
    localStorage.setItem('ProductosCarrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function eliminarTodoElCarrito() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            actions: 'swal2-actions',
            confirmButton: "swal2-confirm",
            cancelButton: "swal2-cancel"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "¿Seguro que quieres eliminar tu carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, lo quiero eliminar",
        cancelButtonText: "No, quiero seguir comprando",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.length = 0; // Vaciar el carrito
            localStorage.setItem('ProductosCarrito', JSON.stringify(carrito));
            mostrarCarrito();
            swalWithBootstrapButtons.fire({
                title: "¡Carrito Eliminado!",
                icon: "success"
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: "Cancelado",
                icon: "success"
            });
        }
    });
}

// Llamar a la función para mostrar el carrito al cargar la página
mostrarCarrito();


// Llamar a la función para mostrar el carrito al cargar la página
mostrarCarrito();

