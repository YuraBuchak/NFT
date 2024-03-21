import scss from './Hero.module.scss';
import image from '../../images/hero/hero-mob.webp';

const Hero = () => {
  return (
    <>
      <section className={scss.heroContainer}>
        <div className={scss.container}>
          <h2 className={scss.subTitle}>diD yOu seE iT ?</h2>
          <h1 className={scss.mainTitle}>YACHT APES</h1>
          <h2 className={scss.subTitle}>Apes aRe eveRywhere</h2>
          <div className={scss.imageWrapper}>
            <img src={image} alt="monkey" className={scss.image} />
          </div>
          <a href="" className={scss.link}>
            MEET APES
          </a>
          <p className={scss.description}>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
