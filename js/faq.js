(function() {
    // Ініціалізація першого елемента (щоб коректно працював розрахунок висоти при першому кліці)
    const firstActive = document.querySelector('.faq-item-v15x.active .faq-answer-container-v15x');
    if (firstActive) {
        firstActive.style.maxHeight = firstActive.scrollHeight + 'px';
    }

    const rows = document.querySelectorAll('.faq-row-v15x');
    
    rows.forEach(row => {
        row.addEventListener('click', function() {
            const currentItem = this.parentElement;
            const container = currentItem.querySelector('.faq-answer-container-v15x');
            
            // Якщо поточний елемент вже відкритий — закриваємо його
            if (currentItem.classList.contains('active')) {
                container.style.maxHeight = '0px';
                currentItem.classList.remove('active');
            } else {
                // Закриваємо всі інші відкриті елементи для чистого інтерфейсу
                document.querySelectorAll('.faq-item-v15x.active').forEach(activeItem => {
                    activeItem.querySelector('.faq-answer-container-v15x').style.maxHeight = '0px';
                    activeItem.classList.remove('active');
                });
                
                // Відкриваємо поточний елемент з плавною та точною висотою
                currentItem.classList.add('active');
                container.style.maxHeight = container.scrollHeight + 'px';
            }
        });
    });
})();