

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
    // 1. Verileri Al
    const product = document.getElementById('productSelect').value;
    const note = document.getElementById('customNote').value.trim() || "Not belirtilmedi";
    
    // 2. Renk Seçimi
    let selectedColor = document.querySelector('input[name="color"]:checked')?.value || "Belirtilmedi";
    if (selectedColor === "Diger") {
        selectedColor = document.getElementById('otherColor').value.trim() || "Ozel Renk";
    }

    const phone = "905423801950"; 
    
    // 3. MESAJI OLUŞTUR (Normal yazıyoruz, şifreleme yapmıyoruz)
    // \n normal bir alt satırdır. Emojileri direkt içine koyabilirsin.
    const message = `Merhaba Curly Design! ✨

*Ürün:* ${product}
*Renk:* ${selectedColor}
*Not/İsim:* ${note}`;

    // 4. URL OLUŞTURMA (Hepsini tek seferde burada şifreliyoruz)
    // encodeURIComponent fonksiyonu hem emojileri hem de \n karakterlerini WP'nin anlayacağı hale getirir.
    const finalUrl = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    
    // 5. YÖNLENDİRME
    window.open(finalUrl, '_blank');
}

