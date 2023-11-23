import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Header = () => {
    return (
        <div className="header__container">
            <Link className="logo__container" to="/test-rickmorty"></Link>
            <h2 className="header__title">The Rick and Morty API</h2>
        </div>
    )
};

export default Header;