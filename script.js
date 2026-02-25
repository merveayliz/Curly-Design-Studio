

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
    // 1. Elementleri seç 
    const productEl = document.getElementById('productSelect');
    const noteEl = document.getElementById('customNote');
    const otherColorEl = document.getElementById('otherColor');
    
    const product = productEl ? productEl.value : "Ürün Seçilmedi";
    const note = noteEl && noteEl.value.trim() !== "" ? noteEl.value.trim() : "Not belirtilmedi";
    
    // 2. Renk Seçimi
    let selectedColor = "Belirtilmedi";
    const checkedRadio = document.querySelector('input[name="color"]:checked');
    
    if (checkedRadio) {
        selectedColor = checkedRadio.value;
        // Eğer 'Diger' seçildiyse metin kutusunu oku
        if (selectedColor === "Diger") {
            selectedColor = (otherColorEl && otherColorEl.value.trim() !== "") ? otherColorEl.value.trim() : "Özel Renk";
        }
    }

    // 3. TELEFON NUMARASI (Kesinlikle sadece rakam olmalı!)
    // Başına + koyma, boşluk bırakma.
    const phone = "905423801950"; 
    
    // 4. MESAJ TASLAĞI
    // \n yerine %0A kullanarak alt satıra geçiyoruz (WP bunu daha çok sever)
    const lineBreak = "%0A";
    const message = "Merhaba Curly Design! ✨" + lineBreak + lineBreak +
                    "*Ürün:* " + product + lineBreak +
                    "*Renk:* " + selectedColor + lineBreak +
                    "*Not/İsim:* " + note;

    // 5. URL OLUŞTURMA
    // encodeURIComponent tüm mesajı güvenli hale getirir (emoji, boşluk vs.)
    const finalUrl = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
    
    // Test için konsola yazdır (F12 ile bakabilirsin)
    console.log("Bağlanılan URL: ", finalUrl);

    // 6. YÖNLENDİRME
    window.open(finalUrl, '_blank');
}



