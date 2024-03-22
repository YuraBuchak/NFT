import PropTypes from 'prop-types';
import scss from './BtnChangeWrapper.module.scss';
import BtnChangeSlide from './BtnChangeSlide';

const BtnChangeWrapper = ({ prev, next }) => {
  return (
    <div className={scss.btnWrapper}>
      <BtnChangeSlide name="Prev" onClick={prev} />
      <BtnChangeSlide name="Next" onClick={next} />
    </div>
  );
};

BtnChangeWrapper.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default BtnChangeWrapper;
