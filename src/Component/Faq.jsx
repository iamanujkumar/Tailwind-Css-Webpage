import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";

const Faq = () => {
  return (
    <div className='flex flex-col h-96 m-4'>
        <p className='text-blue-800 font-bold text-2xl flex justify-start mt-8'>FAQ</p>
        <div className='border-solid border-2 border-sky-600
        font-bold text-slate-800 flex justify-between items-center w-3/5 h-12 rounded-lg p-5
         mt-7'>
            <p>Can education flashcards be used for all age groups?</p>
            <div className='hover:cursor-pointer'><IoChevronDownOutline /></div>
        </div>

        <div className='border-solid border-2 border-sky-600
        font-bold text-slate-800 flex justify-between items-center w-3/5 h-12 rounded-lg p-5
         mt-7'>
            <p>How do education flashcards work?</p>
            <div className='hover:cursor-pointer'><IoChevronDownOutline /></div>
        </div>

        <div className='border-solid border-2 border-sky-600
        font-bold text-slate-800 flex justify-between items-center w-3/5 h-12 rounded-lg p-5
         mt-7 '>
            <p>Can education flashcards be used for test preparation?</p>
            <div className='hover:cursor-pointer'><IoChevronDownOutline /></div>
        </div>
    </div>
  )
}

export default Faq
