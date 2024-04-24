import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Style/AdminLogin.css' ;
import axios from "axios";


const AdminLogin = () => {
    let [uname,setuname]=useState("");
    console.log(uname);
    let [password,setpassword]=useState("");
    console.log(password);
        let[admin,setadmin]=useState([]);
        let navigate=useNavigate();
        useEffect((e)=>
        {
            // e.preventDefault();
            axios.get('http://localhost:1000/Manager')
            .then((res)=>
            {
                console.log(res.data);
                setadmin(res.data);
            })
            .catch((err)=>
            {
                console.log(err);
            })
        },[])
        function login(e)
        {
            let a=false;
                        
            admin.map((x)=>
            {
                if(uname==x.email && password==x.password)
                {
                    alert("Login Successfull");
                  
                    navigate('/adminhomepage') ;
                     a=true;
                    
                    
                }
            })
            if(a==false)
            {
                alert("Invalid username or password");
            }
        }
    return (  
        <div className="AdminLogin">
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
            <p >Are you new to the page?<span><Link to="/adminsignup">SignUp now</Link></span></p>
           </form>
        </div>
    );
}
 
export default AdminLogin;


// function login() 
//     {
//         if(uname=="admin" && password=="123")
//         {
//             alert("Admin Loged Successfully");
//         }
//         else{
//             alert("Admin login Failed");
//         }
//     }