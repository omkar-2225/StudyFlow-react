import { Mail, MessagesSquareIcon } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import Instagram from '../assets/instagram.png'
import { Send } from 'lucide-react'

function Help() {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const [successMsg, setSuccessMsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // form validation 
        if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
            setErrorMsg("Please fill all the required fields.")
            setTimeout(() => { setErrorMsg("") }, 3000);
            return
        } 

        // email validate
        const emailRegex = /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
        if (!emailRegex.test(email)) {
            setErrorMsg("Please enter a valid email.")
            setTimeout(() => { setErrorMsg("") }, 3000);
            return
        }

        console.log({fullName, email, subject, message});

        setSuccessMsg("Your message has been submitted successfully!!!")

        setTimeout(() => {
            setSuccessMsg("")
        }, 3000);

        

        setFullName("")
        setEmail("")
        setMessage("")
        setSubject("")
    }

    // form validation
    const [errorMsg, setErrorMsg] = useState("")
    
  return (

    <div className='flex flex-row items-start gap-4'>

        {/* form support */}
      <div className='w-[60%] bg-white border border-gray-300 rounded-xl flex-col p-8 hover:scale-101 transition-all duration-300 shadow-lg hover:border-purple-800'>

        <div className="flex items-center justify-center gap-2 mb-6">
            <Mail size={30} className="text-[#4F378A]" />
            <h2 className="text-xl text-[#4F378A] font-pop font-medium">
                Send Us a Message
            </h2>
        </div> 

        <form action="" className='flex flex-col mt-5'>

            <label htmlFor="" className='font-pop font-medium px-2 mb-1'>Full Name</label>
            <input className='p-2 border border-[#4F378A] rounded-xl bg-[#F6EEFF] mb-5' value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder='Jhon Desouza'/>

            <label htmlFor="" className='font-pop font-medium px-2 mb-1'>Email</label>
            <input className='p-2 border border-[#4F378A] rounded-xl bg-[#F6EEFF] mb-5' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='john@example.com' />

            <label htmlFor="" className='font-pop font-medium px-2 mb-1'>Subject</label>
            <input className='p-2 border border-[#4F378A] rounded-xl bg-[#F6EEFF] mb-5' value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder='How can we help??' />

            <label htmlFor="" className='font-pop font-medium px-2 mb-1'>Message</label>
            <textarea
                className='h-40 p-4 border border-[#4F378A] rounded-xl bg-[#F6EEFF] mb-5 resize-none focus:outline-none focus:ring-1 focus:ring-[#4F378A]'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Describe your issue in detail...'
            ></textarea>

            <button className='w-70 mx-auto mt-5 text-white items-center hover:bg-[#6e57af] bg-[#6750A4] flex justify-center font-extrabold text-[18px] rounded-xl h-15 p-5 gap-3 select-none cursor-pointer transition-transform duration-300  hover:shadow-[#6e57af]  ' onClick={handleSubmit}>Send your message</button>

            {successMsg && <p className="mx-auto mt-5 flex items-center justify-center rounded-full bg-green-100 border border-green-300 p-3 text-green-700 font-medium animate-pulse text-[12px]">{successMsg}</p> }

            {errorMsg && <p className="mx-auto mt-5 flex items-center justify-center rounded-full bg-red-200 border border-red-300 p-3 text-red-700 font-medium animate-pulse text-[12px]">{errorMsg}</p>}
        </form>
      </div >


        {/* instagram support  */}
      <div className='w-[40%] flex flex-col'>
            <div className='border border-gray-400 bg-[#f5eff775] p-8 rounded-2xl font-pop hover:scale-103 transition-all duration-300 hover:border-[#6e57af] shadow-lg'>
                <img src={Instagram} alt="" className='w-17 h-17 mb-5 shadow-2xl rounded-2xl hover:scale-102 select-none'/>
                <h2 className='font-semibold text-2xl mb-3'>Instant Support</h2>
                <p className='font-medium'>Need an answer right now? DM us on Instagram for a quick response. Our community manager are active 24/7</p>
                <button onClick={() => window.open('https://www.instagram.com/_omkar_777_._/')} className='w-full mx-auto mt-8 text-white items-center hover:bg-[#6e57af] bg-[#6750A4] flex justify-center font-bold text-[18px] rounded-2xl h-15 p-2 gap-3 select-none cursor-pointer transition-transform duration-300  hover:shadow-[#6e57af]' >Message on Instagram <Send size={22} /> </button>
            </div>
      </div>
    </div>
  )
}

export default Help
