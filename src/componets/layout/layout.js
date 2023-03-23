import styles from './layout.module.css';

const Layout = ({title, descr, urlBg, colorBg}) => {

  const styleCss = {
    background: urlBg ? 'url(' + urlBg + ')' : colorBg,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  };

  return (
    // <section classNameName={styles.layout} style={styleCss}>
    //   <h2>{title}</h2>
    //   <p>{descr}</p>
    // </section>


  <section className={styles.root} style={styleCss}>
      <div className={styles.wrapper}>
          <article>
              <div className={styles.title}>
                  <h3>{title}</h3>
                  <span className={styles.separator}></span>
              </div>
              <div className={[styles.desc, styles.full]}>
                  <p>{descr}</p>
              </div>
          </article>
      </div>
  </section>
  );
};

export default Layout;