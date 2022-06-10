import { Routes, Route, HashRouter } from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import Delivery from "./pages/Delivery";
import Testimony from './pages/Testimony/Testimony';



const Notfound = () => <p>pagina no encontrada</p>

const Routing = () => {
  return (
    // Se usa HashRouter para usar rutas absolutas con #
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/deliveries" element={<Delivery/> } />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/testimony" element={<Testimony />} />
        <Route exact path="*" element={<Notfound />} />
      </Routes>
    </HashRouter>
  );
};

export default Routing;