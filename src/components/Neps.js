import React from "react";
import "../Styles/neps.scss";
import { neps_para_one, neps_para_two } from "../ViewData/nepsData";
import { blue_content_data } from "./../ViewData/nepsData";
import Images from "./../Common/Ui/Image";
import InputGroups from "../UserModule/DashBoard/InputGroups";

export default function Neps() {
  return (
    <div>
      <div className="neps_firstbox">
        <div className="main_box">
          <div>
            <div className="heading">
              <h1>How do round ups work?</h1>
            </div>
            <div className="bottom_line"></div>
          </div>
        </div>
        <div className="content_div">
          <div className="content_div_child">
            <div className="first_para">
              <h4>
                U4C allows you to automate your giving, making it so easy you
                can literally do it in your sleep!
              </h4>
            </div>
            <div className="second_para">
              <h4>
                You can create immediate connections with donors by linking and
                connecting them to a curated social feed full of awesome video &
                photo footage, inspiring them to seamlessly act on their support
                in the form of small micro donations.
              </h4>
            </div>
          </div>
        </div>

        <div className="content_div_two">
          <div className="content_div_child">
            <div className="first_para">
              <h2>
                - People hate being hassled for money. It just doesn’t work!
              </h2>
              {neps_para_one.map((singlePara) => {
                return <h5>{singlePara}</h5>;
              })}
            </div>
            <div className="second_para">
              <h2>- Let’s bring the love back to charitable giving</h2>
              {neps_para_two.map((singlePara) => {
                return <h5>{singlePara}</h5>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="neps_secondbox">
        <div className="blue_content">
          {blue_content_data.map((singlePara) => {
            return <h3>{singlePara}</h3>;
          })}
        </div>
      </div>
      <div className="neps_thirdbox">
        <div className="main_box">
          <div>
            <div className="heading">
              <h2>
                But what do donors want and how do we connect with them???
              </h2>
            </div>
          </div>
        </div>
        <div className="heading_section2">
          <h4>
            Don’t just focus on the act of giving, focus on the whole person
            that is actually doing the giving.
          </h4>
        </div>
        <div className="nps_threebox">
          <div className="threebox_divone">
            <div className="child_div_one">
              <Images src="./assets/gift_Coin.png" extraClass="" />
            </div>
            <div className="child_div_two">
              <h4>-They want to know that their gift made a difference.</h4>
            </div>
          </div>
          <div className="threebox_divtwo">
            <Images src="./assets/Vector.jpg" extraClass="" />
          </div>
          <div className="threebox_divthree">
            <div className="child_div_one">
              <Images src="./assets/blue_Coin.jpg" extraClass="" />
            </div>
            <div className="child_div_two">
              <h4>
                -They need to be able to voice their own unique beliefs through
                giving to their chosen cause.
              </h4>
            </div>
          </div>
        </div>
        <div className="neps_two_div">
          <div className="child_one">
            <Images src="./assets/three_men.jpg" extraClass="" />
          </div>
          <div className="child_two">
            <h4>
              -They need to be able to connect with people like them, passionate
              about the same cause.
            </h4>
          </div>
        </div>
        <div className="content_div_three">
          <div className="first_para">
            <h4>
              Up 4 Change connects people to causes allowing them to join and
              contribute to a community of givers just like them. And we will
              never ask them for more money, only thank them for being generous,
              awesome people!
            </h4>
          </div>
          <div className="second_para">
            <h4>
              And.. you have the choice to donate to multiple causes you care
              about.
            </h4>
          </div>
          <div className="third_para">
            <h3>
              Australians are likely to have a set of up to three charities that
              they donate to.
            </h3>
          </div>
        </div>
      </div>
      <div className="neps_four_box">
        <div>
          <h3>SEARCH FOR ORGANISATION TO SUPPORT</h3>
          <hr className="hr" />
          <div className="input-group">
            <InputGroups />
          </div>
        </div>
      </div>
      {/* <div className="neps_five_box">
        <div className="button_div_one">
          <h3>To find out more Click Below!</h3>
          <div className='button_div'>
          <button className="signup-button2">CONTACT US</button>
        </div>
        </div>
        <div className="button_div_two">
          <h3>Want to get your NFP involved with making change? </h3>
          <div className='button_div'>
          <button className="signup-button2">BOOK A CALL</button>
        </div>
        </div>
      </div> */}
    </div>
  );
}
