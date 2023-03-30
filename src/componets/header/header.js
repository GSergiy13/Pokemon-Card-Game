import { useHistory } from 'react-router-dom';

import style from './header.module.css';

const Header = ({ title, descr, onClickButton }) => {

    const history = useHistory();
    const hendlerClick = () => {
        history.push('/game');
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