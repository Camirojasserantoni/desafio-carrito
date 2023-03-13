import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import "./CartContent.css";
import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";
import { Link } from "react-router-dom";
import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  // console.log(cart);

  return cart.length > 0 ? (
    <>
      <h3 className="resume-cart"> Resumen de carrito</h3>
      <CartElements />

      <CartTotal />
    </>
  ) : (
    <div div className="cart-message-center">
      <h3> Tu carrito esta vacío </h3>
      <p>¡Descubre los miles de productos que tenemos para ti!</p>
      <div className="cart-container">
        <img
          className="cart-img"
          alt="carrito vacío"
          src="https://stonehouseathenry.ie/images/empty-cart.png"
        />
        <Link to={"/"}>
          <button className="search-products"> 🔎 Buscar productos </button>
        </Link>
      </div>
    </div>
  );
};

export default CartContent;
