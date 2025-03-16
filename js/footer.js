const cr = `© ${new Date().getFullYear()} El Remate`;
const footerContent = {
    copyright: cr,
    socialMedia: [
        { icon: "fab fa-facebook", link: "#", name: "Facebook" },
        { icon: "fab fa-instagram", link: "#", name: "Instagram" },
        { icon: "fab fa-whatsapp", link: "#", name: "WhatsApp" }
    ],
    address: "Dirección: BANIC Sutiaba 1 y 1/2 cuadra al Este"
};

function loadFooter() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <div class="social-media">
                ${footerContent.socialMedia.map(social => `
                    <a href="${social.link}" target="_blank" class="social-icon">
                        <i class="${social.icon}" aria-label="${social.name}"></i>
                    </a>
                `).join('')}
            </div>
            <p class="address">${footerContent.address}</p>
            <p class="copyright">${footerContent.copyright}. Todos los derechos reservados.</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', loadFooter);