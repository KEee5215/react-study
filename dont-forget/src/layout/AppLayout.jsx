import { Outlet, useLocation, useNavigate } from "react-router";
import Button from "@mui/material/Button";
import NavBar from "../components/NavBar";
import ButtonNavBar from "../components/ButtonNavBar";
function AppLayout() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ButtonNavBar></ButtonNavBar>
    </>
  );
}

export default AppLayout;
