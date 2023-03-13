import { useContext, useEffect } from "react";
import { dataContext } from "../../Context/DataContext";
import Swal from "sweetalert2";
import "./Products.css";
import { Link } from "react-router-dom";

const ProductItem = ({
  _id,
  name,
  price,
  rating,
  numReviews,
  image,
  brand,
  description,
  countInStock,
}) => {
  const { cart, setCart } = useContext(dataContext);




  const addToCart = () => {
    setCart((currItems) => {
      // console.log(currItems);

      const isItemsFound = currItems.find((item) => item._id === _id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item._id === _id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              countInStock: item.countInStock - 1,
            };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currItems,
          {
            _id,
            quantity: 1,
            price,
            description,
            rating,
            name,
            brand,
            numReviews,
            image,
            countInStock: countInStock - 1,
          
          },
        ];
      }
    });
    // saveLocal()
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${name} `,
      text: "Ha sido agregado al carrito",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const removeItem = (_id) => {
    setCart((currItems) => {
      if (currItems.find(       (item) => item._id === _id)?.quantity === 1) {
        return currItems.filter((item) => item._id !== _id);
      } else {
        return currItems.map((item) => {
          if (item._id === _id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    Swal.fire({
      position: "center",
      icon: 'error',
      title: `${name} `,
      text: "Ha sido eliminado al carrito",
      showConfirmButton: false,
      timer: 3000,
    });
  };

useEffect(() => {
   //setItem LocalStorage
    localStorage.setItem("carrito", JSON.stringify(cart))
  
  
}, [cart]);


  const getQuantityById = (_id) => {
    return cart.find((item) => item._id === _id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(_id);

  return (
    <div className="card">
      {" "}
      <div className="card__content">
        <div className="tooltip">
          <Link to={`products/${_id}`}>
            <span className="tooltiptext">Ver detalles 👁️‍🗨️</span>
            <img
              alt={name}
              className="card-img-top"
              src={`http://localhost:5000/${image}`}
            />{" "}
          </Link>
        </div>
        <div className="card-body">
          <h3 className="card-title"> {name}</h3>
          <h3 className="card-title"> {brand}</h3>
          {countInStock <= 0 ? <p className="noStock-item"> Sin stock</p> : ""}

          <div>
            <h3 className="card-title"> ${price}</h3>
          </div>
          <div> ⭐ Rating: {rating}</div>
          <div> 👁️‍🗨️ Reviews: {numReviews}</div>

          {quantityPerItem === 0 ? (
            <button
              className={`${
                countInStock <= 0 || countInStock === 0
                  ? "disabled"
                  : "card-button"
              }`}
              onClick={() => addToCart()}
              disabled={countInStock <= 0 ? true : ""}
            >
               Agregar al carrito
            </button>
          ) : (
            <button
              className={`${
                countInStock <= 0 || countInStock === 0
                  ? "disabled"
                  : "card-button"
              }`}
              onClick={() => addToCart()}
            >
               Agregar más
            </button>
          )}

          {quantityPerItem > 0 && (
            <h3 className="quanty-item">Cantidad: {quantityPerItem}</h3>
          )}

          {quantityPerItem > 0 && (
            <button
              className="card-button-quitar"
              onClick={() => removeItem(_id)}
            >
               Restar producto
            </button>
          )}
        </div>{" "}
      </div>
    </div>
  );
};

export default ProductItem;
