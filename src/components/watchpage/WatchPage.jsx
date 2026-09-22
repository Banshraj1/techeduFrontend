import { useParams } from "react-router-dom";
import { WatchVideo } from "./WatchVideo";
import { getMovie } from "../index";
import { useState, useEffect } from "react";
function WatchPage() {
    const { movieId } = useParams();
    // console.log(movieId);

    const [movieData, setMoviedata] = useState();

    useEffect(() => {
        getMovie(movieId)
            .then((res) => {
                setMoviedata(res.data);
            })
            .catch((err) => console.log("some error occured", err));
    }, [movieId]);

    return (
        <div>
            <div>
                <div>
                    <WatchVideo movieUri={movieData?.url} />
                </div>
            </div>
        </div>
    );
}

export { WatchPage };
