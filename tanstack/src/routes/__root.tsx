import {
  createRootRoute,
  Outlet,
  useLocation,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import ButtonUsage from "../component/ButtonUsage";
import NavBar from "../component/NavBar";
import ButtonNavBar from "../component/ButtonNavBar";

function RootLayout() {
  return (
    <>
      <NavBar />
      <main style={{ marginTop: "56px" }}>
        <Outlet />
      </main>
      <ButtonNavBar />
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({ component: RootLayout });
