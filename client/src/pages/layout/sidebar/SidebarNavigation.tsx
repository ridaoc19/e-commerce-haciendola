import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Svg from "../../../components/assets/icons/Svg";
import Button from "../../../components/common/button/Button";
import SidebarIcon from "../../../components/common/sidebarIcon/SidebarIcon";
import { CreateContext } from "../../../hooks/useContext";


interface IsOverflowing { _id: string, overrun: boolean }

function SidebarNavigation({ isOpenMenu, handleOnSelectedId, selectedIdBoolean, handleOnClick }: { isOpenMenu: boolean, handleOnSelectedId: () => void, selectedIdBoolean: boolean, handleOnClick: () => void }) {
  const { navigation: { navigationContextState: { hierarchicalData: { isLoading, isFetching, data } } } } = useContext(CreateContext)!
  const itemsRef = useRef<Map<string, HTMLElement>>(new Map());
  const [selectedId, setSelectedId] = useState("")
  const [isOverflowing, setIsOverflowing] = useState<IsOverflowing[]>([]);
  const findDepartment = useMemo(() => data.find(({ category_id }) => category_id === selectedId), [data, selectedId]);


  const handleOverflowCheck = useCallback(() => {
    const current = itemsRef.current!;
    const isVerticalOverflowing: IsOverflowing[] | undefined = findDepartment?.products.map(({ product_id }) => {
      const node = current.get(product_id)!;
      const isVertical: boolean = node?.scrollHeight > node?.offsetHeight;
      return { _id: product_id, overrun: isVertical };
    });
    isVerticalOverflowing ? setIsOverflowing(isVerticalOverflowing) : setIsOverflowing(isOverflowing)
    // eslint-disable-next-line
  }, [data, isOverflowing]);

  useEffect(() => {
    if (!isOpenMenu || !selectedIdBoolean) setSelectedId("")
    // eslint-disable-next-line
  }, [isOpenMenu, selectedIdBoolean])

  useEffect(() => {
    if (selectedId) {
      handleOverflowCheck();
    }
    // eslint-disable-next-line
  }, [selectedId]);

  const handleMouseEnter = (depId: string) => {
    handleOnSelectedId()
    setSelectedId(depId);
  };

  return (
    <>
      {/* componente izquierdo */}
      <div className={`sidebar__section-left ${selectedId ? "hide" : ""}`}>
        <div className="sidebar__section-left-header">
          <div className="sidebar__section-left-header-content">
            <SidebarIcon handleOnClick={handleOnClick} isOpenMenu={isOpenMenu} />
            <div>
              <Link to={'/'}>{Svg({ type: "logo", width: 50, height: 50, color: "white" })}</Link>
            </div>
          </div>
        </div>

        <div className="sidebar__section-left-main">
          {isFetching || isLoading ? <>Cargando...</> : data.map(({ category_id, category }) => (
            <Link
              to={`/list-products/${category_id}`}
              onClick={handleOnClick}
              key={category_id}
              onMouseEnter={() => handleMouseEnter(category_id)}
            >
              <Button
                svgLeft={{ type: "arrowRight" }}
                button={{
                  type: "highlighter",
                  text: category,
                  handleClick: () => handleOnClick
                }}
              />
            </Link>
          ))}
        </div>

        <div className="sidebar__section-left-footer">
          <ul>
            <li>Mi cuenta</li>
            <li>Donde estamos</li>
            <li>Atención al cliente</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SidebarNavigation;


