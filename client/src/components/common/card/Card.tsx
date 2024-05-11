import { Link } from 'react-router-dom';
import { IProduct } from '../../../interfaces/product.interface';
import useMediaQuery from '../../../hooks/useMediaQuery';

export type CardProps = Pick<IProduct.Product, 'product_id' | 'product' | 'images' | 'price' | 'listPrice' >

function Card({ product_id, images, price, product, listPrice }: CardProps) {
  const { mediaQuery } = useMediaQuery();
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
console.log(images);

  return (
    <Link to={`/product-detail/${product_id}`} className="global__card-container" >

      <div className={`global__card-content ${mediaQuery}`}>

        <div className="card__images">
          {images.length > 0 && urlRegex.test(images[0])
            ? <img src={images[0]} alt="" />
            : <img src={`${process.env.REACT_APP_SERVER_FILE}/${images[0]}`} alt="" />}
        </div>
        <div className="card__content">
          {/* <p>{brand}</p> */}
          <p>{listPrice}</p>
          {/* <OverflowDetectionComponent product={product}> */}
          <h4 >{product.charAt(0).toUpperCase() + product.slice(1).toLowerCase()}</h4>
          {/* </OverflowDetectionComponent> */}
          <h4>{price === 0 ? 'Agotado' : price}</h4>
        </div>

        <div className="card__button">
          {/* <Button button={{
            type: 'dark',
            text: 'Agregar',
            handleClick: () => { }
          }} /> */}
        </div>

      </div>
    </Link>
  );
}

export default Card;