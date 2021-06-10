import React, { useState } from 'react'
import companyLogo from '../assets/logo.png'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

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
          </div>

          <div className='logo-section'>
            <IconButton onClick={() => sliderHandler(-1)}>
              <ChevronLeftIcon fontSize='large' />
            </IconButton>
            <img
              className='company-logo'
              src={companyLogo}
              alt='company-logo'
            />
            <IconButton onClick={() => sliderHandler(1)}>
              <ChevronRightIcon fontSize='large' />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TestimonialSlider
