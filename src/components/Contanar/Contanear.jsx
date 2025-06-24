import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import AnimeCard from './AnimeCard';
import { Link } from 'react-router-dom';
import { fetchAnimeList } from '../../api/fetchAnimeList';
function Contanear({ url ,paths, titel,isAllAnime = false,Page=1}) {
  
 
   const [animeLists, setAnimeLists] = useState([])
   const [currentPage, setCurrentPage] = useState(Page);
  const [totalPages, setTotalPages] = useState(0);
 const [loading, setLoading] = useState(true);


    const limit = isAllAnime ? 20 : 10;
    //https://kitsu.io/api/edge/anime?sort=-startDate&page[limit]=10

  // const apiUrl = url + `&page[offset]=${currentPage}`;
  const apiUrl = `${url}&page[limit]=${limit}&page[offset]=${(currentPage ) * limit}`;
  useEffect(() => {
    setLoading(true);
    fetchAnimeList({ apiUrl, setAnimeLists ,setTotalPages,limit})
    setLoading(false);
    } , [apiUrl, currentPage]);
  
    
    return (
      <div className="w-[98%] px-6 py-5 border bg-[#00b7db0c] mb-3 border-gray-800">
        <div className="flex items-center max-w-7xl mx-auto justify-between mb-6">
          <h1 className="text-cyan-400 text-2xl font-bold mb-6">{titel}</h1>
          {!isAllAnime && (
            <div className="text-[15px] text-gray-400">
               <Link to={paths}>
             <span className="cursor-pointer hover:text-cyan-500 transition-all duration-300">View more <i className="fa-solid fa-angle-right text-[10px] ml-1.5"></i></span>
              </Link>
          </div>
          )}
         
        </div>
      
        <div className="grid justify-around mx-auto w-fit items-baseline grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4">
          {animeLists.map((anime, index) => (

            <Link to={`/home/anime/${anime.attributes?.slug}/${anime.id}`} className="no-underline text-black" key={index}>
              <AnimeCard anime={anime.attributes}  />
            </Link>
          ))}
        </div>
        {
          loading === 0 && (
            <div role="status" className="flex items-center justify-center min-h-screen">
    <svg aria-hidden="true" class="w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    
</div>
          )
        }
        {
          animeLists.length === 0 && isAllAnime && (
            <div className="text-center text-gray-500 mt-4">
              No anime found for this category.
            </div>
          )
        }
        {!!isAllAnime && (
             <Pagination
            currentPage={currentPage}
            pag={Page===0}
             onPageChange={setCurrentPage}
           totalPages={totalPages} // Limit to 156 pages
           />
         
        )}
   
      </div>
    );
}

export default Contanear