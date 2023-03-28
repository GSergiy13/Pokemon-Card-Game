import style from './header.module.css';

const Header = ({ title, descr, onClickButton }) => {

    const hendlerClick = () => {
        console.log('header');

        onClickButton && onClickButton('game')
    }
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                <h1>This is title</h1>
                <p>This is Description!</p>
                <br />

                <button onClick={hendlerClick}>start game</button>
            </div>
        </header>
    );
};

export default Header;