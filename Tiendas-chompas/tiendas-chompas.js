// CAMBIO DE PESTAÑAS
function mostrar(id){
    let secciones = document.querySelectorAll("section");

    for(let i=0; i<secciones.length; i++){
        secciones[i].classList.remove("activo");
    }

    document.getElementById(id).classList.add("activo");
}

// CARRITO
let carrito = [];

function agregar(nombre, precio){
    carrito.push({nombre, precio});
    render();
    mostrar("carrito");
}

function render(){
    let lista = document.getElementById("lista");
    let total = 0;

    lista.innerHTML = "";

    for(let i=0; i<carrito.length; i++){
        total += carrito[i].precio;

        lista.innerHTML += `
        <div>
            ${carrito[i].nombre} - S/${carrito[i].precio}
        </div>`;
    }

    document.getElementById("total").innerText = total;
}

// VALIDACIÓN FORMULARIO
function validar(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    if(nombre === "" || correo === ""){
        alert("Completa los campos");
        return false;
    }

    alert("Mensaje enviado");
    return true;
}