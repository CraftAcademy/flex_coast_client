import React, { useState } from 'react'
import companyLogo from '../assets/logo.png'

const TestimonialSlider = () => {
  const [slider, setSlider] = useState(1)
  const sliderHandler = (number) => {
    setSlider(slider + number)
    if (slider + number === 4) {
      setSlider(1)
    } else if (slider + number === 0) {
      setSlider(3)
    }
  }
  return (
    <div className={`slider-container bg-${slider}`}>
      <div className='testimonial-container'>
        <div className={`social-image person-${slider}`}></div>
        <div className='info-container'>
          <h4>
            "Testimonial Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Placeat nihil quo nostrum rem. Officia cupiditate repellendus,
            saepe rem deleniti voluptatibus illum aliquid magnam non distinctio
            quam soluta laborum minima facilis."
          </h4>
          <div>
            <p className='name'>Johnny Cage</p>
            <p className='job-title'>CEO of MK</p>
            <div className='logo-section'>
              <button onClick={() => sliderHandler(-1)}>Prev</button>
              <img
                className='company-logo'
                src={companyLogo}
                alt='company-logo'
              />
              <button onClick={() => sliderHandler(1)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TestimonialSlider
