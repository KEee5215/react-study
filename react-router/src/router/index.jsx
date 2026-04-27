import { createBrowserRouter } from "react-router";

import Home from "../component/Home";
import About from "../component/About";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);

export default router;
