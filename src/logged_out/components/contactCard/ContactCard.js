import { Typography } from "@mui/material";
import React, { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import "react-phone-input-2/lib/style.css";

const FORM_ENDPOINT =
  // "https://public.herotofu.com/v1/4839e490-256d-11ed-9dc3-136bfcd2b0ee";
  "https://formsubmit.co/atendimento@geracaonet.com.br";

const ContactForm = () => {
  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const injectedData = {
      Contato_recebido: "Contato recebido via site - Geração Net",
    };
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input");
            el.type = "hidden";
            el.name = key;
            el.value = injectedData[key];

            e.target.appendChild(el);
          });

          e.target.submit();
          throw new Error("Por favor resolva o Captcha");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("Retornaremos em breve"))
      .catch((err) => setStatus(err.toString()));
  };

  if (status) {
    return (
      <>
        <div className="text-2xl">Agradecemos o contato!</div>
      </>
    );
  }

  return (
    <div className="container-contact">
      <div className="container-contact-right">
        <Typography
          variant="h2"
          align="left"
          sx={{ paddingBottom: 2, fontWeight: "bold" }}
        >
          Fale Conosco
        </Typography>
        <form
          className="contact-form"
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <Typography variant="h6">
            <span></span>
            <input type="text" placeholder="Seu nome" name="nome" required />
          </Typography>
          <Typography variant="h6">
            <span></span>
            <input type="email" placeholder="E-mail" name="email" required />
          </Typography>
          <Typography variant="h6" aria-label="Telefone">
            <span></span>
            <input
              type="phone"
              placeholder="Telefone"
              name="telefone"
              required
            />
          </Typography>
          <input type="hidden" name="_captcha" value="false"></input>
          <Typography variant="h6">
            <button type="submit"> Enviar </button>
          </Typography>
        </form>
      </div>
      <div className="container-contact-left">
        <Typography
          variant="h2"
          align="left"
          sx={{ paddingBottom: 2, fontWeight: "bold" }}
        >
          Nossos Contatos
        </Typography>
        <WhatsAppIcon
          sx={{
            color: "#0c71c3",
            position: "relative",
            top: "25px",
            fontSize: "30px",
          }}
        />
        <Typography variant="h6" sx={{ marginLeft: "50px", fontWeight: "600" }}>
          Whatsapp: (19) 99970.5420
        </Typography>
        <WhereToVoteIcon
          sx={{
            color: "#0c71c3",
            position: "relative",
            top: "25px",
            fontSize: "30px",
          }}
        />
        <Typography variant="h6" sx={{ marginLeft: "50px", fontWeight: "600" }}>
          Rua Pedro Elias, 681 - Vista Alegre, Limeira - SP
        </Typography>
        <Typography variant="h7" sx={{ marginLeft: "50px" }}>
          Segunda a Sexta: 8h às 18h
        </Typography>
        <Typography variant="h7" sx={{ marginLeft: "50px" }}>
          Sábado: 8h às 12h
        </Typography>
      </div>
    </div>
  );
};

export default ContactForm;
