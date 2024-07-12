const body = document.getElementById("body");
const contContacto = document.createElement("section");
const articuloContacto = document.createElement("article");

contContacto.classList.add("contContacto");
articuloContacto.classList.add("articuloContacto");

body.appendChild(contContacto);
contContacto.appendChild(articuloContacto);

articuloContacto.innerHTML = `
    <h1>Envíanos un comentario</h1>
    <form id="formContacto" onsubmit="return verificarNulo()">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre">

        <label for="comentario">Comentario:</label>
        <textarea id="comentario" name="texto"></textarea>

        <button type="submit">Enviar comentario</button>
    </form>
`;

// Array para almacenar los comentarios
const comentarios = [];

document.getElementById("formContacto").addEventListener("submit", function(event){
    event.preventDefault();

    if (!verificarNulo()) {
        return;
    }

    const nombreInput = document.getElementById("nombre").value;
    const comentarioInput = document.getElementById("comentario").value;

    const comentario = {
        nombre: nombreInput,
        comentario: comentarioInput  // Corregido el nombre del campo
    };

    // Agregar comentario al array
    comentarios.push(comentario);

    // Almacenar en sessionStorage
    sessionStorage.setItem("Comentarios", JSON.stringify(comentarios));

    // Limpiar el formulario
    document.getElementById("formContacto").reset();
});

function verificarNulo() {
    let nombreValor = document.getElementById("nombre").value;
    let comentarioValor = document.getElementById("comentario").value;

    if(nombreValor.trim() === "" || comentarioValor.trim() === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tienes que ingresar el nombre y el comentario",
        });
        return false;
    }

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Comentario enviado",
        showConfirmButton: false,
        timer: 1500
    });

    return true;
}
