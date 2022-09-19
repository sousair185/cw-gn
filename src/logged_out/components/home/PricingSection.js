import React from "react";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CableIcon from "@mui/icons-material/Cable";
import WifiSharpIcon from "@mui/icons-material/WifiSharp";
import AssuredWorkloadSharpIcon from "@mui/icons-material/AssuredWorkloadSharp";

function PricingSection() {
  return (
    <div className="container-box-title">
      <strong>
        Conheças as melhores opções de <span>planos de internet</span> para
        você, sua família e empresa
      </strong>
      <div className="container-box">
        <div className="box">
          <div className="content-title">
            <h2>Para você</h2>
          </div>
          <div className="content">
            <div className="box-list">
              <p>
                <CableIcon sx={{ marginRight: 0.6 }} /> 100% Fibra Óptica
              </p>
              <p>
                <WifiSharpIcon sx={{ marginRight: 0.6 }} /> Wi-fi incluso
              </p>
              <p>
                <SportsEsportsIcon sx={{ marginRight: 0.6 }} /> Jogue com ping
                baixo
              </p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5519999705420&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20um%20plano">
              Contratar
            </a>
          </div>
        </div>
        <div className="box">
          <div className="content-title">
            <h2>Para família</h2>
          </div>
          <div className="content">
            <div className="box-list">
              <p>
                <CableIcon sx={{ marginRight: 0.6 }} /> 100% Fibra Óptica
              </p>
              <p>
                <WifiSharpIcon sx={{ marginRight: 0.6 }} /> Wi-fi incluso
              </p>
              <p>
                <LiveTvIcon sx={{ marginRight: 0.6 }} /> Assista Filmes, Séries
                e Vídeos
              </p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5519999705420&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20um%20plano">
              Contratar
            </a>
          </div>
        </div>
        <div className="box">
          <div className="content-title">
            <h2>Para empresa</h2>
          </div>
          <div className="content">
            <div className="box-list">
              <p>
                <CableIcon sx={{ marginRight: 0.6 }} /> 100% Fibra Óptica
              </p>
              <p>
                <WifiSharpIcon sx={{ marginRight: 0.6 }} /> Wi-fi incluso
              </p>
              <p>
                <AssuredWorkloadSharpIcon sx={{ marginRight: 0.6 }} /> Suporte,
                estabilidade e segurança
              </p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5519999705420&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20um%20plano">
              Contratar
            </a>
          </div>
        </div>
        <div className="box">
          <div className="content-title">
            <h2>Para área rual</h2>
          </div>
          <div className="content">
            <div className="box-list">
              <p>
                <CableIcon sx={{ marginRight: 0.6 }} /> 100% Fibra Óptica
              </p>
              <p>
                <WifiSharpIcon sx={{ marginRight: 0.6 }} /> Wi-fi incluso
              </p>
              <p>
                <AssuredWorkloadSharpIcon sx={{ marginRight: 0.6 }} /> Suporte,
                estabilidade e segurança
              </p>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5519999705420&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20um%20plano">
              Contratar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
