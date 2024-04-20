import React, { useRef, useState } from 'react'

const Update = ({settoogle,updatefunc,id}) => {
    let updateinput=useRef()
    function handleupdate()
    {
        let Updateinput=updateinput.current.value
        console.log(Updateinput);
        settoogle(false)

        updatefunc(Updateinput,id)
    }


  return (
    <div>

    <input type='text' ref={updateinput}/>
    <button onClick={handleupdate}>Update</button>

    </div>
  )
}

export default Update