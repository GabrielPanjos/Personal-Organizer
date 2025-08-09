import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trash from "./routes/Trash";
import Recents from "./routes/Recents";
import Home from "./routes/Home";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/recents" element={<Recents />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
