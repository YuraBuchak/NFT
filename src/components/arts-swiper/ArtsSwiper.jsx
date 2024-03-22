import arts from '../../data/arts';
import BtnChangeWrapper from 'components/btnChangeSlide/BtnChangeWrapper';
import scss from './ArtsSwiper.module.scss';
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

register();

const ArtsSwiper = () => {
  const swiperElRef = useRef(null);
  let swiperInstance = null;

  useEffect(() => {
    if (swiperElRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      swiperInstance = swiperElRef.current.swiper;
    }
  }, []);

  const handleNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <>
      <ul className={scss.artCardList}>
        <swiper-container ref={swiperElRef} slides-per-view="1">
          {arts.map((art, index) => (
            <swiper-slide key={index}>
              <li className={scss.artCard}>
                <img src={art.src} alt="art monkey" className={scss.artImg} />
              </li>
            </swiper-slide>
          ))}
        </swiper-container>
      </ul>
      <BtnChangeWrapper prev={handlePrevSlide} next={handleNextSlide} />
    </>
  );
};

export default ArtsSwiper;
