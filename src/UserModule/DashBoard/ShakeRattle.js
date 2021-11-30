import React from "react";
import Images from "../../Common/Ui/Image";
// import Carousel from 'react-material-ui-carousel'

const ShakeRattle = ({ data }) => {
  return (
    <div>
    {/* <Carousel> */}
        <div className={`shake-rattle-main ${data.customClasses}`}>
          <div className="shake-rattle-image-text">
            <p className="shake-rattle-heading">{data.header}</p>
            <Images src={`${data.image}`} />
            <p className="shake-rattle-paragraph">
              {data.paragraph.map((d) => (
                <>
                  {d}
                  <br />
                </>
              ))}
            </p>
          </div>
          <div className="">
          {
            data.cartoonImage &&
            <Images src={`${data.cartoonImage}`} />
          }
        </div>
        </div>
    {/* </Carousel> */}
    </div>
  );
};

export default ShakeRattle;
