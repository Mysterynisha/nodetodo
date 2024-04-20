
import Update from './Update'
import {useState} from  'react'

const Todo = ({items,deletehandle,updatefunc}) => {
 
  let[toogle,settoogle]=useState(false)     
      
      function updatehandle()
      {
        settoogle(true)
      }

      return (
    <div className='todo'>
        <div className='btn'>
       <input type='checkbox'  />
       <p>{items.item}</p>
       </div>
       <div className='btn'>
        {
          toogle?<Update settoogle={settoogle} updatefunc={updatefunc} id={items._id}/>:  <label onClick={updatehandle}>✏️</label>
        }
       

          
        <label onClick={()=>{deletehandle(items._id)}}>❌</label>
       
       </div>
       
    </div>
  )
}

export default Todo