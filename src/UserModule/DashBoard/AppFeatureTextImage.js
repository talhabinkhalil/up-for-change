import React from 'react'
import Images from '../../Common/Ui/Image'

const AppFeatureTextImage = ({data}) => {
  return (
    <div className="image-and-text">
      <Images src={`${data.image}`} extraClass="app-feature-mobile" />
      <p className="app-feature-header">{data.header}</p>
      <p className="app-feature-paragraph">{data.paragraph}</p>
    </div>
  )
}

export default AppFeatureTextImage
