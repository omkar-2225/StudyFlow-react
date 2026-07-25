import { MoveLeft, MoveRight, Pointer } from 'lucide-react'
import React from 'react'

function Flashcard() {
  return (
    <div className='flex flex-col justify-center items-center -mt-10 font-pop'>
        <h1 className='text-4xl font-bold mb-2 text-[#4F378A]'>Quantum Physics</h1>
        <span className='font-light text-[15px] mb-15'>Topic: Introduction to quantum mechanics</span>

        {/* progress bar */}
        <div className='mb-12'>
            <span className='text-[13px] font-semibold flex flex-row justify-between px-3 text-[#4F378A]'>PROGRESS <span className='text-[12px]'>Card 2 of 10</span></span>
            <div className=' w-175 h-3 overflow-hidden rounded-full bg-[#E9DDFF] mb-5'></div>
        </div>

        {/* flashcards */}
        <div className='flex flex-col bg-white w-175 h-87.5 p-5 rounded-2xl shadow-lg hover:shadow-purple-200 hover:scale-102 duration-300 border-gray-200 border hover:border-purple-800 mb-15'>

            <span className='w-25 justify-center text-center bg-[#F6EEFF] text-[#4F378A] px-2 py-1 rounded-full text-[15px] font-medium'>Question</span>

            <div className="flex-1 flex items-center justify-center">
                <p className="text-center text-xl mx-2 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia commodi odio explicabo ea quos itaque.</p>
            </div>            
    
            <span className='gap-2 text-[14px] flex flex-row justify-center items-center cursor-pointer hover:text-[#4F378A] hover:font-semibold'> <Pointer size={15}/> click to reveal answer</span>
        </div>

        {/* forward, previous buttons */}
        <div className='w-175 flex flex-row gap-4 justify-between px-8'>

            <button className='group border border-purple-800 rounded-full px-4 py-2 font-sans flex gap-3 justify-center text-[#4F378A] font-semibold text-[15px] hover:bg-[#4F378A] hover:text-white duration-300 transition-all'><MoveLeft size={20} className="w-6 h-6 group-hover:text-white group-hover:scale-110 transition-all duration-300 cursor-pointer text-[#4F378A]" /> Previous</button>

            <button className='group border border-purple-800 rounded-full px-4 py-2 font-sans flex gap-3 justify-center text-[#4F378A] font-semibold text-[15px] hover:bg-[#4F378A] hover:text-white duration-300 transition-all'>Next <MoveRight size={20} className="w-6 h-6 group-hover:text-white group-hover:scale-110 transition-all duration-300 cursor-pointer text-[#4F378A]" /></button>


            {/* <button className='group bg-[#8069BF] rounded-full px-4 py-2 font-sans flex gap-3 justify-center text-white font-semibold text-[15px] hover:bg-[#8a72cb] hover:scale-105 hover:text-white duration-300 transition-all'>Next <MoveRight size={20} className="w-6 h-6 group-hover:text-white group-hover:scale-115 transition-all duration-300 cursor-pointer text-white" /></button> */}
        </div>
    </div>
  )
}

export default Flashcard
