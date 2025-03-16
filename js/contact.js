const contactConfig = {
    title: "Contacto",
    fields: [
        { type: "text", placeholder: "Nombre", required: true },
        { type: "email", placeholder: "Email", required: true },
        { type: "textarea", placeholder: "Mensaje", required: true }
    ],
    submitText: "Enviar",
    successMessage: "¡Gracias por tu mensaje! Te contactaremos pronto."
};

function loadContactSection() {
    const contactSection = document.querySelector('.contact-section');
    contactSection.innerHTML = `
        <h2>${contactConfig.title}</h2>
        <form id="contactForm">
            ${contactConfig.fields.map(field => 
                field.type === 'textarea' 
                    ? `<textarea placeholder="${field.placeholder}" ${field.required ? 'required' : ''}></textarea>`
                    : `<input type="${field.type}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}>`
            ).join('')}
            <button type="submit">${contactConfig.submitText}</button>
        </form>
    `;

    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
    e.preventDefault();
    alert(contactConfig.successMessage);
    e.target.reset();
}

document.addEventListener('DOMContentLoaded', loadContactSection);