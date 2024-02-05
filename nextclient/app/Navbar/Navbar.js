import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='Navabr'>
        <Link href='/home'>Home</Link>
        <Link href='/signup'>Signup</Link>
        <Link href='/login'>Login</Link>
        
  </div>
  )
}

export default Navbar