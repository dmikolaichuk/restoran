document.addEventListener('DOMContentLoaded', () => {
    
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    
    const animateElements = document.querySelectorAll('.menu-card, .dish-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    
    const feedbackBtn = document.querySelector('.feedback-btn');
    if (feedbackBtn) {
        feedbackBtn.addEventListener('click', () => {
            console.log('Користувач переходить до форми відгуків');
            
        });
    }

    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === "#") {
                e.preventDefault();
                alert("Ця сторінка ще в розробці!");
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
   
    const modal = document.getElementById('dish-modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalPrice = document.getElementById('modal-price');
    const modalDesc = document.getElementById('modal-desc');
    const modalWeight = document.getElementById('modal-weight');
    const closeModal = document.querySelector('.close-modal');

    
    const modalCals = document.getElementById('modal-calories');
    const modalProts = document.getElementById('modal-proteins');
    const modalFats = document.getElementById('modal-fats');
    const modalCarbs = document.getElementById('modal-carbs');

    const menuCards = document.querySelectorAll('.menu-card');

    
    menuCards.forEach(card => {
        card.addEventListener('click', (e) => {
            
            
            
            const imgUrl = card.querySelector('.dish-img').src;
            const name = card.querySelector('.dish-name').textContent;
            const price = card.querySelector('.dish-price').textContent;
            const desc = card.querySelector('.dish-desc').textContent;
            
            
            const weight = card.getAttribute('data-weight') || '200г'; // Дефолтне значення
            const cals = card.getAttribute('data-calories') || '--';
            const prots = card.getAttribute('data-proteins') || '--';
            const fats = card.getAttribute('data-fats') || '--';
            const carbs = card.getAttribute('data-carbs') || '--';

            
            modalImg.src = imgUrl;
            modalName.textContent = name;
            modalPrice.textContent = price;
            modalDesc.textContent = desc;
            modalWeight.textContent = weight;
            
            modalCals.textContent = cals;
            modalProts.textContent = prots;
            modalFats.textContent = fats;
            modalCarbs.textContent = carbs;

            
            modal.classList.add('open');
            document.body.style.overflow = 'hidden'; 
        });
    });

    
    function closeDishModal() {
        modal.classList.remove('open');
        document.body.style.overflow = ''; 
    }

    
    closeModal.addEventListener('click', closeDishModal);

    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDishModal();
        }
    });

    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeDishModal();
        }
    });
});