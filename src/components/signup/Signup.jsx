import React, { useState } from "react";
import { Input, Successfull } from "../index.js";
import axios from "axios";
import { REGISTER_URI } from "../Constanst.js";
function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const handlePost = (e) => {
    e.preventDefault();
    const newPost = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    };
    axios
      .post(REGISTER_URI, newPost)
      .then((res) => setResponse(res))
      .catch((err) => setError(err));
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        {response ? (
          <div>
            <div className="text-green-600 mt-30">
              <div>
                <Successfull data={response.data} operation={"Sign up"} />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2>Signup</h2>
            <form
              //  action={`http://localhost:5173/login`}
              onSubmit={handlePost}
            >
              <div className="mb-4">
                <div className="mb-2">
                  <label className="text-gray-700" htmlFor="username">
                    Username
                  </label>
                  <Input
                    type="text"
                    className="border border-gray-300 rounded py-2 px-4"
                    placeholder="Username"
                    required
                    name="username"
                    value={formData.username}
                    handleChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label className="text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <Input
                    type="email"
                    className="border border-gray-300 rounded py-2 px-4"
                    placeholder="Email"
                    required
                    name="email"
                    value={formData.email}
                    handleChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label className="text-gray-700" htmlFor="phone">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    className="border border-gray-300 rounded py-2 px-4"
                    placeholder="phone no."
                    required
                    name="phone"
                    value={formData.phone}
                    handleChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label className="text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <Input
                    type="password"
                    className="border border-gray-300 rounded py-2 px-4"
                    placeholder="Password"
                    required
                    name="password"
                    value={formData.password}
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
        )}
      </div>
    </>
  );
}

export default Signup;
