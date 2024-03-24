import SectionTitle from 'components/section-title/SectionTitle';
import scss from './Faq.module.scss';
import { useState } from 'react';
import FaqCard from 'components/faq-card/FaqCard';
import faqData from '../../data/faqData';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleAnswer = index => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <section className={scss.container}>
      <SectionTitle title="FAQ" />

      <ul className={scss.cardsWrapper}>
        {faqData.map((faq, index) => (
          <FaqCard
            key={index}
            faq={faq}
            index={index}
            expandedIndex={expandedIndex}
            toggleAnswer={toggleAnswer}
          />
        ))}
      </ul>
    </section>
  );
};

export default Faq;
