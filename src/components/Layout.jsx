import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <div className="mainNav container">
          <NavLink className="mainNavLink" to={"/"}>
            Main
          </NavLink>
          <NavLink className="mainNavLink" to={"/chats"}>
            Chats
          </NavLink>
          <NavLink className="mainNavLink" to={"/profile"}>
            Profile
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
