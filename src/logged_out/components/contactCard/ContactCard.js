import { Typography } from "@mui/material";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/4839e490-256d-11ed-9dc3-136bfcd2b0ee";

const ContactForm = () => {
  const [status, setStatus] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const injectedData = {
      Contact_Received_by: "Contato recebido via site - Geração Net",
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
        <div className="text-md">{status}</div>
      </>
    );
  }

  class PhoneInputGn extends React.Component {
    constructor(props) {
      super(props);
      this.state = { phone: "" };
    }
    render() {
      return (
        <div>
          <PhoneInput
            country={"br"}
            value={this.state.phone}
            onChange={(phone) => this.setState({ phone })}
            placeholder="Telefone"
            name="phone"
            required
          />
        </div>
      );
    }
  }

  return (
    <div className="container-contact">
      <Typography
        variant="h5"
        align="center"
        sx={{ paddingBottom: 2, fontWeight: "bold" }}
      >
        <strong>
          Preencha os campos abaixo que <span>retornamos</span> o contato!
        </strong>
      </Typography>
      <form
        className="contact-form"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <Typography variant="h6">
          <span>Nome</span>
          <input type="text" placeholder="Seu nome" name="name" required />
        </Typography>
        <Typography variant="h6">
          <span>E-mail de contato</span>
          <input type="email" placeholder="E-mail" name="email" required />
        </Typography>
        <Typography variant="h6" aria-label="Telefone">
          <span>Telefone</span>
          <PhoneInputGn />
        </Typography>
        <Typography variant="h6">
          <button type="submit"> Enviar </button>
        </Typography>
      </form>
    </div>
  );
};

export default ContactForm;
