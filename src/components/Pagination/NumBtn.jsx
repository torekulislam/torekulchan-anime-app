import React from 'react'

function NumBtn({isCrrount, num, onPageChange , p=true}) {
  return (
   
    <button
    key={num}
    className={`px-4 py-2  items-center justify-center rounded-full transition-colors duration-200 ${
      isCrrount === true
        ? 'bg-cyan-400 text-black font-bold'
        : 'bg-[#1f1f2f] text-gray-400 hover:text-white'
      } ${!p && num === 0
      ? 'hidden'
      :'flex'
    }`}
    onClick={() => onPageChange(num)}
  >
    {!p?num:num+1}
  </button>  )
}

export default NumBtn