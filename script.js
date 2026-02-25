window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('intro-overlay');
    const content = document.getElementById('main-content');
    const welcomeText = document.getElementById('welcome-text');
    const gallery = document.getElementById('product-gallery');

  
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
            }, 1000); 

        }, 2500); 

    }, 1500);
});

window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('intro-overlay');
    const content = document.getElementById('main-content');
    const welcomeText = document.getElementById('welcome-text');
    const gallery = document.getElementById('product-gallery');

 
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

function sendOrder() {
    const product = document.getElementById('productSelect').value;
    const note = document.getElementById('customNote').value;
    const color = document.querySelector('input[name="color"]:checked')?.value || "Belirtilmedi";
    
    const phone = "90 542 380 19 50"; 
    
    const message = `Merhaba Curly Design! Bir sipariş detayım var:%0A%0A` +
                    `🛍 Ürün: ${product}%0A` +
                    `📝 Not: ${note}%0A` +
                    `🎨 Renk: ${color}`;
    
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}
document.querySelectorAll('input[name="color"]').forEach((radio) => {
    radio.addEventListener('change', (e) => {
        const otherInput = document.getElementById('otherColor');
        if (e.target.id === 'diger') {
            otherInput.style.display = 'block';
            otherInput.focus();
        } else {
            otherInput.style.display = 'none';
        }
    });
});


function sendOrder() {
    const product = document.getElementById('productSelect').value;
    const note = document.getElementById('customNote').value;
    let selectedColor = document.querySelector('input[name="color"]:checked')?.value || "Belirtilmedi";
    
   
    if (selectedColor === "Diger") {
        selectedColor = document.getElementById('otherColor').value || "Özel Renk Belirtilmedi";
    }
    
    const instagramUser = "curlydesignstudio"; 
    
    alert(`Seçtiğin Ürün: ${product}\nRenk: ${selectedColor}\nLütfen DM üzerinden bu bilgileri iletmeyi unutma! ✨`);

    window.open(`https://ig.me/m/${instagramUser}`, '_blank');
}
