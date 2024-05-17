import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import esloganImg from '../../../assets/images/juntos.jpg';
import masculinoImg from '../../../assets/images/masculino.jpg';
import femeninoImg from '../../../assets/images/femenino.jpg';
import { Carousel as BootstrapCarousel } from "bootstrap";

export const Carousel = () => {

  useEffect(() => {
    const carousel = document.getElementById("carouselExampleIndicators");
    const bootstrapCarousel = new BootstrapCarousel(carousel);

    setInterval(() => {
      bootstrapCarousel.next();
    }, 7000);
  }, []);

  return(
    <section id="carouselExampleIndicators" className="carousel slide">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={masculinoImg} className="d-block w-100" alt="imagen" />
        </div>

        <div className="carousel-item">
          <img src={femeninoImg} className="d-block w-100" alt="imagen" />
        </div>

        <div className="carousel-item">
          <img src={esloganImg} className="d-block w-100" alt="imagen" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

    </section>
  );
}