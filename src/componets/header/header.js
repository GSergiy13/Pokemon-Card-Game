import style from './header.module.css';

const Header = ({ title, descr, onClickButton }) => {

    const hendlerClick = () => {
        onClickButton && onClickButton('game')
    }
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <br />

                <button onClick={hendlerClick}>start game</button>
            </div>
        </header>
    );
};

export default Header;