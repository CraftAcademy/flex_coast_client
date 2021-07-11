import React, { useState, useEffect } from 'react'
import Testimonial from './Testimonial'
import { testimonials } from '../data/testimonials'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  const [slider, setSlider] = useState(1)
  const [timeoutActive, setTimeoutActive] = useState(true)
  const { t } = useTranslation()

  const sliderHandler = (number) => {
    if (slider + number === 3) {
      setSlider(1)
    } else if (slider + number === 0) {
      setSlider(2)
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
    return () => {
      stopTimer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slider, timeoutActive])

  return (
    <>
      <div className='testimonials-header'>
        <motion.h1
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.3,
            duration: 0.5,
          }}
          data-cy='pitch-message'>
          {t('pitchMessage')}
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1.3,
          duration: 0.5,
        }}
        className='testimonials-container'>
        <Testimonial
          slider={slider}
          info={testimonials[slider - 1]}
          sliderHandler={sliderHandler}
          stopTimer={stopTimer}
        />
      </motion.div>
    </>
  )
}

export default TestimonialsSection
