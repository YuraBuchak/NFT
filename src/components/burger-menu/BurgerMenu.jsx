import { useState } from 'react';
import scss from './BurgerMenu.module.scss';
import { ReactComponent as IconLogo } from '../../icons/logo.svg';
import Socials from 'components/navigation/Socials';
import BtnToggle from 'components/btn-toggle-menu/BtnToggle';
import Copyright from 'components/copyright-element/Copyright';
import NavLink from 'components/nav-link/NavLink';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
              <li>
                <NavLink
                  toggleMenu={toggleMenu}
                  mediascreen="mobile"
                  title="About"
                  link={'/'}
                />
              </li>

              <li>
                <NavLink
                  toggleMenu={toggleMenu}
                  mediascreen="mobile"
                  title=" M-MAP"
                  link={'/'}
                />
              </li>

              <li>
                <NavLink
                  toggleMenu={toggleMenu}
                  mediascreen="mobile"
                  title="FAQ"
                  link={'/'}
                />
              </li>
              <li>
                <NavLink
                  toggleMenu={toggleMenu}
                  mediascreen="mobile"
                  title="ARTS"
                  link={'/'}
                />
              </li>
              <li>
                <NavLink
                  toggleMenu={toggleMenu}
                  mediascreen="mobile"
                  title="MINT"
                  link={'/'}
                />
              </li>
            </div>
            <Copyright />
          </div>
        </div>
      )}

      {isOpen && (
        <div className={scss.menuContent}>
          <ul className={scss.menuItems}>
            <li>
              <NavLink toggleMenu={toggleMenu} title="About" link={'/'} />
            </li>
            <li>
              <NavLink toggleMenu={toggleMenu} title="M-MAP" link={'/'} />
            </li>
            <li>
              <NavLink toggleMenu={toggleMenu} title="FAQ" link={'/'} />
            </li>
            <li>
              <NavLink toggleMenu={toggleMenu} title="ARTS" link={'/'} />
            </li>
            <li>
              <NavLink toggleMenu={toggleMenu} title="MINT" link={'/'} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
