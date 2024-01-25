document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
  
    let currentIndex = 0;
  
    function updateCarousel() {
      carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    }
  
    setInterval(nextSlide, 3000); // Cambiar de imagen cada 3 segundos (ajusta según sea necesario)
  });