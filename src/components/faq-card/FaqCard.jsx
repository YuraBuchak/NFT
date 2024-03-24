import PropTypes from 'prop-types';
import scss from './FaqCard.module.scss';

const FaqCard = ({ faq, index, expandedIndex, toggleAnswer }) => {
  const isExpanded = index === expandedIndex;

  return (
    <li
      className={`${scss.card} ${isExpanded ? scss.expanded : ''}`}
      onClick={() => toggleAnswer(index)}
    >
      <div
        className={`${scss.avatarWrapperMedia} ${
          isExpanded ? scss.avatarWrapper : scss.hidden
        }`}
      >
        <img src={faq.src} alt="avatar" className={scss.avatar} />
      </div>

      <div className={scss.textWrapper}>
        <div className={scss.cardTitleWrapper}>
          <p
            className={`${scss.numbering} ${
              isExpanded ? scss.expandedNumbering : ''
            }`}
          >
            {faq.number}
          </p>
          <h3
            className={`${scss.question} ${
              isExpanded ? scss.expandedQuestion : ''
            }`}
          >
            {faq.question}
          </h3>
        </div>
        {isExpanded && <div className={scss.answer}>{faq.answer}</div>}
      </div>
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
