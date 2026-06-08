(function() {
    const resultsSliderEl = document.getElementById('results-swiper-v17x');
    
    if (resultsSliderEl) {
        new Swiper(resultsSliderEl, {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1.3,
            centeredSlides: true,
            
            autoplay: { 
                delay: 20000, 
                disableOnInteraction: false 
            },
            navigation: { 
                nextEl: '.results-btn-next', 
                prevEl: '.results-btn-prev' 
            },
        });
    }
})();

(function() {
    const conveyorEl = document.getElementById('conveyor-swiper-v18x');
    
    if (conveyorEl) {
        new Swiper(conveyorEl, {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            allowTouchMove: true, // Можна свайпати, але без freeMode
            
            autoplay: {
                delay: 0, // 0 затримки для безперервного руху
                disableOnInteraction: false, // Не зупиняти після того, як користувач потицав пальцем
            },
            speed: 3500, // Швидкість (чим більше значення, тим повільніше їде)
        });
    }
})();

(function() {
    const panoramaEl = document.getElementById('panorama-swiper-v19x');
    
    if (panoramaEl) {
        new Swiper(panoramaEl, {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 0, // 0, щоб картинки йшли встик без дірок
            allowTouchMove: true,
            
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true, // ЗМУШУЄ СЛАЙДЕР ІТИ ЗЛІВА НАПРАВО
            },
            // Оскільки картинка дуууже широка, збільшуємо speed (наприклад, 6000-8000), 
            // щоб вона не летіла як скажена, а пливла плавно.
            speed: 30000, 
        });
    }
})();