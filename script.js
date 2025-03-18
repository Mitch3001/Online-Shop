javascript
// script.js

document.addEventListener("DOMContentLoaded", () => {
    
    // Обработчик события для формы связи
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Спасибо за ваше сообщение!');
            contactForm.reset();
        });
    }

});
