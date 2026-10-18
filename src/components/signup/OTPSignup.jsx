// ye wali file utils ke sare file ko export kr rhi hai and unko ek sath combine krke ek signup page banayegi

import React, { useState } from "react";
import { EmailForm, OTPVerify, DetailedForm } from "./index";

function OTPSignup() {
    const [isVerified, SetIsVerified] = useState(false);

    const [email, setEmail] = useState("");
    const [verifyOTP, setVerifyOTP] = useState(false);

    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
                {
                    isVerified ? (
                        <div>
                            <DetailedForm email={email} />
                        </div>
                    ) : (
                        // for email
                        <div>
                            <div>
                                <div>
                                    {!verifyOTP && (
                                        <div>
                                            <EmailForm
                                                email={email}
                                                setEmail={setEmail}
                                                setVerifyOTP={setVerifyOTP}
                                            />
                                        </div>
                                    )}
                                </div>
                                {verifyOTP && (
                                    <div>
                                        <div>
                                            <OTPVerify
                                                email={email}
                                                SetIsVerified={SetIsVerified}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                    //
                }
            </div>
        </>
    );
}

export default OTPSignup;
