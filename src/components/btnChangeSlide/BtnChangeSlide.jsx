import PropTypes from 'prop-types';
import scss from './BtnChangeSlide.module.scss';

const BtnChangeSlide = ({ onClick, name }) => {
  return (
    <button className={scss.btnChange} onClick={onClick}>
      {name}
    </button>
  );
};

BtnChangeSlide.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default BtnChangeSlide;
