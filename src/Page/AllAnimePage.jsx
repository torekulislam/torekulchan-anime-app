import React from 'react'
import Contanear from '../components/Contanar/Contanear'
function AllAnimePage({ url, titel ,Page }) {
  
    
    return (
        <>
            <div className='flex flex-col items-center justify-center min-h-screen  mt-20 text-white'>
            <Contanear url={url} titel={titel} isAllAnime={true} paths='' Page={Page}/>
        </div>
        </>
    )
}

export default AllAnimePage
