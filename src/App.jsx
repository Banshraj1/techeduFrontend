import { use, useEffect, useState } from "react";
import "./App.css";
import { GET_CURRENT_USER } from "./components/Constanst";
import axios from "axios";

import { useDispatch } from "react-redux";
import { login as authLogin } from "./store/authSlice";
import { useSelector } from "react-redux";

import {
    Home,
    About,
    Login,
    Signup,
    Navbar,
    Footer,
    Slider,
} from "./components";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    console.log(user);
    console.log(isLoggedIn);
    // here i will make a call to get current user
    console.log("here");

    (async function () {
        try {
            console.log("tried");

            axios
                .get()
                .then((res) => {
                    console.log(res);
                    setCurrentUser(res);
                    useDispatch(authLogin(res.data));
                })
                .catch((e) => {
                    console.error(e);
                });
        } catch (error) {
            throw new Error("some error occured during getting current user");
        }
    })();
    // getCurrentUser();
    // useEffect(getCurrentUser, []);

    return (
        <>
            <h1>Hii, This is App...😊</h1>
        </>
    );
}

export default App;
