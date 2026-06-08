(function() {
    const promoTimers = document.querySelectorAll('#promo-countdown-v8x');
    const footerTimers = document.querySelectorAll('.footer-timer'); // Шукаємо твій оригінальний контейнер
    const storageKey = 'promo_timer_end_v8x';
    const duration = 12 * 60 * 60 * 1000; // 12 годин
    
    let endTime = localStorage.getItem(storageKey);

    if (!endTime || Date.now() > parseInt(endTime, 10)) {
        endTime = Date.now() + duration;
        localStorage.setItem(storageKey, endTime);
    } else {
        endTime = parseInt(endTime, 10);
    }

    function updateTimer() {
        let remaining = endTime - Date.now();

        if (remaining <= 0) {
            endTime = Date.now() + duration;
            localStorage.setItem(storageKey, endTime);
            remaining = duration;
        }

        const totalSeconds = Math.floor(remaining / 1000);
        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');

        // 1. Оновлюємо старий таймер, якщо він є на сторінці
        promoTimers.forEach(timerElement => {
            timerElement.textContent = `${hours}:${minutes}:${seconds}`;
        });

        // 2. Оновлюємо твій новий таймер по індексах кубиків (HTML міняти не треба)
        footerTimers.forEach(container => {
            const boxes = container.querySelectorAll('.timer-box');
            if (boxes.length >= 3) {
                boxes[0].textContent = hours;   // Перший кубик
                boxes[1].textContent = minutes; // Другий кубик
                boxes[2].textContent = seconds; // Третій кубик
            }
        });
    }

    updateTimer();
    setInterval(updateTimer, 1000);
})();