import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Appointment from "./pages/appointment";
import Legal from "./pages/legal";
import NotFound from "./pages/notFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/notFound" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
