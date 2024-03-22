import scss from './Arts.module.scss';
import SectionTitle from 'components/section-title/SectionTitle';
import ArtsSwiper from 'components/arts-swiper/ArtsSwiper';

const Arts = () => {
  return (
    <div className={scss.container}>
      <SectionTitle title="COLLECTION" />
      <ArtsSwiper />
    </div>
  );
};

export default Arts;
