import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Generate from '../Generate/Generate'


function Layout({children, title, description }) {
  return (
      <div className='flex h-screen md:flex-row'>

        {/* left- sidebar */}
        <div className='w-full md:w-64'>
            <Sidebar />
        </div>

        {/* Right section  */}
        <div className='flex-1 flex flex-col bg-[#F6EEFF] p-5'>

            <div className='flex-1 overflow-y-scroll no-scrollbar'>
            <Navbar title={title} description={description}/>

            <div className='p-8'>
                {children}
            </div>
        </div>
        </div>
      </div>
  )
}

export default Layout

