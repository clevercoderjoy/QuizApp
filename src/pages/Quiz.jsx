import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Quiz = () => {
  const location = useLocation();
  const quizData = location?.state?.quizData;
  const formData = location?.state?.formData;
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [quesNum, setQuesNum] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(false);
  const currentQuestion = quizData?.results[quesNum];
  const [timer, setTimer] = useState(7);

  const shuffelOptions = (options) => {
    const shuffled = [...options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const options = useMemo(() => {
    if (!currentQuestion) {
      return [];
    }
    return currentQuestion ? shuffelOptions([currentQuestion?.correct_answer, ...currentQuestion.incorrect_answers]) : []
  }, [currentQuestion]);

  const handleOptionClick = (option) => {
    if (answered) {
      return;
    }
    setSelectedOption(option);
    setAnswered(true);
    if (quesNum < quizData?.results?.length - 1) {
      if (option === currentQuestion.correct_answer) {
        setScore(score + 1);
      }
      setTimeout(() => {
        setQuesNum(quesNum + 1)
        setAnswered(false);
        setSelectedOption(null);
      }, 2000)
    }
  }

  const handleQuitQuiz = () => {
    setScore(0);
    navigate("/");
  }

  useEffect(() => {
    setTimer(7);
    const interval = setInterval(() => {
      setTimer((timer) => {
        if (timer === 1) {
          clearInterval(interval);
          if (quesNum < quizData?.results?.length - 1) {
            setQuesNum(quesNum + 1);
          }
          else {
            navigate("/results", { state: { score, formData } })
          }
        }
        return timer - 1;
      })
    }, 1000)
    return () => clearInterval(interval);
  }, [formData, navigate, quesNum, quizData, score])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-600 text-center mb-6">
          Welcome, {formData?.name}!
        </h1>

        <div className="quizContainer space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 text-center flex justify-between items-center">
            <div className="quesNum">
              Question {quesNum + 1}
            </div>
            <div className="score bg-blue-500 text-white px-2 py-1 rounded w-16">{score}</div>
          </h2>

          <div className="quizContents space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-left break-words">
              {quizData?.results[quesNum].question}
            </h3>

            <div className="quizOptions grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {
                options?.map((option, idx) => {
                  let optionClass = `bg-indigo-100 hover:bg-indigo-200`;
                  if (answered) {
                    if (currentQuestion.correct_answer === option) {
                      optionClass = `bg-green-500 hover:bg-green-400 text-white`;
                    }
                    else if (option === selectedOption) {
                      optionClass = `bg-red-500 hover:bg-red-400 text-white`;
                    }
                    else {
                      optionClass = `bg-indigo-100 hover:bg-indigo-200`;
                    }
                  }
                  return (
                    <span key={idx} className={`option ${optionClass} transition font-semibold px-4 py-2 rounded-lg text-center cursor-pointer shadow-sm`} onClick={() => handleOptionClick(option)}>
                      {option}
                    </span>
                  )
                })
              }
            </div>
          </div>

          <div className="quizButtons flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
            <button className="w-full bg-red-500 hover:bg-red-600 transition text-white font-semibold px-6 py-2 rounded-md" onClick={() => handleQuitQuiz()}>
              Quit
            </button>
            <button className="w-full bg-blue-700 hover:bg-blue-600 transition text-white font-semibold px-6 py-2 rounded-md">
              Next Question in {timer} Secs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
