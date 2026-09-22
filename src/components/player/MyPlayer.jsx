import "@videojs/react/video/skin.css";
import { VideoPlayer, VideoSkin } from "@videojs/react/video";
import { HlsJsVideo } from "@videojs/react/media/hlsjs-video";

const MyPlayer = ({ src }) => {
    return (
        <>
            <div>
                <h1>Welcome to My App</h1>
                <div
                    style={{
                        // minwidth: "800px",
                        height: "450px",
                        width: "800px",
                    }}
                >
                    <VideoPlayer>
                        <VideoSkin>
                            <HlsJsVideo src={src} playsInline />
                        </VideoSkin>
                    </VideoPlayer>
                </div>
            </div>
        </>
    );
};

export { MyPlayer };
