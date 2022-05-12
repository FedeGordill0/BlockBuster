import "./App.css";
import ListadoPeliculas from "./vistas/ListadoPeliculas";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./vistas/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<ListadoPeliculas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
