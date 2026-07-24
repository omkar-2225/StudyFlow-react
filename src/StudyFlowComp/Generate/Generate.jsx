import React, { useState } from 'react'
import flashcard from '../assets/flashcard.png'
import quiz from '../assets/Quiz.png'
import { SparklesIcon } from 'lucide-react'

function Generate() {

    const [text, setText] = useState("")

    // word counter with limit of 2000 words 
    const wordCounter = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
    const maxWords = 2000
    const isLimitReached = wordCounter >= maxWords

    const handleTextChange = (e) => {
        const newText = e.target.value
        const newWordCount = newText.trim() === "" ? 0 : newText.trim().split(/\s+/).length

        if (newWordCount <= maxWords) {
            setText(newText)
        }
    }
  return (
    <div className='w-full max-w-4xl mx-auto p-8 font-pop overflow-y-hidden'>
        
        {/* textarea */}
        <textarea 
        value={text}
        onChange={handleTextChange}
        className='w-full h-64 p-4 border border-gray-300 rounded-xl  focus:outline-none focus:border-[#4F378A] focus:ring-1 focus:ring-[#4F378A] focus:shadow-[0_10px_30px_rgba(168,85,247,0.125)] duration-150 shadow-lg resize-none bg-white'
        placeholder="Paste your study material... (e.g.. 'The mitochondria is the powerhouse of the cell....')"/>

        <div className='flex items-center justify-between mt-2 px-4'>

            {/* warning for limit reached */}
            {isLimitReached ? (
                <p className='px-3 text-red-600 text-sm select-none'>Word limit reached.</p>
            ) : (
                <div></div>
            )}

            
            {/* wordcounter */}
            <p className={`text-gray-600 text-[14px] px-4 text-right select-none ${isLimitReached ? "text-red-600" : "text-gray-600"}`}>{wordCounter}/{maxWords} words</p>
        </div>

        {/* flashcrad and quiz options */}
        <div className='flex flex-row gap-3 mt-5'>

            <div className='select-none w-1/2 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#4F378A] transition-all duration-200 mt-2'>
                <div className='flex justify-between items-center'>
                <img src={flashcard} alt="flashcard" className='w-20 h-20 rounded-xl' />

                <label className="cursor-pointer">
                    <input type="checkbox" className='peer hidden' />
                    <div className="w-7 h-7 rounded-full border-2 border-gray-300 peer-checked:bg-[#6750A4] transition-all duration-200"></div>
                </label>

                </div>
                <h2 className='font-pop font-bold text-xl'>Flashcards</h2>
                <p className='font-medium'>Key terms and definitions for quick recall.</p>
            </div>

            <div className='select-none w-1/2 bg-white border border-gray-200 rounded-xl p-4 hover:border-[#4F378A] transition-all duration-200 mt-2'>
                <div className='flex justify-between items-center'>
                <img src={quiz} alt="flashcard" className='w-20 h-20 rounded-xl' />

                <label className="cursor-pointer">
                    <input type="checkbox" className='peer hidden' />
                    <div className="w-7 h-7 rounded-full border-2 border-gray-300 peer-checked:bg-[#6750A4] transition-all duration-200"></div>
                </label>

                </div>
                <h2 className='font-pop font-bold text-xl'>Quizzes</h2>
                <p className='font-medium'>Multiple choice question to test understanding.</p>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center mt-5 text-center'>
            <button className='w-75 mt-5 text-white items-center hover:bg-[#6e57af] bg-[#6750A4]  font-extrabold text-[16px] rounded-full h-15 flex p-5 gap-3 select-none cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-lg  '><SparklesIcon size={20} />Generate Study Materials </button>

            <span className='text-[14px] mt-5 select-none'>powered by StudyFlow</span>
        </div>
    </div>
  )
}

export default Generate
