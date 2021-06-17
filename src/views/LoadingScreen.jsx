import React, { useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo.svg'

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className='loading-screen'
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}>
          <img src={logo} alt='logo' className='loading-screen-logo' />
          <h1>Loading website</h1>
          <CircularProgress />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
