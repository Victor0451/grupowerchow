import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
    >
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Links Utiles</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#hero">Inicio</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#nosotros">Nosotros</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#features">El Grupo</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nuestros Servicios</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="https://werchow.com.ar/">Werchow Salud</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Werchow Beneficios</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="https://clubwerchow.com/">Club Werchow</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Werchow Convenios</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Werchow Ventas</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="https://sepelios.werchow.com/">Werchow Sepelios</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Visitanos</h4>
              <p>
                Lavalle N° 123
                <br />
                San Salvador de Jujuy, Jujuy
                <br />
                <br />
                <strong>Telefono:</strong>
                +543884225555
                <br />
                <strong>Email: consultas@werchow.com</strong>
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-info">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="350"
                    height="400"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Lavalle%20123&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                  <a href="https://123movies-to.org"></a>
                  <br />
                  <a href="https://www.embedgooglemap.net"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>Grupo Werchow</span>
          </strong>
          . Todos Los Derechos Reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
