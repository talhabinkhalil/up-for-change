import React from 'react'
import { Container } from 'react-bootstrap'
import { roundUpData } from '../../ViewData/RoundUpData'
import RoundUpReUsable from './RoundUpReUsable'

const RoundUp = () => {
  return (
    <div className="roundUp-main">
    <p className="header-text-roundUp">
      Round-up in 4 simple steps.
    </p>
    <Container>
      {
        roundUpData.map(d => (
          <RoundUpReUsable data={d} />
        ))
      }
    </Container>
    </div>
  )
}

export default RoundUp
