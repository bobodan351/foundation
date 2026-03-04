import React from 'react'
import childimg from "./images/picture1.webp"

const ImagePreview = ({name}) => {
  return (
	  <div className='childimg-container'>
		  <img src={childimg} alt="Child" />
		  <div className='overlay-text'>
			<h1>{name}</h1>
		  </div>
	</div>
  )
}

export default ImagePreview