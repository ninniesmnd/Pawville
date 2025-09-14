// Base de datos de mascotas para adopción con localidades de Chile
const mascotas = [
    {
        id: 1,
        nombre: "Baxter",
        tipo: "Perro",
        edad: "2 años",
        descripcion: "Alegre y protector, ideal para paseos largos.",
        localidad: "Santiago",
        genero: "Macho",
        tamaño: "Mediano",
        raza: "Mestizo",
        imagen: "../img/lista mascotas/1.jpg"
    },
    {
        id: 2,
        nombre: "Kovu",
        tipo: "Gato",
        edad: "1 año",
        descripcion: "Juguetón y cariñoso, perfecto para familias.",
        localidad: "Valparaíso",
        genero: "Macho",
        tamaño: "Pequeño",
        raza: "Siamés",
        imagen: "../img/lista mascotas/7.jpg"
    },
    {   
        id: 3,
        nombre: "Fiona",
        tipo: "Perro",
        edad: "5 meses",
        descripcion: "Cachorra juguetona y llena de energía.",
        localidad: "Concepción",
        genero: "Hembra",
        tamaño: "Pequeño",
        raza: "Labrador",
        imagen: "../img/lista mascotas/6.jpg"
    },
    {
        id: 4,
        nombre: "Otto",
        tipo: "Perro",
        edad: "3 años",
        descripcion: "Tranquilo y obediente, se adapta fácilmente.",
        localidad: "La Serena",
        genero: "Macho",
        tamaño: "Grande",
        raza: "Pastor Alemán",
        imagen: "../img/lista mascotas/3.jpg"
    },
    {
        id: 5,
        nombre: "Ares",
        tipo: "Gato",
        edad: "3 años",
        descripcion: "Independiente, le gusta explorar su espacio.",
        localidad: "Antofagasta",
        genero: "Macho",
        tamaño: "Mediano",
        raza: "Mestizo",
        imagen: "../img/lista mascotas/12.jpg"
    },
    {
        id: 6,
        nombre: "Nuba",
        tipo: "Perro",
        edad: "2 meses",
        descripcion: "Cachorra juguetona y llena de energía.",
        localidad: "Puerto Montt",
        genero: "Hembra",
        tamaño: "Pequeño",
        raza: "Golden Retriever",
        imagen: "../img/lista mascotas/5.jpg"
    },
    {
        id: 7,
        nombre: "Ninaí",
        tipo: "Gato",
        edad: "10 días",
        descripcion: "Gatita recién nacida, requiere cuidados especiales.",
        localidad: "Iquique",
        genero: "Hembra",
        tamaño: "Muy Pequeño",
        raza: "Mestizo",
        imagen: "../img/lista mascotas/9.jpg"
    },
    {
        id: 8,
        nombre: "Misha",
        tipo: "Gato",
        edad: "2 años",
        descripcion: "Muy afectuosa, pide mimos constantemente.",
        localidad: "Rancagua",
        genero: "Hembra",
        tamaño: "Pequeño",
        raza: "Angora",
        imagen: "../img/lista mascotas/10.jpg"
    },
    {
        id: 9,
        nombre: "Noa",
        tipo: "Gato",
        edad: "1 año",
        descripcion: "Traviesa y curiosa, siempre en movimiento.",
        localidad: "Talca",
        genero: "Hembra",
        tamaño: "Pequeño",
        raza: "Mestizo",
        imagen: "../img/lista mascotas/11.jpg"
    },
    {
        id: 10,
        nombre: "Rocco",
        tipo: "Perro",
        edad: "6 años",
        descripcion: "Noble y paciente, busca un hogar sereno.",
        localidad: "Arica",
        genero: "Macho",
        tamaño: "Grande",
        raza: "Rottweiler",
        imagen: "../img/lista mascotas/2.jpg"
    },
    {
        id: 11,
        nombre: "Sirius",
        tipo: "Gato",
        edad: "4 años",
        descripcion: "Sereno, disfruta de las siestas soleadas.",
        localidad: "Chillán",
        genero: "Macho",
        tamaño: "Mediano",
        raza: "Persa",
        imagen: "../img/lista mascotas/8.jpg"
    },
    {
        id: 12,
        nombre: "Greta",
        tipo: "Perro",
        edad: "6 meses",
        descripcion: "Sociable, convive bien con otros perros.",
        localidad: "Temuco",
        genero: "Hembra",
        tamaño: "Mediano",
        raza: "Border Collie",
        imagen: "../img/lista mascotas/4.jpg"
    },
    {
        id: 13,
        nombre: "Milo",
        tipo: "Perro",
        edad: "8 meses",
        descripcion: "Curioso y juguetón, ideal para familias.",
        localidad: "Valdivia",
        genero: "Macho",
        tamaño: "Mediano",
        raza: "Beagle",
        imagen: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        nombre: "Luna",
        tipo: "Gato",
        edad: "2 años",
        descripcion: "Tierna y tranquila, ama las siestas largas.",
        localidad: "Osorno",
        genero: "Hembra",
        tamaño: "Pequeño",
        raza: "Mestizo",
        imagen: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        nombre: "Simba",
        tipo: "Gato",
        edad: "1 año",
        descripcion: "Valiente y amigable, perfecto compañero.",
        localidad: "Punta Arenas",
        genero: "Macho",
        tamaño: "Mediano",
        raza: "Maine Coon",
        imagen: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        nombre: "Nala",
        tipo: "Perro",
        edad: "3 años",
        descripcion: "Dulce y sociable, se adapta fácilmente.",
        localidad: "Coquimbo",
        genero: "Hembra",
        tamaño: "Mediano",
        raza: "Husky",
        imagen: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    }
];

const MASCOTAS_POR_PAGINA = 12;
let paginaActual = 1;


function mostrarMascotas(pagina = 1) {
    const contenedor = document.getElementById('contenedorMascotas');
    contenedor.innerHTML = '';

    const inicio = (pagina - 1) * MASCOTAS_POR_PAGINA;
    const fin = inicio + MASCOTAS_POR_PAGINA;
    const mascotasPagina = mascotas.slice(inicio, fin);

    //generar tarjetas
    mascotasPagina.forEach((mascota, index) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'col';
        tarjeta.innerHTML = `
        <div class="card mascota-card h-100" style="animation-delay: ${index * 0.1}s;">
            <div class="position-relative">
            <img src="${mascota.imagen}" class="card-img-top" alt="${mascota.nombre}" style="height: 300px; object-fit: cover;">
            </div>
        <div class="card-body">
          <h5 class="card-title">${mascota.nombre}</h5>
          <p class="tipo">${mascota.raza} • ${mascota.genero} • ${mascota.edad}</p>
          <p class="descripcion">${mascota.descripcion}</p>
        </div>
        <div class="card-footer bg-white border-0">
          <a href="detalledeproducto.html?id=${mascota.id}" class="btn btn-adoptar btn-accent w-100">Adoptar</a>
        </div>
      </div>
    `;
        contenedor.appendChild(tarjeta);
    });

    actualizarPaginacion(pagina);
}


function actualizarPaginacion(paginaActual) {
    const totalPaginas = Math.ceil(mascotas.length / MASCOTAS_POR_PAGINA);
    const paginacion = document.getElementById('paginacion');
    paginacion.innerHTML = '';

    // btn anterior
    const liAnterior = document.createElement('li');
    liAnterior.className = `page-item ${paginaActual === 1 ? 'disabled' : ''}`;
    liAnterior.innerHTML = `<a class="page-link" href="#" data-pagina="${paginaActual - 1}">Anterior</a>`;
    paginacion.appendChild(liAnterior);

    // nros de pagina
    for (let i = 1; i <= totalPaginas; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === paginaActual ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#" data-pagina="${i}">${i}</a>`;
        paginacion.appendChild(li);
    }

    // btn siguiente
    const liSiguiente = document.createElement('li');
    liSiguiente.className = `page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`;
    liSiguiente.innerHTML = `<a class="page-link" href="#" data-pagina="${paginaActual + 1}">Siguiente</a>`;
    paginacion.appendChild(liSiguiente);

    //even listeners
    document.querySelectorAll('.page-link').forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            const pagina = parseInt(this.getAttribute('data-pagina'));
            if (!isNaN(pagina)) {
                mostrarMascotas(pagina);
                window.scrollTo(0, 0);
            }
        });
    });
}

// inicializar la página
mostrarMascotas();