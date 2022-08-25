import { Link, List, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactModal from "react-modal";
import ceps from "./../dbceps/MyData";

ReactModal.setAppElement("#root");

class ExampleApp extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="modal">
        <button onClick={this.handleOpenModal}>Consultar</button>
        <ReactModal isOpen={this.state.showModal} contentLabel="Info Modal">
          <button onClick={this.handleCloseModal}> X </button>
          Parece que seu endereço ainda não possui a melhor conexão,{" "}
          <a href="/planos">clique aqui</a>
        </ReactModal>
      </div>
    );
  }
}

const props = {};

function BuscaCep2() {
  const [cep, setCep] = useState("");
  const [foundData, setFoundData] = useState(ceps);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword.length === 8) {
      const results = ceps.filter((data) => {
        return data.name
          .toLowerCase()
          .startsWith(keyword.toLowerCase().toString());
      });
      setFoundData(results);
    } else {
      setFoundData(ceps);
    }
    console.log(`ceps: ${cep}`);
    setCep(keyword);
  };

  return (
    <div className="form">
      <Typography
        variant="h4"
        align="center"
        sx={{ paddingTop: 2, fontWeight: "bold" }}
      >
        Confira se nossa <span>ultravelocidade</span>
      </Typography>
      <Typography
        variant="h4"
        align="center"
        sx={{ paddingBottom: 2, fontWeight: "bold" }}
      >
        está disponível no seu endereço
      </Typography>
      <input
        type="search"
        value={cep}
        onChange={filter}
        className="input"
        placeholder="🔍 Consulte seu CEP"
        maxLength={8}
        autoComplete="off"
        name="text"
      />
      <p className="input-detail">
        Caso sua região ainda não seja atendida por nós{" "}
        <a href="/planos">clique aqui</a>
      </p>
      <br />
      {foundData.length === 1 ? (
        <List className="ul-data" data-aos="zoom-in" data-aos-delay="200">
          {foundData.map((data) => (
            <List key={data.name} className="data">
              <Typography className="data-name"></Typography>
              <Typography className="data-desc">
                "Nossa tecnologia está disponível neste endereço"
              </Typography>
              <br />
              <Typography className="data-desc">
                <Link className="link" href="/planos">
                  Clique aqui{" "}
                </Link>
                e escolha o melhor pacote para você
              </Typography>
            </List>
          ))}
        </List>
      ) : (
        <ExampleApp {...props} className="modal" />
      )}
    </div>
  );
}
export default BuscaCep2;
