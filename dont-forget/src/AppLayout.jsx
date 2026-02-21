import { Outlet, useLocation, useNavigate } from "react-router";
import Button from "@mui/material/Button";
import NavBar from "./components/NavBar";
function AppLayout() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  function toggle() {
    if (pathname === "/") {
      navigate("/about");
      return;
    }
    navigate("/");
  }

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

export default AppLayout;
