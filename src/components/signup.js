import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
 useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
        navigate('/')
    }
})
 const collectData= async()=>{
  console.warn(name,email,password);
   
  let result =await fetch("http://localhost:5000/register",{
      method:'POST',
      body:JSON.stringify({name,email,password}),
      headers:{
        'Content-Type':'application/json'
      }
  })
  result = await result.json();
  console.warn(result);
  localStorage.setItem("user",JSON.stringify(result));
  navigate('/');

 }

  return (
    <div className="register">
      <h2>Signup</h2>
      <input className='inputbox' placeholder='Enter Name' type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input className='inputbox' placeholder='Enter Email' type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <input className='inputbox' placeholder='Enter Password' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button onClick={collectData} type='button'>Sign Up</button>
    </div>
  );
};

export default Signup;
