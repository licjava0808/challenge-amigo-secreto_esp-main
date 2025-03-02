// Crear un array para almacenar los nombres.
let amigos = [];

/**Implementar una función para agregar amigos.
 * Agrega un amigo al array de amigos
 * Valida que el campo nombre no este vacio
 */
function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;

    if(nombreAmigo.trim() === ""){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(nombreAmigo);
        document.querySelector("#amigo").value = "";
        mostrarListaAmigo();
    }
}

/**Actualizar el array de amigos.
 */
function mostrarListaAmigo(){
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    for (let index = 0; index < amigos.length; index++){
        const element = amigos[index];

        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
}

/**Implementa una función para sortear los amigos.
 * Validar que haya amigos disponibles.
 * Generar un índice aleatorio.
 * Obtener el nombre sorteado.
 * Mostrar resultado.
 */
function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if(cantidadAmigos === 0) {
        alert("Por favor, inserte un nombre antes de sortear");
    }else {
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];
    }
}


 