import React, { useEffect, useMemo, useState } from 'react';
import { RequestMapAdvertising, RouteAdvertising } from '../../../services/advertising/advertisingRequest';
import './showcase.scss'; import Card from '../card/Card';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Button from '../button/Button';

interface ShowcaseProps {
  products: RequestMapAdvertising[RouteAdvertising.AdvertisingRequest]['data']['topViewedProducts'];
  title: string;
}

const Showcase: React.FC<ShowcaseProps> = ({ products, title }) => {
  const { mediaQuery } = useMediaQuery();
  const [isMouseOverVitrine, setIsMouseOverVitrine] = useState(false);
  const [allProducts, setAllProducts] = useState<ShowcaseProps['products'][]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = useMemo(() => mediaQuery === 'desktop' ? 5 : mediaQuery === 'tablet' ? 3 : 2, [mediaQuery]);
  const pageCount = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    setAllProducts(updateVisibleProducts2({ allProducts: products, productsPerPage, pageCount }));
    // eslint-disable-next-line
  }, [products, productsPerPage]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOverVitrine && allProducts.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allProducts.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isMouseOverVitrine, allProducts]);

  useEffect(() => {
    const handleResize = () => {
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <div
      className="showcase__container"
      onMouseEnter={() => setIsMouseOverVitrine(true)}
      onMouseLeave={() => setIsMouseOverVitrine(false)}
    >

      <div className='showcase__title'>
        <h3>{title}</h3>
      </div>

      <div className='showcase__button-left'>
        {/* Botón para retroceder al producto anterior */}
        <Button
          button={{
            type: 'dark',
            text: "<",
            handleClick: () => setCurrentIndex((prevIndex) => {
              const newIndex = prevIndex - 1;
              return newIndex < 0 ? allProducts.length - 1 : newIndex;
            })
          }}
        />
      </div>

      <div className='showcase__main'>
        {allProducts[currentIndex]?.map((item, index) => {
          return (
            <Card
              key={index}
              product_id={item.product_id}
              images={[item.images]}
              product={item.product}
              price={item.price[0]}
              listPrice={0}
            />
          )
        })}
      </div>

      <div className='showcase__button-right'>
        {/* Botón para avanzar al siguiente producto */}
        <Button
          button={{
            type: 'dark',
            text: `>`,
            handleClick: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % allProducts.length)
          }}
        />
      </div>
    </div>
  );
};

export default Showcase;

const updateVisibleProducts2 = ({ allProducts, productsPerPage, pageCount }: { allProducts: ShowcaseProps['products'], productsPerPage: number, pageCount: number }) => {

  const paginatedProducts = Array.from({ length: pageCount }, (_, pageIndex) => {
    const startIndex = pageIndex * productsPerPage;
    const endIndex = productsPerPage * (pageIndex + 1);

    const currentPageProducts = allProducts.slice(startIndex, endIndex);

    if (currentPageProducts.length === productsPerPage) {
      return currentPageProducts;
    } else if (allProducts.length < productsPerPage) {
      return Array.from({ length: productsPerPage }, (_, index) => {
        const foundProduct = allProducts.find(
          (_, i) => i === (0 + index) % allProducts.length
        );
        return foundProduct ? foundProduct : allProducts[0];
      });
    } else {
      const lastProductIndex = allProducts.indexOf(currentPageProducts[0]) - 2;
      const startRange = 0;
      const endIndexForRandom = lastProductIndex > 0 ? lastProductIndex : 0;

      const availableIndexes = Array.from(
        { length: endIndexForRandom + 1 },
        (_, i) => i
      );

      const generatedNumbers = Array.from(
        { length: productsPerPage - currentPageProducts.length },
        () => {
          if (availableIndexes.length === 0) {
            return allProducts[startRange];
          }

          const randomIndex = Math.floor(Math.random() * availableIndexes.length);
          const selectedIndex = availableIndexes[randomIndex];

          availableIndexes.splice(randomIndex, 1);

          return allProducts[selectedIndex];
        }
      );

      return [...currentPageProducts, ...generatedNumbers];
    }
  });

  return paginatedProducts;

};