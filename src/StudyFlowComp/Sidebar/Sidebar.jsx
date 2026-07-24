import React from 'react'
import {
  User,
  LayoutDashboard,
  FolderOpen,
  Settings,
  CircleHelp,
  Plus,
  HomeIcon
} from "lucide-react";
import logo from "../assets/StudyFlow.png";
import { NavLink } from 'react-router-dom';


// all four options 

const menuItems = [
  {
    name: "Home",
    icon: HomeIcon,
    path: '/generate'
  },
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: '/dashboard'
  },
  {
    name: "My Library",
    icon: FolderOpen,
    path: '/library'
  },
  {
    name: "Settings",
    icon: Settings,
    path: '/settings'
  },
  {
    name: "Help Centre",
    icon: CircleHelp,
    path: '/help'
  },
]

function Sidebar() {
  return (
    <div className='w-full h-screen bg-[#F6EEFF] font-sans'>
      <div className='w-68 h-full bg-[#F5EFF7] border-r border-gray-200 p-6'>

        {/* logo */}
        <NavLink 
        to="/generate"
        className="flex items-center gap-3 mb-8 cursor-pointer">
        <img
        src={logo}
        alt="StudyFlow Logo"
        className="w-12 h-12 rounded-full transition-transform duration-300 hover:scale-105"/>
        <h1 className='select-none text-[#4F378A] font-sans text-left top-1.5 font-extrabold text-[26px] '>StudyFlow</h1>
        </NavLink>

        {/* user card */}
        <div className='w-full mt-7 h-20 rounded-2xl flex items-center px-4 gap-3 bg-[#ebe7ec]'>
            <div className='w-11 h-11 flex items-center justify-center bg-[#8069BF] rounded-full'><User size={22} color="white" /></div>
            <div className='text-left leading-4.5'><span className='font-bold text-[15px]'>Student Workspace</span><br /> <span className='font-light text-[12px]'>10 Studyset</span></div>
        </div>

        {/* All the navigation  */}
        {
          menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  to={item.path}
                  key={item.name}
                  className={({isActive}) => `w-full mt-5 text-[#1D1B20] items-center hover:bg-[#E9DDFF] hover:text-[#4F378A] font-medium text-[16px] rounded-xl h-8 p-5 flex justify-start gap-3 select-none transition-all duration-200 cursor-pointer ${isActive ? 'bg-[#E9DDFF] text-[#4F378A]' : 'text-[#1D1B20] hover:bg-[#E9DDFF] hover:text-[#4F378A]'}`}
                >
                  <Icon size={20} color='#4F378A' />
                  <span>{item.name}</span>
                </NavLink>
              );
            })
        }
        
        {/* New study set */}
        <NavLink to='/generate' className='w-full mt-5 text-white items-center hover:bg-[#6e57af] bg-[#6750A4]  font-extrabold text-[16px] rounded-xl h-15 p-5 flex justify-start gap-3 select-none cursor-pointer'><Plus size={18} />New Study Set</NavLink>


      </div>
    </div>
  )
}

export default Sidebar
