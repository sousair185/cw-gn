/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, List, Typography } from "@mui/material";
import React, { useState } from "react";
import ReactModal from "react-modal";

const CEPS = [
  { id: 1, name: "13480001", desc: "Nossa tecnologia cobre este endereço" },
  { id: 2, name: "13480002", desc: "Nossa tecnologia cobre este endereço" },
  { id: 3, name: "13480003", desc: "Nossa tecnologia cobre este endereço" },
  { id: 4, name: "13480004", desc: "Nossa tecnologia cobre este endereço" },
  { id: 5, name: "13480005", desc: "Nossa tecnologia cobre este endereço" },
];

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
  const [foundData, setFoundData] = useState(CEPS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = CEPS.filter((data) => {
        return data.name
          .toLowerCase()
          .startsWith(keyword.toLowerCase().toString());
      });
      setFoundData(results);
    } else {
      setFoundData(CEPS);
    }
    setCep(keyword);
  };

  return (
    <div className="form">
      <input
        type="search"
        value={cep}
        onChange={filter}
        className="input"
        placeholder="Consulte seu cep"
        maxLength={8}
        autoComplete="off"
        name="text"
      />
      <br />
      {foundData.length === 1 ? (
        <List className="ul-data">
          {foundData.map((data) => (
            <List key={data.id} className="data">
              <Typography
                component={"span"}
                variant={"body2"}
                className="data-name"
              >
                ✅ {data.name},
              </Typography>
              <Typography
                component={"span"}
                variant={"body2"}
                className="data-desc"
              >
                {" "}
                {data.desc}
              </Typography>
              <br />
              <Typography>
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
      <p>
        Caso sua região ainda não seja atendida por nós{" "}
        <a href="#">clique aqui</a>
      </p>
    </div>
  );
}
export default BuscaCep2;