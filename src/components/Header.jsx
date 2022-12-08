import style from './Header.module.css';
import logo from '../assets/igniteLogo.svg';


export function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerLogo}>
                <img src={logo} alt="Logotipo do Ignite" />
                <h3>Ignite</h3>
            </div>
        </header>
    )
}