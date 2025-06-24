import React from 'react'

function ListCird({anime}) {
  return (
      <>
        {/* <div className="flex items-center gap-3 rounded-lg p-3 shadow-lg mt-24 w-[30%]">
              <div className="w-[80px] h-[120px] overflow-hidden rounded-lg">
                  <img className=' w-full h-full' src="https://cdn.myanimelist.net/images/anime/1527/146836.jpg" alt="" />
              </div>
              <div className="text-white h-full grid gap-3 w-[70%]">
                  <h1 className=' text-xl line-clamp-2 leading-snug '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem odit, eligendi natus, nihil quas corrupti incidunt voluptas sit ab cum vel ea qui dolore veritatis, mollitia quaerat beatae deserunt!</h1>
                    <p className='text-gray-400'> <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-l-sm">12 ep</span> <span className="bg-sky-500 text-white px-2 py-0.5 rounded-r-sm">⭐8.5</span> • <span className="text-sm text-white"> TV </span></p>
              </div>
          </div> */}
          <div  className="flex items-center gap-3 p-3 shadow-lg  w-full border-b border-gray-600">
                            <div className="w-[60px] h-[90px] overflow-hidden rounded-lg">
                                <img className=' h-full' src={anime.posterImage.small} alt={anime.titles.en||anime.canonicalTitle} />
                            </div>
                            <div className="text-white h-full grid gap-3 items-center w-[70%]">
                                <h1 className=' text-md line-clamp-2 leading-snug font-semibold hover:text-cyan-500'>{anime.titles.en||anime.canonicalTitle}</h1>
                                <p className='text-gray-400 text-sm'> <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-l-sm">{anime.episodeCount||anime.episodeLength || anime.totalLength || 'N/A'} ep</span> <span className="bg-sky-500 text-white px-2 py-0.5 rounded-r-sm">⭐{(anime.averageRating/10).toFixed(1)|| 'N/A'}</span> • <span className="text-sm text-white"> {anime.showType} </span></p>
                            </div>
                        </div>
      </>
)
}

export default ListCird