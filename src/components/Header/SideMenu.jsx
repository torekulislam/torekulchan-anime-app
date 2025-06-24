import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
function SideMenu({ setShoManu, shoManu }) {
    useEffect(() => {
        if (shoManu) {
          document.body.style.overflow = 'hidden'; // 🚫 Disable scroll
        } else {
          document.body.style.overflow = 'auto'; // ✅ Enable scroll
        }
      
        return () => (document.body.style.overflow = 'auto'); // Clean up
      }, [shoManu]);
      

    return (
        <>
        <div  onClick={() => setShoManu(false)}  className="">
                <div className={`w-[100vw] h-[100vh]  fixed top-0 left-0 z-20 bg-[#04101a70] backdrop-blur-[8px] overflow-hidden`}></div>
                <AnimatePresence mode="wait">
  {shoManu && (
    <motion.div
      key="side-menu"
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed top-0 left-0 z-30  min-h-screen w-full max-w-[350px] bg-[#00b8db0e] backdrop-blur-sm py-10 text-md font-[Roboto] font-medium flex flex-col gap-10"
    >
      <div className="w-full h-fit ">
        <button onClick={() => setShoManu(!shoManu)} className="p-3 cursor-pointer">
          <i className="fa-solid fa-angle-left text-sm mx-2"></i> Close Menu
        </button>
      </div>

      <div>
        <Link to="/home">
          <div className="px-3 py-4 border-b border-gray-700 hover:text-cyan-500 transition">
            Home
          </div>
        </Link>
        <Link to="/home/movies">
          <div className="px-3 py-4 border-b border-gray-700 hover:text-cyan-500 transition">
            Movies
          </div>
        </Link>
        <Link to="/home/tvseries">
          <div className="px-3 py-4 border-b border-gray-700 hover:text-cyan-500 transition">
            TV Series
          </div>
        </Link>
        <Link to="/home/mostpopular">
          <div className="px-3 py-4 border-b border-gray-700 hover:text-cyan-500 transition">
            Most Popular
          </div>
        </Link>
        <Link to="/home/topairing">
          <div className="px-3 py-4 border-b border-gray-700 hover:text-cyan-500 transition">
          Top Airing 
          </div>
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
 
        </div>
        </>
    )
}

export default SideMenu
