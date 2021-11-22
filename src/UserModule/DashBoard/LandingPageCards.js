import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { cardsData } from '../../ViewData/CardsData';
import CardsImages from './CardsImages'

const LandingPageCards = () => {
  return (
    <div className="cards-main">
      <p className="cards-header">Find causes YOU care about and CONNECT with them NOW!</p> 
      <hr className="card-hr" /> 
      <Container className="card-container">
        <Row>
          {
            cardsData.map(data => (
              <CardsImages data={data} />
            ))
          }
        </Row>   
        <br />         
        <Row>
          {
            cardsData.map(data => (
              <CardsImages data={data} />
            ))
          }
        </Row>          
      </Container>    
    </div>
  )
}

export default LandingPageCards
