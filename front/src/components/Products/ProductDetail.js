import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:5000/api/products/${id}`).then((response) =>
      setProduct(response.data)
    );
  }, []);

  // console.log(product, "Product");

  return (
    <>
      <h2 className="tittle-detail"> Detalles del Producto:</h2>
      <div className="product-detail">
        <div className="card-detail">
          {" "}
          <div className="card__content">
            <div className="card-body">
              <h3 className="card-title mb-0"> {product.name}</h3>
              <h3 className="card-title mb-0"> {product.brand}</h3>
              <img
                alt={product.name}
                className="card-img-top"
                src={`http://localhost:5000/${product.image}`}
              />{" "}
              <div>
                {product.countInStock <= 0 ? (
                  <p className="noStock-detail"> Sin stock</p>
                ) : (
                  ""
                )}{" "}
                <h3 className="cardt-detail"> Precio: ${product.price}</h3>
                <h4 className="cardt-detail"> Categoría: {product.category}</h4>
              </div>{" "}
              <div> ⭐ Rating: {product.rating}</div>
              <div> 👁️‍🗨️ Reviews: {product.numReviews}</div>
            </div>{" "}
            <div className="description-detail">{product.description} </div>
            <Link to={"/"}>
              <button className="back-products"> Volver atrás </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
