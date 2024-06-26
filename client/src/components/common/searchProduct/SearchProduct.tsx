import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorNavigation, MakeNavigationRequestReturn, navigationRequest } from "../../../services/navigation/navigationApi";
import { RequestMapNavigation, RouteNavigation } from "../../../services/navigation/navigationRequest";
import Input from "../Input/Input";
import SearchCard from "./SearchCard";

function SearchProduct() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("");


  const { data } = useQuery<MakeNavigationRequestReturn & { data: RequestMapNavigation[RouteNavigation.NavigationSearch]['data'] }, ErrorNavigation>({
    queryKey: ['search', search],
    queryFn: async () => navigationRequest(RouteNavigation.NavigationSearch).options({ extensionRoute: `/${search}` }),
    enabled: !!search,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return (
      <div className="search" onMouseLeave={() => setSearch("")}>
      <div className="search-input">
        <Input input={{
          handleOnKeyDown: (event) => {
            if (event.code === 'Enter') {
              navigate(`/list-products/${search}`)
              setSearch("")
            }
          },
          handleOnChange: (event) => { setSearch(event.target.value) },
          name: "search",
          value: search,
          placeholder: "Buscar en Haciéndolo.com",
          type: 'text'
        }} errorMessage="" styleClass="header__search-input" svg={{ type: 'search', color: '#1e293b' }} />
      </div>
      {search &&
        <div className="search-list">
          <div>
            {data?.data.listProduct.map((product) => {

              return (
                <SearchCard
                  key={product.product_id}
                  listProduct={product}
                  handleOnClick={() => setSearch("")} />
              )
            })}
          </div>
          <div className="search-view">
            <Link className="link" to={`/list-products/${search}`} onClick={() => setSearch("")}>Ver Todo</Link>
          </div>
        </div>
      }
    </div>
  );
}

export default SearchProduct;