import React, { useState } from "react";
import "./Lancamentos.css";

import modeloRoxo from "/src/assets/images/batom_azul.png";
import modeloVermelho from "/src/assets/images/batom_vermelho.png";
import modeloVinho from "/src/assets/images/batom_marrom.png";
import modeloCoral from "/src/assets/images/batom_base.png";
const IMAGENS_POR_COR = {
  "roxo-claro": modeloRoxo,
  vermelho: modeloVermelho,
  vinho: modeloVinho,
  coral: modeloCoral,
};

const Lancamentos = () => {
  const [corSelecionada, setCorSelecionada] = useState("roxo-claro");

  const mudarCor = (novaCor) => {
    setCorSelecionada(novaCor);
  };

  const imagemAtual = IMAGENS_POR_COR[corSelecionada];

  return (
    <section id="lancamentos-container">
      <h1>APROVEITE OS LANÇAMEdddNTOS</h1>

      <div className="conteudo-principal">
        <div className="miniaturas">
          <div className="miniatura-item">
            <img src="/src\assets\images\batom1.png" alt="Miniatura do Batom" />
          </div>
          <div className="miniatura-item">
            <img src="/src\assets\images\batom2.png" alt="Miniatura do Batom" />
          </div>
          <div className="miniatura-item">
            <img src="/src\assets\images\batom3.png" alt="Miniatura do Batom" />
          </div>
        </div>

        <div className="imagem-modelo">
          <img
            src={imagemAtual}
            alt={`Modelo usando batom cor ${corSelecionada}`}
          />
        </div>
      </div>

      <div className="descricao-produto">
        <p className="cores-disponiveis">Cores disponíveis</p>

        <div className="paleta-cores">
          <span
            className={`cor roxo-claro ${
              corSelecionada === "roxo-claro" ? "selecionado" : ""
            }`}
            onClick={() => mudarCor("roxo-claro")}
          ></span>

          <span
            className={`cor vermelho ${
              corSelecionada === "vermelho" ? "selecionado" : ""
            }`}
            onClick={() => mudarCor("vermelho")}
          ></span>

          <span
            className={`cor vinho ${
              corSelecionada === "vinho" ? "selecionado" : ""
            }`}
            onClick={() => mudarCor("vinho")}
          ></span>

          <span
            className={`cor coral ${
              corSelecionada === "coral" ? "selecionado" : ""
            }`}
            onClick={() => mudarCor("coral")}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Lancamentos;
