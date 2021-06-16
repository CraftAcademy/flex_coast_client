import React, { useState, useEffect } from 'react'
import Testimonial from './Testimonial'
import { testimonials } from '../assets/testimonials'
import { useTranslation } from 'react-i18next'

const TestimonialsSection = () => {
  const [slider, setSlider] = useState(1)
  const [timeoutActive, setTimeoutActive] = useState(true)
  const { t } = useTranslation()

  const sliderHandler = (number) => {
    if (slider + number === 4) {
      setSlider(1)
    } else if (slider + number === 0) {
      setSlider(3)
    } else {
      setSlider(slider + number)
    }
  }

  let slideShow = undefined

  const stopTimer = () => {
    setTimeoutActive(false)
    clearTimeout(slideShow)
  }

  const startTimer = () => {
    slideShow = setTimeout(() => {
      sliderHandler(1)
    }, 4000)
  }

  useEffect(() => {
    timeoutActive && startTimer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slider, timeoutActive])

  return (
    <>
    <div className='testimonials-header'>
      <h1 data-cy='pitch-message'>{t('pitchMessage')}</h1>
    </div>    
      <div className='testimonials-container'>        
        <Testimonial
          slider={slider}
          info={testimonials[slider - 1]}
          sliderHandler={sliderHandler}
          stopTimer={stopTimer}
        />
      </div>
    </>
  )
}

export default TestimonialsSection
