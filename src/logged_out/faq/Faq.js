import { List, Typography } from "@mui/material";
import React from "react";

const velocimetro = (
  <a
    href="http://geracaonet.speedtestcustom.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    Aqui
  </a>
);
const suporte = (
  <a
    href="https://api.whatsapp.com/send?phone=5519999705420"
    target="_blank"
    rel="noopener noreferrer"
  >
    Aqui
  </a>
);

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-title">
        <Typography variant="h2" color="#fff" sx={{ fontWeight: 700 }}>
          Dúvidas Frequentes
        </Typography>
      </div>
      <div className="faq-duvida">
        <List className="faq-list">
          <Typography variant="span" className="faq-question">
            Como medir minha velocidade contratada?
          </Typography>
          <div className="faq-resposta">
            <Typography variant="h6">
              O teste de velocidade pode ser realizado através do seu computador
              ou celular, mas para um teste preciso indicamos a realização por
              um dispositivo conectado diretamente ao roteador. Conecte o cabo
              de rede em seu dispositivo de teste (notebook ou computador),
              mantenha somente o dispositivo de teste conectado à rede clique{" "}
              {velocimetro} e será direcionado para o teste de velocidade. É
              possível também fazer via rede sem fio/Wi-Fi, fique próximo ao seu
              modem/roteador conecte-se a rede, deixe somente o dispositivo de
              teste conectado à rede, e inicie o teste. Lembrete: Para
              velocidades acima de 100Mbps seu dispositivo precisa possuir placa
              de rede giga/1000 ou suporte para rede 5G.
            </Typography>
          </div>
          <Typography variant="span" className="faq-question">
            Minha conexão está lenta
          </Typography>
          <div className="faq-resposta">
            <Typography variant="h6">
              Um dos fatores que podem influenciar a lentidão é o fato do seu
              modem/roteador estar ligado à muitos dias, desligue-os, aguarde
              alguns minutos e, em seguida, ligue-os novamente, com esse
              procedimento o equipamento elimina dados desnecessários
              armazenados. Atente-se ao consumo de velocidade, muitos
              dispositivos conectados à rede ou alguns conteúdos aumentam o
              consumo da velocidade total da banda contratada. Nem sempre a
              lentidão na nossa navegação é resultado de baixa velocidade,
              existem outros fatores que podem influenciar, como por exemplo,
              malwares e vírus em seus dispositivos, tenha sempre um bom
              antivírus, excesso de cache no navegador, faça um limpeza
              frequente, distância do meu equipamento de internet, verifique o
              posicionamento do mesmo, nunca coloque em locais fechados, como
              nichos, isso afeta a propagação de seu sinal Wi-Fi.
            </Typography>
          </div>
          <Typography variant="span" className="faq-question">
            Quero mudar nome da minha rede e/ou senha da rede Wireless/Wi-Fi
          </Typography>
          <div className="faq-resposta">
            <Typography variant="h6">
              Altere sua rede e senha Wireless de forma rápida e prática, para
              isso temos um suporte especializado que está disponível para
              realizar a alteração de forma remota, clique {suporte} e fale com
              um de nossos agentes.
            </Typography>
          </div>
          <Typography variant="span" className="faq-question">
            Perdi a senha de acesso do Watch Brasil, o que fazer?
          </Typography>
          <div className="faq-resposta">
            <Typography variant="h6">
              Para recuperar sua senha siga os passos. Acesso o site
              https://watch.tv.br/ Clique em entrar, digite seu e-mail cadastro
              e clique em esqueci minha senha, um e-mail será enviado, e basta
              seguir as instruções descritas no e-mail.
            </Typography>
          </div>
        </List>
      </div>
    </div>
  );
};

export default Faq;
