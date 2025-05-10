import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-screen-xl mx-auto px-2 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-3xl font-bold text-blue-600 tracking-wide cursor-pointer">
            <Link to="/">
              cleverQuiz
            </Link>
          </h1>
        </div>
        <div className="navigation">
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link
                  to="/"
                  className="text-blue-500 hover:text-white hover:bg-blue-500 border-2 border-blue-500 hover:border-blue-500 px-2 py-1 rounded-md font-bold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/results"
                  className="text-blue-500 hover:text-white hover:bg-blue-500 border-2 border-blue-500 hover:border-blue-500 px-2 py-1 rounded-md font-bold transition-colors"
                >
                  Results
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
