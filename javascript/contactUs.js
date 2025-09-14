// Obtener elementos del formulario
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const motivoSelect = document.getElementById('motivo');
const mensajeTextarea = document.getElementById('mensaje');
const contactoForm = document.querySelector('form');

// verificar que todos los elementos existan
if (nombreInput && emailInput && telefonoInput && motivoSelect && mensajeTextarea && contactoForm) {
    
    // formato de email
    function isValidEmail(email) {
        if (!email) return true; // Opcional, puede estar vacío
        const allowedDomains = ['duoc.cl', 'profesor.duoc.cl', 'gmail.com'];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) return false;
        
        const domain = email.split('@')[1];
        return allowedDomains.includes(domain);
    }

    //formato de teléfono chileno
    function isValidPhone(phone) {
        if (!phone) return true; // opcional, puede estar vacío
        const phoneRegex = /^\+56\s?9\s?\d{4}\s?\d{4}$/;
        return phoneRegex.test(phone);
    }

    // validación del formulario antes de enviar
    contactoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // resetear mensajes de error
        nombreInput.classList.remove('is-invalid', 'is-valid');
        emailInput.classList.remove('is-invalid', 'is-valid');
        telefonoInput.classList.remove('is-invalid', 'is-valid');
        motivoSelect.classList.remove('is-invalid', 'is-valid');
        mensajeTextarea.classList.remove('is-invalid', 'is-valid');
        
        // validar nombre (requerido)
        if (!nombreInput.value.trim()) {
            nombreInput.classList.add('is-invalid');
            isValid = false;
        } else if (nombreInput.value.length > 100) {
            nombreInput.classList.add('is-invalid');
            isValid = false;
        } else {
            nombreInput.classList.add('is-valid');
        }
        
        // validar email (opcional pero con formato específico)
        if (emailInput.value && emailInput.value.length > 100) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else if (emailInput.value && !isValidEmail(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            isValid = false;
        } else if (emailInput.value) {
            emailInput.classList.add('is-valid');
        }
        
        // validar teléfono (opcional pero con formato específico)
        if (telefonoInput.value && !isValidPhone(telefonoInput.value)) {
            telefonoInput.classList.add('is-invalid');
            isValid = false;
        } else if (telefonoInput.value) {
            telefonoInput.classList.add('is-valid');
        }
        
        // validar motivo (opcional)
        if (motivoSelect.value) {
            motivoSelect.classList.add('is-valid');
        }
        
        // validar mensaje (requerido)
        if (!mensajeTextarea.value.trim()) {
            mensajeTextarea.classList.add('is-invalid');
            isValid = false;
        } else if (mensajeTextarea.value.length > 500) {
            mensajeTextarea.classList.add('is-invalid');
            isValid = false;
        } else {
            mensajeTextarea.classList.add('is-valid');
        }
        
        // enviar formulario si es válido
        if (isValid) {
            alert('Formulario enviado correctamente (simulación)');
            // contactoForm.submit();
        }
    });

    // validación en tiempo real para el nombre
    nombreInput.addEventListener('input', function() {
        if (!nombreInput.value.trim()) {
            nombreInput.classList.remove('is-valid', 'is-invalid');
        } else if (nombreInput.value.length > 100) {
            nombreInput.classList.remove('is-valid');
            nombreInput.classList.add('is-invalid');
        } else {
            nombreInput.classList.remove('is-invalid');
            nombreInput.classList.add('is-valid');
        }
    });

    // validación en tiempo real para el email
    emailInput.addEventListener('input', function() {
        if (!emailInput.value) {
            emailInput.classList.remove('is-valid', 'is-invalid');
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

    // validación en tiempo real para el teléfono
    telefonoInput.addEventListener('input', function() {
        if (!telefonoInput.value) {
            telefonoInput.classList.remove('is-valid', 'is-invalid');
        } else if (isValidPhone(telefonoInput.value)) {
            telefonoInput.classList.remove('is-invalid');
            telefonoInput.classList.add('is-valid');
        } else {
            telefonoInput.classList.remove('is-valid');
            telefonoInput.classList.add('is-invalid');
        }
    });

    // validación en tiempo real para el mensaje
    mensajeTextarea.addEventListener('input', function() {
        if (!mensajeTextarea.value.trim()) {
            mensajeTextarea.classList.remove('is-valid', 'is-invalid');
        } else if (mensajeTextarea.value.length > 500) {
            mensajeTextarea.classList.remove('is-valid');
            mensajeTextarea.classList.add('is-invalid');
        } else {
            mensajeTextarea.classList.remove('is-invalid');
            mensajeTextarea.classList.add('is-valid');
        }
    });

    // validación en tiempo real para el motivo
    motivoSelect.addEventListener('change', function() {
        if (motivoSelect.value) {
            motivoSelect.classList.remove('is-invalid');
            motivoSelect.classList.add('is-valid');
        } else {
            motivoSelect.classList.remove('is-valid', 'is-invalid');
        }
    });

} else {
    console.error('Error: No se encontraron todos los elementos del formulario de contacto');
}