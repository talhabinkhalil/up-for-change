import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Images from '../../Common/Ui/Image'

const FavouriteCause = ({data}) => {
  return (
    <div className="fav-cause-main">
      <div className="fav-cause-content">
        <p className="fav-cause-heading">Choose from Your Favourite Causes</p>
        <hr className="card-hr" />
        <Container>
          <Row>
            {
              data.map(d => (
                <Col>
                  <Images src={`${d}`} extraClass="app-feature-mobile" />         
                </Col>
              ))
            }
          </Row>
          <Row>
            {
              data.map(d => (
                <Col>
                  <Images src={`${d}`} extraClass="app-feature-mobile" />         
                </Col>
              ))
            }
          </Row>
        </Container> 
      </div>
    </div>
  )
}

export default FavouriteCause
