import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

// this is for store user data in clint site so that one can knoe if he is logged in or not
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
    Home,
    About,
    Login,
    Signup,
    Navbar,
    Footer,
    Slider,
    Layout,
    SignupSuccessfull,
    WatchVideo,
    WatchPage,
} from "./components/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            { path: "/signup-success", element: <SignupSuccessfull /> },
            { path: "/watch/:movieId", element: <WatchPage /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </Provider>
    </StrictMode>,
);
