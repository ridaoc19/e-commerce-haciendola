
import { useState } from "react";
import Button from "../../../components/common/button/Button";
import useListProduct from "../../../hooks/useListProduct/useListProduct";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Card from "../../../components/common/card/Card";

function ListProducts() {
  const { filterType, setStateListProduct, listProducts, PaginationButton, BreadcrumbComponent, Filters, currentIndex, paginationTotal, totalProduct } = useListProduct()
  const { mediaQuery } = useMediaQuery()
  const [isButtonFilter, setIsButtonFilter] = useState(false)

  return (
    <div className="list-product">

      <div className={`list-product__filter ${mediaQuery} ${isButtonFilter ? "open" : "close"}`}>
        {Filters}
      </div>

      <div className="list-product__content">

        <header className="list-product__header">
          <div className="header__group">
            <div className="header__group-breadcrumb">
              {BreadcrumbComponent}
            </div>

            <div className="header__group-totalizer">
              Viendo {currentIndex} de {paginationTotal} páginas - {listProducts.length} de {totalProduct} productos
            </div>
          </div>

          {<div className="header__button">
            {mediaQuery === 'phone' && <Button button={{
              type: filterType === 'flexible' ? 'dark' : "light", text: "filtro", handleClick: () => {
                setIsButtonFilter(true)
                setStateListProduct(prevState => ({ ...prevState, filterType: 'flexible' }))
              }
            }} />}
            <div className={`header__button-close ${isButtonFilter && mediaQuery === 'phone' ? "open" : "close"}`}>
              <Button button={{ type: "dark", text: "", handleClick: () => setIsButtonFilter(false) }} svgLeft={{ type: "close", color: 'white' }} />
            </div>
          </div>}

          <div className="header__pagination">
            {PaginationButton}
          </div>
        </header>

        <main className={`list-product__card ${mediaQuery}`} >
          {listProducts.map(({ product_id, product, images, price, listPrice }) => {
            return (
              <Card key={product_id} product_id={product_id} product={product} images={images} price={price} listPrice={listPrice} />
            )
          })}
        </main>

        <footer className="list-product__footer">
          <div className="footer__pagination">
            {PaginationButton}
          </div>
        </footer>
      </div>

    </div >
  );
}

export default ListProducts;