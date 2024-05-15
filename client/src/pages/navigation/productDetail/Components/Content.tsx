import useMediaQuery from "../../../../hooks/useMediaQuery";
import { IProduct } from "../../../../interfaces/product.interface";
import { UseProductDetail } from "../useProductDetail";

interface ContentProps {
  listProductsData: UseProductDetail['data'];
  handleClick: (variant: IProduct.Product) => void;
  stateProductDetail: UseProductDetail['react']['stateProductDetail'];
}

function Content({ stateProductDetail, listProductsData: { listProducts } }: ContentProps) {
  const { mediaQuery } = useMediaQuery();

  if (listProducts.length === 0 || !stateProductDetail.selectedVariant) return null
  const { product, sku, listPrice, stock, grams } = listProducts[0];

  return (
    <div className={`content ${mediaQuery}`}>

      <div className="content__id">
        <h6>Código de barras: {stateProductDetail.selectedVariant.barcode}</h6>
      </div>

      <div className="content__title">
        <h2>{product}</h2>
      </div>

      <div className="content__brand">
        <h3>sku:</h3> <p>{sku}</p>
      </div>

      <div className="content__price">
        <del>{listPrice}</del>
        <h3>{stateProductDetail.selectedVariant.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0, })}</h3>
      </div>

      <div className="content__benefits">
        {<h3>Acerca de este producto</h3>}
        <ul>
          <li>Peso: {grams}</li>
          <li>Stock: {stock}</li>
        </ul>
      </div>

    </div>
  );
}

export default Content;