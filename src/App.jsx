import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Logica from "./pages/Logica";
import Estadistica from "./pages/Estadistica.jsx";
import Ecuaciones from "./pages/Ecuaciones";
import Factorial from "./pages/Factorial";
import GeoGebra from "./pages/GeoGebra";
import Racionales from "./pages/Racionales";
import Inecuaciones from "./pages/Inecuaciones";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/logica" element={<Logica />} />
          <Route path="/estadistica" element={<Estadistica />} />
          <Route path="/ecuaciones" element={<Ecuaciones />} />
          <Route path="/descomposicion-factorial" element={<Factorial />} />
          <Route path="/geogebra" element={<GeoGebra />} />
          <Route path="/ecuaciones-racionales" element={<Racionales />} />
          <Route path="/inecuaciones" element={<Inecuaciones />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
