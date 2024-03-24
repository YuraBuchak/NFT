import scss from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={scss.container}>
        <p className={scss.description}>
          &copy; Yacht ape 2024 all rights <br className={scss.hiden} />{' '}
          reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
