import React from "react";
import Images from "../Common/Ui/Image";
import "../Styles/roundUpWork.scss";

export default function RoundUpWork() {
  return (
    <div>
      <div className="round_up_work_firstbox">
        <div className="main_box">
          <div>
            <div className="heading">
              <h1>How do round ups work?</h1>
            </div>
            <div className="bottom_line"></div>

            <div className="first_box_image">
              <Images src="./assets/pinkCoin.jpg" extraClass="" />
              <Images src="./assets/ques.jpg" extraClass="quesClass" />
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
          </div>
        </div>
      </div>
      {/* //////////////////// */}
      <div className="round_up_work_secondbox">
        <div className="heading">
          <h1>How do round ups work?</h1>
        </div>
        <div className="three_box_div">
          <div className="div_box_one">
            <Images src="./assets/Frame-Heart.jpg" extraClass="img" />
            <div className="content">
              <h4>1. Choose a cause you care about.</h4>
              <p>
                Connect with causes you care about through a centralised
                tailored social feed. Add them to your favourites!
              </p>
            </div>
          </div>
          <div className="div_box_two">
            <Images src="./assets/shelterFrame.jpg" extraClass="img" />
          </div>
          <div className="div_box_three">
            <Images src="./assets/semi_Coin.jpg" extraClass="img" />
            <div className="content">
              <h4>4. Have a say in where your funds go!</h4>
              <p>
                Select round up limits for each transaction as well as monthly
                limits. You can also choose a one-off donation.
              </p>
            </div>
          </div>
        </div>
        {/* ////////////// */}
        <div className="two_box_div">
          <div className="box_one">
            <Images src="./assets/four_Round.jpg" extraClass="img" />
            <div className="content">
              <h4>2. Tell us what amount you want to round up to.</h4>
              <p>
                Select round up limits for each transaction as well as monthly
                limits.You can also choose a one-off donation.
              </p>
            </div>
          </div>
          <div className="box_two">
            <Images src="./assets/two_Link.jpg" extraClass="img" />
            <div className="content">
              <h4>
                3. Securely link your everyday transaction account and spend
                normally!
              </h4>
              <p>
                Up 4 Change seamlessly rounds up your transactions in the
                background to the nearest $1 and automatically donates your
                spare change to your preferred charity.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////// */}
      <div className="round_up_work_thirdbox">
        <div className="main_box">
          <div className="cover">
            <div className="content">
              <h4>
                The collective power of all of our common cents can go towards
                helping those that really need it!
              </h4>
            </div>
            <div className="heading">
              <h1>Are YOU Up 4 Change? We are!</h1>
            </div>
            <div className="bottom_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
