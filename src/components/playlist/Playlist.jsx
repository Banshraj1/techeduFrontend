import { Card } from "../index.js";
import React from "react";
// import { Container } from './styles';

function Playlist({ data }) {
  // const movie = api call
  const movieData = [
    {
      name: "movie1",
      rating: "9.2",
      description: "this is a discriprion for movie 1",
      title: "",
      duration: "2h 36min",
      releaseYear: "2014",
    },
    {
      name: "movie2",
      rating: "9.2",
      description: "this is a discriprion for movie 2",
      title: "movie2",
      duration: "2h 36min",
      releaseYear: "2014",
    },
    {
      name: "movie3",
      rating: "9.2",
      description: "this is a discriprion for movie 3",
      title: "movie3",
      duration: "2h 36min",
      releaseYear: "2014",
    },
    {
      name: "movie4",
      rating: "9.2",
      description: "this is a discriprion for movie 4",
      title: "movie4",
      duration: "2h 36min",
      releaseYear: "2014",
    },
    {
      name: "movie5",
      rating: "9.2",
      description: "this is a discriprion for movie 5",
      title: "movie5",
      duration: "2h 36min",
      releaseYear: "2014",
    },
  ];

  return (
    <>
      <div>
        <h2 className="text-xl text-gray-700 font-semmibold font-italic">
          {data?.title || "Trending"}
        </h2>
        <div className="flex">
          {movieData?.map((obj, index) => (
            <Card data={obj} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Playlist;
