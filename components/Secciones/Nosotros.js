import React from "react";

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="why-us section-bg"
      data-aos="fade-up"
      date-aos-delay="200"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 video-box d-flex justify-content-center">
            <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/aEjfzjMfg9E?autoplay=1&mute=1&origin=https://OurWebsiteDomain"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
