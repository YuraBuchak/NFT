import PropTypes from 'prop-types';
import scss from './MindMapCard.module.scss';

const MindMapCard = ({ title, description }) => {
  return (
    <div className={scss.card}>
      <p className={scss.cardDescription}>{description}</p>
      <h3 className={scss.cardTitle}>{title}</h3>
    </div>
  );
};

MindMapCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MindMapCard;
