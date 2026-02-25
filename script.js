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
