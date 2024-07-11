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

for(const marca in nombresMarcas){
    const boton = document.createElement("button");
    boton.innerHTML = marca;
    boton.addEventListener('click', ()=> peticionML(nombresMarcas[marca]));
    divBotones.appendChild(boton);
}

articulo.classList.add("contProductos");
divBotones.classList.add("divBotones");
divCont.classList.add("divCont");

const peticionML = async (marca) =>{
    articulo.innerHTML= "";
    const respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${marca}`);
    const datos = await respuesta.json();
    const data = await datos.results
    for(const item of data){
        const producto = document.createElement("div");
        producto.classList.add("producto");
        producto.innerHTML = `
                <img class="imagenProducto" src=${item.thumbnail} alt=${item.title}/>
                <p> ${item.title} </p>
                <p> Precio: $${item.price} </p>
                <button> comprar </button>
        `
        articulo.appendChild(producto);
    }
}

fetch('http://localhost:3000/api/images/samsung')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Ver los datos de la foto obtenida
        // Procesar los datos y mostrar la imagen en tu aplicación frontend
    })
    .catch(error => {
        console.error('Error al obtener imagen desde el servidor:', error);
        // Agrega más detalles sobre el error para depuración
        console.error(error.message);
        console.error(error.stack);
    });


body.appendChild(main);
main.appendChild(divCont);
divCont.appendChild(divBotones);
divCont.appendChild(articulo);
