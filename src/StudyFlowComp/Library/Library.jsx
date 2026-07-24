import React from 'react'
import {FileStackIcon} from 'lucide-react'

function Library() {

  const studyset = [
    {
      id : 1,
      subject : Biology,
      title : 'Biology : Basics of Biology',
      cards: 42,
      date : "2 days ago",
      image : ""
    }
  ]

  return (
    <div>
      <div className='flex gap-6 flex-wrap'>

        <div className='w-[256px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 font-pop hover:scale-105'>
          <img src="https://cinemaroo.com/wp-content/uploads/2025/05/e04d856a-a536-4035-bf2d-bd47e68dc4a4.webp" alt="" className='w-full h-36 object-cover transition-transform duration-300 hover:scale-110'/>

          <div className='p-4'>
            <h3 className='text-[15px] font-bold'>Biology : Basics of Biology</h3>
            
            <div className='flex justify-between items-center mt-3 text-[12px] text-gray-600'>
              <span className='flex items-center gap-1'><FileStackIcon size={16}/> 42 cards</span> 
              <span>2 days ago</span>
            </div>

            {/* study button */}
            <button className='w-full mt-5 bg-[#F5EFF7] text-black rounded-xl py-2 font-semibold hover:bg-[#6750A4] hover:text-white transition-all duration-300 hover:scale-[1.02]'>Study</button>
          </div>

        </div>

        <div className='w-[256px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 font-pop hover:scale-105 '>
          <img src="https://cinemaroo.com/wp-content/uploads/2025/05/e04d856a-a536-4035-bf2d-bd47e68dc4a4.webp" alt="" className='w-full h-36 object-cover transition-transform duration-300 hover:scale-110'/>

          <div className='p-4'>
            <h3 className='text-[15px] font-bold'>Biology : Basics of Biology</h3>
            
            <div className='flex justify-between items-center mt-3 text-[12px] text-gray-600'>
              <span className='flex items-center gap-1'><FileStackIcon size={16}/> 42 cards</span> 
              <span>2 days ago</span>
            </div>

            {/* study button */}
            <button className='w-full mt-5 bg-[#F5EFF7] text-black rounded-xl py-2 font-semibold hover:bg-[#6750A4] hover:text-white transition-all duration-300 hover:scale-[1.02]'>Study</button>
          </div>

        </div>

        <div className='w-[256px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 font-pop hover:scale-105 '>
        <img src="https://cinemaroo.com/wp-content/uploads/2025/05/e04d856a-a536-4035-bf2d-bd47e68dc4a4.webp" alt="" className='w-full h-36 object-cover transition-transform duration-300 hover:scale-110'/>

        <div className='p-4'>
          <h3 className='text-[15px] font-bold'>Biology : Basics of Biology</h3>
          
          <div className='flex justify-between items-center mt-3 text-[12px] text-gray-600'>
            <span className='flex items-center gap-1'><FileStackIcon size={16}/> 42 cards</span> 
            <span>2 days ago</span>
          </div>

          {/* study button */}
          <button className='w-full mt-5 bg-[#F5EFF7] text-black rounded-xl py-2 font-semibold hover:bg-[#6750A4] hover:text-white transition-all duration-300 hover:scale-[1.02]'>Study</button>
        </div>

        </div>

        <div className='w-[256px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 font-pop hover:scale-105 '>
        <img src="https://cinemaroo.com/wp-content/uploads/2025/05/e04d856a-a536-4035-bf2d-bd47e68dc4a4.webp" alt="" className='w-full h-36 object-cover transition-transform duration-300 hover:scale-110'/>

        <div className='p-4'>
          <h3 className='text-[15px] font-bold'>Biology : Basics of Biology</h3>
          
          <div className='flex justify-between items-center mt-3 text-[12px] text-gray-600'>
            <span className='flex items-center gap-1'><FileStackIcon size={16}/> 42 cards</span> 
            <span>2 days ago</span>
          </div>

          {/* study button */}
          <button className='w-full mt-5 bg-[#F5EFF7] text-black rounded-xl py-2 font-semibold hover:bg-[#6750A4] hover:text-white transition-all duration-300 hover:scale-[1.02]'>Study</button>
        </div>

        </div>

      </div>
    </div>
  )
}

export default Library
