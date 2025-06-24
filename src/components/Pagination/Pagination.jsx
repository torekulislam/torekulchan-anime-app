import React from 'react';
import NumBtn from './NumBtn';

const Pagination = ({ currentPage, totalPages, onPageChange, pag=true }) => {


  return (
    pag?(
      <div className="flex justify-center items-center gap-2 flex-wrap mb-2 my-10">
          {currentPage > 0 && (
              <div className="flex items-center gap-2">
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
                    onClick={() => onPageChange(0)}
                   
                >
                    «
                </button>
                  
                <button
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
                    onClick={() => onPageChange(currentPage - 1)}
                    
                >
                    ‹
                    </button>
              </div>
      
          )}
          
          {currentPage > 1 && (
            <NumBtn isCrrount={false}
              num={currentPage - 2}
              onPageChange={onPageChange}
            />
          )}
          {currentPage >0 && (
            <NumBtn isCrrount={false}
              num={currentPage - 1}
              onPageChange={onPageChange}
            />
          )}
          
      <NumBtn isCrrount={true}
        num={currentPage}
        onPageChange={onPageChange}
      />

          
          {currentPage < totalPages && (
            <NumBtn isCrrount={false}
            num={currentPage +1}
            onPageChange={onPageChange}
            />
          )}

          {currentPage < totalPages - 1 && (
            <NumBtn isCrrount={false}
            num={currentPage + 2}
            onPageChange={onPageChange}/>
          )}

        {currentPage < totalPages  && (
              <div className="flex items-center gap-2">
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ›
      </button>
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        »
    </button>

    </div>
      
    )}
    </div>):
    <div className="flex justify-center items-center gap-2 flex-wrap mb-2 my-10">
    {currentPage > 1 && (
        <div className="flex items-center gap-2">
          <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
              onClick={() => onPageChange(1)}
             
          >
              «
          </button>
            
          <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
              onClick={() => onPageChange(currentPage - 1)}
              
          >
              ‹
              </button>
        </div>

    )}
    
    {currentPage > 2 && (
      <NumBtn isCrrount={false}
        num={currentPage - 2}
            onPageChange={onPageChange}
            p={pag}
      />
    )}
    {currentPage >0 && (
      <NumBtn isCrrount={false}
        num={currentPage - 1}
            onPageChange={onPageChange}
            p={pag}
      />
    )}
    
<NumBtn isCrrount={true}
  num={currentPage}
          onPageChange={onPageChange}
          p={pag}
/>

    
    {currentPage < totalPages && (
      <NumBtn isCrrount={false}
      num={currentPage +1}
            onPageChange={onPageChange}
            p={pag}
      />
    )}

    {currentPage < totalPages && (
      <NumBtn isCrrount={false}
            num={currentPage + 2}
            p={pag}
      onPageChange={onPageChange}/>
    )}

  {currentPage < totalPages  && (
        <div className="flex items-center gap-2">
<button
  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
  onClick={() => onPageChange(currentPage + 1)}
  disabled={currentPage === totalPages}
>
  ›
</button>
<button
  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
  onClick={() => onPageChange(totalPages)}
  disabled={currentPage === totalPages}
>
  »
</button>

</div>

)}
</div>
    );
};

export default Pagination;
