import { useEffect, useRef } from 'react';
import scss from './MindMap.module.scss';
import { register } from 'swiper/element/bundle';
import MindMapCard from 'components/mind-map-card/MindMapCard';
import MindMapCardLimk from 'components/mind-map-card/MindMapCardLink';
import BtnChangeSlide from 'components/btnChangeSlide/BtnChangeSlide';

register();

const MindMap = () => {
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
    <div className={scss.container}>
      <h2 className={scss.title}>MIND map</h2>

      <swiper-container ref={swiperElRef} slides-per-view="1">
        <swiper-slide>
          <MindMapCard
            title="YAPE DROP"
            description="All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own"
          />
        </swiper-slide>
        <swiper-slide>
          <MindMapCard
            title="New Collection"
            description="Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game"
          />
        </swiper-slide>
        <swiper-slide>
          <MindMapCard
            title="Token"
            description="Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it"
          />
        </swiper-slide>
        <swiper-slide>
          <MindMapCardLimk />
        </swiper-slide>
      </swiper-container>

      <div className={scss.btnWrapper}>
        <BtnChangeSlide name="Prev" onClick={handlePrevSlide} />
        <BtnChangeSlide name="Next" onClick={handleNextSlide} />
      </div>
    </div>
  );
};

export default MindMap;
