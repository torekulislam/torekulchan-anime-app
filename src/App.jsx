import React, { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import bg from './assets/bg.mp4'

function App() {
  
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalPages = 100;
  return (
    <>
   
      <div class="relative w-[100vw] h- overflow-hidden">
      <video autoPlay  muted loop className=" fixed top-0 left-0 brightness-30  w-full h-full object-cover -z-0">
  <source src={bg} type="video/mp4" />
</video>
 
</div>

<div className={`bg-[url(${bg})] w-full h-[100vh] -z-0 fixed top-0 left-0 bg-cover  bg-no-repeat`}>
    </div>
      <div className="w-[100vw] relative z-10">
      <Header />

    
      
        <main className='w-[100vw] mx-auto overflow-hidden'>
          
          <Outlet />
          
        </main>
        

        <Footer />
        
      </div>

        

    </>
  )
}

export default App
