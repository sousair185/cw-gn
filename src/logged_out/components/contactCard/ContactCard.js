import { Facebook, Instagram } from "@mui/icons-material";
import React from "react";

const ContactCard = () => {
  return (
    <div className="container-contact">
      <div className="contact-text">
        <span className="title">FALE CONOSCO</span>
        <p>Telefones:</p>
        <p>(19) 3703-1136 | (19) 9 9893-0633 - Financeiro</p>
        <p>(19) 9 8441-6101 - Suporte</p>
        <span className="subtitle">Endereço</span>
        <p>Rua Pedro Elias, 681 - Vista Alegre, Limeira - SP, 13487-031</p>
        <span className="subtitle">E-mail</span>
        <p>atendimento@geracaonet.com.br</p>
        <span className="subtitle">Siga nossas redes sociais</span>
        <p>
          <a href="https://www.instagram.com/geracaonet">
            <Instagram sx={{ fontSize: 50, color: "#170061" }} />
          </a>
          <a href="https://www.facebook.com/geracaonet">
            <Facebook sx={{ fontSize: 50, color: "#170061" }} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
