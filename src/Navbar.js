import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1> <Link to="/"style={{
                        color: "#f1356d",
                    }}>breatheUK </Link> </h1>
                <div className="links">
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/deploy">Deploy Sensor</Link>
                    <Link to="/browse">Browse Sensor Data</Link>
                </div>
        </nav>
    );
}
 
export default Navbar;