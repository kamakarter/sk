document.addEventListener('DOMContentLoaded', function() {
  const sliderTrack = document.querySelector('.reviews-slider-track');
  const slides = document.querySelectorAll('.reviews-slide');
  const nextBtn = document.querySelector('.reviews-button-next');
  const prevBtn = document.querySelector('.reviews-button-prev');
  const pagination = document.querySelector('.reviews-slider-pagination');
  
  // Проверяем наличие элементов
  if (!sliderTrack || slides.length === 0 || !nextBtn || !prevBtn || !pagination) {
    console.warn('Элементы слайдера отзывов не найдены');
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
      dot.classList.add('pagination-dot', 'reviews-pagination-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      pagination.appendChild(dot);
    });
  }
  
  // Обновление пагинации
  function updatePagination() {
    const dots = pagination.querySelectorAll('.reviews-pagination-dot');
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
    }, 4000); // Увеличиваем интервал для отзывов
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
  
  // Инициализация логики "Читать дальше"
  function initReadMore() {
    const allSlides = document.querySelectorAll('.reviews-slide');
    allSlides.forEach(slide => {
      const excerpt = slide.querySelector('.review-item-excerpt');
      const fullText = slide.querySelector('.review-item-text');
      const readMoreBtn = slide.querySelector('.review-item-read-more');
      const closeBtn = slide.querySelector('.review-item-text-close');

      if (readMoreBtn && fullText && closeBtn) {
        readMoreBtn.addEventListener('click', (e) => {
          e.preventDefault();
          fullText.style.display = 'block';
          excerpt.style.display = 'none';
          readMoreBtn.style.display = 'none';
        });

        closeBtn.addEventListener('click', (e) => {
          e.preventDefault();
          fullText.style.display = 'none';
          excerpt.style.display = 'block';
          readMoreBtn.style.display = 'inline';
        });
      }
    });
  }
  
  // Инициализируем логику "Читать дальше"
  initReadMore();
}); 