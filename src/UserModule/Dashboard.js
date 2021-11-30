import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { favCauseData } from '../ViewData/FavCauseData'
import { shakeAndRattle, socialPlatform } from '../ViewData/LandingPageImageText'
import { weLove } from '../ViewData/WeLoveData'
import AppFeatures from './DashBoard/AppFeatures'
import FavouriteCause from './DashBoard/FavouriteCause'
import GettingStarted from './DashBoard/GettingStarted'
import GettingStartedImage from './DashBoard/GettingStartedImage'
import InputGroups from './DashBoard/InputGroups'
import LandingPageCards from './DashBoard/LandingPageCards'
import RoundUp from './DashBoard/RoundUp'
import ShakeRattle from './DashBoard/ShakeRattle'
import WeLove from './DashBoard/WeLove'
import OurMission from './DashBoard/OurMission';
import Header from './Header/Header'
import { footeritems } from '../ViewData/NavBarItems'
// import InputGroup from './DashBoard/InputGroup'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="getting-started">
        <Container fluid>
          <Row className="remove-margin">
            <Col className="px-0">
            <GettingStarted />
            </Col>
            <Col>
            <GettingStartedImage />
            </Col>
          </Row>
          <Row>
            <Col>
            <div className="dashboard-getting-started-text">
              <p>SEARCH FOR ORGANISATION TO SUPPORT</p> 
              <hr className="hr" />
            </div>
            </Col>
          </Row>
          <Row>
            <div className="input-group">
              <br />
            <InputGroups />
            </div>            
          </Row>
          <Row>
            {weLove.map(data => (
              <WeLove 
                data={data}
              />
            ))}
          </Row>
          <Row>
            <ShakeRattle 
              data={shakeAndRattle}
            />
          </Row>
          <Row>
            <ShakeRattle
              data={socialPlatform}
            />
          </Row>
          <Row>
            <RoundUp />
          </Row>
          <Row>
            <AppFeatures />
          </Row>
          <Row>
            <LandingPageCards />
          </Row>
          <Row>
            <FavouriteCause data={favCauseData} />
          </Row>
          <Row>
            <OurMission />
          </Row>
          <Row className="footerNav">
            <Header navbarItems={footeritems} />
            <div className="footer_licence">Copyright @ 2021 Up4Change. All rights reserved</div>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard
