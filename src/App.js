import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import ProductsPage from "./pages/productsPage/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Products" element={<ProductsPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
