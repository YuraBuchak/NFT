import scss from './AboutBanner.module.scss';
import { ReactComponent as IconCross } from '../../icons/cross.svg';

const AboutBanner = () => {
  return (
    <div className={scss.wrapper}>
      <p className={scss.text}>
        Destroy stereotypes <IconCross aria-label="icon cross" /> HAVE NO LIMITS{' '}
        <IconCross aria-label="icon cross" />
        Break rules
      </p>
    </div>
  );
};

export default AboutBanner;
