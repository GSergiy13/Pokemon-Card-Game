import styles from './layout.module.css';
import cn from 'classnames';

const Layout = ({ title, urlBg, colorBg = 'red', children }) => {

  const styleCss = {
    background: urlBg ? 'url(' + urlBg + ')' : colorBg,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  };

  return (
    <section className={styles.root} style={styleCss}>
      <div className={styles.wrapper}>
        <article>
          <div className={styles.title}>
            <h3>{title}</h3>
            <span className={styles.separator}></span>
          </div>
          <div className={cn(styles.desc, styles.full)}>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout; 