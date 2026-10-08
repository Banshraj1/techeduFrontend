import React, { useState } from "react";
import { Input } from "../index.js";

function OTPVerify({ email, SetIsVerified }) {
    const handleChange = (e) => {
        console.log(e);
        setOTP(e.target.value);
    };
    const [OTP,setOTP]=useState("")
    console.log(OTP);
    const [isDisabled, setIsDisabled] = useState(false);
    const submitHandler = (e) => {
        // console.log(e);
        e.preventDefault();
        console.log(`otp ${OTP} and email ${email} sent to backend to verify `);
        // .then
        SetIsVerified(true);
        setIsDisabled(true);
        // .catch
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>enter OTP send on email {email}</div>
                <Input
                    type="number"
                    className="border border-gray-300 rounded py-2 px-4"
                    placeholder="enter your OTP"
                    required
                    name="OTP"
                    value={OTP}
                    handleChange={handleChange}
                    disabled={isDisabled}
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Verify OTP
                </button>
            </form>
        </>
    );
}

export default OTPVerify;
