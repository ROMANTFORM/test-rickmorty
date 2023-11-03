// import { NavLink, Route } from "react-router-dom/cjs/react-router-dom.min";
// import DetailCreature from "./DetailCreature";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "../components/Card";

const Home = () => {
    return (
        <div className="home-page__container">
            <button className="home-page__btn-filter">Filter</button>
            <ul className="home-page__list">
                <li>
                    <Link to="/details">
                        <Card/>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/details">
                        <Card/>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/details">
                        <Card/>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/details">
                        <Card/>
                    </Link>
                   
                </li>
            </ul>
        </div>
    )
};

export default Home;