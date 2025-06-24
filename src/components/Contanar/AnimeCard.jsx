import React from 'react'

function AnimeCard({ anime, isUpcoming = false }) {

  
  const misingPoster = 'https://media.kitsu.app/anime/poster_images/9523/medium.jpg';

    return (
        <div className="min-[400px]:w-auto min-[400px]:max-w-[220px]   bg-[#1c1c2c] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200">
        <img src={anime.posterImage?.medium? anime.posterImage.medium:anime.posterImage?Object.values(anime.posterImage)[0]:misingPoster} alt={Object.values(anime.titles)[0]} className="w-full h-[280px]" />
        <div className="p-3 text-white">
          <h2 className="text-sm font-semibold mb-1 truncate">{anime.titles.en||anime.canonicalTitle}</h2>
          <div className="text-xs text-gray-400">{anime.showType} • {anime.startDate || '24m'}</div>
          <div className="flex items-center gap-2 mt-1 text-xs">
        
          
            <span className={`bg-green-600 text-white px-2 py-0.5 rounded ${!isUpcoming ?'inline-block': 'hidden'}`}>⭐ {anime.averageRating || 'N/A'}</span>
            <span className="bg-blue-500 text-white px-2 py-0.5 rounded">{anime.episodeCount || '?'} ep</span>
          </div>
        </div>
      </div>
    )
}

export default AnimeCard
