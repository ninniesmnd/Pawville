// Obtener elementos
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const emailInput = document.getElementById('email');
const loginForm = document.getElementById('loginForm');

// vonfigurar evento para mostrar/ocultar contraseña
togglePassword.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = 'Ocultar';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = 'Mostrar';
    }
});

// validar formato de email
function isValidEmail(email) {
    const allowedDomains = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) return false;
    
    const domain = email.split('@')[1];
    return allowedDomains.includes(domain);
}

// validación del formulario antes de enviar
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // resetear mensajes de error
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');
    
    // validar email
    if (!emailInput.value) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else if (emailInput.value.length > 100) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        emailInput.classList.add('is-valid');
    }
    
    // validar contraseña
    if (!passwordInput.value) {
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else if (passwordInput.value.length < 4 || passwordInput.value.length > 10) {
        passwordInput.classList.add('is-invalid');
        isValid = false;
    } else {
        passwordInput.classList.add('is-valid');
    }
    
    // enviar formulario si es válido
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
        passwordInput.classList.add('is-invalid');
    }
});

// validación en tiempo real para el email
emailInput.addEventListener('keyup', function() {
    if (!emailInput.value) {
        emailInput.classList.remove('is-valid');
        emailInput.classList.remove('is-invalid');
    } else if (emailInput.value.length > 100) {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
    } else if (isValidEmail(emailInput.value)) {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    } else {
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
    }
});