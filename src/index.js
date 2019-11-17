import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//ENTRADA, RODANDO, FIM
//0 <=> 300
// palpites que a maquina deu

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);

  const [numPalpites, setNumPalpites] = useState(1);

  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMaximo(300);
    setMinimo(0);
    setNumPalpites(1);
    setPalpite(150);
  };

  const Menor = () => {
    setNumPalpites(numPalpites + 1);
    setMaximo(palpite);
    const proximoPalpite = parseInt((palpite - minimo) / 2);
    setPalpite(proximoPalpite);
  };

  const Maior = () => {
    setNumPalpites(numPalpites + 1);
    setMinimo(palpite);
    const proximoPalpite = parseInt((palpite + maximo) / 2);
    setPalpite(proximoPalpite);
  };

  const Acertou = () => {
    setEstado("FIM");
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar !</button>;
  }

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes !
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente !</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>Seu número é {palpite} ?</p>
      <p>Palpites: {numPalpites}</p>
      <button onClick={Menor}>Menor</button>
      <button onClick={Acertou}>Acertou !</button>
      <button onClick={Maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
