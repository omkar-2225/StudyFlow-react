import { MoveLeft, MoveRight, Pointer } from 'lucide-react'
import React, { useState } from 'react'

function Flashcard() {

    // random quote
    const quotes = [
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes"
  },
  {
    text: "Dream big. Start small. Act now.",
    author: "Robin Sharma"
  },
  {
    text: "Small progress is still progress.",
    author: "Unknown"
  },
  {
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln"
  },
  {
    text: "Knowledge is power.",
    author: "Francis Bacon"
  },
  {
    text: "Push yourself because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    text: "Every accomplishment starts with the decision to try.",
    author: "John F. Kennedy"
  },
  {
    text: "Study while others are sleeping.",
    author: "Unknown"
  },
  {
    text: "Consistency beats intensity.",
    author: "Unknown"
  },
  {
    text: "Your future is created by what you do today, not tomorrow.",
    author: "Robert Kiyosaki"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "Focus on progress, not perfection.",
    author: "Unknown"
  },
  {
    text: "Knowledge compounds like interest.",
    author: "Warren Buffett"
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar"
  },
  {
    text: "Success comes to those who prepare.",
    author: "Unknown"
  },
  {
    text: "Stay patient and trust your journey.",
    author: "Unknown"
  },
  {
    text: "Education is the passport to the future.",
    author: "Malcolm X"
  },
  {
    text: "The harder you work, the luckier you get.",
    author: "Gary Player"
  },
  {
    text: "One page at a time. One chapter at a time.",
    author: "Unknown"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Success is earned, not given.",
    author: "Unknown"
  },
  {
    text: "A little progress each day adds up to big results.",
    author: "Unknown"
  },
  {
    text: "The best investment you can make is in yourself.",
    author: "Warren Buffett"
  },
  {
    text: "The difference between ordinary and extraordinary is that little extra.",
    author: "Jimmy Johnson"
  },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem"
  },
  {
    text: "Your only limit is your mind.",
    author: "Unknown"
  },
  {
    text: "Keep learning because life never stops teaching.",
    author: "Unknown"
  },
  {
    text: "Success is built one study session at a time.",
    author: "Unknown"
  },
  {
    text: "Mistakes are proof that you are trying.",
    author: "Unknown"
  },
  {
    text: "Every day is another chance to improve.",
    author: "Unknown"
  },
  {
    text: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke"
  },
  {
    text: "Be stronger than your excuses.",
    author: "Unknown"
  },
  {
    text: "The future belongs to those who prepare for it today.",
    author: "Malcolm X"
  },
  {
    text: "You are capable of amazing things.",
    author: "Unknown"
  },
  {
    text: "Turn your dreams into plans.",
    author: "Unknown"
  },
  {
    text: "Success is the product of daily habits.",
    author: "James Clear"
  },
  {
    text: "One hour of focused study today saves many hours tomorrow.",
    author: "Unknown"
  },
  {
    text: "Be curious, not afraid.",
    author: "Unknown"
  },
  {
    text: "Keep showing up for yourself.",
    author: "Unknown"
  },
  {
    text: "The pain of discipline is less than the pain of regret.",
    author: "Unknown"
  },
  {
    text: "Your goals don't care how you feel.",
    author: "Unknown"
  },
  {
    text: "Success begins with self-belief.",
    author: "Unknown"
  },
  {
    text: "Learning is a treasure that follows its owner everywhere.",
    author: "Chinese Proverb"
  },
  {
    text: "Today's effort is tomorrow's achievement.",
    author: "Unknown"
  },
  {
    text: "Never stop learning because life never stops teaching.",
    author: "Unknown"
  }
    ];

    const [randomIndex] = useState(Math.floor(Math.random() * quotes.length));

    const randomQuote = quotes[randomIndex];

    // card flip
    const [isFlipped, setIsflipped] = useState(false);

    // flashcard info
    const studySet = {
        id: 1,
        subject: "Biology",
        topic: "Cell Theory",
        flashcards: [
            {
            id: 1,
            front: "What is the powerhouse of the cell?",
            back: "Mitochondria produce ATP, the cell's energy currency."
            },
            {
            id: 2,
            front: "Who proposed the Cell Theory?",
            back: "Matthias Schleiden and Theodor Schwann."
            },
            {
            id: 3,
            front: "What is the basic unit of life?",
            back: "The cell."
            },
            {
            id: 4,
            front: "Which organelle contains genetic material?",
            back: "The nucleus."
            },
            {
            id: 5,
            front: "Which cell organelle is responsible for protein synthesis?",
            back: "Ribosomes."
            },
            {
            id: 6,
            front: "What is the function of the cell membrane?",
            back: "It controls the movement of substances into and out of the cell."
            },
            {
            id: 7,
            front: "Which cells lack a nucleus?",
            back: "Prokaryotic cells."
            },
            {
            id: 8,
            front: "What is cytoplasm?",
            back: "A jelly-like substance where organelles are suspended."
            },
            {
            id: 9,
            front: "Which organelle performs photosynthesis?",
            back: "Chloroplast."
            },
            {
            id: 10,
            front: "Name the organelle known as the cell's transport system.",
            back: "Endoplasmic Reticulum (ER)."
            }
        ]
    };

    // current card displayed
    const [currentIndex, setCurrentIndex] = useState(0);

    // currennt card]
    const currentCard = studySet.flashcards[currentIndex];

    // handle flip
    const handleFlip = () => {
        setIsflipped(!isFlipped)
    }

    // button logics
    const handlNext = () => {
        if(currentIndex < studySet.flashcards.length - 1){
            setCurrentIndex(currentIndex + 1)
            setIsflipped(false)
        }
    }

    const handlePrev = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
            setIsflipped(false)
            console.log(currentIndex)
        }
    }

    return (
    <div className='flex flex-col justify-center items-center -mt-10 font-pop'> 

        {/* random quotes */}
        <div className='text-center  mb-8'>
            <p className='text-[20px] italic text-gray-600 mb-1 font-medium font-mono'>"{randomQuote.text}"</p>
            <p className='font-medium font-mono text-lg text-gray-500'>— {randomQuote.author}</p>
        </div>

        {/* title */}
        <h1 className='text-4xl font-bold mb-2 text-[#4F378A]'>{studySet.subject}</h1>
        <span className='font-light text-[20px] mb-15'>Topic: {studySet.topic}</span>

        {/* progress bar */}
        <div className='mb-12'>
            <span className='text-[13px] font-semibold flex flex-row justify-between px-5 text-[#4F378A]'>PROGRESS <span className='text-[14px]'>Card {currentIndex + 1} of {studySet.flashcards.length}</span></span>

            <div className='w-175 h-3 overflow-hidden rounded-full bg-[#E9DDFF] mb-5'>
            <div 
            className='h-full bg-[#6750A4] rounded-full transition-all duration-300'
            style={{width: `${((currentIndex + 1) / studySet.flashcards.length) * 100}%`}}
            ></div>
            </div>
        </div>

        {/* flashcards */}
        <div className='flashcard-container' onClick={handleFlip}>
            <div className={`flashcard-wrapper ${isFlipped ? 'flipped' : ''}`}>

                {/* front of the flashcard */}
                <div className='flashcard-front flex flex-col bg-purple-100 p-5 rounded-2xl shadow-lg hover:shadow-purple-200 hover:scale-102 duration-300 border-gray-200 border hover:border-purple-800 mb-15 items-center justify-center'>
                    <span className='bg-purple-200 text-[#4F378A] px-2 py-1 rounded-full text-[16px] font-medium'>Question</span>
                    <p className='text-center text-xl font-medium flex-1 flex items-center'>{currentCard.front}</p>
                    <span className='text-[14px] flex gap-2'><Pointer size={15}/> click to reveal</span>
                </div>

                {/* back of the flashcard */}
                <div className='flashcard-back flex flex-col bg-green-100 p-5 rounded-2xl shadow-lg hover:shadow-green-200 hover:scale-102 duration-300 border-gray-200 border hover:border-green-800 mb-15 items-center justify-center'>
                    <span className='bg-green-200 text-green-800 px-2 py-1 rounded-full text-[16px] font-medium'>Answer</span>
                    <p className='text-center text-xl font-medium flex-1 flex items-center'>{currentCard.back}</p>
                    <span className='text-[14px] flex gap-2 items-center hover:font-medium text-green-800 cursor-pointer'><Pointer size={15}/> click to flip back</span>
                </div>
    
            </div>
        </div>
    

        {/* forward, previous buttons */}
        <div className='w-175 flex flex-row gap-4 justify-between px-8 mt-10'>

            <button className='group border border-purple-800 rounded-full px-4 py-2 font-sans flex gap-3 justify-center text-[#4F378A] font-semibold text-[15px] hover:bg-[#4F378A] hover:text-white duration-300 transition-all' onClick={handlePrev}><MoveLeft size={20} className="w-6 h-6 group-hover:text-white group-hover:scale-110 transition-all duration-300 cursor-pointer text-[#4F378A]" /> Previous</button>

            <button className='group border border-purple-800 rounded-full px-4 py-2 font-sans flex gap-3 justify-center text-[#4F378A] font-semibold text-[15px] hover:bg-[#4F378A] hover:text-white duration-300 transition-all' onClick={handlNext}>Next <MoveRight size={20} className="w-6 h-6 group-hover:text-white group-hover:scale-110 transition-all duration-300 cursor-pointer text-[#4F378A]"/></button>

        </div>
    </div>
  )
}

export default Flashcard
