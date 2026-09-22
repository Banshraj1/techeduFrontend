import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { getMovie } from "./getMovie";
import { MyPlayer } from "../player/MyPlayer";
function Card({ movieId }) {
    const [movieData, setMoviedata] = useState();

    useEffect(() => {
        getMovie(movieId)
            .then((res) => {
                setMoviedata(res.data);
            })
            .catch((err) => console.log("some error occured", err));
    }, [movieId]);

    return (
        <div
            className=" relative group w-40 sm:w-44 md:w-48 lg:w-52 cursor-pointer z-10
      "
        >
            <Link
                to={`/watch/${movieData?._id}`}
                className=" block relative rounded-xl overflow-hidden bg-zinc-900 transition-all duration-300 ease-out
 group-hover:scale-125 group-hover:-translate-y-8 group-hover:z-50 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)] "
            >
                {/* Thumbnail */}
                <div className="relative">
                    <img
                        src={movieData?.thumbnail || "/src/assets/img1.avif"}
                        alt={movieData?.title}
                        className=" w-full h-56 object-cover transition-all duration-500 group-hover:brightness-75 "
                    />

                    {/* Rating */}
                    {movieData?.rating && (
                        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-full text-[10px] font-semibold text-yellow-400">
                            ⭐ {movieData.rating}
                        </div>
                    )}

                    {/* Genre */}
                    {movieData?.genre && (
                        <div className="absolute top-2 left-2 bg-red-600/90 backdrop-blur-md px-2 py-1 rounded-full text-[10px] font-medium text-white">
                            {movieData.genre}
                        </div>
                    )}
                </div>
                {/* {console.log(movieData?._id)} */}

                {/* Hover Overlay "https://techedu-videos.s3.eu-north-1.amazonaws.com//chapters/0c183d79-c413-4141-a561-0675ccffbde8/index.m3u8"
                 */}
                <div className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent  p-3  ">
                    <h2 className="text-white text-sm font-bold line-clamp-1">
                        {movieData?.title || "Movie Title"}
                    </h2>

                    <div className="flex items-center gap-2 mt-1 text-[10px] text-gray-300">
                        <span>{movieData?.year || "2024"}</span>
                        <span>•</span>
                        <span>{movieData?.duration || "2h 20m"}</span>
                        <span>•</span>
                        <span className="text-green-400 font-semibold">
                            {movieData?.likes || "98% Match"}
                        </span>
                    </div>

                    <div className="mt-2 min-h-[42px]">
                        <p className="text-[10px] leading-relaxed text-gray-200 line-clamp-3">
                            {movieData?.description ||
                                "Movie description goes here..."}
                        </p>
                    </div>

                    <div className="flex gap-2 mt-3">
                        <button className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded-md text-xs font-semibold hover:bg-gray-200 transition">
                            ▶ Play
                        </button>

                        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 text-white hover:bg-white/10 transition">
                            +
                        </button>

                        <button className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 text-white hover:bg-white/10 transition">
                            i
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
