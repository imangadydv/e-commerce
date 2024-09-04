import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

function Productlist() {

  const [products,setProducts]=useState([]);

  useEffect(()=>{
   getProducts();
  },[])


  const getProducts = async () => {
    let result = await fetch('http://localhost:5000/products');
    result = await result.json();
    if (Array.isArray(result)) {
      setProducts(result);
    } else {
      setProducts([]); 
    }
  };
  
  const deleteProduct = async (id) => {
    try {
      let result = await fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE"
      });
      result = await result.json();
      console.log(result); 
  
      if (result.success) {
        alert("Record deleted successfully");
        setProducts(products.filter(item => item._id !== id));
      } else {
        alert("Failed to delete the product.");
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("An error occurred while deleting the product.");
    }
  };
  
  return (
    <div className='product-list'>
      <h3>Product List</h3>
{Array.isArray(products) && products.map((item, index) => (
   <ul key={item._id}>
   <li>{index+1}</li>
   <li>{item.name}</li>
   <li>{item.price}</li>
   <li>{item.category}</li>
   <li><button onClick={()=>{deleteProduct(item._id)}} className='butn'>Delete</button>
   <Link to={"/update/"+item._id}>Update</Link>
   </li>
 </ul>
))}

    </div>
  )
}

export default Productlist