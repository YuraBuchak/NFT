import { useEffect, useState } from 'react';
import scss from './BurgerMenu.module.scss';
import { ReactComponent as IconLogo } from '../../icons/logo.svg';
import Socials from 'components/navigation/Socials';
import Footer from 'components/footer/Footer';
import BtnToggle from 'components/btn-toggle-menu/BtnToggle';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const handleEscape = event => {
  //     if (event.key === 'Escape') {
  //       setIsOpen(false);
  //     }
  //   };

  //   const handleBackdropClick = event => {
  //     if (event.target.classList.contains(scss.burgerMenuBtn)) {
  //       return;
  //     }
  //     setIsOpen(false);
  //   };

  //   if (isOpen) {
  //     document.body.classList.add('Nooverflow');
  //     document.addEventListener('keydown', handleEscape);
  //     document.addEventListener('click', handleBackdropClick);
  //   } else {
  //     document.body.classList.remove('Nooverflow');
  //   }

  //   return () => {
  //     document.removeEventListener('keydown', handleEscape);
  //     document.removeEventListener('click', handleBackdropClick);
  //     document.body.classList.remove('Nooverflow');
  //   };
  // }, [isOpen]);

  return (
    <div className={scss.burgerMenu}>
      <BtnToggle isOpen={isOpen} toggleMenu={toggleMenu} />

      {isOpen && (
        <div className={scss.mobileMenu}>
          <div className={scss.nav}>
            <div className={scss.headWrapper}>
              <IconLogo className={scss.logo} aria-label="socials" />
              <div className={scss.btnWrapper}>
                <BtnToggle
                  isOpen={isOpen}
                  toggleMenu={toggleMenu}
                  menu="mobile"
                />
                <Socials />
              </div>
            </div>
            <div className={scss.navigarionWrapper}>
              <a className={scss.link} href="/" onClick={toggleMenu}>
                About
              </a>
              <a className={scss.link} href="/" onClick={toggleMenu}>
                M-MAP
              </a>
              <a className={scss.link} href="/" onClick={toggleMenu}>
                FAQ
              </a>
              <a className={scss.link} href="/" onClick={toggleMenu}>
                ARTS
              </a>
              <a className={scss.link} href="/" onClick={toggleMenu}>
                MINT
              </a>
            </div>
            <Footer />
          </div>
        </div>
      )}

      {/* {isOpen && (
        <div className={scss.nav} style={{ left: 0, top: '48px' }}>
          <div className={scss.headWrapper}>
            <IconLogo className={scss.logo} aria-label="socials" />
            <Socials />
          </div>
          <div className={scss.navigarionWrapper}>
            <a className={scss.link} href="/" onClick={toggleMenu}>
              Home
            </a>
            <a className={scss.link} href="/" onClick={toggleMenu}>
              About
            </a>
            <a className={scss.link} href="/" onClick={toggleMenu}>
              Services
            </a>
            <a className={scss.link} href="/" onClick={toggleMenu}>
              Contact
            </a>
          </div>
          <Footer />
        </div>
      )} */}
    </div>
  );
};

export default BurgerMenu;
