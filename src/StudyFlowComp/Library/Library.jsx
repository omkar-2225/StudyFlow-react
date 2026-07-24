import React from 'react'
import {FileStackIcon} from 'lucide-react'

function Library() {

  const subjectImages = {
    Biology : "https://cinemaroo.com/wp-content/uploads/2025/05/e04d856a-a536-4035-bf2d-bd47e68dc4a4.webp",
    Physics : "https://s3.envato.com/files/215255924/Preview_Image_F_00000000.jpg",
    Chemistry : "https://images7.alphacoders.com/104/1048953.jpg",
    History : "https://i.pinimg.com/736x/14/31/0b/14310bdba58b06a1abad9ed0ee68d9ae.jpg"
  }

  const studyset = [
    {
      id : 1,
      subject : "Biology",
      title : 'Biology : Basics of Biology',
      cards: 42,
      date : "2 days ago",
      image : ""
    },
    {
      id : 2,
      subject : "Physics",
      title : 'Physics: Mechanics',
      cards: 25,
      date : "1 week ago",
      image : ""
    },
    {
      id : 3,
      subject : "Chemistry",
      title : 'Chemistry: Periodic Table',
      cards: 50,
      date : "5 days ago",
      image : ""
    },
    {
      id : 4,
      subject : "History",
      title : 'History: India: Events after 1960',
      cards: 10,
      date : "5 days ago",
      image : ""
    }
  ]

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

        {studyset.map((set) => (
          <div key={set.id} className='w-[256px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 font-pop hover:scale-105 overflow-hidden'>
            <img src={subjectImages[set.subject]} alt={set.subject} className='w-full h-36 object-cover transition-transform duration-300 hover:scale-110'/>

            <div className='p-4'>
              <h3 className='text-[15px] font-bold overflow-hidden'>{set.title}</h3>
              
              <div className='flex justify-between items-center mt-3 text-[12px] text-gray-600'>
                <span className='flex items-center gap-1'><FileStackIcon size={16}/> {set.cards} cards</span> 
                <span>{set.date}</span>
              </div>

              {/* study button */}
              <button className='w-full mt-5 bg-[#F5EFF7] text-black rounded-xl py-2 font-semibold hover:bg-[#6750A4] hover:text-white transition-all duration-300 hover:scale-[1.02]'>Study</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Library
