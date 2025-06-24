import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function SliedCard({ info }) {
  if (!info) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={info.id} // important for reanimation on each slide
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.1, ease: 'easeInOut' }}
        className="w-[100vw] mb-5"
      >
        <div className="z-10 relative overflow-hidden p-[10%] sm:p-20 w-full h-[350px] sm:min-h-[600px] flex items-end mx-auto">
          {/* Gradients */}
          <div className="absolute top-0 right-0 w-full  h-full md:bg-gradient-to-r z-10 from-[#080202ec] via-slate-900 to-transparent"></div>
          <div className="absolute top-0 right-0 w-full h-full md:bg-gradient-to-t z-10 from-transparent to-[#114e7759] blur-2xl"></div>

          {/* Background Image */}
          <img
            src={info?.attributes?.posterImage?.original || info?.attributes?.posterImage?.large}
            alt={info?.attributes?.slug}
            className="absolute top-0 right-0 w-full md:w-[60%] h-full -z-0 brightness-20 md:brightness-100 object-cover"
          />

          {/* Text Content */}
          <div className="relative z-10 grid  items-end gap-6">
            <div className="sm:mb-4">
              <div className="text-[22px] capitalize sm:text-4xl font-[Poetsen_One] text-stone-200">
                {info?.attributes?.titles?.en || info?.attributes?.canonicalTitle}
              </div>
            </div>

            <div className="flex text-[10px] sm:text-[16px] gap-4 items-center capitalize justify-baseline">
              <div><i className="fa-solid fa-play sm:text-sm mr-2"></i>{info?.attributes?.showType}</div>
              <div><i className="fa-solid fa-calendar sm:text-sm mr-2"></i>{info?.attributes?.startDate}</div>
              <div><i className="fa-solid fa-star sm:text-sm mr-2"></i>{info?.attributes?.averageRating} %</div>
              <div><i className="fa-solid fa-file sm:text-sm mr-2"></i>{info?.attributes?.episodeCount} EP</div>
            </div>

            <div className="min-w-[250px] sm:min-w-[350px] w-[70%]">
              <div className="hidden sm:block">
              <div className="w-full overflow-clip mt-6 text-md font-light font-[Roboto] text-[#e3e6f7] line-clamp-3 leading-snug ">
                {info?.attributes?.description}
              </div>
            </div>

              <div className="w-fit">
                <Link to={`/home/anime/${info?.attributes?.slug}/${info?.id}`} className="no-underline text-black">
                  <button className="bg-cyan-500 flex items-center justify-between sm:w-[220px] px-5 py-2 text-gray-950 rounded-full sm:mt-10 cursor-pointer hover:bg-cyan-400 transition-all duration-300">
                    <h3 className="sm:text-2xl font-[Roboto] font-bold">Anime Detail</h3>
                    <i className="fa-solid fa-play sm:text-xl ml-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SliedCard;
