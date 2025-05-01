import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-6 mt-10 font-medium">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} <a href='http://clevercoderjoy.bio.link' target='_blank' className='text-blue-500 text-md px-2 py-1 rounded cursor-pointer font-bold hover:text-white hover:bg-blue-500'>clevercoderjoy</a>All rights reserved.
        </p>
        <div className="flex gap-4 my-4">
          <a
            href="https://github.com/clevercoderjoy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold border-2 border-blue-500 hover:text-white hover:bg-blue-500 rounded py-1 px-2 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/clevercoderjoy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold border-2 border-blue-500 hover:text-white hover:bg-blue-500 rounded py-1 px-2 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/clevercoderjoy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold border-2 border-blue-500 hover:text-white hover:bg-blue-500 rounded py-1 px-2 transition-colors"
          >
            Twitter
          </a>
          <a
            href="/about"
            className="text-blue-500 font-bold border-2 border-blue-500 hover:text-white hover:bg-blue-500 rounded py-1 px-2 transition-colors"
          >
            Bio Link
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer