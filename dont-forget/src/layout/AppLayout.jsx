import { Outlet, useLocation, useNavigate } from "react-router";
import Button from "@mui/material/Button";
import NavBar from "../components/NavBar";
import ButtonNavBar from "../components/ButtonNavBar";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ButtonNavBar></ButtonNavBar>
      <Toaster />
    </>
  );
}

export default AppLayout;
