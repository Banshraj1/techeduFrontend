import React, { useState } from "react";
import { Input } from "../utils/Input";
import {VERIFY_OTP_URI} from "../Constanst.js"

function VerifyOTP() {
    const [formData, setFormData] = useState({
        OTP: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    // console.log(formData);
    const handlePost = (e) => {
        e.preventDefault();
        const newPost = {
            OTP: formData.OTP,
        };
        axios
            .post(VERIFY_OTP_URI, newPost)
            .then((res) => setResponse(res))
            .catch((err) => setError(err));
    };

    return (
        <>
            <div>
                <div>
                    <form onSubmit={handlePost}>
                        <div>
                            <div>
                                <Input
                                    type="number"
                                    className="border border-gray-300 rounded py-2 px-4"
                                    placeholder="Enter OTP"
                                    required
                                    name="OTP"
                                    value={formData.OTP}
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default VerifyOTP;
