const aboutContent = {
    title: "Sobre Nosotros",
    description: "En <strong>\"El Remate\"</strong>, nos dedicamos a ofrecer los mejores productos a precios increíbles.",
    features: [
        "Más de 5 años de experiencia",
        "Los mejores precios del mercado",
        "Productos de alta calidad",
        "Atención personalizada"
    ],
    mission: "Nuestra misión es hacer que los mejores productos sean accesibles para todos.",
    vision: "Nuestra visión es ser la mejor opción para todos nuestros clientes.",
    team: [
        { name: "Juan Pérez", position: "CEO" },
        { name: "María García", position: "CFO" },
        { name: "Pedro López", position: "CTO" }
    ]
};

function loadAboutSection() {
    const aboutSection = document.querySelector('.about-section');
    aboutSection.innerHTML = `
        <h2>${aboutContent.title}</h2>
        <div class="about-content">
            <p class="main-description">${aboutContent.description}</p>
            <div class="features">
                ${aboutContent.features.map(feature => `
                    <div class="feature-item">
                        <i class="fas fa-check"></i>
                        <span>${feature}</span>
                    </div>
                `).join('')}
            </div>
            <h3>Mision</h3>
            <p class="mission">${aboutContent.mission}</p>
            <h3>Vision</h3>
            <p class="mission">${aboutContent.vision}</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', loadAboutSection);