import React from "react";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CableIcon from '@mui/icons-material/Cable';
import WifiSharpIcon from '@mui/icons-material/WifiSharp';
import AssuredWorkloadSharpIcon from '@mui/icons-material/AssuredWorkloadSharp';


function PricingSection() {
 
  return (

    <div className="container-box">
      <div className="box">
        <div className="content">
        <span>Para</span>
          <h2>Família</h2>
          <div className="box-list">
          <p><CableIcon sx={{marginRight: 0.6}}/> 100% Fibra Óptica</p> 
          <p><WifiSharpIcon sx={{marginRight: 0.6}}/> Wi-fi incluso</p>
          <p><LiveTvIcon sx={{marginRight: 0.6}}/> Assista Filmes, Séries e Vídeos</p>
          </div>
          <a href="whatsapp://send?">Contratar</a>
        </div>
      </div>
      <div className="box">
        <div className="content">
        <span>Para</span>
          <h2>Você</h2>
          <div className="box-list">
          <p><CableIcon sx={{marginRight: 0.6}}/> 100% Fibra Óptica</p> 
          <p><WifiSharpIcon sx={{marginRight: 0.6}}/> Wi-fi incluso</p>
          <p><SportsEsportsIcon sx={{marginRight: 0.6}}/> Jogue com ping baixo</p>
          </div>
          <a href="whatsapp://send?">Contratar</a>
        </div>
      </div>
      <div className="box">
        <div className="content">
        <span>Para</span>
          <h2>Empresas</h2>
          <div className="box-list">
          <p><CableIcon sx={{marginRight: 0.6}}/> 100% Fibra Óptica</p> 
          <p><WifiSharpIcon sx={{marginRight: 0.6}}/> Wi-fi incluso</p>
          <p><AssuredWorkloadSharpIcon sx={{marginRight: 0.6}}/> Suporte, estabilidade e segurança</p>
          </div>
          <a href="whatsapp://send?">Contratar</a>
        </div>
      </div>
    </div>
  );
}


export default PricingSection;