import React from "react";
import { Card, Playlist } from "../index.js";
// import { Container } from './styles';

// GET /trending
// GET /popular
// GET /top-rated
// GET /action
// GET /comedy

function Home() {
  return (
    <>
      <div>
        <div className="flex">
          {/* <h2>Hii... This is H😊Me...</h2> */}
          <Playlist />
        </div>
      </div>
    </>
  );
}

export default Home;
