import { Card } from "../index.js";
import React, { useState } from "react";
import { getPlaylist } from "./getPlaylist.js";
// import {dotenv} from "dotenv"
// dotenv.config({})
// import { Container } from './styles';

function Playlist({ data }) {
  // const movie = api call
  // const movieData = [
  //   {
  //     name: "movie1",
  //     rating: "9.2",
  //     description: "this is a discriprion for movie 1",
  //     title: "movie1",
  //     duration: "2h 36min",
  //     releaseYear: "2014",
  //   },
  //   {
  //     name: "movie2",
  //     rating: "9.2",
  //     description: "this is a discriprion for movie 2",
  //     title: "movie2",
  //     duration: "2h 36min",
  //     releaseYear: "2014",
  //   },
  //   {
  //     name: "movie3",
  //     rating: "9.2",
  //     description: "this is a discriprion for movie 3",
  //     title: "movie3",
  //     duration: "2h 36min",
  //     releaseYear: "2014",
  //   },
  //   {
  //     name: "movie4",
  //     rating: "9.2",
  //     description: "this is a discriprion for movie 4",
  //     title: "movie4",
  //     duration: "2h 36min",
  //     releaseYear: "2014",
  //   },
  //   {
  //     name: "movie5",
  //     rating: "9.2",
  //     description: "this is a discriprion for movie 5",
  //     title: "movie5",
  //     duration: "2h 36min",
  //     releaseYear: "2014",
  //   },
  //   {
  //     name: "movie2",
  //     rating: "9.2",
  //     description: "this is a discriprion for movie 2",
  //     title: "movie2",
  //     duration: "2h 36min",
  //     releaseYear: "2014",
  //   },
  //   {
  //     name: "movie3",
  //     rating: "9.2",
  //     description: "this is a discriprion for movie 3",
  //     title: "movie3",
  //     duration: "2h 36min",
  //     releaseYear: "2014",
  //   },
  //   {
  //     name: "movie2",
  //     rating: "9.2",
  //     description: "this is a discriprion for movie 2",
  //     title: "movie2",
  //     duration: "2h 36min",
  //     releaseYear: "2014",
  //   },
  //   {
  //     name: "movie3",
  //     rating: "9.2",
  //     description: "this is a discriprion for movie 3",
  //     title: "movie3",
  //     duration: "2h 36min",
  //     releaseYear: "2014",
  //   },
  // ];

  const movieData = data?.elements;
  console.log(movieData);
  return (
    <section className="w-fll py-">
      {/* Heading */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">
          {data?.title || "Trending"}
        </h2>
        <button className="text-sm text-gray-400 hover:text-white transition-colors">
          View All
        </button>
      </div>

      {/* Cards Container */}
      <div className=" flex gap-4 overflow-x-auto overflow-y-visible scrollbar-hide pb-2 ">
        {movieData?.map((obj, index) => (
          <div
            key={index}
            className=" flex-shrink-0 transition-all duration-300 hover:scale-105 "
          >
            <Card movieId={obj} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Playlist;
