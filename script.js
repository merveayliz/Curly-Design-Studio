

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
    // 1. Formdan verileri çekiyoruz
    const product = document.getElementById('productSelect').value;
    const note = document.getElementById('customNote').value.trim() || "Not belirtilmedi";
    
    // 2. Seçili rengi buluyoruz
    let selectedColor = document.querySelector('input[name="color"]:checked')?.value || "Belirtilmedi";
    
    // Eğer 'Diğer' seçildiyse alttaki inputu oku
    if (selectedColor === "Diger") {
        const otherValue = document.getElementById('otherColor').value.trim();
        selectedColor = otherValue ? otherValue : "Özel Renk Belirtilmedi";
    }
    
    // 3. TELEFON NUMARASI (Kesinlikle boşluk, artı (+) veya parantez olmamalı!)
    const phone = "905423801950"; 
    
    // 4. MESAJI OLUŞTUR (encodeURIComponent kullanarak linki güvenli hale getiriyoruz)
    const text = `Merhaba Curly Design! ✨\n\n🛍 Ürün: ${product}\n🎨 Renk: ${selectedColor}\n📝 Not: ${note}`;
    const encodedText = encodeURIComponent(text);
    
    // 5. WHATSAPP'I AÇ (wa.me linki en güvenlisidir)
    const wpUrl = `https://wa.me/${phone}?text=${encodedText}`;
    
    // Konsolda linki kontrol etmek için (F12 basıp bakabilirsin hata olursa)
    console.log("Gidilecek Link:", wpUrl);
    
    window.open(wpUrl, '_blank');
}


