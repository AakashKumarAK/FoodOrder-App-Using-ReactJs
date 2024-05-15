import { useState,useEffect} from "react";
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import '../Style/UserViewPage.css';
const UserViewPage = () => {
    let[data,setdata]=useState([])
    
   
      useEffect(()=>
      {
        // axios.get('http://localhost:1000/Product')
        axios.get('https://dummyjson.com/recipes')
        .then((res)=>
        {
          console.log(" data",res.data.recipes);
          setdata(res.data.recipes)
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
                 
                  
                  <img src={x.image}/>
                <div className="restaurant">
                  <h4>{x.restaurant} ||</h4>
                  
                  <b>{x.rating}<StarIcon  id="star"/></b>
                 </div>
                

                <span class="">{x.name} </span>
                <p>MRP:₹{Math.floor(Math.random() * (500 - 200 + 1)) + 200}.00</p>
                {/* <div class="desc">
                  <span id="price">₹{x.price-x.price*20/100}</span>
                  
                </div> */}
                 <div>
                 <p>Prepminuties{x.prepTimeMinutes}</p>
                 <p>cookTimeMinutes{x.cookTimeMinutes}</p>
                  </div>
                </div>
                
              )
            })}
          </div>
       );
  }
   
  export default UserViewPage;