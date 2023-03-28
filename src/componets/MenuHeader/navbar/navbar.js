import s from './style.module.css';
import cn from 'classnames';

const Navbar = ({ hendlerOpenMenu, active, bgActive }) => {
  const toggleActiveClass = () => {
    hendlerOpenMenu()
  }

  return (
    <>
      <nav className={cn(s.root, { [s.bgActive]: bgActive })}>
        <div className={s.navWrapper}>
          <p className={s.brand}>
            LOGO
          </p>
          <div onClick={toggleActiveClass} className={cn(s.menuButton, { [s.active]: active })}>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;