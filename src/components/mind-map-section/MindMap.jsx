import MindMapSwiper from 'components/mind-map-swiper/MindMapSwiper';
import scss from './MindMap.module.scss';
import SectionTitle from 'components/section-title/SectionTitle';

const MindMap = () => {
  return (
    <div className={scss.container}>
      <SectionTitle title="MIND map" />
      <MindMapSwiper />
    </div>
  );
};

export default MindMap;
