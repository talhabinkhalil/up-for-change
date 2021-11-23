import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Images from '../../Common/Ui/Image'

const RoundUpReUsable = ({data}) => {
  return (
    <>
    {
      data.textLeft ? (
        <Row>
        <Col>
        <div className="font-purple">
          <p className="roundup-header">
            {data.heading}         
          </p>
          <p className="roundup-paragraph">
            {data.paragraph}          
          </p>
        </div>
        </Col>
        <Col>
        <Images src={`${data.image}`} extraClass="roundUpOneImage" />
        </Col>      
      </Row>  
      ) : (
        <Row>
        <Col>
        <Images src={`${data.image}`} extraClass="roundUpOneTwo" />
        </Col>      
        <Col>
        <div className="font-purple">
          <p className="roundup-header-right">
          {data.heading}
          </p>
          <p className="roundup-paragraph-right">
          {data.paragraph}
          </p>
        </div>
        </Col>
      </Row>
      )
    }
    </>
  )
}

export default RoundUpReUsable
