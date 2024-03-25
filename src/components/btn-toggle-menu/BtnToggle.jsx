import scss from './BtnToggle.module.scss';
import PropTypes from 'prop-types';

const BtnToggle = ({ isOpen, toggleMenu, menu }) => {
  const btnClass =
    isOpen && menu === 'mobile'
      ? `${scss.burgerMenuBtn} ${scss.white}`
      : `${scss.burgerMenuBtn} ${scss.black}`;

  const borderRadius =
    isOpen && menu !== 'mobile' ? '0px 12px 12px 0px' : '12px';

  const btnStyle = {
    borderRadius: borderRadius,
  };

  return (
    <button className={btnClass} style={btnStyle} onClick={toggleMenu}>
      {isOpen ? 'CLOSE' : 'MENU'}
    </button>
  );
};

BtnToggle.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  menu: PropTypes.string,
};

export default BtnToggle;
