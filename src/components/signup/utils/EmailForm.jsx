// Is file ko email input lene ke liye use kr rha hu 

import React, { useState } from "react";
import { Input } from "../../index.js";
import axios from "axios";
import { GET_OTP_URI } from "../../Constanst.js";

function EmailForm({ email, setEmail, setVerifyOTP }) {
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        console.log(e);
        setEmail(e.target.value);
    };
    console.log(email);
    const [isDisabled, setIsDisabled] = useState(false);
    const submitHandler = (e) => {
        // console.log(e);
        e.preventDefault();
        console.log(
            "email sent to backend to store and to send otp also disabled input field",
            GET_OTP_URI,
        );
        axios
            .post(GET_OTP_URI, {email})
            .then((res) => {
                // setResponse(res)
                console.log(res);
                setIsDisabled(true);
                setVerifyOTP(true);
            })
            .catch((err) => setError(err));
    };
    const clickHandler=()=>{
        setIsDisabled(true);
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <div>enter your email id</div>
                <Input
                    type="email"
                    className="border border-gray-300 rounded py-2 px-4"
                    placeholder="enter your email"
                    required
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    disabled={isDisabled}
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={clickHandler}
                >
                    sent OTP
                </button>
            </form>
        </>
    );
}

export default EmailForm;
