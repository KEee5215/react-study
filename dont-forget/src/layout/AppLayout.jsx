import { Outlet, useLocation, useNavigate } from "react-router";
import Button from "@mui/material/Button";
import NavBar from "../components/NavBar";
import ButtonNavBar from "../components/ButtonNavBar";
import { Toaster } from "react-hot-toast";
import Box from "@mui/material/Box";

function AppLayout() {
  return (
    <>
      <NavBar></NavBar>
      <Box sx={{ width: "100%", padding: "56px 0" }}>
        <Outlet></Outlet>
      </Box>
      <ButtonNavBar></ButtonNavBar>
    </>
  );
}

export default AppLayout;
