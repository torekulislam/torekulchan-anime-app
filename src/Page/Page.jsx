import React from 'react'
import { Outlet } from 'react-router-dom'
function Page() {
  return (
      <div className='flex  min-h-screen bg-[#141420]  text-white'>
      <Outlet />
      </div>
  )
}

export default Page