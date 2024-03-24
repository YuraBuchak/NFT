import scss from './MindMapCard.module.scss';
import { ReactComponent as IconArrow } from '../../icons/arrow.svg';

const MindMapCardLimk = () => {
  return (
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="link linkedin"
      className={scss.card}
    >
      <div className={scss.arrowIcon}>
        <IconArrow aria-label="arrow link svg" />
      </div>

      <h3 className={scss.cardTitle}>
        Learn <br /> more
        <br /> in mind map
      </h3>
    </a>
  );
};

export default MindMapCardLimk;
