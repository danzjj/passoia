import React, { useState } from "react";
import "./Lancamentos.css";
import batomMiniatura1 from "../../assets/images/batom1.png";
import batomMiniatura2 from "../../assets/images/batom2.png";
import batomMiniatura3 from "../../assets/images/batom3.png";

import modeloRoxo from "../../assets/images/batom_azul.png";
import modeloVermelho from "../../assets/images/batom_vermelho.png";
import modeloVinho from "../../assets/images/batom_marrom.png";
import modeloCoral from "../../assets/images/batom_base.png";

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
            <img src={batomMiniatura1} alt="Miniatura do Batom" />
          </div>
          <div className="miniatura-item">
            <img src={batomMiniatura2} alt="Miniatura do Batom" />
          </div>
          <div className="miniatura-item">
            <img src={batomMiniatura3} alt="Miniatura do Batom" />
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
