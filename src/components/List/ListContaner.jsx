import React, { useState, useEffect } from 'react'
import ListCird from './ListCird';
import { Link } from 'react-router-dom';
import { fetchAnimeList } from '../../api/fetchAnimeList';
function ListContaner({ url, titel , paths }) {
     
       const [animeLists, setAnimeLists] = useState([]);
        const apiUrl = url + `&page[limit]=5`; // Adjust the limit as needed
  
          // Fetch anime data from the API
    
    
        
       useEffect(() => {
         fetchAnimeList({ apiUrl, setAnimeLists })
        } , [apiUrl]);
      
  return (
      <>
          <div className="bg-[#00b7db0c]  px-2 py-3 border border-gray-800 mb-3">
                <h1 className="text-cyan-400 text-2xl font-bold mb-6">{titel}</h1>
                <div className="grid mx-auto gap-1">
          {animeLists.map((anime, index) => (
            index < 5 && (
              <Link to={`anime/${anime.attributes.slug}/${anime.id}`} key={index}>
                <ListCird key={index} anime={anime.attributes} />
                </Link>)
                    ))}
                
                  <Link to={paths}>
                      <span className="cursor-pointer hover:text-cyan-500 transition-all duration-300 p=my-4 w-fit px-2">View more <i className="fa-solid fa-angle-right text-[10px] ml-1.5"></i></span>
                    </Link>
                </div>
      </div>
      </>
  )
}

export default ListContaner