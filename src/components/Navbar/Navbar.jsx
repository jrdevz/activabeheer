import './Navbar.css'
import NavButton from './NavButtons/NavButton';

export default function Navbar(){
    return(
        <div>
            <nav>
                <ul>
                    <li className='nav-brand'><h1>Activa Beheer</h1></li>
                    <div className='nav-links'>
                        <NavButton>Dashboard</NavButton>
                        <NavButton>Voorraad</NavButton>
                        <NavButton>Licenties</NavButton>
                        <NavButton>Leningen</NavButton>
                    </div>
                </ul>
            </nav>
        </div>
    );
}