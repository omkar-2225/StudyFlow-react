import { LucideBadgeQuestionMark, MoveRight } from 'lucide-react'
import React, { use, useState } from 'react'

function Quiz() {

  const quizzes = [
  {
    id: 1,
    subject: "Biology",
    topic: "Cell Theory",
    questions: [
      {
        id: 1,
        question: "What is the powerhouse of the cell?",
        options: [
          "Nucleus",
          "Mitochondria",
          "Ribosome",
          "Chloroplast"
        ],
        correctAnswer: 1,
        explanation: "Mitochondria produce ATP, the cell's energy currency."
      },
      {
        id: 2,
        question: "Who proposed the Cell Theory?",
        options: [
          "Charles Darwin",
          "Matthias Schleiden and Theodor Schwann",
          "Albert Einstein",
          "Isaac Newton"
        ],
        correctAnswer: 1,
        explanation: "Matthias Schleiden and Theodor Schwann proposed Cell Theory."
      },
      {
        id: 3,
        question: "What is the basic unit of life?",
        options: [
          "Atom",
          "Molecule",
          "The cell",
          "Organism"
        ],
        correctAnswer: 2,
        explanation: "The cell is the basic unit of life."
      },
      {
        id: 4,
        question: "Which organelle contains genetic material?",
        options: [
          "Mitochondria",
          "Ribosome",
          "The nucleus",
          "Chloroplast"
        ],
        correctAnswer: 2,
        explanation: "The nucleus contains genetic material (DNA)."
      },
      {
        id: 5,
        question: "Which cell organelle is responsible for protein synthesis?",
        options: [
          "Golgi apparatus",
          "Ribosomes",
          "Endoplasmic Reticulum",
          "Nucleolus"
        ],
        correctAnswer: 1,
        explanation: "Ribosomes are responsible for protein synthesis."
      },
      {
        id: 6,
        question: "What is the function of the cell membrane?",
        options: [
          "Energy production",
          "Protein synthesis",
          "Controls movement of substances into and out of the cell",
          "Storage of genetic material"
        ],
        correctAnswer: 2,
        explanation: "The cell membrane controls what enters and exits the cell."
      },
      {
        id: 7,
        question: "Which cells lack a nucleus?",
        options: [
          "Eukaryotic cells",
          "Plant cells",
          "Prokaryotic cells",
          "Animal cells"
        ],
        correctAnswer: 2,
        explanation: "Prokaryotic cells lack a nucleus."
      },
      {
        id: 8,
        question: "What is cytoplasm?",
        options: [
          "A membrane surrounding the cell",
          "A jelly-like substance where organelles are suspended",
          "The genetic material of the cell",
          "A transport protein"
        ],
        correctAnswer: 1,
        explanation: "Cytoplasm is a gel-like substance containing organelles."
      },
      {
        id: 9,
        question: "Which organelle performs photosynthesis?",
        options: [
          "Mitochondria",
          "Ribosome",
          "Chloroplast",
          "Nucleus"
        ],
        correctAnswer: 2,
        explanation: "Chloroplasts perform photosynthesis in plant cells."
      },
      {
        id: 10,
        question: "Name the organelle known as the cell's transport system.",
        options: [
          "Golgi apparatus",
          "Endoplasmic Reticulum (ER)",
          "Ribosome",
          "Lysosome"
        ],
        correctAnswer: 1,
        explanation: "The Endoplasmic Reticulum (ER) transports molecules in the cell."
      }
    ]
  }
];

  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const [answered, setAnswered] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuiz = quizzes[currentQuizIndex];
  const currentQuestion = currentQuiz.questions[currentQuestionIndex];

  const [skippedQuestions, setSkippedQuestions] = useState([]);

  // optionclicked
  const optionClicked = (index) => {
    setAnswered(index);
  }

  // handle next
  const handleNext = () => {
    if(answered == null){
      alert("Please select atleast one option.")
      return;
    }

    if(answered === currentQuestion.correctAnswer){
      console.log("correct answer");
    }
    else{
      console.log("incorrect answer.")
    }

    // moved to next question
    if(currentQuestionIndex < currentQuiz.questions.length - 1){
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswered(null);
    }
  }

  // handles skip
  const handleSkip = () => {
    const confirmSkip = window.confirm("Are you sure you want to skip this question??. Note: You cannot return to this question again.")

    if(confirmSkip){
      setAnswered(null);

      if(currentQuestionIndex < currentQuiz.questions.length - 1){
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  }



  return (
    <div className='flex flex-col w-175 justify-center items-center mx-auto font-pop -mt-15'>
        
        {/* Topic and subject name */}
        <h2 className='text-center text-3xl font-bold text-[#4F378A] mb-3'>{currentQuiz.subject}</h2>
        <p className='mb-10 font-medium '>Topic: {currentQuiz.topic}</p>

      {/* total question */}
      <span className='mb-5 bg-purple-200 px-5 py-1 text-[18px] font-medium text-purple-900 ring-1 rounded-full'>QUESTION {currentQuestionIndex + 1} OF {currentQuiz.questions.length}</span>

      {/* note */}
      <p className='mb-10 font-semibold text-[15px] text-red-400'>NOTE: ONCE ANSWER SUBMITTED CANNOT BE CHANGED.</p>

      {/* actual question */}
      <h2 className='text-black text-4xl font-semibold text-center mb-10'>{currentQuestion.question}</h2>

      {/* options cards */}
      {currentQuestion.options.map((option, index) => (
        <div key={index} onClick={() => optionClicked(index)} className={`w-[95%]  mb-8 flex bg-white p-4 gap-5 rounded-2xl ring-2 ring-gray-400 items-center hover:bg-gray-100 transition-all duration-300 cursor-pointer ${answered === index ? 'ring-[#6750A4] bg-red-400': 'ring-gray-300 bg-white hover:ring-[#6750A4]'}`}>
          <h2 className='bg-gray-200 px-4 py-3 rounded-2xl font-semibold ring ring-gray-300 text-[18px]'>{String.fromCharCode(65 + index)}</h2>
          <div className='flex-1'>
              <p className='font-medium text-lg'>{option}</p>
          </div>
        </div>
      ))}

      {/* buttons : request hint, skip, submitanswer (next button) */}
      <div className='flex items-center gap-3 justify-between w-full px-6 select-none'>

        {/* request hint */}
        <button className='flex gap-2 justify-center items-center font-semibold hover:text-green-600'><LucideBadgeQuestionMark /> Request hint</button>

        <div className='flex flex-row gap-5'>
            <button onClick={handleSkip} className='bg-gray-100 text-black px-5 py-3 rounded-xl text-[16px] font-semibold hover:bg-gray-200 ring ring-gray-300'>Skip Question</button>
            <button onClick={handleNext} className='flex gap-2 bg-[#5a409c] text-white px-5 py-3 rounded-xl text-[16px] font-semibold justify-center items-center hover:bg-[#6448ab] hover:scale-105 transition-all duration-300'>Submit answer <MoveRight size={30} fontSize={20}/></button>
        </div>
      </div>

    </div>
  )
}

export default Quiz
