
////Carrousel

let currentSlide = 0;
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');

function updateCarousel() {
    const translateValue = -currentSlide * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
    currentSlide = Math.max(currentSlide - 1, 0);
    updateCarousel();
}

function nextSlide() {
    currentSlide = Math.min(currentSlide + 1, slides.length - 1);
    updateCarousel();
}


////// Comentarios / descripción

var lastActiveTab = descriptionsTab;

function showTab(tabId) {
    // Oculta todas las pestañas
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Muestra la pestaña seleccionada
    var selectedTab = document.getElementById(tabId + 'Tab');
    selectedTab.classList.add('active');

    // Oculta todos los contenidos de las pestañas
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function (tabContent) {
        tabContent.classList.remove('active');
    });

    // Muestra el contenido de la pestaña seleccionada
    var selectedTabContent = document.getElementById(tabId);
    selectedTabContent.classList.add('active');

    // Desliza el scroll para ver el contenido que se despliega
    selectedTabContent.scrollIntoView({ behavior: 'smooth' });

    // Actualiza la última pestaña activa
    lastActiveTab = selectedTab;
}

////// Caja de texto

function addComment() {
    var newCommentInput = document.getElementById('newCommentInput');
    var commentList = document.getElementById('commentList');

    if (newCommentInput.value.trim() !== '') {
        // Crear un nuevo elemento li para el comentario
        var newComment = document.createElement('li');
        newComment.innerHTML = `
            <h4>Tu Nombre</h4>
            <p>${newCommentInput.value}</p>
        `;

        // Agregar el nuevo comentario a la lista
        commentList.appendChild(newComment);

        // Limpiar el área de texto después de agregar el comentario
        newCommentInput.value = '';
    }
}

/////// Boton seleccionado

var lastActiveTab = null;


// Al cargar la página, selecciona la última pestaña activa
window.onload = function () {
    if (lastActiveTab) {
        lastActiveTab.click();
    } else {
        // Por defecto, muestra la primera pestaña
        document.getElementById('descriptionsTab').click();
    }
};

// Al cargar la página, selecciona la última pestaña activa
window.onload = function () {
    if (lastActiveTab) {
        lastActiveTab.click();
    } else {
        // Por defecto, muestra la primera pestaña
        document.getElementById('commentsTab').click();
    }
};




////// Desliza automaticamente el sidebar hacia abajo cuando se preciona para ver un comentario la descripción detallada del producto

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section) {
        // Utiliza scrollIntoView para desplazarse suavemente a la sección
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


/////Zoom

let isZoomed = false;

function toggleZoom() {
    const image = document.getElementById('zoomImage');
    isZoomed = !isZoomed;

    if (isZoomed) {
        image.classList.add('zoomed');
    } else {
        image.classList.remove('zoomed');
    }
}