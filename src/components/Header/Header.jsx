import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="green darken-1">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
