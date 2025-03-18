// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const botonReiniciar = document.getElementById("reiniciar");
botonReiniciar.disabled = true;
botonReiniciar.style.pointerEvents = "none";
botonReiniciar.style.opacity = "0.5";

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (/\d/.test(nombre)) {
        alert("El nombre no puede contener números.");
        return;
    }

    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
        console.log("Lista de amigos:", amigos);
    } else {
        alert("El nombre ya está en la lista.");
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    
    document.getElementById("resultado").innerHTML = `🎉 Amigo Secreto: ${amigoSorteado} 🎉`;

    // Habilitar el botón "Otro intento?"
    botonReiniciar.disabled = false;
    botonReiniciar.style.pointerEvents = "auto";
    botonReiniciar.style.opacity = "1";
}

function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // Volver a deshabilitar el botón "Otro intento?"
    botonReiniciar.disabled = true;
    botonReiniciar.style.pointerEvents = "none";
    botonReiniciar.style.opacity = "0.5";

    console.log("Juego reiniciado");
}
