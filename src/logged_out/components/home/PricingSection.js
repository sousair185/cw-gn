import React from "react";

import PublicIcon from "@mui/icons-material/Public";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";



function PricingSection() {
 
  return (

    <div className="container-box">
      <div className="box">
        <span></span>
        <div className="content">
          <h2>Para Toda Família</h2>
          <PublicIcon /> <LiveTvIcon />
          <p>Filmes, Vídeos e Séries</p>
          <a href="whatsapp://send?">Contratar</a>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content">
          <h2>Para Você</h2>
          <PublicIcon /> <SportsEsportsIcon />
          <p>Jogar Online, Estudar e Redes Sociais</p>
          <a href="whatsapp://send?">Contratar</a>
        </div>
      </div>
      <div className="box">
        <span></span>
        <div className="content">
          <h2>Para Sua Empresa</h2>
          <p>Ultravelocidade, Suporte e Qualidade</p>
          <a href="whatsapp://send?">Contratar</a>
        </div>
      </div>
    </div>
  );
}


export default PricingSection;