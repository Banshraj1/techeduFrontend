import React, { useEffect, useState } from "react";
import { Playlist, Sponsor, HeroSection } from "../index.js";
import { getPlaylist } from "../playlist/getPlaylist.js";

import { useSelector } from "react-redux";
// import {}


function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const data = await getPlaylist("6a20ddac632e27219e28b37e");
                setMovies(data?.data || []);
            } catch (error) {
                console.log("error occured during fetching playlist", error);
            }
        };

        fetchPlaylist();
    }, []);

    return (
        <main className="bg-[#0f1014] min-h-screen overflow-x-hidden overflow-y-visible">
            {/* Sponsor */}
            <section className="px-4 md:px-8 lg:px-12 py-4">
                <Sponsor />
            </section>

            {/* Hero Banner */}
            <section className="relative">
                <HeroSection />
            </section>

            {/* Playlists */}
            <section className="px-4 md:px-8 lg:px-12 py-8 space-y-12">
                <div className="relative overflow-visible">
                    <Playlist data={movies} />
                    <Playlist data={movies} />
                    <Playlist data={movies} />
                    <Playlist data={movies} />
                    <Playlist data={movies} />
                </div>
            </section>
        </main>
    );
}

export default Home;
