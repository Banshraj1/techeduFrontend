import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
// import { Container } from './styles';
import LoginHelper from "./LoginHelper.jsx";

function Login() {
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn) {
            const timer = setTimeout(() => {
                navigate("/");
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoggedIn, navigate]);

    return <div>{!isLoggedIn && <LoginHelper />}</div>;
}

export default Login;
