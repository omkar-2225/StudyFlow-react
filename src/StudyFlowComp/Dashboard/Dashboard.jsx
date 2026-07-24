import React from 'react'
import { NavLink } from 'react-router-dom';
import { Plus, ArrowRight, FileStackIcon, FileQuestion, SquarePen, TrendingUp, BookOpen, Clock, Flame, Target, FlameIcon } from "lucide-react";

function Dashboard() {

  // stat section 
  const stats= [
    { label: "Study Sets", value: "12", icon: BookOpen, color: "bg-blue-100", shadow: "shadow-blue-200"},
    { label: "Hours Learned", value: "24.5h", icon: Clock, color: "bg-green-100", shadow: "shadow-green-200"},
    { label: "Current Streak", value: "5", icon: Flame, color: "bg-orange-100", shadow: "shadow-orange-200"},
    { label: "Completion", value: "78%", icon: Target, color: "bg-purple-100", shadow: "shadow-purple-200"},
  ]

  // activities 
  const activities = [
      {
        title: "Scored 92% in Quiz: Cell Theory",
        time: "3 hours ago",
        action: "Review",
        icon: FileQuestion,
        color: "bg-purple-100",
        iconColor: "text-[#6750A4]",
      },
      {
        title: "Modified 15 cards in World History",
        time: "Yesterday at 4:30 PM",
        action: "Open",
        icon: SquarePen,
        color: "bg-purple-100",
        iconColor: "text-gray-600",
      },
      {
        title: 'Achieved "Fast Learner" Badge',
        time: "2 days ago",
        action: "View Badges",
        icon: TrendingUp,
        color: "bg-yellow-100",
        iconColor: "text-yellow-700",
      },
    ];

  return (
  <div>

    {/*progress bar */}
    <div className='flex flex-row gap-5'>
      {/* Progress bar */}
      <div className='w-[70%] h-45 bg-[#F5EFF7] p-5 rounded-2xl shadow-lg font-pop '>
        <h2 className='text-[14px] font-semibold  text-[#4F378A] mb-5'>Current Progress</h2>
        <span className='text-[28px] font-medium flex flex-row justify-between items-baseline-last'>78% <span className='text-[12px] text-[#4f378a]'>Goal: 90% mastery</span></span>
        <div className='w-full h-2 overflow-hidden rounded-full bg-[#d5d3d3] mt-1 mb-5'></div>
        <p className='text-[15px] font-light '>You're doing great! Only 4 more Biology sets to reach your weekly goal.</p>
      </div>

      {/* Create new set button */}
      <NavLink to='/generate' className='w-[30%] h-45 p-5 rounded-2xl shadow-xl font-pop text-white items-start hover:bg-[#6e57af] bg-[#6750A4]  font-extrabold text-[20px]  flex flex-col justify-center gap-1 select-none cursor-pointer'>Create New Set
      <p className='text-[#ffffffc3] text-[14px] font-light -mt-1 mb-5'>Import notes and start from scratch.</p>
      <ArrowRight size={30}/>
      </NavLink>
    </div>

    {/* stats section (for motivating the students) */}
    <div className='mt-15 flex flex-wrap gap-2'>
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
            <div key={stat.label} className={`${stat.color} justify-center items-center p-5 rounded-xl cursor-pointer hover:shadow-lg hover: ${stat.shadow} transition-all flex gap-2`}>
              <Icon size={28} className='text-gray-900'/>
              <p className='text-black text-xl font-pop font-bold'>{stat.label}: <span className='text-2xl text-black'>{stat.value}</span></p>
            </div>
        )
      })}
    </div>

    {/* study set cards */}
    <div>
      <h2 className='mt-20 mb-10 text-2xl font-semibold'>Your Recent Study Sets</h2>

      {/* study set cards  (display last four study set)*/}
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

    {/* Recent Activity */}
      <div className=" mt-15 font-pop">
        <h2 className="text-2xl font-semibold mb-8">
          Recent Activity
        </h2>

        <div className="bg-[#F5EFF7] rounded-2xl border border-gray-200 overflow-hidden">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div
                key={activity.title}
                className="flex items-center justify-between px-6 py-4 border-b border-b-gray-200 last:border-b-0 hover:bg-[#E6E0E9] transition-all duration-200"
              >
                {/* Left */}
                <div className="flex items-center gap-5">

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.color}`}
                  >
                    <Icon
                      size={26}
                      className={activity.iconColor}
                    />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-semibold text-[#1D1B20]">
                      {activity.title}
                    </h3>

                    <p className="text-gray-500 text-[12px] mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <button
                  className="text-[12px] font-semibold text-[#6750A4] hover:text-[#4F378A] transition-colors cursor-pointer"
                >
                  {activity.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>

  </div>
  )
}

export default Dashboard
