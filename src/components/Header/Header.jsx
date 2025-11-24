import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const ulDynamicClass = isMenuOpen ? "show" : "";
  const iconClass = isMenuOpen ? "fa-times" : "fa-bars";

  return (
    <header>
      <nav className="navbar">
        <img
          src="../src\assets\images\passoia_logo.png"
          alt="Logo da página"
          className="logo"
        />

        <button onClick={toggleMenu} className="btn btn-mobile">
          <i className={`fa-solid ${iconClass}`}></i>
        </button>

        <ul id="nav-links" className={ulDynamicClass}>
          <li>
            <a href="#looks">Looks</a>
          </li>
          <li>
            <a href="#lancamentos">Lançamentos</a>
          </li>
          <li>
            <a href="#novidades">Novidades</a>
          </li>
        </ul>
        <a href="" className="btn btn-default">
          Contatar
        </a>
      </nav>
    </header>
  );
};

export default Header;
