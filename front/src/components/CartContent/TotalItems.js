import { useContext } from "react";
import { dataContext } from "../../Context/DataContext";

const TotalItems = () => {
  const { cart } = useContext(dataContext);

  const itemsCant = cart.reduce((acum, pro) => acum + pro.quanty, 0);

  return <span className="cart-items-total"> {itemsCant}</span>;
};

export default TotalItems;
