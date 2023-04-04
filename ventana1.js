let editar = document.getElementById("editar");
let actualizar = document.getElementById("actualizar");
let solisitar = document.getElementById("solisitar");

editar.addEventListener("click",funcionparaeditar);
actualizar.addEventListener("click",funcionparaactualizar);
solisitar.addEventListener("click",funcionparasolisitar);

function funcionparaeditar(){
    window.location= "ventana2.html"
}
function funcionparaactualizar(){
    alert("editar");
}
function funcionparasolisitar(){
    window.location= "ventana3.html"
}