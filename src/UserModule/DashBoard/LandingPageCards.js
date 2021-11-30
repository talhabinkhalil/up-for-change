import React from "react";
import "../../Styles/landingPageCard.scss";
import { Container, Row } from "react-bootstrap";
import { cardsData } from "../../ViewData/CardsData";
import CardsImages from "./CardsImages";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const LandingPageCards = () => {
  return (
    <div className="cards-main">
      <p className="cards-header">
        Find causes YOU care about and CONNECT with them NOW!
      </p>
      <hr className="card-hr" />
      <OwlCarousel
        className="owl-carouselowl-theme owl_custom"
        loop
        
        center
        nav
        items={6}
        margin={58}
      >
        {cardsData.map((data) => (
          <CardsImages data={data} />
        ))}
      </OwlCarousel>
      <OwlCarousel
        className="owl-theme owl_custom"
        loop
        
        center
        nav
        items={6}
        margin={58}
      >
        {cardsData.map((data) => (
          <CardsImages data={data} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default LandingPageCards;
