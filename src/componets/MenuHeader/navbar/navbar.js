import s from './style.module.css';
import cn from 'classnames';

const Navbar = ({ hendlerOpenMenu, state, bgActive }) => {
  const hendlerMenu = () => {
    hendlerOpenMenu()
  }

  return (
    <>
      <nav className={cn(s.root, { [s.bgActive]: bgActive })}>
        <div className={s.navWrapper}>
          <p className={s.brand}>
            LOGO
          </p>
          <div onClick={hendlerMenu} className={cn(s.menuButton, { [s.active]: state })}>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;