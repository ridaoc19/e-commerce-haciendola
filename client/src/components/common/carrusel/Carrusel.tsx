import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ParamsChildren } from '../../../hooks/useAdvertising/useAdvertising';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { IAdvertising } from '../../../interfaces/advertising.interface';
import InputAdvertising from '../FromAdvertising/FormAdvertising';
import Button from '../button/Button';

interface CarruselProps extends ParamsChildren {
  itemPerPage?: number
}
const Carrusel: React.FC<CarruselProps> = ({ advertising, location, itemPerPage = 3, isFetching, isLoading }) => {
  const { mediaQuery } = useMediaQuery();
  const [isMouseOverVitrine, setIsMouseOverVitrine] = useState(false);

  const [allAdvertising, setAllAdvertising] = useState<(Pick<IAdvertising.advertising, 'advertising_id' | 'redirect' | 'title'> & { image: string })[][]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [advertisingPerPage, setAdvertisingPerPage] = useState<number>(1)

  const pageCount = Math.ceil(advertising.length / advertisingPerPage);


  useEffect(() => {
    setAdvertisingPerPage(mediaQuery === 'phone' ? 1 : itemPerPage);
  }, [mediaQuery, itemPerPage])

  useEffect(() => {
    const adve = advertising.map(({ advertising_id, redirect, title, image_desktop, image_phone, image_tablet }) => {
      const resultImage = mediaQuery === 'phone' ? image_phone : mediaQuery === 'tablet' ? image_tablet : image_desktop
      const image = resultImage ? resultImage : image_desktop
      return {
        advertising_id,
        redirect,
        title,
        image
      }
    })
    setAllAdvertising(updateVisibleAdvertising({ allAdvertising: adve, advertisingPerPage, pageCount }));
    // eslint-disable-next-line
  }, [advertising, mediaQuery, advertisingPerPage]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isMouseOverVitrine && allAdvertising.length > 0) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allAdvertising.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isMouseOverVitrine, allAdvertising]);

  return (
    <>
      {advertising.length > 0 && <div
        className={`${advertising[0]?.location || "advertising"} carrusel`}
        onMouseEnter={() => setIsMouseOverVitrine(true)}
        onMouseLeave={() => setIsMouseOverVitrine(false)}
      >
        {/* Botón para retroceder al producto anterior */}
        <div className='carrusel__button-left'>
          <Button
            button={{
              type: 'dark',
              text: "<",
              handleClick: () => setCurrentIndex((prevIndex) => {
                const newIndex = prevIndex - 1;
                return newIndex < 0 ? allAdvertising.length - 1 : newIndex;
              })
            }}
          />
        </div>

        {/* Mapear y renderizar los productos en la vitrina */}
        <div className='carrusel__image_container'
        >
          {allAdvertising[currentIndex]?.map((item, index) => {
            return (
              <Link key={index} to={item.redirect}>
                <img src={item.image} alt=''
                />
              </Link>
            )
          })}
        </div>

        {/* Botón para avanzar al siguiente producto */}
        <div className='carrusel__button-right'>
          <Button
            button={{
              type: 'dark',
              text: `>`,
              handleClick: () => { setCurrentIndex((prevIndex) => (prevIndex + 1) % allAdvertising.length) }
            }}
          />
        </div>
      </div>}
      <InputAdvertising advertising={advertising} isFetching={isFetching} isLoading={isLoading} location={location} title={location} />
    </>
  );
};

export default Carrusel;

const updateVisibleAdvertising = ({ allAdvertising, advertisingPerPage, pageCount }: { allAdvertising: (Pick<IAdvertising.advertising, 'advertising_id' | 'redirect' | 'title'> & { image: string })[], advertisingPerPage: number, pageCount: number }) => {

  const paginatedAdvertising = Array.from({ length: pageCount }, (_, pageIndex) => {
    const startIndex = pageIndex * advertisingPerPage;
    const endIndex = advertisingPerPage * (pageIndex + 1);

    const currentPageAdvertising = allAdvertising.slice(startIndex, endIndex);

    if (currentPageAdvertising.length === advertisingPerPage) {
      return currentPageAdvertising;
    } else if (allAdvertising.length < advertisingPerPage) {
      return Array.from({ length: advertisingPerPage }, (_, index) => {
        const foundProduct = allAdvertising.find(
          (_, i) => i === (0 + index) % allAdvertising.length
        );
        return foundProduct ? foundProduct : allAdvertising[0];
      });
    } else {
      const lastProductIndex = allAdvertising.indexOf(currentPageAdvertising[0]) - 2;
      const startRange = 0;
      const endIndexForRandom = lastProductIndex > 0 ? lastProductIndex : 0;

      const availableIndexes = Array.from(
        { length: endIndexForRandom + 1 },
        (_, i) => i
      );

      const generatedNumbers = Array.from(
        { length: advertisingPerPage - currentPageAdvertising.length },
        () => {
          if (availableIndexes.length === 0) {
            return allAdvertising[startRange];
          }

          const randomIndex = Math.floor(Math.random() * availableIndexes.length);
          const selectedIndex = availableIndexes[randomIndex];

          availableIndexes.splice(randomIndex, 1);

          return allAdvertising[selectedIndex];
        }
      );

      return [...currentPageAdvertising, ...generatedNumbers];
    }
  });

  return paginatedAdvertising;

};
