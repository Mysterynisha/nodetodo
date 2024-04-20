import React from 'react'
import Todo from './Todo'

const List = ({data,deletehandle ,updatefunc}) => {
  return (
    <div>
{
    data.map((item,key)=>
    (<Todo items={item}  deletehandle={deletehandle}  updatefunc={updatefunc}/>)
    )
}
    </div>
  )
}

export default List