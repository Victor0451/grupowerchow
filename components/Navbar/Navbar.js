import React from "react";

const Navbar = () => {
  return (
    <header id="header" className="fixed-top header-transparent">
      <div className="container">
        <nav className="nav-menu float-right d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="#hero">Inicio</a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li className="drop-down">
              <a href="">Grupo Werchow</a>
              <ul>
                <li>
                  <a href="https://werchow.com.ar/" target="_blank">
                    Werchow Salud
                  </a>
                </li>
                <li>
                  <a href="#">Werchow Beneficios</a>
                </li>
                <li>
                  <a href="https://clubwerchow.com/" target="_blank">
                    Club Werchow
                  </a>
                </li>
                <li>
                  <a href="#">Werchow Convenios</a>
                </li>
                <li>
                  <a href="#">Werchow Ventas</a>
                </li>
                <li>
                  <a href="https://sepelios.werchow.com/" target="_blank">
                    Werchow Sepelios
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#footer">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
