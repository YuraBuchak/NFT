import scss from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={scss.container}>
        <p className={scss.description}>
          &copy; Yacht ape 2024 all rights <br /> reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
