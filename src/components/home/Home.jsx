import React, { useEffect, useState } from "react";
import { Card, Playlist } from "../index.js";
import { getPlaylist } from "../playlist/getPlaylist.js";
// import { Container } from './styles';
// GET /trending
// GET /popular
// GET /top-rated
// GET /action
// GET /comedy

function Home() {
  const [movies, setMovies] = useState({});
  // const
  //  const movies=getMovies("6a20ddac632e27219e28b37e");
  // setMovies(getmovie("6a20ddac632e27219e28b37e"));
  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        // console.log("hii");
        const data = await getPlaylist("6a20ddac632e27219e28b37e");
        setMovies(data);
      } catch (error) {
        console.log("error occured during fetching playlist", error);
      }
    };

    fetchPlaylist();
  }, []);
  // console.log(movies.data);
  return (
    <>
      <div>
        <div>
          <h2>Hii... This is H😊Me...</h2>
          <Playlist data={movies?.data} />
          <Playlist data={movies?.data} /> 
          <Playlist data={movies?.data} />
          <Playlist data={movies?.data} />
          {/* <Card movieId={"6a20d01248734dd2d344463e"}/> */}
        </div>
      </div>
    </>
  );
}

export default Home;
