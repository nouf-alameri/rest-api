import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './card';

function App() {

  const [Data,setData]=useState([]);


  const api=()=>{
    axios("https://dummyjson.com/products")
    .then((x)=>{
      console.log(x)
    setData(x.data.products)
    
  })  
  }
    
  
  return (
    <div className="App">
      <button onClick={()=>api()}>API</button>
      {Data.map((data) => (   
      <Card d={data} />
      ))}
      
    </div>
  );
}

export default App;
