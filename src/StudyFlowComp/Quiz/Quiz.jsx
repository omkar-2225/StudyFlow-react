import { LucideBadgeQuestionMark, MoveRight } from 'lucide-react'
import React from 'react'

function Quiz() {
  return (
    <div className='flex flex-col w-175 justify-center items-center mx-auto font-pop -mt-15'>
        
        {/* Topic and subject name */}
        <h2 className='text-center text-3xl font-bold text-[#4F378A] mb-3'>Subject</h2>
        <p className='mb-10 font-medium '>Topic: </p>

      {/* total question */}
      <span className='mb-5 bg-purple-200 px-5 py-1 text-[18px] font-medium text-purple-900 ring-1 rounded-full'>QUESTION 3 OF 10</span>

      {/* note */}
      <p className='mb-10 font-semibold text-[15px] text-red-400'>NOTE: ONCE ANSWER SUBMITTED CANNOT BE CHANGED.</p>

      {/* actual question */}
      <h2 className='text-black text-4xl font-semibold text-center mb-10'>Which layout principle best minimizes user distraction in a quiz interface?</h2>

      {/* options cards */}
      <div className='w-[95%]  mb-8 flex bg-white p-4 gap-5 rounded-2xl ring-2 ring-gray-400 justify-center items-center hover:bg-gray-100 transition-all duration-300'>
        <h2 className='bg-gray-200 px-4 py-3 rounded-2xl font-semibold ring ring-gray-300 text-[18px]'>A</h2>
        <div className='flex flex-wrap'>
            <p className='font-medium text-lg'>Centered and focused layout</p>
            <p className='font-normal'>prioritizes clarity and focus by removing peripheral noise.</p>
        </div>
      </div>
      <div className='w-[95%]  mb-8 flex bg-white p-4 gap-5 rounded-2xl ring-2 ring-gray-400 justify-center items-center hover:bg-gray-100 transition-all duration-300'>
        <h2 className='bg-gray-200 px-4 py-3 rounded-2xl font-semibold ring ring-gray-300 text-[18px]'>A</h2>
        <div className='flex flex-wrap'>
            <p className='font-medium text-lg'>Centered and focused layout</p>
            <p className='font-normal'>prioritizes clarity and focus by removing peripheral noise.</p>
        </div>
      </div>
      <div className='w-[95%]  mb-8 flex bg-white p-4 gap-5 rounded-2xl ring-2 ring-gray-400 justify-center items-center hover:bg-gray-100 transition-all duration-300'>
        <h2 className='bg-gray-200 px-4 py-3 rounded-2xl font-semibold ring ring-gray-300 text-[18px]'>A</h2>
        <div className='flex flex-wrap'>
            <p className='font-medium text-lg'>Centered and focused layout</p>
            <p className='font-normal'>prioritizes clarity and focus by removing peripheral noise.</p>
        </div>
      </div>
      <div className='w-[95%]  mb-8 flex bg-white p-4 gap-5 rounded-2xl ring-2 ring-gray-400 justify-center items-center hover:bg-gray-100 transition-all duration-300'>
        <h2 className='bg-gray-200 px-4 py-3 rounded-2xl font-semibold ring ring-gray-300 text-[18px]'>A</h2>
        <div className='flex flex-wrap'>
            <p className='font-medium text-lg'>Centered and focused layout</p>
            <p className='font-normal'>prioritizes clarity and focus by removing peripheral noise.</p>
        </div>
      </div>

      {/* buttons : request hint, skip, submitanswer (next button) */}
      <div className='flex items-center gap-3 justify-between w-full px-6 select-none'>

        {/* request hint */}
        <button className='flex gap-2 justify-center items-center font-semibold hover:text-green-600'><LucideBadgeQuestionMark /> Request hint</button>

        <div className='flex flex-row gap-5'>
            <button className='bg-gray-100 text-black px-5 py-3 rounded-xl text-[16px] font-semibold hover:bg-gray-200 ring ring-gray-300'>Skip Question</button>
            <button className='flex gap-2 bg-[#5a409c] text-white px-5 py-3 rounded-xl text-[16px] font-semibold justify-center items-center hover:bg-[#6448ab] hover:scale-105 transition-all duration-300'>Submit answer <MoveRight size={30} fontSize={20}/></button>
        </div>
      </div>

    </div>
  )
}

export default Quiz
