// función para inicializar la página de login
function initLoginPage() {
    // Obtener elementos
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const emailInput = document.getElementById('email');
    const loginForm = document.getElementById('loginForm');
    
    //mostrar/ocultar contraseña
    togglePassword.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = 'Ocultar';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = 'Mostrar';
    }
    });

    //formato de email
    function isValidEmail(email) {
    const allowedDomains = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) return false;
    
    const domain = email.split('@')[1];
    return allowedDomains.includes(domain);
    }

    //formulario antes de enviar
    loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Resetear mensajes de error
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');
    
    //email
    if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        emailInput.classList.add('is-valid');
    }
    
    //contraseña
    if (passwordInput.value.length < 4 || passwordInput.value.length > 10) {
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else {
        passwordInput.classList.add('is-valid');
    }
    
    //enviar formulario
    if (isValid) {
        alert('Inicio de sesión exitoso (simulación)');
        // loginForm.submit();
    }
    });

    // validación en tiempo real para la contraseña
    passwordInput.addEventListener('input', function() {
    if (passwordInput.value.length >= 4 && passwordInput.value.length <= 10) {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
    } else {
        passwordInput.classList.remove('is-valid');
    }
    });

    // validación en tiempo real para el email
    emailInput.addEventListener('input', function() {
    if (isValidEmail(emailInput.value)) {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    } else {
        emailInput.classList.remove('is-valid');
    }
    });
}

// iniciar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initLoginPage);