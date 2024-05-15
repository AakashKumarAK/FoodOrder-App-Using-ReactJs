import logo from './logo.svg';
// import './App.css';
import LandingPage from './AdminComponents/LandingPage';
import UserLogin from './UserComponent/UserLogin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminLogin from './AdminComponents/AdminLogin';
import AdminSignUp from './AdminComponents/AdminSignUp';
import AdminHomePage from './AdminComponents/AdminHomePage';
import ErrorPage from './AdminComponents/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSignUp from './UserComponent/UserSignUp';
import UserViewPage from './UserComponent/UserViewPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/user' element={<UserLogin/>}/>
      <Route path='/adminsignup' element={<AdminSignUp/>}/>
      <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
      <Route path='/usersignup/*' element={<UserSignUp/>}/>
      <Route path='/userviewpage' element={<UserViewPage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
