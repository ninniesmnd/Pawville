
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const registerForm = document.getElementById('registerForm');

// mostrar/ocultar contraseña
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

// validar que las contraseñas coincidan
function passwordsMatch() {
    return passwordInput.value === confirmPasswordInput.value;
}

// validar antes de enviar
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Resetear mensajes de error
    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');
    confirmPasswordInput.classList.remove('is-invalid');
    
    // validar nombre
    if (!nameInput.value) {
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else if (nameInput.value.length < 10 || nameInput.value.length > 100) {
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        nameInput.classList.add('is-valid');
    }
    
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
    
    // vlidar confirmacion de contraseña
    if (!confirmPasswordInput.value) {
        confirmPasswordInput.classList.add('is-invalid');
        isValid = false;
    } else if (confirmPasswordInput.value.length < 4 || confirmPasswordInput.value.length > 10) {
        confirmPasswordInput.classList.add('is-invalid');
        isValid = false;
    } else if (!passwordsMatch()) {
        confirmPasswordInput.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPasswordInput.classList.add('is-valid');
    }
    
    // enviar
    if (isValid) {
        alert('Registro exitoso (simulación)');
        // registerForm.submit();
    }
});

// validar en tiempo real el nombre
nameInput.addEventListener('input', function() {
    if (nameInput.value.length >= 10 && nameInput.value.length <= 100) {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
    } else {
        nameInput.classList.remove('is-valid');
        nameInput.classList.add('is-invalid');
    }
});

// validacion en tiempo real para el email
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

// validacion en tiempo real para la contraseña
passwordInput.addEventListener('input', function() {
    if (passwordInput.value.length >= 4 && passwordInput.value.length <= 10) {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
    } else {
        passwordInput.classList.remove('is-valid');
        passwordInput.classList.add('is-invalid');
    }
    
    // revalidar si ya tiene contenido
    if (confirmPasswordInput.value) {
        validateConfirmPassword();
    }
});

// validar confirmacion de contraseña en tiempo real
confirmPasswordInput.addEventListener('input', function() {
    validateConfirmPassword();
});

//validar confirmacion de contraseña
function validateConfirmPassword() {
    if (confirmPasswordInput.value.length >= 4 && 
        confirmPasswordInput.value.length <= 10 && 
        passwordsMatch()) {
        confirmPasswordInput.classList.remove('is-invalid');
        confirmPasswordInput.classList.add('is-valid');
    } else {
        confirmPasswordInput.classList.remove('is-valid');
        confirmPasswordInput.classList.add('is-invalid');
    }
}