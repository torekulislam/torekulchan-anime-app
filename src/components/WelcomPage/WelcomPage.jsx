import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import SideMenu from '../Header/SideMenu'
function WelcomPage() {

  const [query, setQuery] = useState('');
 const [shoManu, setShoManu] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`home/search/${encodeURIComponent(query.trim())}`);

    }
  };
  return (
    <>
      <div className="w-full  sm:mt-[12vh]  text-white">
      <div className="flex  items-center m-[2vh] sm:hidden">
          <button onClick={() => setShoManu(!shoManu)} className="text-xl cursor-pointer mr-1.5">
          <i className="fa-solid fa-bars"></i>
          </button>         
          manue
        </div>
        <div className={`${!shoManu ? 'hidden' : 'block'}`}>
          <SideMenu setShoManu={setShoManu} shoManu={shoManu} />
        </div>

        <div className=" w-fit mx-auto items-center justify-between mb-4 p-3 px-7 hidden sm:flex">
              <ul className='flex items-center gap-5 text-[#e3e6f7]'>
            <li className='text-sm sm:text-lg font-[Poetsen_One] hover:text-cyan-500 cursor-pointer'><Link to='home'>Home</Link></li>
            <li className='text-sm sm:text-lg font-[Poetsen_One] hover:text-cyan-500 cursor-pointer'> <Link to='home/movies'> Movies</Link></li>
            <li className='text-sm sm:text-lg font-[Poetsen_One] hover:text-cyan-500 cursor-pointer'> <Link to='home/tvseries'> TV Series</Link></li>
            <li className='text-sm sm:text-lg font-[Poetsen_One] hover:text-cyan-500 cursor-pointer'> <Link to='home/mostpopular'> Most Popular</Link></li>
          </ul>
         
        </div>
        <div className="z-10 relative overflow-hidden p-[10%] sm:p-20 sm:rounded-2xl w-full sm:w-[95%] max-w-7xl   mx-auto sm:shadow-xl shadow-gray-800">
          {/* Background image or video can be added here */}
          {/* Uncomment the div below to add a background image */}

          <div className=" absolute top-0 right-0 w-full h-full md:bg-gradient-to-r z-10  from-[#080202] from-10% via-slate-900 via-50% to-transparent to-100% "></div>
      
          {/* <div className=" absolute top-0 right-0 w-[80%] h-full -z-10 bg-[url(https://i.pinimg.com/originals/20/ff/e4/20ffe419796909feca129d6ab0e846ee.gif)] bg-no-repeat bg-cover right-0 bottom-0"></div> */}
          <div className=" absolute top-0 right-0 w-full md:w-[60%] h-full -z-0 bg-[url(https://i.pinimg.com/originals/50/93/37/5093379276ed7c2857a9c2176aba957f.gif)] bg-no-repeat bg-cover brightness-20 md:brightness-100"></div>
          {/* <video class="" crossorigin="anonymous" data-test-id="duplo-hls-video" playsinline poster="https://i.pinimg.com/736x/25/c9/26/25c926f8c006e0fa5678d19861bba48a.jpg" preload="auto" src="blob:">…</video> */}
          <div className="relative z-10 ">
            <div className="mb-9"> 
              <div className="text-4xl font-[Poetsen_One] text-stone-200">Torekul<span className='text-cyan-500'>Chan</span></div>
            </div>

            <form onSubmit={handleSubmit}>

            <div className=" min-w-[250px] sm:min-w-[350px] w-[40%] ">
              
            <div className="flex  items-center justify-between gap-3">
            <div className=" rounded-lg ml-0 w-full  bg-cyan-50 text-[#161b33] px-3 py-1 flex items-center justify-between gap-3">
              <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='search anime...' className='p-2 outline-none text-md  text-[#161b33]' />
            </div>
              <button  type="submit" className="bg-cyan-500 text-lg text-[#161b33] px-5 py-2.5 cursor-pointer rounded-lg hover:bg-cyan-400 transition-all duration-300">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              
           </div>
            </div>
            </form>
            

          <div className="w-[50%] h-[70px] overflow-clip mt-6 text-md font-light font-[Roboto] text-[#e3e6f7] text-shadow-fuchsia-50s  ">
            <span className='fonts-medium '>Top search: </span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quos voluptates corporis ipsam distinctio facilis quidem modi. Tempora quos voluptates corporis ipsam distinctio facilis quidem modi Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic labore architecto numquam nostrum laudantium asperiores, magni dignissimos aspernatur quam veritatis, obcaecati atque molestias sit ratione. Iste voluptas asperiores praesentium?
          </div>
          <div className="w-fit">

          <Link to='/home'>
          <button className="bg-cyan-500 flex items-center justify-between  w-[220px] px-5 py-3 text-gray-950 rounded-lg mt-10 cursor-pointer hover:bg-cyan-400 transition-all duration-300">
            <div className="">
              <h3 className="text-2xl font-[Roboto]  font-bold ">Watch anime</h3>
            </div>
            <div className="text-xl">
            <i className="fa-solid fa-play"></i>
            </div>
          </button>
          </Link>
          </div>
          </div>

        </div>
     </div>
    </>
  )
}

export default WelcomPage