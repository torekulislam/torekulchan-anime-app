import React from 'react'
import { useParams } from 'react-router-dom';
import Animedetails from '../components/AnimeDetails/Animedetails';
function AmimePage() {
    const { id,slug } = useParams();
    const url = `https://kitsu.io/api/edge/anime/${id}`;

    return (
        <>
            <div className=" w-full min-h-screen bg-[#14142048] text-white">
               

                <Animedetails url={url} id={id} />
            </div>
        </>
    )
}

export default AmimePage
