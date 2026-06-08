import axios from "axios";
import { api } from "../utils/axios.js";
import { BASE_URI, GET_PLAYLIST_URI, MIDDLE_URI } from "../Constanst.js";
import { useState } from "react";
async function getPlaylist(playlistId) {
  try {
    // const response = await axios.post(
    //   "http://localhost:8000/techedu/v1/admin/p/get/playlist/",
    //   { playlistId },
    // );
    console.log(playlistId);

    const response = await axios.get(
      `http://localhost:8000/techedu/v1/admin/p/get/playlist/${playlistId}`,
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error occured during getting playlist::", error);
    throw error;
  }
}
export { getPlaylist };

// const CreatePost = () => {
//     const [response, setResponse] = useState(null);
//     const handlePost = () => {
//         const newPost = { title: "Test Title", body: "Test Body" };

//         axios
//             .post("https://jsonplaceholder.typicode.com/posts", newPost)
//             .then((res) => setResponse(res.data))
//             .catch((err) => console.error(err));
//     };

//     return (
//         <div>
//             <button onClick={handlePost}>Send POST Request</button>
//             {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
//         </div>
//     );
// };

// export default CreatePost;
