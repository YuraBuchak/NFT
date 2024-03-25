import MindMapSwiper from 'components/mind-map-swiper/MindMapSwiper';
import scss from './MindMap.module.scss';
import SectionTitle from 'components/section-title/SectionTitle';
import MindMapGrid from 'components/mind-map-grid/MindMapGrid';

const MindMap = () => {
  return (
    <section className={scss.container} id="mindmap">
      <SectionTitle title="MIND map" />
      <MindMapSwiper />
      <MindMapGrid />
    </section>
  );
};

export default MindMap;
