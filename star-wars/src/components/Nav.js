import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home Page</div>
            </Link>
            <Link to="/starshippage">
                <div>Star ship page</div>
            </Link>
        </div>
    );
};

export default Nav;