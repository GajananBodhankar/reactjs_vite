import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import "./styles.css";
import ProductDetails from "./ProductDetails";
const Main = () => (
  <>
    <nav className="navbar">
      <Link className="navLink" to={"/"}>
        Home
      </Link>
      <Link className="navLink" to="/products">
        Products
      </Link>
    </nav>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Products />} path="/products" />
      <Route element={<ProductDetails />} path="/products/:productId" />
    </Routes>
  </>
);

export default Main;
