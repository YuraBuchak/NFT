import PropTypes from 'prop-types';
import scss from './SectionTitle.module.scss';

const SectionTitle = ({ title }) => {
  return <h2 className={scss.title}>{title}</h2>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
