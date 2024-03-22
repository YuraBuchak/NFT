import scss from './AboutBanner.module.scss';
import { ReactComponent as IconCross } from '../../icons/cross.svg';

const AboutBanner = () => {
  return (
    <div className={scss.wrapper}>
      <p className={scss.text}>
        Destroy stereotypes <IconCross /> HAVE NO LIMITS <IconCross />
        Break rules
      </p>
    </div>
  );
};

export default AboutBanner;
