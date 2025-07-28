document.addEventListener('DOMContentLoaded', function() {
  const sliderTrack = document.querySelector('.portfolio-main-slider-track');
  const slides = document.querySelectorAll('.portfolio-slide');
  const nextBtn = document.querySelector('.portfolio-button-next');
  const prevBtn = document.querySelector('.portfolio-button-prev');
  const pagination = document.querySelector('.portfolio-slider-pagination');
  
  // Проверяем наличие элементов
  if (!sliderTrack || slides.length === 0 || !nextBtn || !prevBtn || !pagination) {
    console.warn('Элементы слайдера портфолио не найдены');
    return;
  }
  
  // Устанавливаем количество слайдов
  sliderTrack.style.setProperty('--slides-count', slides.length);
  
  // Клонируем слайды для бесконечной прокрутки
  const clonedSlides = Array.from(slides).map(slide => slide.cloneNode(true));
  clonedSlides.forEach(slide => {
    sliderTrack.appendChild(slide);
  });
  
  let currentIndex = 0;
  let isAutoScrolling = true;
  let scrollInterval;
  
  // Инициализация пагинации
  function initPagination() {
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('pagination-dot', 'portfolio-pagination-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      pagination.appendChild(dot);
    });
  }
  
  // Обновление пагинации
  function updatePagination() {
    const dots = pagination.querySelectorAll('.portfolio-pagination-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Переход к конкретному слайду
  function goToSlide(index) {
    currentIndex = index;
    const slideWidth = slides[0].clientWidth;
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updatePagination();
    resetAutoScroll();
  }
  
  // Следующий слайд
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }
  
  // Предыдущий слайд
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  }
  
  // Автоматическая прокрутка
  function startAutoScroll() {
    if (!isAutoScrolling) return;
    
    scrollInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Увеличиваем интервал для портфолио
  }
  
  // Сброс автоматической прокрутки
  function resetAutoScroll() {
    clearInterval(scrollInterval);
    startAutoScroll();
  }
  
  // Инициализация
  initPagination();
  startAutoScroll();
  
  // Обработчики событий
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoScroll();
  });
  
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoScroll();
  });
  
  // Пауза при наведении
  sliderTrack.addEventListener('mouseenter', () => {
    isAutoScrolling = false;
    clearInterval(scrollInterval);
  });
  
  sliderTrack.addEventListener('mouseleave', () => {
    isAutoScrolling = true;
    startAutoScroll();
  });
  
  // Адаптация при изменении размера окна
  window.addEventListener('resize', () => {
    goToSlide(currentIndex);
  });
}); 