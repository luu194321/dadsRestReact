import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PopularItems from "./components/sections/PopularItems";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import Footer from "./components/sections/Footer";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="#catering" element="#catering" />
        <Route path="#about" element="#about" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
