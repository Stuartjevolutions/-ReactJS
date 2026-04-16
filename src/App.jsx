import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pantalla principal */}
        <Route path="/" element={<Home />} />

        {/* Catálogo */}
        <Route path="/catalog" element={<Catalog />} />

        {/* Pago */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;