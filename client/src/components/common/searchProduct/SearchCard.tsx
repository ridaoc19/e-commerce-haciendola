import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../interfaces/product.interface";
import { validateRouteImage } from "../../utils/validateRouteImage";

interface SearchCardProps {
  listProduct: IProduct.Product;
  handleOnClick: () => void
}

function SearchCard({ listProduct, handleOnClick }: SearchCardProps) {
  const navigate = useNavigate()
  const { product, product_id, images, price, listPrice, sku } = listProduct;


  const handleCardClick = () => {
    navigate(`/product-detail/${product_id}`);
    handleOnClick();
  };

  return (
    <div className="search__card-content" onClick={handleCardClick}>
      <div className="card__breadcrumb">
        <p><strong>sku:</strong> {sku} - </p>
      </div>
      <div className="card__main">
        <div className="card__images">
          <img src={validateRouteImage(images[0]) ? images[0] : `${process.env.REACT_APP_SERVER_FILE}/${images[0]}`} alt="" />
        </div>
        <div className="card__content">
          <div className="card__title" >
            <h3>{product}</h3>
          </div>
          <div className="card__utils">
            <div className="card__utils-price">
              <del>{listPrice}</del>
              <h4>{price}</h4>
            </div>
            {/* <div className="card__utils-button"> */}
            {/* <Button button={{ type: "dark", text: 'Agregar', handleClick: () => { } }} /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;