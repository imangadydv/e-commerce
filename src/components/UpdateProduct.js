import React ,{useState} from "react"
function UpdateProduct() {
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [company,setCompany] = useState("");
  const [category,setCategory] = useState("");
  

   const updateProduct=()=>{
    console.warn(name,price,category,company)
   }
  
  
  return (
    <div className='product'>
        <h1>Update Products</h1>
         <input type="text" className='inputbox' placeholder='Enter product name' onChange={(e)=>{setName(e.target.value)}}/>
         <input type="text" className='inputbox' placeholder='Enter product price' onChange={(e)=>{setPrice(e.target.value)}}/>
         <input type="text" className='inputbox' placeholder='Enter product category' onChange={(e)=>{setCategory(e.target.value)}}/>
         <input type="text" className='inputbox' placeholder='Enter product company'onChange={(e)=>{setCompany(e.target.value)}}/>

         <button className='btn' onClick={updateProduct}>Update Product</button>

    </div>
  )
}

export default UpdateProduct