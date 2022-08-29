import React, { Fragment } from "react";
import smartphone from "./../../../assets/smartphone.png";

const Phone = () => {
  return (
    <Fragment>
      <div className="box-phone">
        <div className="phone-text">
          <span className="title">Soluões completas</span>
          <p>Telefonia e Portaria eletrônica</p>
          <span className="phone-detail">
            Desenvolvemos projetos de telecomunicação personalizados que atendem
            as necessidades de empresas exigentes que buscam segurança, alta
            qualidade e ultravelocidade.
          </span>
        </div>
        <button>Saiba Mais</button>
        <img
          data-aos="zoom"
          data-aos-delay="200"
          src={smartphone}
          alt="telefone-gn"
          className="phone-icon"
        />
      </div>
    </Fragment>
  );
};

export default Phone;
