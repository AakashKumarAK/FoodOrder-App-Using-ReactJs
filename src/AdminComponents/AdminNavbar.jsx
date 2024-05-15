import { Link } from "react-router-dom";
import '../Style/AdminNavbar.css';
const AdminNavbar = () => {
    return ( 
        <div className="AdminNavbar">
            <div className="logo">
                <h1>Food<span> cart</span></h1>
            </div>
            <div className="options">
                <Link to="/adminhomepage/adminview">View</Link>
                <Link to="/adminhomepage/adminaddproduct">Add products</Link>
                

            </div>
        </div>
     );
}
 
export default AdminNavbar;