import { useState,useEffect} from "react";
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import '../Style/UserViewPage.css';
const UserViewPage = () => {
    let[data,setdata]=useState([])
    
   
      useEffect(()=>
      {
        axios.get('http://localhost:1000/Product')
        .then((res)=>
        {
          console.log(" data",res.data);
          setdata(res.data)
        })
        .catch((err)=>
        {
        console.log(err);}
        )
      },[])
     
      
      return ( 
          <div className="Userviewpage">
            
            {data.map((x)=>
            {
              return(
                <div className="displayproducts">
                 
                  
                  <img src={x.thumbnailurl}/>
                <div className="restaurant">
                  <h4>{x.restaurant} ||</h4>
                  <b>{x.Ratings}<StarIcon  id="star"/></b>
                 </div>
                <span class="">{x.name} </span>
                <strike><p>MRP:₹{x.price}.00</p></strike>
                <div class="desc">
                  <span id="price">₹{x.price-x.price*20/100}</span>
                  
                </div>
                </div>
              )
            })}
          </div>
       );
  }
   
  export default UserViewPage;