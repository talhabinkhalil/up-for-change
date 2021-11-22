import React from 'react'
import Images from '../../Common/Ui/Image'

const OurMission = () => {
  return (
    <div className="our-mission-main">
      <p className="our-mission-heading">Our Mission</p>
      <p className="our-mission-paragraph">We are on a mission to transform pocket change into a big change through an engaging digital experience. We connect</p>
      <p className="our-mission-paragraph">donations directly to impact, breaking down barriers and building up supportive communities.</p>
      <p className="sub-headers">But we need your help!</p>
      <p className="sub-headers">Are YOU Up 4 Change??</p>
      <Images src="/ourMission.png" extraClass="app-feature-mobile" /><br />
      <button className="signup-button our-mission-get-started">GET STARTED</button>
    </div>
  )
}

export default OurMission
