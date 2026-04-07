import React from "react";
import iconWhatsapp from "../../assets/img/whatsapp_flotante.webp";

const WhatsappFloat = () => {

    const phoneNumber = "573103669753";
    const message = "Hola, quiero información sobre sus servicios";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={iconWhatsapp} alt="whatsapp" />
        </a>
    );
};

export default WhatsappFloat;