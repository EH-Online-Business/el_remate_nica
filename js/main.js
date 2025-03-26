// Sample products data
const products = [
    {
        name: 'product1',
        image: './images/product1.png',
    },
    {
        name: 'product1',
        image: './images/product2.png',
    },
    {
        name: 'product1',
        image: './images/product3.png',
    },
    {
        name: 'product1',
        image: './images/product4.png',
    }
];

// Load products
function loadProducts() {
    const productsGrid = document.querySelector('.products-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy" 
                 onerror="this.src='./images/Placeholder.svg'" 
                 style="width: 100%; height: auto;">
        `;
        productsGrid.appendChild(productCard);
    });

    // Add WhatsApp button
    const whatsappButton = document.createElement('div');
    whatsappButton.className = 'whatsapp-button';
    whatsappButton.innerHTML = `
        <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" class="catalog-button">
            <i class="fab fa-whatsapp"></i> Ver Catálogo Completo en WhatsApp
        </a>
    `;
    productsGrid.parentNode.appendChild(whatsappButton);
}

// Load products when DOM is ready
document.addEventListener('DOMContentLoaded', loadProducts);

// Add scroll-to-top button
const scrollButton = document.createElement('button');
scrollButton.className = 'scroll-top';
scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollButton);

// Show/hide scroll button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .feature-item, .hero-content')
    .forEach(el => observer.observe(el));