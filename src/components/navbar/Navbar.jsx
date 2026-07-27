import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice";
import { GET_CURRENT_USER } from "../Constanst";

// import { Container } from './styles';

function Navbar() {
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const dispatch=useDispatch();
    console.log(user);
    console.log(isLoggedIn);
    const [currentUser, setCurrentUser] = useState(null);

    // here i will make a call to get current user
    const getCurrentUser = () => {
        console.log("tried");
        axios
            .get(GET_CURRENT_USER, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res.data);
                setCurrentUser(res.data.data);
                dispatch(authLogin(res.data.data));
            })
            .catch((e) => {
                console.error("error inside getcurrent user method", e);
            });
    };
    useEffect(getCurrentUser, []);

    return (
        <>
            <div className="bg-gray-800 text-white p-4 flex w-full justiy-between items-cener">
                <div className="flex space-x-4">
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
                        <></>
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
                {isLoggedIn ? (
                    <button className="ml-auto mr-[10px]">logOut</button>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default Navbar;
