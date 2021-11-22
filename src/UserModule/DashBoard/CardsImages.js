import React from 'react'
import { Col } from 'react-bootstrap'
import Images from '../../Common/Ui/Image'

const CardsImages = ({data}) => {
  return (
    <>
    <Col>
    <div className="card-image-common">
      <div className="card-image">
        <Images src={`${data.image}`} extraClass="card-image-dimensions"  />
        <p>{data.text}</p>
      </div>      
    </div>
    </Col>
    </>
  )
}

export default CardsImages
