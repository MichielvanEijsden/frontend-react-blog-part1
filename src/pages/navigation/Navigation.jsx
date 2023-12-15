import "./Navigantion.css"
import {NavLink} from "react-router-dom";
import NavLogo from "../../assets/logo-medium.png"

function Navigation() {
    return (
        <header className="nav-container">
            <div className="nav-img">
                <img src={NavLogo} alt="Nav Logo"/>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
                    </li>
                    <li><NavLink to="/Blogs"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Alle
                        posts</NavLink></li>
                    <li><NavLink to="/NewPost"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Nieuwe
                        post maken</NavLink></li>
                </ul>

            </nav>
        </header>
    )
}

export default Navigation