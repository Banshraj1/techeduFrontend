import React from "react";

// import { Container } from './styles';

function SignupSuccessfull({ data,operation }) {
  console.log(data.data.username);
  return (
    <>
      <h2 className="text-center col-md-6 offset-md-3">
        {operation} Successfull
      </h2>
      <br />
      <div className="text-center col-md-6 offset-md-3">
        Hello {data?.data?.username || "There"}, {operation} was
        successful! We are glad to have you.NOW, you may now proceed...
      </div>
    </>
  );
}

export { SignupSuccessfull };
