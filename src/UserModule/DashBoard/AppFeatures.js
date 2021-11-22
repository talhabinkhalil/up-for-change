import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../../Common/Ui/Image'
import { appFeature, appFeatureRight } from '../../ViewData/AppFeatureData'
import AppFeatureTextImage from './AppFeatureTextImage'

const AppFeatures = () => {
  return (
    <div className="app-feature-main">
      <p className="app-feature-header">App Features</p>
      <Container fluid>
        <Row>
          <Col>
          {
            appFeature.map(data =>( 
              <>
              <AppFeatureTextImage
              data={data}              
              />
              <br />
              </>
            ))
          }
          </Col>
          <Col>
          <Images src="app-feature-mobile.png" extraClass="app-feature-mobile" />          
          </Col>
          <Col>
            {
              appFeatureRight.map(data => (
                <>
                <AppFeatureTextImage
                data={data}              
                />
                <br />
                </>                
              ))
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AppFeatures
