import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./index.js";
function Layout() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
