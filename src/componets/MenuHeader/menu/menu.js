import s from './style.module.css';
import cn from 'classnames';

const Menu = ({ state }) => {

  const MEHU = [
    {
      title: 'HOME',
      link: '#welcome'
    },
    {
      title: 'GAME',
      link: '#about'
    },
    {
      title: 'CONTACT',
      link: '#contact'
    }

  ]

  return (
    <>
      <div className={cn(s.menuContainer, { [s.active]: state === true, [s.deactive]: state === false })}>
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