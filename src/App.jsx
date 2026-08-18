import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Explorar from "./pages/Explorar";
import Categorias from "./pages/Categorias";
import Detalle from "./pages/Detalle";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Routes>
        <Route element= {<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/contenido/:id" element={<Detalle />} />
        <Route path="/sobre" element={<Sobre />} />
         <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
