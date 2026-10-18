// is file se otp input lekr verify hone ke liye bhejna hai
// Hello Hello
import React, { useState } from "react";
import { Input } from "../../index.js";
import axios from "axios";
import { VERIFY_OTP_URI } from "../../Constanst.js";

function OTPVerify({ email, SetIsVerified }) {
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        console.log(e);
        setOTP(e.target.value);
    };
    const [OTP, setOTP] = useState("");
    console.log(OTP);
    const [isDisabled, setIsDisabled] = useState(false);
    const submitHandler = (e) => {
        // console.log(e);
        e.preventDefault();
        console.log(
            `otp ${OTP} and email ${email} sent to backend to verify ${VERIFY_OTP_URI}`,
        );
        axios
            .post(VERIFY_OTP_URI, { code: OTP, email: email })
            .then((res) => {
                // setResponse(res)
                SetIsVerified(true);
                setIsDisabled(true);
            })
            .catch((err) => setError(err));
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
