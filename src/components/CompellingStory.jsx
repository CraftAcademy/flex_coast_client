import React from 'react'
import avatar from '../assets/avatar.jpg'

const CompellingStory = () => {
  return (
    <div className='compelling-container' data-cy='compelling-container'>
      <img
        className='compelling-avatar'
        src={avatar}
        alt='avatar'
        data-cy='compelling-avatar'
      />
      <p className='compelling-text' data-cy='compelling-text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi provident
        reprehenderit sed? Eaque, omnis cupiditate.
      </p>
    </div>
  )
}

export default CompellingStory
