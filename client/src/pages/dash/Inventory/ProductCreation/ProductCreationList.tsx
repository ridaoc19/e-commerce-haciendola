import { Dispatch, SetStateAction } from "react";
import Svg from "../../../../components/assets/icons/Svg";
import Button from "../../../../components/common/button/Button";
import { RequestMapNavigation, RouteNavigation } from "../../../../services/navigation/navigationRequest";
import { RouteProduct } from "../../../../services/product/productRequest";
import { InitialStateProductCreation } from "./useProductCreationQuery";

interface ProductCreationListProps {
  data: RequestMapNavigation[RouteNavigation.NavigationListProductDashboard]['data'];
  stateProductCreation: InitialStateProductCreation
  setStateProductCreation: Dispatch<SetStateAction<InitialStateProductCreation>>
}

type Key = keyof RequestMapNavigation[RouteNavigation.NavigationListProductDashboard]['data']['filters'];
type Value = RequestMapNavigation[RouteNavigation.NavigationListProductDashboard]['data']['filters'][Key];

function ProductCreationList({ data, setStateProductCreation }: ProductCreationListProps) {
  const listProduct = data?.filters ? Object.entries(data.filters) : [];

  return (
    <>
      {listProduct.length > 0 && listProduct.map(([key, value]: [string, Value], index: number) => {
        const typedKey = key as Key; // Type assertion
        return (
          <div key={index} className="product-creation-list">
            <div className="product-creation-list__title">
              <h3>{key}</h3>
              {typedKey === 'category' && (
                <div className="product-creation-list__title-new-department">
                  <button onClick={() => {
                    setStateProductCreation(prevState => ({ ...prevState, mutation: { ...prevState.mutation, entity: 'category', paramId: '', route: RouteProduct.CategoryCreate } }))
                  }}>
                    {Svg({ type: "increase", width: 16, height: 16 })}
                  </button>
                </div>
              )}
            </div>

            <ul className="product-creation-list__content">
              {value.map((item, ind) => {
                const text = 'product_id' in item ? item.product : item.category
                const id = 'product_id' in item ? item.product_id : item.category_id
                return (
                  <li key={`${ind}abc`} className="product-creation-list__item">
                    <Button button={{
                      type: 'highlighter',
                      text,
                      handleClick: () => {
                        setStateProductCreation(prevState => ({
                          ...prevState,
                          query: {
                            ...prevState.query,
                            entity: typedKey,
                            search: id,
                            type: 'selected',
                          }
                        }))
                      }
                    }} />

                    <div className="product-creation-list__edit">
                      <button onClick={() => {
                        setStateProductCreation(prevState => ({
                          ...prevState,
                          mutation: {
                            ...prevState.mutation,
                            entity: typedKey,
                            paramId: id,
                            route: key === 'category' ? RouteProduct.CategoryEdit : RouteProduct.ProductEdit
                          },
                        }))
                      }}>{Svg({ type: "edit", width: 16, height: 16 })}
                      </button>
                    </div>
                    <div className="product-creation-list__delete">
                      {/* ELIMINAR */}
                      <button onClick={() => {
                          setStateProductCreation(prevState => ({
                            ...prevState,
                            mutation: {
                              ...prevState.mutation,
                              entity: typedKey,
                              paramId: id,
                              route: key === 'category' ? RouteProduct.CategoryDelete : RouteProduct.ProductDelete
                            },
                          }))
                        }}>{Svg({ type: "delete", width: 16, height: 16 })}
                        </button>
                    </div>
                    {key === 'category' && (
                      <div className="product-creation-list__add">
                        <button onClick={() => {
                          setStateProductCreation(prevState => ({
                            ...prevState,
                            mutation: {
                              ...prevState.mutation,
                              entity:'product',
                              paramId: id,
                              route: RouteProduct.ProductCreate
                            },
                          }))
                        }}>
                          {Svg({ type: "increase", width: 16, height: 16 })}
                        </button>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </>
  );
}

export default ProductCreationList;