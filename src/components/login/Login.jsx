import React, { useState } from "react";
import { LOGINURI } from "../Constanst";
import { Input,Successfull } from "../index";
import axios from "axios";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState(null);

  const handleChange = function (e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSesssionData = {
      email: formData.email,
      password: formData.password,
    };
    axios
      .post(LOGINURI, newSesssionData)
      .then((e) => setResponse(e))
      .catch((e) => console.error("Error occured during Login", e));
  };

  return (
    // <div>
    //   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
    //     <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
    //       <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

    //       <form onSubmit={handleSubmit}>
    //         <div className="mb-4">
    //           <label className="block text-gray-700 mb-2">Email:</label>

    //           <Input
    //             type="email"
    //             placeholder="Enter your email"
    //             className="w-full border border-gray-300 rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-blue-400"
    //             required
    //             name="email"
    //             handleChange={handleChange}
    //             value={formData.email}
    //           />
    //         </div>

    //         <div className="mb-6">
    //           <label className="block text-gray-700 mb-2">Password:</label>

    //           <Input
    //             type="password"
    //             placeholder="Enter your password"
    //             className="w-full border border-gray-300 rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-blue-400"
    //             required
    //             name="password"
    //             handleChange={handleChange}
    //             value={formData.password}
    //           />
    //         </div>

    //         <button
    //           type="submit"
    //           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
    //         >
    //           Login
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div>
      {response ? (
        <div>
          <div className="text-green-600 mt-4">
            <div>
              <Successfull data={response.data} operation={"Login"}/>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email:</label>

                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  name="email"
                  handleChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password:</label>

                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  name="password"
                  handleChange={handleChange}
                  value={formData.password}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
