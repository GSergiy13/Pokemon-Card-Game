import s from './style.module.css';
import cn from 'classnames';

const Menu = ({ active }) => {

  const MEHU = [
    {
      title: 'HOME',
      link: '#welcome'
    },
    {
      title: 'GAME',
      link: '#game'
    },
    {
      title: 'ABOUT',
      link: '#about'
    },
    {
      title: 'CONTACT',
      link: '#contact'
    }

  ]

  return (
    <>
      <div className={cn(s.menuContainer, { [s.active]: active === true, [s.deactive]: active === false })}>
        <div className={s.overlay} />
        <div className={s.menuItems}>
          <ul>
            {
              MEHU.map(({ title, link }, index) => {
                return (
                  <li key={index}>
                    <a href={link}>
                      {title}
                    </a>
                  </li>
                )
              })
            }

          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;