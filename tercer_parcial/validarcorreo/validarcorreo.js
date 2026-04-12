let formulario = null;
let correoElectronico = null;
let submitButton = null;

const regexIsEmpty = /^\s*$/;
const regexIsEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/;

document.addEventListener("DOMContentLoaded", () => {
    formulario = document.getElementById("contactForm");
    correoElectronico = document.getElementById("txtCorreoElectronico");
    submitButton = document.getElementById("btnEnviar");
    submitButton.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        let objErrores = {};
        let formularioValido = true;
        
        if (!validarCorreoElectronico(correoElectronico.value)) {
            objErrores['txtCorreoDiv'] = {
                "error": "Correo electrónico no está en el formato correcto.",
                "input": correoElectronico
            }
            formularioValido = false;
        }

        if (formularioValido) {
            formulario.submit();
        } else {
            Object.entries(objErrores).forEach(err => {
                let [key, obj] = err;
                obj.input.classList.add('error');
                let container = document.getElementById(key);
                let errorSpan = document.createElement("DIV");
                errorSpan.innerText = obj.error;
                errorSpan.classList.add('error-text');
                container.appendChild(errorSpan);
            });
        }

    });
});

function validarEspacioVacio(valor) {
   return !regexIsEmpty.test(valor);
}
function validarCorreoElectronico(valor) {
    return regexIsEmail.test(valor);
}
