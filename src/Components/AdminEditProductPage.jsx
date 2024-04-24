import { useEffect, useState } from "react";
import'../Style/EditProduct.css'
import axios from "axios";
import { useParams } from "react-router-dom";
const EditProduct = () => {
    let[category,setcategory]=useState("")
    let[name,setname]=useState("");
    let[restaurant,setrestaurant]=useState("")
    let[price,setprice]=useState("")
    let[Ratings,setRatings]=useState("")
    let[Quantity,setQuantity]=useState("")
    let[Description,setDescription]=useState("")
    let[thumbnailurl,setthumbnailurl]=useState("")
    

    let param =useParams()
    console.log(param.id);
    useEffect(()=>{
        axios.get(`http://localhost:1000/Product/${param.id}`)
       .then((response)=>
       {
        console.log(response.data);
        setthumbnailurl(response.data.thumbnailurl)
        setcategory(response.data.category)
        setname(response.data.name )
        setDescription(response.data.Description )
        setprice(response.data.price )
        setRatings(response.data.Ratings )
        setQuantity(response.data.setQuantity )
        setrestaurant(response.data.restaurant)
       
       }
       )

       .catch((err)=>{
        console.log(err)
       })
    },[])
let data={name,category,price,Ratings,Quantity,restaurant,thumbnailurl,Description}
let editItem=(e)=>
{
    // e.prventDefault();
    axios.put(`http://localhost:1000/Product/${param.id}`,data)
    .then((response)=>
    {
        alert("Data update sucessfully")
    })
    .catch((err)=>
    {
        alert("Error in updating Data")
    })
}
    return ( 
        <div className="edit">
            <h2>Edit The Food</h2>
         <form onSubmit={editItem}>
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
                        thumnailurl:<input required value={thumbnailurl} onChange={(e)=>{setthumbnailurl(e.target.value)}} type="text" placeholder="enter the image url" ></input>
                    </label><br></br>
                    <label>
                        Ratings:<input required  value={Ratings} onChange={(e)=>{setRatings(e.target.value)}}type="number"></input>
                    </label><br/>
                    <button>Edit</button>
            </form>

        </div>
     );
}
 
export default EditProduct;