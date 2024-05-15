import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminViewPage from "./AdminViewPage";
import AdminProductPage from "./AdminProductPage";
import EditProduct from "./AdminEditProductPage";

const AdminHomePage = () => {
    return ( 
        <div>
            {/* <h1>AdminHome</h1> */}
            <AdminNavbar/>
            <Routes>
                <Route path='/adminview' element={<AdminViewPage/>}/>
                <Route path='/adminaddproduct' element={<AdminProductPage/>}/>

                <Route path="/editproduct/:id" element={<EditProduct/>}/>


            </Routes>
        </div>
     );
}
 
export default AdminHomePage;