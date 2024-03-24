import scss from './Hero.module.scss';
import image from '../../images/hero/hero-mob.webp';

const Hero = () => {
  return (
    <>
      <section className={scss.heroContainer}>
        <div className={scss.container}>
          <h2 className={scss.subTitle}>diD yOu seE iT ?</h2>
          <h1 className={scss.mainTitle}>
            <span>YACHT </span>
            <span>APES</span>
          </h1>
          <h2 className={scss.subTitle}>Apes aRe eveRywhere</h2>
          <div className={scss.imageWrapper}>
            <img src={image} alt="Monkey" className={scss.image} />
          </div>

          <div className={scss.infoWrapper}>
            <a
              href="https://www.linkedin.com"
              className={scss.link}
              aria-label="link to contact form"
            >
              MEET APES
            </a>
            <p className={scss.description}>
              Yacht Ape is a collection of unique digital apes that you can own
              in NFT format
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
