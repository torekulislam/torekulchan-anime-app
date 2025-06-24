import React, { useEffect, useState } from 'react'

import { fetchAnimeDetails,fetchGenres,fetchCharacters } from '../../api/fetchAnimeDetails';
import YouTubeTrailerCard from './YouTubeTrailerCard';
import CharactersCird from './CharactersCird';
const Animedetails = ({url,id}) => {
  const [animeDetails, setAnimeDetails] = useState({});
  const [genres, setGenres] = useState([])
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetchAnimeDetails({ url, setAnimeDetails });
    fetchGenres({id , setGenres})
    fetchCharacters({id,setCharacters})
  }, [url]);
  
  // console.log(animeDetails.youtubeVideoId);
  const [showMore, setShowMore] = useState(false);
 
 
  // console.log(Titel);
  
  const misingCover = 'https://i.pinimg.com/originals/22/58/a7/2258a7a97d43cbbfa68e78042f73eeaf.gif';
    return (
      <>
        <div className="min-w-[100vw]">
          <div className="relative w-full  min-h-screen overflow-hidden">
            
            <div className={` absolute top-0 left-0 w-full bg-amber-500   overflow-hidden flex items-end justify-center -z-0`}><img src={animeDetails.coverImage ? animeDetails.coverImage.large || Object.values(anime.coverImage)[0] : misingCover} alt="hjkhj" className=' h-[320px] w-full min-w-[1300px] brightness-50' />
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start xl:min-h-screen bg-[#010a13] shadow-2xl  gap-12">

            <img             
              src={animeDetails.posterImage?.medium  || animeDetails.posterImage?.original||animeDetails.posterImage&&Object.values(animeDetails.posterImage)[1]|| 'https://i.pinimg.com/originals/1c/e6/cf/1ce6cff58c44871749a5c8e83e489a44.gif'} 
              alt={animeDetails.canonicalTitle} 
              className="w-[225px] h-[354px] object-cover z-20 mt-52 md:ml-14" />
              
              <div className="md:mt-[360px] w-[90%] md:w-auto  md:mr-[100px] ">
              <div className="w-full mb-12">
                  <h1 className="text-3xl text-center md:text-start font-bold capitalize mb-4">{animeDetails.titles?.en || animeDetails.canonicalTitle || animeDetails.abbreviatedTitles}</h1>
                  
                  <div className="text-gray-300 mb-2"><strong>Synopsis:</strong> {animeDetails.synopsis}</div>
                  
                  <div className="text-gray-300 mb-2"><strong>Status:</strong> {animeDetails.status}</div>
                  
                  <div className="text-gray-300 mb-2"><strong>Start Date:</strong> {animeDetails.startDate}</div>
                  
                  <div className="text-gray-300 mb-2"><strong>End Date:</strong> {animeDetails.endDate || 'Ongoing'}</div>
                  
                  <div className="text-gray-300 mb-2 "><strong>Average Rating:</strong> {animeDetails.averageRating || 0} %</div>
                  
                  <div className="text-gray-300 mb-2  flex items-start gap-2">
                    <strong>Genres:</strong>
                    <div className=" flex gap-2 flex-wrap flex-row-reverse items-center justify-end text-sm font-light">
                    {genres.map((item, index) =>
                      <span key={index} className='py-1 px-2.5 inline-block border rounded-full text-white hover:text-cyan-500'>{item}</span>
                      )}
                    </div>                    
                  </div>
             
                </div>
              </div>
            
            </div>
            <div className="">

                {animeDetails.youtubeVideoId !== null && (
                  
                  <div className="w-full ">
                <YouTubeTrailerCard  youtubeId={animeDetails.youtubeVideoId} />

                  </div>
              )}

              {characters.length > 0 && (
                <div className="max-w-full mx-auto p-8 px-10  bg-[#00b7db05]">
                  <div className=" flex justify-between items-center">
                    <h2 className="text-cyan-400 text-2xl font-bold mb-6">Anime Characters</h2>
                    {characters.length > 3 &&
                      <button className=' hover:text-cyan-500 duration-300 transition' onClick={() => setShowMore(!showMore)}>{showMore ? <span>View Less <i className="fa-solid fa-angle-down text-[16px] ml-1.5"></i> </span> : <span>View More<i className="fa-solid fa-angle-right text-[16px] ml-1.5"></i></span>}</button>
                    }
                  </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {characters.map((char, index) => ( 
                      !showMore ?
                      index < 4&&
                        <div key={index}> 
                            
                            <CharactersCird key={index} char={char} />  
                            
                        </div> :

                        <div key={index}>                            
                          <CharactersCird key={index} char={char} />                          
                        </div>
                      
                 ))}      
                   </div>
                   </div> 
              )}             
              </div>
         
      </div>
        </div>
      </>
    )
  
  }

export default Animedetails;