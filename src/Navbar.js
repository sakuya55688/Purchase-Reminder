import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Reminder</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add Product</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;