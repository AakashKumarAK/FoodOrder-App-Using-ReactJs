import { useState } from "react";

import axios from "axios"
const UserSignUp = () => 
{
    let [name,setname]=useState("")
    let[email,setemail]=useState("")
    let[password,setpassword]=useState("")
    let[phone,setphone]=useState("")
    let[profile,setprofile]=useState("")
    let users={name,email,password,phone,profile}
    let adduser=(e)=>
    {
e.preventDefault()
        axios.post("http://localhost:1000/User",users)
        .then((res)=>
        {
            alert("user added successfully")
        })
        .catch(()=>
        {
            alert("invalid data")
        })
           }
    return ( 
        <div className="Usersignup">
            <img class="img" src="https://img.freepik.com/free-vector/modern-online-registration-compositio_23-2147993862.jpg?t=st=1712984658~exp=1712988258~hmac=77dd8fc0db220796a2754e3487d2d05de5879d27d1cc38744dec7c47aa461dab&w=740"></img>
            <form onSubmit={adduser}>
                <label>
                    Admin Name:
                    < input required type="text" onChange={(e)=>(setname(e.target.value))} placeholder="Enter the name" />
                </label><br/>
                <label>
                    Email:
                    < input required type="email" value={email} onChange={(e)=>(setemail(e.target.value))} placeholder="Enter the email" />
                </label><br/>
                <label>
                    password:
                    < input required type="password" value={password} onChange={(e)=>(setpassword(e.target.value))} placeholder="Enter the password" />
                </label><br/>
                <label>
                    phone no:
                    < input required type="tel" pattern="[0-9]{10}"value={phone} onChange={(e)=>(setphone(e.target.value))} placeholder="Enter the phoneno" />
                </label><br/>
                <label>
                    ProfileImgurl:
                    < input required type="text" value={profile} onChange={(e)=>(setprofile(e.target.value))} placeholder="Enter the url" />
                </label><br/>
                <button class="button1">Register</button>
                
                
            </form>
        </div>
     );
}
 
export default UserSignUp;



// fetch("http://localhost:1000/Manager",{
//     method:"POST",
//     headers:{"content-type":"application.json"},
//     body:JSON.stringify(admins)
// })
// .then((res)=>
// {
//     console.log(res);
//     alert("Admin Added Successfully")
// })
// .catch((err)=>
// {
//     alert("Invalid data")
// })
