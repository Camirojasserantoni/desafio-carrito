import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";
import "./CartElements.css";

const CartElements = () => {
  const { cart } = useContext(dataContext);
  console.log(cart, "carritou");

  return cart.map((product) => {
    return (
      <div key={product._id}>
        <div className="cartContent" key={product._id}>
          <img
            src={`http://localhost:5000/${product.image}`}
            alt="product-card"
          />
          <div className="card-body">
            <h3 className="cart-text"> {product.name} </h3>{" "}
            <h4 className="cart-text">{product.brand} </h4>
            <h4 className="cart-text"> Precio: ${product.price}</h4>
            <h4 className="cart-text"> Cantidad: {product.quantity}</h4>
            <div> ⭐ Rating: {product.rating}</div>
            <div> 👁️‍🗨️ Reviews: {product.numReviews}</div>
          </div>
        </div>
      </div>
    );
  });
};

export default CartElements;
