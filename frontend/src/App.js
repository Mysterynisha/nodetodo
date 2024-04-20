import React, { useEffect, useRef, useState } from 'react'

import axios from 'axios'
import './App.css'
import List from './Component/List';
const App = () => {
  let[data,setdata]=useState([])
  let[item,setitem]=useState(false)
  
  
  let Item=useRef();

    useEffect(()=>{
      async function getitem()
      {
        let response=await axios.get("/api/todo")
        console.log(response.data);
        setdata([...response.data])
        setitem(false)
      }
      getitem()
    },[item])
  async function handle()
  {
    setitem(Item.current.value)
    const obj={
      "userid":Date.now(),
      "item":Item.current.value,
      "iscompleted":true
    }
    console.log(obj);
     let response=await axios.post("/api/todo",obj)
    console.log(response.data);
     setitem("");
     Item.current.value=""
  }

  async function deletehandle(id)
  {
    setitem(false)
    let response=axios.delete(`/api/todo/${id}`)
    console.log(response);
    console.log(id);
    
    setitem(true)
    
  }


  async function updatefunc(inputdata,id)
      {
        setitem(false)
  
        const obj={
          item:inputdata
        }
        let response=axios.put(`/api/todo/${id}`,obj)
        console.log(response);
        console.log(obj,id);
        setitem(true)
      }

  return (
    <div>
      <h1>To-do list</h1>
      <div className='input'>
       
        <input type='text' ref={Item}/>
        <label onClick={handle} className='addbtn'>➕</label>
      </div>
       <List data={data}  deletehandle={deletehandle}  updatefunc={updatefunc}/>

    </div>
  )
}

export default App