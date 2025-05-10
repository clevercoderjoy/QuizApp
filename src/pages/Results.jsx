import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const formData = location?.state?.formData;
  const score = location?.state?.score;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 w-full max-w-lg">
        <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-600 text-center mb-6">
          Congratulations {formData?.name}!
        </h1>

        <div className="text-center">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            You have completed the quiz.
          </h2>

          <div className="mt-6">
            <div className="bg-blue-500 font-semibold text-white px-4 py-2 rounded-md text-xl">
              Your score is: {score}
            </div>
          </div>

          <div className="mt-8">
            <button
              className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-700 transition"
              onClick={() => window.location.href = "/"}
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
