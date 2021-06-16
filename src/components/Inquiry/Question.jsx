import React from 'react'
import agent from '../../assets/Jehn.png'
import { motion } from 'framer-motion'

const Question = ({ text, dataCy = 'question' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 0.25,
      }}
      className='question-container'>
      <img src={agent} alt='agent' />
      <p data-cy={dataCy}>{text}</p>
    </motion.div>
  )
}

export default Question
