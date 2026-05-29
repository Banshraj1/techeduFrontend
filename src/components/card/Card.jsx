import React from "react";
import { Link } from "react-router";

/*
    isme ek api call backend ko jayegi movie detail ke liye
    response me video URi length  release year language likes and dislikes and description aayega
    baad me comments bhi add ho sakta hai
*/

function Card({ data }) {
  return (
    <div className="relative group w-40 sm:w-44 md:w-48 lg:w-52 cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:-translate-y-3 hover:z-30">
      <Link to={`/movie/${data?.id}`}>
        {/* Thumbnail */}
        <div className="relative">
          <img
            src={data?.thumbnail || "/src/assets/img1.avif"}
            alt={data?.title}
            className="w-full h-54 object-cover rounded-xl transition-all duration-500 group-hover:brightness-75 "
          />

          {/* Rating Badge */}
          {data?.rating && (
            <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-full text-[10px] font-semibold text-yellow-400">
              ⭐ {data?.rating || "9.2"}
            </div>
          )}

          {/* Genre Badge */}
          {data?.genre && (
            <div className="absolute top-2 left-2 bg-red-600/90 backdrop-blur-md px-2 py-1 rounded-full text-[10px] font-medium text-white">
              {data?.genre || "Sci-Fi"}
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent p-3 ">
          {/* Title */}
          <h2 className="text-white text-sm font-bold line-clamp-1">
            {data?.title || "Interstellar"}
          </h2>

          {/* Metadata */}
          <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-300">
            <span>{data?.year || "2024"}</span>

            <span className="text-gray-500">•</span>

            <span>{data?.duration || "2h 49m"}</span>

            <span className="text-gray-500">•</span>

            <span className="text-green-400 font-semibold">
              {data?.likes || "98% Match"}
            </span>
          </div>

          {/* Description */}
          <div className="mt-2 min-h-[42px]">
            <p className="text-[10px] leading-relaxed text-gray-200 line-clamp-3">
              {data?.description ||
                "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."}
            </p>
          </div>

          {/* Buttons */}
          {/* py ko 1.5 se change kiya */}
          <div className="flex gap-2 mt-2">
            <button className=" flex items-center gap-1 bg-white text-black px-3 py-[4px] rounded-md text-xs font-semibold hover:bg-gray-200 transition ">
              ▶ Play
            </button>

            <button className=" flex items-center justify-center w-8 h-8 rounded-full border border-white/40 text-white hover:bg-white/10 transition ">
              +
            </button>

            <button className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 text-white hover:bg-white/10 transition ">
              i
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
