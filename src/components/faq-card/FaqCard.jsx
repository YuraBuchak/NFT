import PropTypes from 'prop-types';
import scss from './FaqCard.module.scss';

const FaqCard = ({ faq, index, expandedIndex, toggleAnswer }) => {
  return (
    <li
      className={`${scss.card} ${index === expandedIndex ? scss.expanded : ''}`}
      onClick={() => toggleAnswer(index)}
    >
      <div className={scss.cardTitleWrapper}>
        <p
          className={`${scss.numbering} ${
            index === expandedIndex ? scss.expandedNumbering : ''
          }`}
        >
          {faq.number}
        </p>
        <h3
          className={`${scss.question} ${
            index === expandedIndex ? scss.expandedQuestion : ''
          }`}
        >
          {faq.question}
        </h3>
      </div>

      {index === expandedIndex && (
        <div className={scss.answer}>{faq.answer}</div>
      )}
    </li>
  );
};

FaqCard.propTypes = {
  faq: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  expandedIndex: PropTypes.number,
  toggleAnswer: PropTypes.func.isRequired,
};

export default FaqCard;
