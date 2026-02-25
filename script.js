

window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('intro-overlay');
    const content = document.getElementById('main-content');
    const welcomeText = document.getElementById('welcome-text');
    const gallery = document.getElementById('product-gallery');
    const customizationArea = document.getElementById('customization-area');

   
    setTimeout(() => {
        overlay.classList.add('move-up');
        content.classList.add('visible');
        content.classList.remove('hidden');

     
        setTimeout(() => {
            welcomeText.classList.add('fade-out');
            
           
            setTimeout(() => {
                welcomeText.style.display = 'none'; 
                gallery.classList.add('gallery-show');
                gallery.classList.remove('gallery-hidden');
                
                if(customizationArea) {
                    customizationArea.classList.add('gallery-show');
                    customizationArea.classList.remove('gallery-hidden');
                }
            }, 1000); 
        }, 2500); 
    }, 1500);
});


function moveSlide(button, direction) {
    const wrapper = button.parentElement.querySelector('.slider-wrapper');
    const totalSlides = wrapper.children.length;
    let currentIndex = parseInt(wrapper.getAttribute('data-index') || 0);
    
    currentIndex += direction;
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    wrapper.setAttribute('data-index', currentIndex);
}


document.addEventListener('change', (e) => {
    if (e.target.name === 'color') {
        const otherInput = document.getElementById('otherColor');
        if (e.target.id === 'diger') {
            otherInput.style.display = 'block';
            otherInput.focus();
        } else if (otherInput) {
            otherInput.style.display = 'none';
        }
    }
});



function sendOrder() {
    // 1. Form değerlerini al
    const product = document.getElementById('productSelect').value;
    const note = document.getElementById('customNote').value || "Not bırakılmadı";
    
    // 2. Renk seçimini al
    let selectedColor = document.querySelector('input[name="color"]:checked')?.value || "Belirtilmedi";
    
    // Eğer 'Diğer' seçildiyse metin kutusundaki özel rengi al
    if (selectedColor === "Diger") {
        const otherColorValue = document.getElementById('otherColor').value;
        selectedColor = otherColorValue ? otherColorValue : "Özel renk belirtilmedi";
    }
    
    // 3. Telefon numarası (Boşluksuz olmalı!)
    const phone = "905423801950"; 
    
    // 4. Mesaj içeriği (Yıldızlar WP'de kalın yazı yapar)
    const message = `Merhaba Curly Design! ✨%0A%0A` +
                    `*Ürün:* ${product}%0A` +
                    `*Renk:* ${selectedColor}%0A` +
                    `*Not/İsim:* ${note}`;
    
    // 5. WhatsApp'ı aç
    const wpUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(wpUrl, '_blank');
}

