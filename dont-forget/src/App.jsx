import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import AppLayout from "./Applayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
