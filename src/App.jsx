import logo from './logo.svg';
// import './App.css';
import LandingPage from './Components/LandingPage';
import UserLogin from './Components/UserLogin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import AdminSignUp from './Components/AdminSignUp';
import AdminHomePage from './Components/AdminHomePage';
import ErrorPage from './Components/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSignUp from './Components/UserSignUp';
import UserViewPage from './Components/UserViewPage';

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
      <Route path='/userview/*' element={<UserViewPage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
