import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Style/UserLogin.css';

import axios from "axios";


const UserLogin = () => {
    var [uname,setuname]=useState("");
    console.log(uname);
    var [password,setpassword]=useState("");
    console.log(password);
        let[user,setuser]=useState([]);
        let navigate=useNavigate();
        // useEffect((e)=>
        // {
        //     // e.preventDefault();
        //     axios.get('http://localhost:1000/User')
        //     .then((res)=>
        //     {
        //         console.log(res.data);
        //         setuser(res.data);
        //     })
        //     .catch((err)=>
        //     {
        //         console.log(err);
        //     })
        // },[])
        // function login(e)
        // {
        //     let a=false;
                        
        //     user.map((x)=>
        //     {
        //         if(uname=="Aakash" && password=="123")
        //         {
        //             a=true; 
        //             alert("Login Successfull");
                  
        //             navigate('/userviewpage') ;
                     
                    
                    
        //         }
        //     })
        //     if(a==false)
        //     {
        //         alert("Invalid username or password");
        //     }
        // }

        //user dummy login
        function login() 
    {
        if(uname=="admin" && password=="123")
        {
            navigate('/userviewpage')
        }
        else{
            alert("Admin login Failed");
        }
    }
    return (  
        <div className="UserLogin">
            {/* <h1>AdminLogin</h1> */}
           
         <form >
         <h4>Welcome!</h4> 
            <label>
        username: <input type="text" value={uname} onChange={(e)=>{setuname(e.target.value)}} placeholder="Enter uname"/>
            </label><br></br>
            <label> 
                Password: <input  type="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter password"/>
            </label><br />
            <button class="button-87" onClick={login}>Login</button>
            <p >Are you new to the page?<span><Link to="/usersignup">SignUp now</Link></span></p>
           </form>
        </div>
    );
}
 
export default UserLogin;


