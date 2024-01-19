import React from 'react'
import logo from '../../Accets/logo.png'

const Navbar = () => {
  return (
    <div className="container flex items-center justify-between w-full h-20">
      <img src={logo} alt="logo" />

         <div className="NavItem flex">
            <ul className='m-3 text-3A3740 w-15 hover:cursor-pointer'>Home</ul>
            <ul className='m-3 text-3A3740 hover:cursor-pointer'>Flashcard</ul>
            <ul className='m-3 text-3A3740 hover:cursor-pointer'>Contact</ul>
            <ul className='m-3 text-3A3740 hover:cursor-pointer'>FAQ</ul>
            <button className='m-3 bg-gradient-to-r from-blue-700 to-blue-900 h-8 w-24 mt-2 text-teal-50 rounded-full hover:cursor-pointer'>Login</button>
         </div>


    </div>
  )
}

export default Navbar
