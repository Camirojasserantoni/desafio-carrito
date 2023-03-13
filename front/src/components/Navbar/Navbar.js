import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";

const Navbar = () => {
  const { cart } = useContext(dataContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link className="navStyles" to={"/"}>
          <h1> 🏪 Store</h1>
        </Link>
        <Link to={"/carrito"} className="seeCarrito">
          🛒Productos: <span>{quantity}</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
