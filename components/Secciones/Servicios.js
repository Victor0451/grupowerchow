import React from "react";

const Servicios = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <div
            className="icon-box icon-box-salud  d-flex align-items-stretch ml-2 mr-2"
            data-aos="fade-up"
          >
            <a href="https://werchow.com.ar/" target="_blank">
              <img
                className="logosempresas"
                src="/img/grupowerchow/salud.png"
              />
            </a>
          </div>
          <div
            className="icon-box icon-box-beneficios d-flex align-items-stretch mr-2"
            data-aos="fade-up"
          >
            <img
              className="logosempresas"
              src="/img/grupowerchow/beneficios.png"
            />
          </div>
          <div
            className="icon-box icon-box-club d-flex align-items-stretch mr-2"
            data-aos="fade-up"
          >
            <a href="https://clubwerchow.com/" target="_blank">
              <img
                className="logosempresas"
                src="/img/grupowerchow/clubwerchow.png"
              />
            </a>
          </div>
          <div
            className="icon-box icon-box-convenios d-flex align-items-stretch mr-2"
            data-aos="fade-up"
          >
            <img
              className="logosempresas"
              src="/img/grupowerchow/convenios.png"
            />
          </div>
          <div
            className="icon-box icon-box-ventas d-flex align-items-stretch mr-2"
            data-aos="fade-up"
          >
            <img className="logosempresas" src="/img/grupowerchow/ventas.png" />
          </div>
          <div
            className="icon-box icon-box-sepelios d-flex align-items-stretch mr-2"
            data-aos="fade-up"
          >
            <a href="https://sepelios.werchow.com/" target="_blank">
              <img
                className="logosempresas"
                src="/img/grupowerchow/sepelios.png"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
