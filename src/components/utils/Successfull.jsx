import React from "react";
import { useNavigate } from "react-router";
// import { Container } from './styles';
import { useEffect } from "react";
function Successfull({
  data,
  operation,
  classNameUpper,
  classNameLower,
  classNameUserName,
}) {
  //   console.log(data.data.username);

  const navigate = useNavigate();

  useEffect(() => {
      const timer = setTimeout(() => {
          navigate("/");
      }, 2000); // Redirect after 2 seconds

      return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
      <h2 className={`text-center col-md-6 offset-md-3 ${classNameUpper}`}>
        {operation} Successfull
      </h2>
      <br />
      <div className={`text-center col-md-6 offset-md-3 ${classNameLower}`}>
        Hello{" "}
        <span className={`underline text-xl font-bold ${classNameUserName}`}>
          {data?.data?.username || "There"}
        </span>
        , Your {operation} was successful!
        <br />
        You may now proceed...
      </div>
    </>
  );
}

export { Successfull };
