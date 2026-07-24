import React from 'react'

function Navbar({title, description}) {
  return (
    <div className='w-full bg-[#F6EEFF] mx-auto font-pop p-8 flex flex-col items-start select-none'>
      <h1 className='px-10 text-left text-4xl font-bold text-[#1D1B20] mb-3'>{title}</h1>
      <p className='px-11 text-gray-600 text-base max-w-4xl leading-relaxed'>{description}</p>
    </div>
  )
}

export default Navbar