import SectionTitle from 'components/section-title/SectionTitle';
import scss from './Mint.module.scss';
import { ReactComponent as IconCross } from '../../icons/cross.svg';
import ContactForm from 'components/contact-form/ContactForm';

const Mint = () => {
  return (
    <>
      <section className={scss.container} id="mint">
        <SectionTitle title="Are you in?" />
        <IconCross className={scss.iconCross} aria-label="icon cross" />
        <p className={scss.description}>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </p>
        <ContactForm />
      </section>
    </>
  );
};

export default Mint;
