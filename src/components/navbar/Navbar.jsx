import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
    login as authLogin,
    logout as authLogout,
} from "../../store/authSlice";
import { GET_CURRENT_USER, LOGOUT_URI } from "../Constanst";

// import { Container } from './styles';

function Navbar() {
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    console.log(user);
    // console.log(isLoggedIn);
    const [currentUser, setCurrentUser] = useState(null);

    // here i will make a call to get current user
    const getCurrentUser = () => {
        console.log("tried");
        axios
            .get(GET_CURRENT_USER, {
                withCredentials: true,
            })
            .then((res) => {
                // console.log(res.data);
                setCurrentUser(res.data.data);
                dispatch(authLogin(res.data.data));
            })
            .catch((e) => {
                console.error("error inside getcurrent user method", e);
            });
    };
    useEffect(getCurrentUser, []);

    function logoutHandler() {
        console.log("logged out");
        axios
            .get(LOGOUT_URI, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);

                dispatch(authLogout());
                // alert("logged out");
            })
            .catch((error) => {
                console.log("something went wrong during logging out", error);
            });
    }

    return (
        <>
            <div className="bg-gray-800 text-white p-4 flex justify-between items-center w-full">
                {/* Left Side */}
                <div className="text-lg font-semibold">
                    Hey {user?.username || "There"}!
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "hover:text-gray-300 border-b-2 border-grey"
                                : "hover:text-gray-300 border-b-2 border-transparent"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "hover:text-gray-300 border-b-2 border-grey"
                                : "hover:text-gray-300 border-b-2 border-transparent"
                        }
                    >
                        About
                    </NavLink>

                    {isLoggedIn ? (
                        <button
                            className="hover:text-gray-300 border-b-2 border-transparent" 
                            onClick={logoutHandler}
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    isActive
                                        ? "hover:text-gray-300 border-b-2 border-grey"
                                        : "hover:text-gray-300 border-b-2 border-transparent"
                                }
                            >
                                Signup
                            </NavLink>

                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive
                                        ? "hover:text-gray-300 border-b-2 border-grey"
                                        : "hover:text-gray-300 border-b-2 border-transparent"
                                }
                            >
                                Login
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;
