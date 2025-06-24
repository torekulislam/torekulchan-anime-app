import React from 'react'

function CharactersCird({char}) {
    return(
       
            <div className="bg-gray-800 overflow-hidden text-white px-4  p-2 rounded flex items-center justify-baseline gap-4 shadow">
            <div className="bg-cyan-900 w-20 h-20 object-cover rounded-full">
                {char.image &&
            <img
            src={char.image}
            alt={char.image}
            className="w-20 h-20 object-cover rounded-full"
            />
        }
           </div>
            <div className=" grid gap-3.5 overflow-hidden">
            <h3 className="text-md mt-2 font-bold">{char.name}</h3>
            <p className="text-sm text-gray-300">{char.role}</p>
            </div>
            </div>
             
      );
}

export default CharactersCird