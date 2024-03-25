import scss from './NavLink.module.scss';

const NavLink = ({ link, toggleMenu, title, mediascreen }) => {
  const btnClass =
    mediascreen === 'mobile' ? `${scss.linkMobile}` : `${scss.linkTable} `;
  return (
    <a className={btnClass} href={link} onClick={toggleMenu}>
      {title}
    </a>
  );
};

export default NavLink;
