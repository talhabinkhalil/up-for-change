import React from 'react'
import Images from '../../Common/Ui/Image'

const WeLove = ({data}) => {
  return (
    <div className={`we-love-component ${data.colorClass}`}>
      <div className="text-center">
        <p className="we-love-heading">{data.firstHeadingText} {<span><Images src={`${data.headerImage}`} /></span>} {data.lastHeadingText}</p>
        <p>{data.firstPara && data.firstPara}</p>
        <p>{data.lastPara && data.lastPara}</p>
        {
          data.long && 
          <>
            <p className="second-heading">{data.think}</p>
            <hr className="hr-heading" />
            <p className="long-first-text">{data.longText}</p>
            <p className="long-first-two">{data.longTextTwo}</p>
          </>
        }
      </div>
      <div className={`we-love-image  ${data.imageClass}`}>
        <Images src={`${data.image}`} />
      </div>
    </div>
  )
}

export default WeLove
