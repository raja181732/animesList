import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="nav">
            <nav>
            <h1>Logo</h1>           
            <input type="Search" />
            <button>search</button>
            <Link to="/">Home</Link> 
            <Link to="/wish">Wish List</Link> 

            </nav>
             
        </div>
        
     );
}
 
export default Navbar;