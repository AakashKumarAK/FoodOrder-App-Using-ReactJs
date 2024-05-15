import { useState } from 'react';
import '../Style/AddProduct.css';
import axios from 'axios';

const AdminProductPage = () => {
    let[category,setcategory]=useState("");
    console.log(category);
    let[name,setname]=useState("");
    let[restaurant,setrestaurant]=useState("")
    let[price,setprice]=useState("")
    console.log(price);
    let[Ratings,setRatings]=useState("")
    let[Quantity,setQuantity]=useState("")
    let[Description,setDescription]=useState("")
    let[thumbnailurl,sethumbnail]=useState("")
    let data={category,name,restaurant,price,Ratings,Quantity,Description,thumbnailurl}
   let  adddish=(e)=>{
    e.preventDefault();
        axios.post('http://localhost:1000/Product',data)
       .then((res)=>
       {
        console.log(res);
       alert("dish added")
       }
       )
       .catch((err)=>{
        console.log(err);
        alert("invalid data")
       }
       )
    }
   
    return ( 
        <div className="additem">
            {/* <h1>AdminProductPage</h1> */}
            <form  onSubmit={adddish}>
                <label>
                    category:<select value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                        <option>Starters</option>
                        <option>Veg</option>
                        <option>Non-Veg</option>
                        <option>Sea Food</option>
                        <option>Breads</option>
                        <option>chinese</option>
                        <option>Beverages</option>
                        <option>Desserts</option>
                    </select>
                </label><br/>
                <label>
                    Restaurant Name:<input required value={restaurant} onChange={(e)=>{setrestaurant(e.target.value)}}type="text" placeholder="Enter the Restaurant name"/>
                    </label><br/>
                    <label>
                        Dish name:< input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="Enter the dish name"></input>
                    </label><br/>
                    <label>
                        Price:<input required value={price} onChange={(e)=>{setprice(e.target.value)}} type="text" placeholder="Enter the cost price"></input>
                    </label><br/>
                    <label>
                        Quantity:<input required value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}} type="number" ></input>
                    </label><br/>
                    <label>
                        Description:<textarea required  value={Description} onChange={(e)=>{setDescription(e.target.value)}}cols="30" placeholder="enter the special recepies" rows="2"></textarea>
                    </label><br/>
                    <label>
                        thumnailurl:<input required value={thumbnailurl} onChange={(e)=>{sethumbnail(e.target.value)}} type="text" placeholder="enter the image url" ></input>
                    </label><br></br>
                    <label>
                        Ratings:<input required  value={Ratings} onChange={(e)=>{setRatings(e.target.value)}}type="number"></input>
                    </label><br/>
                    <button>Add Dish</button>
            </form>
        </div>
     );
}
 
export default AdminProductPage;