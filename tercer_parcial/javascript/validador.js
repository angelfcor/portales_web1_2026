let nombreCompletoInput = null;
let submitButton = null;
let formulario = null;

//regex

//encontrar un patron de texto
//reemplazar un patrón de texto

// match - replace - test

const regexIsEmpty = /^\s*$/; // \d \w \W 
const regexIsEmail = /^[\w.-] + @[\w.-] +\.\w{2,}$/;
//gorrito para arriba es que empieza


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

    //expresiones regulares JS
    //bloqueos ibo

function validarEspaciovacio(valor){
    //TODO: VALIDAR
    return !regexIsEmpty.test(valor);
}

function validarCorreoElectronico(valor) {
    return !regexIsEmail.test(valor);
}