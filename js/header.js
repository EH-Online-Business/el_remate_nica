const headerContent = {
    title: "Bienvenidos a El Remate",
    subtitle: "Los mejores productos a precios increíbles",
    buttonText: "Ver Productos"
};

function loadHeader() {
    const heroSection = document.querySelector('.hero-content');
    heroSection.innerHTML = `
        <h1>${headerContent.title}</h1>
        <p>${headerContent.subtitle}</p>
        <a href="#productos" class="cta-button">${headerContent.buttonText}</a>
    `;
}

document.addEventListener('DOMContentLoaded', loadHeader);