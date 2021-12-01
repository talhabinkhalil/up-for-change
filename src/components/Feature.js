import React from "react";
import "../Styles/feature.scss";
import Images from "./../Common/Ui/Image";
import {
  feature_paragraph,
  feature_paragraph_four,
  feature_paragraph_three,
  feature_paragraph_two,
} from "./../ViewData/fetureData";

export default function Feature() {
  return (
    <div>
      <div className="feature_first_container">
        <div className="main_box">
          <div>
            <div className="heading">
              <h1>U4C features designed for you!</h1>
            </div>
            <div className="bottom_line"></div>
            <div className="first_para">
              <h3>You want giving to be easy, hassle free and fun!</h3>
            </div>
            <div className="first_box_image">
              <Images src="./assets/blueCoin.jpg" extraClass="" />
            </div>
          </div>
        </div>
        <div className="content_div">
          <div className="content_div_child">
            <div className="second_para">
              <h3>
                U4C allows you to automate your giving, making it so easy you
                can literally do it in your sleep!
              </h3>
            </div>
            <div className="third_para">
              {feature_paragraph.map((singlePara) => {
                return <h5>{singlePara}</h5>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="feature_second_container">
        <div className="second_container_clild">
          <div className="heading">
            <h2>You want to express yourself through giving</h2>
          </div>
          <div className="second_box_image">
            <Images src="./assets/purpleCoin.jpg" extraClass="" />
          </div>
          <div className="four_para">
            {feature_paragraph_two.map((singlePara) => {
              return <h5>{singlePara}</h5>;
            })}
          </div>
        </div>
      </div>
      <div className="feature_third_container">
        <div className="third_container_clild">
          <div className="heading">
            <h2>
              You want to be able to connect to causes and likeminded people
            </h2>
          </div>
          <div className="third_box_image">
            <Images src="./assets/heatMan.png" extraClass="" />
          </div>
          <div className="four_para">
            {feature_paragraph_three.map((singlePara) => {
              return <h5>{singlePara}</h5>;
            })}
          </div>
        </div>
      </div>
      <div className="feature_four_container">
        <div className="four_container_clild">
          <div className="heading">
            <h2>You want to know your gift has made a difference</h2>
          </div>
          <div className="four_box_image">
            <Images src="./assets/yellowMan.png" extraClass="" />
          </div>
          <div className="four_para">
            {feature_paragraph_four.map((singlePara) => {
              return <h5>{singlePara}</h5>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
