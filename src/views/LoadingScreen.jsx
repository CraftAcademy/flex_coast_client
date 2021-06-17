import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo.svg'

const LoadingScreen = () => {
  return (
    <AnimatePresence>
      <motion.div
        className='loading-screen'
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <img src={logo} alt='logo' className='loading-screen-logo' />
        <h1>Loading website</h1>
        <CircularProgress />
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
