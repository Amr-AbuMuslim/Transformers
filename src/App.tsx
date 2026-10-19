import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Exhibitions from "./pages/Exhibitions";
import Events from "./pages/Events";
import Conferences from "./pages/Conferences";
import TransformersDisplaySystem from "./pages/TransformersDisplaySystem";
import RentalProducts from "./pages/RentalProducts";
import Projects from "./pages/Projects";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Core Pillars & Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/events" element={<Events />} />
        <Route path="/conferences" element={<Conferences />} />

        {/* Dedicated Flagship Display System Landing Page */}
        <Route
          path="/transformers-display-system"
          element={<TransformersDisplaySystem />}
        />
        <Route
          path="/modular-display-system"
          element={<Navigate to="/transformers-display-system" replace />}
        />

        {/* Rental Products Catalog (Preserving /products) */}
        <Route path="/rental-products" element={<RentalProducts />} />
        <Route path="/products" element={<RentalProducts />} />

        {/* Projects / Portfolio (Preserving /gallery) */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Projects />} />

        {/* Insights / Educational Guides */}
        <Route path="/insights" element={<Insights />} />

        {/* Corporate, Contact & FAQ */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/request-a-quote"
          element={<Navigate to="/contact" replace />}
        />
        <Route path="/faq" element={<FAQ />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
