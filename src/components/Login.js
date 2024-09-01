
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate =useNavigate();
useEffect(()=>{
  const auth = localStorage.getItem('user');
  if(auth){
    navigate('/')
}
})

  const handleLogin= async()=>{
    console.warn({email,password})
    let result = await fetch('http://localhost:5000/login',{
      method:'POST',
      body:JSON.stringify({email,password}),
      headers:{
         'Content-Type':'application/json'
      }
    });
    result=await result.json();
    console.warn(result);
    if(result.name){
      localStorage.setItem('user',JSON.stringify({result}))
      navigate("/");
    }
    else{
      alert("please enter correct details");
    }
  }
  return (
    <div className='login'>

      <h1>Login</h1>
      <input type="text" className='inputbox' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
      <input type="password" className='inputbox' value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Password'/>
      <button type='button' onClick={handleLogin}>Login</button>
      
    </div>
  )
}

export default Login