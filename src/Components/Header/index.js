import React, { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='container mx-auto flex justify-between items-center py-12 px-4'>
      <div className='text-6xl font-black'><span className='mr-4'>👋</span>Hey!</div>
      <div>
        <ul className='lg:flex gap-5 text-xl hidden'>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <div id="nav-icon3" className={`${isOpen && 'open'} lg:hidden`} onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}

export default Header