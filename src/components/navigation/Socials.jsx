import scss from './Socials.module.scss';
import { ReactComponent as IconDisc } from '../../icons/discord.svg';
import { ReactComponent as IconLogomark } from '../../icons/logomark.svg';
import { ReactComponent as IconX } from '../../icons/logox.svg';
import SocialsLink from 'components/socials-link/SocialsLink';
import PropTypes from 'prop-types';

const Socials = ({ styles }) => {
  return (
    <>
      <ul className={scss.linksWrapper}>
        <li>
          <SocialsLink
            link={'https://discord.com/'}
            icon={IconDisc}
            styles={styles}
          />
        </li>
        <li>
          <SocialsLink
            link={'https://logomark.com/'}
            icon={IconLogomark}
            styles={styles}
          />
        </li>
        <li>
          <SocialsLink
            link={'https://twitter.com/'}
            icon={IconX}
            styles={styles}
          />
        </li>
      </ul>
    </>
  );
};

Socials.propTypes = {
  styles: PropTypes.string,
};

export default Socials;
