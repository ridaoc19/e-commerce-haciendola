import { useMemo } from "react";
import Message from "../../../../components/common/Message/Message";
import ProductCreationForm from "./ProductForm";
import ProductCreationList from "./ProductCreationList";
import ProductCreationSearch from "./ProductCreationSearch";
import useProductCreationQuery from "./useProductCreationQuery";
import { initialStateForm } from "./utils";

function ProductCreation() {
  const { setStateProductCreation, stateProductCreation, query, Breadcrumb } = useProductCreationQuery();
  const { mutation: { entity, paramId, route } } = stateProductCreation;

  const productEdit = useMemo(() => {
    if (query.data && route.includes('edit') && entity) {
      const filters = query.data.filters[entity];
      if (Array.isArray(filters)) {
        for (const items of filters) {
          if (Object.values(items).includes(paramId)) {
            const res = Object.entries(items).reduce((acc: Record<string, any>, [key, value]) => {
              if (!key.includes('_id')) {
                acc[key] = value;
              }
              return acc;
            }, {});

            return { requestData: res }
          }
        }
      }
    }
    return initialStateForm[route];
    // eslint-disable-next-line
  }, [query.data, entity, paramId, route]);

  return (
    <div className="product-creation">
      <div className="product-creation__search">
        <ProductCreationSearch query={query} />
      </div>

      {query.data && (
        <div>
          {Breadcrumb}
          <div className="product-creation__list">
            {query.data && <ProductCreationList query={query} data={query.data} setStateProductCreation={setStateProductCreation}/>}
          </div>

          <hr />

          <Message open={stateProductCreation.openModalForm} onClose={() => setStateProductCreation(prevState => ({ ...prevState, openModalForm: false }))} >
            <div className="product-creation__form">
              <h3>{entity}</h3>
              {!!entity && <ProductCreationForm setStateProductCreation={setStateProductCreation} query={query} route={stateProductCreation.mutation.route} options={{ ...productEdit, paramId }} entity={entity} />}
            </div>
          </Message>

        </div>
      )}
    </div>
  );
}

export default ProductCreation;
