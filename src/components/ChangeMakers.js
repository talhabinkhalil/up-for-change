import React from "react";
import Images from "../Common/Ui/Image";
import "../Styles/changeMakers.scss";
import InputGroups from "../UserModule/DashBoard/InputGroups";
import {
  changeMaker2ndPara,
  changeMaker3rdPara,
  changeMakerParaFirst,
  team,
} from "./../ViewData/ChangeMakerData";

export default function ChangeMakers() {
  return (
    <div className="change_maker_container">
      <div className="change_maker_parentbox">
        <div className="change_maker_firstbox">
          <div className="content_with_picture">
            <div className="heading">
              <h2>Thanks for being a changemaker!</h2>
            </div>
            <div className="border_line"></div>
            <div className="content_image_div">
              <Images src="./assets/Coin.jpg" extraClass="" />
            </div>
            <div className="change_maker_first_para">
              {changeMakerParaFirst.map((singlePara) => {
                return <h3>{singlePara}</h3>;
              })}
            </div>
          </div>
          <div className="team_box">
            {team.map((singleMem) => {
              return (
                <div id={singleMem.id} className="team-image_container">
                  <div className="team_image_div">
                    <Images src={singleMem.image} extraClass="team_image" />
                  </div>
                  <div className="team_name">
                    <h5>{singleMem.name}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="change_maker_2ndbox">
        <div>
          <div className="secondbox_firstPara">
            {changeMaker2ndPara.map((singlePara) => {
              return <h5>{singlePara}</h5>;
            })}
          </div>
          <div className="secondbox_secondPara">
            {changeMaker3rdPara.map((singlePara) => {
              return <h5>{singlePara}</h5>;
            })}
          </div>
        </div>
      </div>
      <div className="change_maker_3rdbox">
        <div>
          <h3>SEARCH FOR ORGANISATION TO SUPPORT</h3>
          <hr className="hr" />
          <div className="input-group">
            <InputGroups />
          </div>
        </div>
      </div>
    </div>
  );
}
