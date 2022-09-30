import React, { Fragment } from "react";
import smartphone from "./../../../assets/smartphone.png";

const Phone = () => {
  return (
    <Fragment>
      <div className="box-phone">
        <div className="phone-text">
          <span className="title">Soluções completas</span>
          <p>Telefonia e</p>
          <p>Portaria digital</p>
          <span className="phone-detail">
            Desenvolvemos projetos de telecomunicação personalizados que atendem
            as necessidades de empresas, condomínios, prédios e comércios
            exigentes que buscam segurança, alta qualidade e ultravelocidade.
          </span>
          <a
            href="http://wa.me/5519999705420/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn"
          >
            Saiba Mais
          </a>
          <img
            data-aos="zoom"
            data-aos-delay="200"
            src={smartphone}
            alt="telefone-gn"
            className="phone-icon"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Phone;
