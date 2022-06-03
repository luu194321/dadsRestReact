import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PopularItems from "./components/sections/PopularItems";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="order" element="#placeOrder" />
        <Route path="menu" element={<MenuPage />} />
        <Route path="catering" element="#catering" />
        <Route path="about" element="#about" />
      </Routes>
    </div>
  );
}

export default App;
