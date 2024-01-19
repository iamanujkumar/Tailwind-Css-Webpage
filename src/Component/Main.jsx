import React from 'react'
import { MdLightbulbOutline } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { IoReloadOutline } from "react-icons/io5";
import { PiBracketsSquareBold } from "react-icons/pi";
import { FaPlusCircle } from "react-icons/fa";
import Logo2 from '../Accets/logo2.png'

const Main = () => {
  return (
    <div className="container flex flex-col">
  <p className="text-blue-800 font-bold text-3xl flex justify-start mt-4 w-1/2 m-4"> Relations and Functions (Mathematics)
  </p>
  <div className=' flex justify-center text-neutral-500 font-medium'>
    <ul className='m-5 text-blue-800 underline font-bold hover:cursor-pointer'>Study</ul>
    <ul className='m-5 hover:cursor-pointer'>Quiz</ul>
    <ul className='m-5 hover:cursor-pointer'>Test</ul>
    <ul className='m-5 hover:cursor-pointer'>Game</ul>
    <ul className='m-5 hover:cursor-pointer'>Others</ul>
  </div>
  <div className='flex justify-center items-center flex-col'>
  <div className='h-80 w-1/2 bg-gradient-to-r from-blue-500 to-blue-900 border border-blue-900 rounded-3xl'>
  <div className='flex justify-between m-3 text-white text-xl hover:cursor-pointer'>
    <MdLightbulbOutline />
    <HiMiniSpeakerWave />
  </div>
  <div className='text-white text-3xl font-medium flex items-center justify-center my-24'>
    9 + 6 + 7x - 2x - 3
  </div>
</div>
<div className='mt-3 flex w-1/2 pl-6 pr-6 justify-between items-center hover:cursor-pointer'>
  <ul className='text-blue-900 border m-3 text-xl font-bold hover:cursor-pointer'><IoReloadOutline /></ul>
  <ul className='text-blue-900 border m-3 text-4xl hover:cursor-pointer'><FaChevronCircleLeft /></ul>
 <ul className='text-slate-800 font-bold m-3'> 01/10</ul>
  <ul className='text-blue-900 border m-3 text-4xl hover:cursor-pointer'><FaChevronCircleRight /></ul>
  <ul className='text-blue-900 border m-3 text-xl hover:cursor-pointer'><PiBracketsSquareBold /></ul>
  </div>

  </div>
  
  <div className='flex justify-between w-full items-center'>
  <img src={Logo2} alt="Logo2" />
  <div className='flex text-blue-900 m-3'>
  <ul className='text-2xl mr-3 hover:cursor-pointer'><FaPlusCircle /></ul>
  <ul className='text-lg font-bold hover:cursor-pointer'>Create Flashcard </ul> 
  </div>
      
  </div>

</div>
  )
}

export default Main
