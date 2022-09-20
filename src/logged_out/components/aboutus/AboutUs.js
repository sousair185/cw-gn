import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import internet from "../../../assets/gnrede.png";
import atendimento from "../../../assets/gnatendent.png";
import seguranca from "../../../assets/gnsecurity.png";
import cobertura from "../../../assets/gnlocation.png";

const AboutUs = () => {
  return (
    <div className="container-aboutus" id="aboutus">
      <div className="about-text">
        <span className="title">Sobre nós</span>
        <span className="subtitle">Por que escolher a Geração Net?</span>
        <p>
          Somos uma Geração, estamos conectados e conectamos pessoas, ideias e
          empresas.
        </p>
        <p>
          Nosso compromisso é oferecer o melhor em tecnologia, competência
          técnica e alta qualidade, tudo isso sem perder a humanização.
        </p>
        <p>
          Somos uma empresa composta por pessoas que entregam seu melhor para
          conectar novas histórias, criar novos negócios e promover novos
          encontros!
        </p>
        <p>
          Prezamos pela ética, pela valorização do ser humano e pela entrega de
          um serviço que facilite, entretenha e transforme a vida dos nossos
          clientes. Nos comprometemos diariamente em fazer o nosso melhor.
        </p>

        <a href="/precos" className="about-btn">
          Conheça nossos Planos
        </a>
      </div>

      <div className="about-card-container">
        <Card
          className="about-card"
          sx={{
            margin: 3,
            minWidth: 300,
            borderRadius: 4,
            boxShadow: "0px 3px 9px 3px rgba(0,0,0,0.45)",
          }}
          data-aos="fade"
          data-aos-delay="300"
        >
          <CardContent>
            <Typography
              variant="h5"
              display="flex"
              textAlign="initial"
              fontWeight="600"
              paddingBottom="10px"
              alignItems="center"
            >
              <img src={internet} alt="" />
              Internet ultraveloz
            </Typography>
            <Typography
              variant="span"
              width="70%"
              display="block"
              marginLeft="27%"
              position="relative"
              top="-2vw"
            >
              Ultravelocidade para compartilhar a internet com as pessoas que
              moram com você e ainda curtir jogos online, vídeos, filmes e
              músicas.
            </Typography>
          </CardContent>
        </Card>
        <Card
          className="about-card"
          sx={{
            margin: 3,
            minWidth: 300,
            borderRadius: 4,
            boxShadow: "0px 3px 9px 3px rgba(0,0,0,0.45)",
          }}
          data-aos="fade"
          data-aos-delay="600"
        >
          <CardContent>
            <Typography
              variant="h5"
              display="flex"
              textAlign="initial"
              fontWeight="600"
              alignItems="center"
              paddingBottom="10px"
            >
              <img src={atendimento} alt="" />
              Atendimento personalizado e especializado
            </Typography>
            <Typography
              variant="span"
              width="70%"
              display="block"
              marginLeft="27%"
              position="relative"
              top="-2vw"
            >
              Estamos preparados para entender sua necessidade e oferecer a
              melhor solução para suas dúvidas.
            </Typography>
          </CardContent>
        </Card>
        <Card
          className="about-card"
          sx={{
            margin: 3,
            minWidth: 300,
            borderRadius: 4,
            boxShadow: "0px 3px 9px 3px rgba(0,0,0,0.45)",
          }}
          data-aos="fade"
          data-aos-delay="900"
        >
          <CardContent>
            <Typography
              variant="h5"
              display="flex"
              textAlign="initial"
              fontWeight="600"
              alignItems="center"
              paddingBottom="10px"
            >
              <img src={seguranca} alt="" />
              Soluções em segurança
            </Typography>
            <Typography
              variant="span"
              width="70%"
              display="block"
              marginLeft="27%"
              position="relative"
              top="-2vw"
            >
              Buscamos as melhores e mais tecnológicas ferramentas de mercado
              para garantir a qualidade e eficiência nos serviços prestados.
            </Typography>
          </CardContent>
        </Card>
        <Card
          className="about-card"
          sx={{
            margin: 3,
            minWidth: 300,
            borderRadius: 4,
            boxShadow: "0px 3px 9px 3px rgba(0,0,0,0.45)",
          }}
          data-aos="fade"
          data-aos-delay="1200"
        >
          <CardContent>
            <Typography
              variant="h5"
              display="flex"
              textAlign="initial"
              fontWeight="600"
              alignItems="center"
              paddingBottom="10px"
            >
              <img src={cobertura} alt="" />
              Ampla cobertura
            </Typography>
            <Typography
              variant="span"
              width="70%"
              display="block"
              marginLeft="27%"
              position="relative"
              top="-2vw"
            >
              Estamos em constante expansão para atender sua necessidade aonde
              você estiver.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
