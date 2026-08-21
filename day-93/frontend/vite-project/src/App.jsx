import axios from 'axios'
import React, { useEffect } from 'react'

const getProduct = async()=>{
  try{
    const res = axios.get("/products")
    console.log(red);
    
  }
  catch(error){
    console.log(error);
    
  }
  useEffect(()=>{
    getProduct();
  }, []);
}
const App = () => {
  return (
    <div>App</div>
  )
}

export default App