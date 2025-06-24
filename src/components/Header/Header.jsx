import React, { useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import SideMenu from './SideMenu';
function Header() {
  const [query, setQuery] = useState('');
  const [shoManu, setShoManu] = useState(false)
  const [shoSearch, setShoSearch] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (query.trim()) {
        navigate(`search/${encodeURIComponent(query.trim())}`);

      }
    };


    return (
      <div className=" fixed top-0 left-0 right-0 z-50 w-[100vw]  bg-[#141420af] text-white shadow-md">
        <div className={`${!shoManu ? 'hidden' : 'block'}`}>
          <SideMenu setShoManu={setShoManu} shoManu={shoManu} />
        </div>
        
         <div className="p-3 px-[3%] sm:px-3 w-[100vw] mx-auto flex items-center justify-between">
        <div className="flex justify-between items-center gap-3">
          <button onClick={()=>setShoManu(!shoManu)} className="text-2xl sm:text-3xl cursor-pointer sm:mr-3">
              <i class="fa-solid fa-bars"></i>
              
          </button>
          <Link to='/' >
          <div className="text-2xl sm:text-3xl font-[Poetsen_One] text-stone-200 ">Torekul<span className='text-cyan-500'>Chan</span></div>
            </Link >
      

        </div>
        <div className="flex items-center w-3/12 max-w-[275px] gap-3">
          {/* <ul className='flex items-center gap-5 text-[#161b33]'>
            <li className='text-lg font-[Poetsen_One] hover:text-cyan-500 cursor-pointer'>Home</li>
            <li className='text-lg font-[Poetsen_One] hover:text-cyan-500 cursor-pointer'>About</li>
            <li className='text-lg font-[Poetsen_One] hover:text-cyan-500 cursor-pointer'>Contact</li>
            <li className='text-lg font-[Poetsen_One] hover:text-cyan-500 cursor-pointer'>Login</li>
          </ul> */}

            <div className=" hidden mr-4 sm:flex bg-cyan-50 text-[#161b33] px-3 w-full  items-center justify-between">
              <form onSubmit={handleSubmit} className=" bg-cyan-50 text-[#161b33]  w-full  flex items-center justify-between">
                
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='search anime...' className='p-1.5 w-full outline-none text-[#161b33]' />
                
                <button type="submit" className="text-[#161b33] cursor-pointer hover:text-cyan-500 transition-all duration-300" >
                  <i class="fa-solid fa-magnifying-glass"></i>
                  
                </button>
                
              </form>
              
          
            </div>

{/* 
          <div className="text-lg font-[Poetsen_One] text-[#161b33] px-3 py-1 rounded bg-cyan-500 cursor-pointer">
          Login
          </div> */}
        </div>
          <div onClick={()=>setShoSearch(!shoSearch)} className={`mr-2 sm:hidden ${shoSearch?'text-cyan-500':'text-white'}`}>
            <div className="text-[22px]  px-2"> <i class="fa-solid fa-magnifying-glass"></i></div>
          </div>
      
        </div>
        {!!shoSearch && (
          <div className=" rounded sm:hidden flex bg-cyan-50 text-[#161b33] px-3 w-[97%] mx-auto  items-center justify-between">
          <form onSubmit={handleSubmit} className=" bg-cyan-50 text-[#161b33]  w-full  flex items-center justify-between">
            
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='search anime...' className='p-1.5 w-full outline-none text-[#161b33]' />
            
            <button type="submit" className="text-[#161b33] cursor-pointer hover:text-cyan-500 transition-all duration-300" >
              <i class="fa-solid fa-magnifying-glass"></i>
              
            </button>
            
          </form>
          
      
        </div>
        )}
        </div>
)
}

export default Header