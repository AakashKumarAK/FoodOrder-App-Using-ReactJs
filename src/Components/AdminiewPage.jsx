import axios from "axios";
import { useEffect, useState } from "react";
import '../Style/AdminView.css';
import ModeEditIconlineIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";



const AdminViewPage = () => {
  let[data,setdata]=useState([])
  let[force,setforce]=useState(true);
    useEffect(()=>
    {
      axios.get('http://localhost:1000/Product')
      .then((res)=>
      {
        console.log(res.data);
        setdata(res.data)
      })
      .catch((err)=>
      {
      console.log(err);}
      )
    },[force])
    let removeDish=(id,name)=>{
      axios.delete('http://localhost:1000/Product/${id}')
      .then((res)=>{
        alert(name+"Removed successfuLLY")
        setforce(!force)
      }

      )
      .catch((err)=>{
        alert("Data Not Found")
      }

      )
    }
    let navigate = useNavigate()

    function editproduct(id){
      navigate(`/adminhomepage/editproduct/${id}`)
    }
    return ( 
        <div className="adminviewpage">
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
                <div class="opt">
              <ModeEditIconlineIcon id="eicon" onClick={()=>{editproduct(x.id)}} />
              <DeleteIcon  id= onClick={()=>{removeDish(x.id,x.name)}}/>
              </div>
              </div>
              </div>
            )
          })}
        </div>
     );
}
 
export default AdminViewPage;