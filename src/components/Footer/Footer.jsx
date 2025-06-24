import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <>
          <footer className="bg-[#1f1f2f] text-white py-4 pt-10 w-[100%]">
        <div className='flex flex-wrap items-center  gap-5 mb-4 max-w-7xl mx-auto px-4 w-full'>
          <Link to='/' >
          <div className="text-3xl font-[Poetsen_One] text-stone-200 pr-5 sm:border-r border-gray-400">Torekul<span className='text-cyan-500'>Chan</span></div>
            </Link >
          <div className="flex items-center justify-center text-xl sm:text-2xl">
            <a href="https://github.com/torekuislam" rel="noopener noreferrer" target='_blank'><i className="fa-brands fa-github mr-4 hover:text-cyan-500 cursor-pointer"></i></a>
            <a href="https://www.linkedin.com/in/torekul-islam-72748b335/" rel="noopener noreferrer" target='_blank'><i className="fa-brands fa-linkedin mr-4 hover:text-cyan-500 cursor-pointer"></i></a>
            <a href="https://www.facebook.com/torekul.islam.9469545" rel="noopener noreferrer" target='_blank'><i className="fa-brands fa-facebook mr-4 hover:text-cyan-500 cursor-pointer"></i>
            </a>
            <a href="https://x.com/torekul__islam" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter hover:text-cyan-500 cursor-pointer"></i></a>

            </div>
              </div>
            <div className="container mx-auto px-4">
            <p className="text-sm">© 2025 TorekulChan V2.06.24.2025 .All rights reserved.</p>
                  <p className="text-xs mt-2">Made with ❤️ by <a href="" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Torekul Islam</a></p>
            </div>
        </footer>
    </>
  )
}

export default Footer