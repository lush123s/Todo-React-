import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex bg-indigo-900 text-white p-4 items-center justify-between'>
    <div className="logo ">
        <h1 className='text-2xl font-bold mr-2'>iTask</h1>
    </div>
    <ul className='flex gap-9'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home </li>
        <li className='cursor-pointer hover:font-bold transition-all'>Contact Us</li>
        <li className='cursor-pointer hover:font-bold transition-all'>About Us</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Email</li>
    </ul>
   </nav> 
  )
}

export default Navbar
