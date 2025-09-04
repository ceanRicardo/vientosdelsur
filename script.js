// Lógica del carrusel para mover las imágenes
let currentIndex = 0;
const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

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

// Función para abrir el modal con una imagen específica
function openModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.classList.add('flex'); // se muestra el modal

    // Reinicia animación de zoom
    modalImage.classList.remove('enlarged');
    setTimeout(() => {
        modalImage.classList.add('enlarged');
    }, 50);

    document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
}

// Función para cerrar el modal
function closeModal() {
    modal.classList.remove('flex'); // se oculta el modal
    modalImage.src = '';
    modalImage.classList.remove('enlarged');
    document.body.style.overflow = 'auto'; // Habilita el scroll del fondo
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
