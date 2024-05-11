import { UseProductDetail } from "../useProductDetail";

interface OtherProps {
  listProductsData: UseProductDetail['data']
}

function Other({ listProductsData: { listProducts } }: OtherProps) {
  if (listProducts.length === 0) return null
  const { description } = listProducts[0];
  return (
    <div className="other">
      <div className="other__description">
        {description && <h3>Descripción del producto</h3>}
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>

    </div>
  );
}

export default Other;