import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";
import "./CartTotal.css";

const CartTotal = () => {
  const { cart } = useContext(dataContext);
  const total = cart.reduce((acum, producto) => acum + producto.price, 0);

  return (
    <>
      <div className="cardTotal">
        <div className="cartTotal">
          <h3> Total a pagar: ${total}</h3>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
