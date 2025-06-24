import React from 'react'
import Contanear from '../components/Contanar/Contanear'
import ListContaner from '../components/List/ListContaner'
import Slied from '../components/Slied/Slied'
function Home() {
  return (
      
    <div className='flex flex-col items-center justify-center w-[100vw] min-h-screen text-white '>
      <div className="mb-12">
        <Slied />
      </div>
      
      <div className="grid justify-around mx-auto max-w-full items-baseline grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 gap-4">

        <ListContaner url="https://kitsu.io/api/edge/anime?sort=-averageRating" paths="topanime" titel="Top Anime" />
        
      <ListContaner url="https://kitsu.io/api/edge/anime?sort=-userCount" paths="mostpopular" titel="Most Popular" />
      
        <ListContaner url="https://kitsu.io/api/edge/anime?filter[status]=current&sort=-userCount" paths="topairing" titel="Top Airing" />
        
        <ListContaner
          url="https://kitsu.io/api/edge/anime?filter[status]=finished&sort=-startDate" 

          paths="latest-completed"
          titel="Latest Completed" />
      </div>


    <Contanear url='https://kitsu.io/api/edge/anime?filter[status]=current&sort=-startDate&page[limit]=10' titel='Ongoing anime'  paths="ongoinganime"/>
    <Contanear url='https://kitsu.io/api/edge/anime?filter[status]=upcoming&sort=startDate' titel='Upcoming Anime' paths="upcominganime" />
    
   
    </div>
  )
}

export default Home