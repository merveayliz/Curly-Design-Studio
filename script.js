window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('intro-overlay');
    const content = document.getElementById('main-content');
    const welcomeText = document.getElementById('welcome-text');
    const gallery = document.getElementById('product-gallery');

    // 1. Aşama: 1.5 saniye bekle ve logoyu yukarı kaydır
    setTimeout(() => {
        overlay.classList.add('move-up');
        content.classList.add('visible');
        content.classList.remove('hidden');

        // 2. Aşama: "El emeği" yazısını 2.5 saniye göster, sonra fade-out yap
        setTimeout(() => {
            welcomeText.classList.add('fade-out');
            
            // 3. Aşama: Yazı kaybolunca galeriyi yumuşakça getir
            setTimeout(() => {
                welcomeText.style.display = 'none'; 
                gallery.classList.add('gallery-show');
                gallery.classList.remove('gallery-hidden');
            }, 1000); // Fade-out süresi kadar bekleme

        }, 2500); 

    }, 1500);
});

window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('intro-overlay');
    const content = document.getElementById('main-content');
    const welcomeText = document.getElementById('welcome-text');
    const gallery = document.getElementById('product-gallery');

    // 1. Logo yukarı çıksın
    setTimeout(() => {
        overlay.classList.add('move-up');
        content.classList.add('visible');
        content.classList.remove('hidden');

        // 2. "El emeği" yazısı 2 saniye ekranda kalsın, sonra yok olsun
        setTimeout(() => {
            welcomeText.classList.add('fade-out');
            
            // 3. Yazı tamamen kaybolunca (1s sonra) galeriyi getir
            setTimeout(() => {
                welcomeText.style.display = 'none'; // Alanı boşalt
                gallery.classList.add('gallery-show');
                gallery.classList.remove('gallery-hidden');
            }, 1000); 

        }, 2500); // Yazının durma süresi

    }, 1500);
});

function moveSlide(button, direction) {
    const wrapper = button.parentElement.querySelector('.slider-wrapper');
    const totalSlides = wrapper.children.length;
    
    // Şu anki pozisyonu bulmak için data-index kullanalım
    let currentIndex = parseInt(wrapper.getAttribute('data-index') || 0);
    
    currentIndex += direction;
    
    // Başa veya sona döngü yapması için:
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    wrapper.setAttribute('data-index', currentIndex);
}