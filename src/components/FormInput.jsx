import React from 'react'

const FormInput = ({ label, name, type, value, options, onChange, placeholder }) => {
  if (type === "select") {
    return (
      <div className="flex flex-col w-full my-4">
        <label
          htmlFor={name}
          className="mb-1 text-sm sm:text-base font-bold text-gray-700 text-left"
        >
          {label}
        </label>
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium w-full`}
        >
          <option value="">Select {label}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full my-4">
      <label
        htmlFor={name}
        className="mb-1 text-sm sm:text-base font-bold text-gray-700 text-left"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium w-full`}
      />
    </div>
  )
}

export default FormInput











// <form className="w-full flex flex-col space-y-3 sm:space-y-4" onChange={(e) => handleFormDataChange(e)} onSubmit={(e) => handleFormSubmit(e)}>
//       {/* Name Field */}
//       <div className="flex flex-col w-full">
//         <label htmlFor="name" className="mb-1 text-sm sm:text-base font-bold text-gray-700 text-left">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Enter your name..."
//           className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium w-full"
//         />
//       </div>

//       {/* Category Field */}
//       <div className="flex flex-col w-full">
//         <label htmlFor="category" className="mb-1 text-sm sm:text-base font-bold text-gray-700 text-left">
//           Category
//         </label>
//         <select
//           id="category"
//           name="category"
//           className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium w-full"
//         >
//           <option value="">Select Category</option>
//           {Categories.map((category) => (
//             <option value={category.value} key={category.value}>
//               {category.category}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Difficulty Field */}
//       <div className="difficulty flex flex-col w-full">
//         <label htmlFor="difficulty" className="mb-1 text-sm sm:text-base font-bold text-gray-700 text-left">
//           Difficulty
//         </label>
//         <select
//           id="difficulty"
//           name="difficulty"
//           className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 font-medium w-full"
//         >
//           <option value="">Select Difficulty</option>
//           {difficultyOptions.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Submit Button */}
//       <div className="w-full mt-4">
//         <button
//           type="submit"
//           className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-indigo-700 transition w-full text-sm sm:text-base"
//         >
//           Start Quiz
//         </button>
//       </div>
//     </form>