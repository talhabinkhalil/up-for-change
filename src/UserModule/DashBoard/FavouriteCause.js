import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Images from "../../Common/Ui/Image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../Styles/favCause.scss";

const FavouriteCause = ({ data }) => {
  return (
    <div className="fav-cause-main">
      <div className="fav-cause-content">
        <p className="fav-cause-heading">Choose from Your Favourite Causes</p>
        <hr className="card-hr" />
        <OwlCarousel
          className="owl-carouselowl-theme owl_custom"
          nav
          loop
          items={2}
          margin={60}
        >
          <div className="fav_cause_image_div">
            {data.map((d) => (
              <Images
                src={`${d}`}
                extraClass="app-feature-mobile singleImage"
              />
            ))}
          </div>

          {/* <div className="fav_cause_image_div">
            {data.map((d) => (
              <Images src={`${d}`} extraClass="app-feature-mobile singleImage" />
            ))}
          </div> */}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default FavouriteCause;
