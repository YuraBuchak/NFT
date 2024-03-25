import Copyright from 'components/copyright-element/Copyright';
import scss from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={scss.container}>
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
