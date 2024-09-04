import React ,{useState} from "react"
function AddProduct() {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [company,setCompany] = useState("");
  const [category,setCategory] = useState("");
  const [error, setError] = useState("");
 
  const addProduct= async ()=>{

    if (!name || !price || !category || !company) {
            setError("All fields are required.");
            return;
          }
     console.warn(name,price,category,company)
     const userId = JSON.parse(localStorage.getItem("user"))._id;
     let result = await fetch("http://localhost:5000/add-product",{
        method:"post",
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
            "Content-Type":"application/json"
        }   
     })
     result = result.json();
     console.warn(result);
  }
  
  return (
    <div className='product'>
        <h1>Add Products</h1>
         <input type="text" className='inputbox' placeholder='Enter product name' onChange={(e)=>{setName(e.target.value)}}/>
         <input type="text" className='inputbox' placeholder='Enter product price' onChange={(e)=>{setPrice(e.target.value)}}/>
         <input type="text" className='inputbox' placeholder='Enter product category' onChange={(e)=>{setCategory(e.target.value)}}/>
         <input type="text" className='inputbox' placeholder='Enter product company'onChange={(e)=>{setCompany(e.target.value)}}/>

         <button className='btn' onClick={addProduct}>Add Product</button>

    </div>
  )
}

export default AddProduct