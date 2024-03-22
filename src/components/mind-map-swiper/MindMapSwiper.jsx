import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import MindMapCard from 'components/mind-map-card/MindMapCard';
import MindMapCardLimk from 'components/mind-map-card/MindMapCardLink';
import slidesData from '../../data/slidesData';
import BtnChangeWrapper from 'components/btnChangeSlide/BtnChangeWrapper';

register();

const MindMapSwiper = () => {
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
    <div>
      <swiper-container ref={swiperElRef} slides-per-view="1">
        {slidesData.map((slide, index) => (
          <swiper-slide key={index}>
            <MindMapCard title={slide.title} description={slide.description} />
          </swiper-slide>
        ))}
        <swiper-slide>
          <MindMapCardLimk />
        </swiper-slide>
      </swiper-container>

      <BtnChangeWrapper prev={handlePrevSlide} next={handleNextSlide} />
    </div>
  );
};

export default MindMapSwiper;
