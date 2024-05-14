import { Link } from "react-router-dom";
import { ParamsChildren } from "../../../hooks/useAdvertising/useAdvertising";
import InputAdvertising from "../FromAdvertising/FormAdvertising";


function Banner({ advertising, isFetching, isLoading, location }: ParamsChildren) {

  return (
    <div className={`${advertising[0]?.location || 'banner'} banner`}>
      {isFetching || isLoading ? <div>Cargando...</div> : advertising.length > 0 && advertising.map(item => {
        return (
          <Link key={item.advertising_id} to={item.redirect}>
            <img src={item.image_desktop} alt="" />
          </Link>
        )
      })}
      <InputAdvertising advertising={advertising} isFetching={isFetching} isLoading={isLoading} location={location} title={location} />
    </div>
  );
}

export default Banner;