import { mascotas } from '../javascript/listarMascotas.js';

//ID de la URL
const urlParams = new URLSearchParams(window.location.search);
const mascotaId = parseInt(urlParams.get('id'));

// buscar mascota
const mascota = mascotas.find(m => m.id === mascotaId);

// mostrar datos si se encuentra la mascota
if (mascota) {
    document.getElementById('mascota-imagen').src = mascota.imagen;
    document.getElementById('mascota-imagen').alt = mascota.nombre;
    document.getElementById('mascota-nombre').textContent = mascota.nombre;
    document.getElementById('mascota-localidad').textContent = mascota.localidad;
    document.getElementById('mascota-genero').textContent = mascota.genero;
    document.getElementById('mascota-tamano').textContent = mascota.tamano;
    document.getElementById('mascota-raza').textContent = mascota.raza;
    document.getElementById('mascota-edad').textContent = mascota.edad;
    document.getElementById('mascota-descripcion').textContent = mascota.descripcion;
    
    document.querySelector('.adopt-card h5').textContent = `¿Quieres adoptar a ${mascota.nombre}?`;
}