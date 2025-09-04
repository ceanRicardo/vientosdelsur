// Lógica del carrusel para mover las imágenes
let currentIndex = 0;
const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// --- NUEVO: Selectores para los botones del carrusel ---
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Función para actualizar la posición del carrusel
function updateCarousel() {
    if (carousel) {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

// Función para pasar a la siguiente diapositiva
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

// Función para volver a la diapositiva anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

// --- NUEVO: Event listeners para los botones del carrusel ---
if (prevButton && nextButton) {
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
}


// Inicializar el carrusel al cargar la página (si existe)
if (carousel) {
    updateCarousel();
    // Configuración para el auto-play del carrusel cada 5 segundos
    setInterval(nextSlide, 5000);
}

// Lógica para la ventana modal
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalBtn = document.getElementById('close-modal');

// --- CORREGIDO: Función para abrir el modal con una imagen específica ---
function openModal(imageSrc) {
    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modal.classList.remove('hidden'); // <-- CORRECCIÓN: Quitar 'hidden'
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
    }
}

// --- CORREGIDO: Función para cerrar el modal ---
function closeModal() {
    if (modal) {
        modal.classList.add('hidden'); // <-- CORRECCIÓN: Añadir 'hidden'
        modal.classList.remove('flex');
        modalImage.src = '';
        document.body.style.overflow = 'auto'; // Habilita el scroll del fondo
    }
}


// Escuchadores de eventos para cerrar el modal
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Cerrar el modal al hacer clic fuera de la imagen
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'image-modal') {
            closeModal();
        }
    });
}

// Menú hamburguesa para móviles
const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');

if (menuToggle && menuItems) {
    menuToggle.addEventListener('click', () => {
        menuItems.classList.toggle('hidden');
        menuItems.classList.toggle('flex');
    });
}