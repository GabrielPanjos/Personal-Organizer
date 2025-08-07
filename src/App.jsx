import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trash from "./pages/Trash";
import Recents from "./pages/Recents";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/recents" element={<Recents />} />
      </Routes>
    </Router>
  );
}

export default App;
