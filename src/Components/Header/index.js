import React from 'react'

function Header() {
  return (
    <div className='container mx-auto flex justify-between items-center py-10 px-4'>
      <div className='text-6xl font-black'><span className='mr-4'>👋</span>Hey!</div>
      <div>
        <ul className='flex gap-5 text-xl'>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header