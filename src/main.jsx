import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import { Home, About, Login, Signup, Navbar, Footer, Slider, Layout,SignupSuccessfull } from './components';

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {path: "/", element: <Home />},
    {path: "/about", element: <About />},
    {path: "/login", element: <Login />},
    {path: "/signup", element: <Signup />},
    {path: "/signup-success", element: <SignupSuccessfull />},
  ]
}, ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </StrictMode>,
);
