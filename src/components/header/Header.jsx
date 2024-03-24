import scss from './Header.module.scss';
import { ReactComponent as IconLogo } from '../../icons/logo.svg';
import BurgerMenu from 'components/burger-menu/BurgerMenu';
import Socials from 'components/navigation/Socials';

const Header = () => {
  return (
    <>
      <header className={scss.header}>
        <div>
          <a href="/" className={scss.linkLogo} aria-label="socials link">
            <IconLogo className={scss.logo} aria-label="socials" />
          </a>
        </div>
        <div className={scss.btnWrapper}>
          <BurgerMenu />
          <Socials styles="black" />
        </div>
      </header>
    </>
  );
};

export default Header;
