import logo from '../../assets/logo_sportsee.png'
import '../header/header.css'

function Header(){

    return(
        <header className="header">
            <ul>
                <li><img src={logo} alt="logo sportsee" /></li>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglages</li>
                <li>Communauté</li>
            </ul>
        </header>
    );
}

export default Header