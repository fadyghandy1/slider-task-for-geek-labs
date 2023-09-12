import React, { useState } from 'react'
import './GallerySlider.css'

const GallerySlider = ({ slideImages }) => {
  console.log(slideImages)
  const [currentIndex, setCurrentIndex] = useState(slideImages.length - 2) // Start from the 2nd last image

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleRightClick = () => {
    if (currentIndex < slideImages.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className='gallery-wrapper' style={{ display: 'flex' }}>
      <div className="gallery-slider">
        {slideImages.map((imageData, index) => (
          <div className="images" key={index}>
            <img
              key={index}
              src={imageData.image}
              alt={`  ${imageData.image + index}`}
              className={index === currentIndex ? 'active' : ''}
            />
          </div>
        ))}
     
    
        
      </div>


      <div className='content'>
           <button
          className="arrow left-arrow"
          onClick={handleLeftClick}
          style={{ width: '10px' }}
        >
          &lt;
        </button>
          <div className='content-txt' >
            <h4>{slideImages[currentIndex].title}</h4>
            <p>{slideImages[currentIndex].description}</p>
          </div>
          <button className="arrow right-arrow" onClick={handleRightClick}>
          &gt;
        </button>
        </div>


    </div>
  )
}

export default GallerySlider