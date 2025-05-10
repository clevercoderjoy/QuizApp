import React, { useState } from 'react';
import Categories from './../data/categories';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';

const Home = () => {
  const difficultyOptions = ["Easy", "Medium", "Hard"];
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    difficulty: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleFormDataChange = (e) => {
    setFormData((formData) => ({ ...formData, [e.target.name]: e.target.value }))
  }

  const getCategoryId = (category) => {
    return Categories.find((cat) => cat.category === category).value;
  }

  const fetchQuizData = async () => {
    try {
      const url = `https://opentdb.com/api.php?amount=10&category=${getCategoryId(formData.category)}&difficulty=${formData.difficulty.toLowerCase()}&type=multiple`
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new error;
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category || !formData.difficulty || !formData.name) {
      setError(true);
    }
    else {
      setError(false);
      const quizData = await fetchQuizData();
      setFormData({ name: "", category: "", difficulty: "" });
      navigate("/quiz", { state: { quizData, formData } });
    }
  }

  console.log(formData);

  return (
    <div className="min-h-screen bg-gray-100 py-4 px-2 sm:px-4">
      <div className="mx-auto bg-white shadow-lg rounded-lg text-gray-700 border-2 sm:border-4 border-gray-500 box-border max-w-screen-sm md:max-w-3xl lg:max-w-4xl">
        <h1 className="font-bold text-center text-xl sm:text-3xl md:text-4xl border-b-2 sm:border-b-4 border-gray-500 py-2 sm:py-3 text-gray-600 px-4">
          Clever Quiz Hub
        </h1>

        <div className="flex flex-col md:flex-row w-full">
          {/* Quiz Settings */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col order-2 md:order-1">
            <h2 className="font-bold text-xl sm:text-2xl text-gray-500 md:mb-4 text-center">
              Quiz Settings
            </h2>

            {
              error && <p className="text-red-500 text-sm sm:text-base font-bold text-center mx-4 mt-4 border-2 border-[tomato] px-2 py-1 rounded">Please select value for the remaining fields.</p>
            }
            <div className="flex flex-col p-4 sm:p-6">
              <form onSubmit={handleFormSubmit} className="w-full">
                <FormInput
                  label="Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleFormDataChange}
                  placeholder="Enter your name..."
                />
                <FormInput
                  label="Category"
                  name="category"
                  type="select"
                  value={formData.category}
                  options={Categories.map((cat) => cat.category)}
                  onChange={handleFormDataChange}
                />
                <FormInput
                  label="Difficulty"
                  name="difficulty"
                  type="select"
                  value={formData.difficulty}
                  options={difficultyOptions}
                  onChange={handleFormDataChange}
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white font-semibold px-4 py-2 my-4 rounded-md hover:bg-indigo-700 transition w-full text-sm sm:text-base"
                  aria-label="Start Quiz"
                >
                  Start Quiz
                </button>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 flex items-center order-1 md:order-2">
            <div className="w-full h-full overflow-hidden rounded-lg shadow-md">
              <img
                src={"/images/quiz.jpg"}
                alt="quiz-image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;