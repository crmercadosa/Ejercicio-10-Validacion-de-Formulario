function validarFormulario() {
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value.trim();
    
    let longContra = 8;
    let expRegCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {
        alert("Por favor, ingresa tu correo.");
        return false;
    }
    
    if (pass === "") {
        alert("Por favor, ingresa una contraseña.");
        return false;
    }

    if (!expRegCorreo.test(email)){
        alert("Por favor, ingresa un correo válido.")
        return false;
    }

    if (pass.length < longContra) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }
    
    return true;
}
