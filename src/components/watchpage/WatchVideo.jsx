import { useParams } from "react-router-dom";
import { MyPlayer } from "../player/MyPlayer";

function WatchVideo({ movieUri }) {
    console.log(movieUri);
    
    return (
        <>
            <h1>Hey man...</h1>
            <h2>Enjoy your video</h2>
            <MyPlayer src={movieUri} />
        </>
    );
}
export { WatchVideo };
