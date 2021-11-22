import React from 'react'
import Images from '../../Common/Ui/Image';
// import Image from '../../Common/Ui/Image';
// import gettingStartedImage from '../../../public/gettingStartedText.png';

const GettingStarted = () => {
  return (
    <div className="getting-started-text">
      <Images src="/gettingStartedText.png" extraClass="getting-started-image"/>
      <div className="getting-started-below-image-text">
        <div className="getting-started-heading">
          <p>Hey Changemaker,</p>
          <p>Ready to shakeup the world ?</p>
        </div>
      <div className="getting-started-text">
          <p>Up 4 Change is transforming pocket change into <br />
            global change through hassle free giving!
          </p>
        </div>
      </div>
    </div>
  )
}

export default GettingStarted
