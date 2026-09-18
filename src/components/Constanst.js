// const BASE_URI = "https://techedu-eta.vercel.app/";
// const BASE_URI = "https://techedu-1.onrender.com/";
const BASE_URI = "http://localhost:8000/";
const MIDDLE_URI = "techedu/v1/";
const PREFIX_URI = BASE_URI + MIDDLE_URI;
const LOGINURI = PREFIX_URI + "login";
const REGISTER_URI = PREFIX_URI + "register";
const ABOUT_URI = PREFIX_URI + "about";
const GET_CURRENT_USER = PREFIX_URI + "get-me";
const LOGOUT_URI = PREFIX_URI + "logout";
const GET_PLAYLIST_URI = "p/get/playlist";
// const

export {
    LOGINURI,
    REGISTER_URI,
    ABOUT_URI,
    GET_CURRENT_USER,
    BASE_URI,
    MIDDLE_URI,
    GET_PLAYLIST_URI,
    LOGOUT_URI,
};
