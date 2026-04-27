import { useState } from "react";
import Home from "./component/Home";
import About from "./component/About";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  const location = useLocation();
  function handleClick() {
    console.log(location.pathname);
    location.pathname === "/" ? navigate("/about") : navigate("/");
  }

  return (
    <>
      {/* <NavLink to="/">Home</NavLink>
      <br></br>
      <NavLink to="/about">about</NavLink> */}

      <button onClick={handleClick}>Home</button>

      <Outlet />
    </>
  );
}

export default App;
