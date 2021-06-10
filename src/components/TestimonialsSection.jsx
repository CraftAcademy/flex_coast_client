import React, { useState } from 'react'
import Testimonial from './Testimonial'
import illustration from '../assets/office-illu.png'
import { testimonials } from '../assets/testimonials'

const TestimonialsSection = () => {
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
    <div className='testimonials-container'>
      <div className='illu-container'>
        <img className='illustration' src={illustration} alt='illustration' />
      </div>
      <h4 className='testimonial-subtitle'>High end flexibility</h4>
      <h1 className='testimonial-title'>
        In the last 12 months, Flex Coast has helped over 100 companies find
        their new offices - here are some examples
      </h1>
      <Testimonial
        slider={slider}
        info={testimonials[slider - 1]}
        sliderHandler={sliderHandler}
      />
    </div>
  )
}

export default TestimonialsSection
