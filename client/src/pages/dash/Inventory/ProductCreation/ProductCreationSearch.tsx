import { useEffect, useState } from "react";
import Button from "../../../../components/common/button/Button";
import Input from "../../../../components/common/Input/Input";
import Select from "../../../../components/common/Select/Select";
import Spinner from "../../../../components/common/spinner";
import { MutationFn, UseProductCreationQueryReturn } from "./useProductCreationQuery";

const options = [
  { value: 'category', label: 'Categoría' },
  { value: 'product', label: 'Producto' },
];

interface ProductCreationSearchProps {
  query: UseProductCreationQueryReturn['query']
}

function ProductCreationSearch({ query }: ProductCreationSearchProps) {
  const [search, setSearch] = useState('')
  const [selectEntity, setSelectEntity] = useState<MutationFn['entity']>('category')

  useEffect(() =>{
    if(query.isSuccess || query.isError){
      setSearch('')
    }
  },[query.isSuccess, query.isError])

  return (
    <div className="product-creation-search">
      <div className="product-creation-search__container">
        <div className="product-creation-search__input">
          <Input input={{
            name: 'search',
            placeholder: 'ID o nombre',
            disabled: query.isLoading,
            value: search,
            handleOnChange: (event) => setSearch(event.target.value),
          }}
            errorMessage=""
            styleClass=""
          />
        </div>
        <div className="product-creation-search__select">
          <Select
            options={options}
            disabled={query.isLoading}
            value={selectEntity}
            onChange={(value) => {
              setSelectEntity(value as MutationFn['entity'])
            }} />
        </div>
        <div className="product-creation-search__button">
          <Button
            button={{
              type: 'dark',
              disabled: query.isLoading || !search,
              text: query.isLoading ? <Spinner /> : 'Buscar',
              handleClick: () => query.mutate({ search, entity: selectEntity, type: 'search' })
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCreationSearch;
