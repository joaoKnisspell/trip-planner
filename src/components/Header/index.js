//React
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

//Style
import { HeaderContainer } from "./style"

//Icons
import { CgProfile } from 'react-icons/cg';
import { VscTasklist } from 'react-icons/vsc';
import { BiTrip } from 'react-icons/bi';
import { RiLogoutBoxFill } from 'react-icons/ri';

//Context
import { UserContext } from '../../context/UserContext';


const Header = ( ) => {

  const [ sidebar, setSideBar ] = useState(false);
  const { signOutUser } = useContext(UserContext);

  return (
    <HeaderContainer sidebar={sidebar}>
        <nav>
            <button className="sidebar-btn" onClick={() => setSideBar(!sidebar)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </button>
            <ul className="nav-list">
                <li><Link to='/dashboard'><VscTasklist className="icon" /><span>Metas</span></Link></li>
                <li><Link to='/destinations'><BiTrip className="icon" /><span>Países</span></Link></li>
                <li><Link to='/profile'><CgProfile className="icon" /><span>Perfil</span></Link></li>
                <li className="teste"><button onClick={() => signOutUser()}><RiLogoutBoxFill className="icon"  /><span>Sair</span></button></li>
            </ul>
        </nav>
    </HeaderContainer>
  )
}

export default Header