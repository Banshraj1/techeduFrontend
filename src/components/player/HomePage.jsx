import { MyPlayer } from "./MyPlayer.jsx";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to My App</h1>

            <div
                style={{
                    width: "800px",
                    height: "450px",
                }}
            >
                here wiill be a player
                <MyPlayer src="https://techedu-videos.s3.eu-north-1.amazonaws.com//chapters/7bd5568c-92c0-4cc5-865d-d46d74669c67/index.m3u8" />
            </div>
        </div>
    );
};

export { HomePage };
