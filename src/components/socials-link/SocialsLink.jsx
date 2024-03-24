import scss from './SocialsLink.module.scss';
import PropTypes from 'prop-types';

const SocialsLink = ({ link, icon: Icon, styles }) => {
  const iconClass =
    styles === 'black'
      ? `${scss.iconLink} ${scss.black}`
      : `${scss.iconLink} ${scss.white}`;

  const linkClass =
    styles === 'black'
      ? `${scss.link} ${scss.bgrClose}`
      : `${scss.link} ${scss.bgrOpen}`;

  return (
    <>
      <a
        href={link}
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="link"
      >
        <Icon className={iconClass} />
      </a>
    </>
  );
};

SocialsLink.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  styles: PropTypes.string,
};

export default SocialsLink;
