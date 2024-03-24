import arts from '../../data/arts';
import BtnChangeWrapper from 'components/btnChangeSlide/BtnChangeWrapper';
import scss from './ArtsSwiper.module.scss';
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

const ArtsSwiper = () => {
  const swiperElRef = useRef(null);
  let swiperInstance = null;

  useEffect(() => {
    if (swiperElRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      swiperInstance = swiperElRef.current.swiper;
    }

    register();

    const params = {
      slidesPerView: 1,
      breakpoints: {
        1280: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
      },
    };

    Object.assign(swiperElRef.current, params);
    swiperElRef.current.initialize();
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
        <swiper-container ref={swiperElRef}>
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
