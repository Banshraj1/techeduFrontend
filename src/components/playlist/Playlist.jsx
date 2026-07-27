import { Card } from "../index.js";
import React from "react";

function Playlist({ data }) {
  const movieData = data?.elements;

  return (
    <section className="w-full py-4">
      {/* Heading */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">
          {data?.title || "Trending"}
        </h2>

        <button className="text-sm text-gray-400 hover:text-white transition-colors">
          View All
        </button>
      </div>

      {/* IMPORTANT WRAPPER */}
      <div className="relative py-10 overflow-visible">
        <div
          className="
          flex
          gap-4
          overflow-x-auto
          overflow-y-visible
          scrollbar-hide
          px-4
          "
        >
          {movieData?.map((obj, index) => (
            <div
              key={index}
              className="
              flex-shrink-0
              relative
              overflow-visible
              "
            >
              <Card movieId={obj} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Playlist;