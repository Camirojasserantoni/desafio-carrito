import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./Context/DataContext";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/Products/ProductDetail";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/carrito" element={<CartContent />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
