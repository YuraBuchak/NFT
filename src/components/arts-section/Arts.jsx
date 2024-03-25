import scss from './Arts.module.scss';
import SectionTitle from 'components/section-title/SectionTitle';
import ArtsSwiper from 'components/arts-swiper/ArtsSwiper';

const Arts = () => {
  return (
    <section className={scss.container} id="arts">
      <SectionTitle title="COLLECTION" />
      <ArtsSwiper />
    </section>
  );
};

export default Arts;
