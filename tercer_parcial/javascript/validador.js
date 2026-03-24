let nombreCompletoInput = null;
let submitButton = null;
let formulario = null;

document.addEventListener("DOMContentLoaded", ()=> {
    nombreCompletoInput = document.getElementById("txtNombre");
    submitButton = document.getElementById("btnEnviar");
    formulario = document.getElementById("contactForm")
    
    submitButton.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(validarEspaciovacio(nombreCompletoInput.value)){
            formulario.submitButton
        } else{
            alert("Hay validaciones que fallan.");
        }
    });    
});

function validarEspaciovacio(valor){
    //TODO: VALIDAR
    //expresiones regulares JS
    //bloqueos ibo
    return false;
}