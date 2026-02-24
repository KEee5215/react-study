import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./router/Home";
import AppLayout from "./layout/AppLayout";
import Add from "./router/Add";
import Search from "./router/Search";
import MemoItem from "./router/MemoItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="search" element={<Search />} />
          <Route path="memo/:id" element={<MemoItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
