import { Link } from "react-router-dom";
import { ParamsChildren } from "../../../hooks/useAdvertising/useAdvertising";
import InputAdvertising from "../FromAdvertising/FormAdvertising";
import useMediaQuery from "../../../hooks/useMediaQuery";


function BannerBox({ advertising, location, isFetching, isLoading }: ParamsChildren) {
  const { mediaQuery } = useMediaQuery()
  return (
    <>
      <div className="banner-box">
        {isFetching || isLoading ? <div>Cargando...</div> : advertising.length > 0 && advertising.map(item => {
          return (
            <Link key={item.advertising_id} to={item.redirect} className={`banner-box__item ${mediaQuery}`}>
              <img src={item.image_desktop} alt="" />
              <h3>{item.title}</h3>
            </Link>
          )
        })}
      </div>
      <InputAdvertising advertising={advertising} isFetching={isFetching} isLoading={isLoading} location={location} title={location} />
    </>

  );
}

export default BannerBox;