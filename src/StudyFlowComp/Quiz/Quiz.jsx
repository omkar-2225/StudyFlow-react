import React from 'react'

function Quiz() {
  return (
    <div className='flex flex-col w-175 justify-center items-center mx-auto font-pop'>
      {/* total question */}
      <span className='mb-10 bg-purple-200 px-5 py-1 text-[18px] font-medium text-purple-900 ring-1 rounded-full'>QUESTION 3 OF 10</span>

      {/* actual question */}
      <h2 className='text-black text-4xl font-semibold text-center mb-10'>Which layout principle best minimizes user distraction in a quiz interface?</h2>

      {/* options cards */}
      <div className='w-full h-25 flex '>
        <h2>A</h2>
        <p className=''>Centered and focused layout</p>
        <p className=''>prioritizes clarity and focus by removing peripheral noise.</p>
      </div>
    </div>
  )
}

export default Quiz
