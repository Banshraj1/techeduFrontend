import React, { useState } from "react";
import { Input } from "../index.js";
// import { Container } from './styles';

function EmailForm({ email, setEmail, setVerifyOTP }) {
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
        );
        // .then
        setIsDisabled(true);
        setVerifyOTP(true);
    };

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
                >
                    sent OTP
                </button>
            </form>
        </>
    );
}

export default EmailForm;
