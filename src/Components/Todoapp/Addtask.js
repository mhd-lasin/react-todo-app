import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Addtask = ({addTask}) => {
    const [value,setValue] = useState("")
    const addItem = ()=>{
       addTask(value)
       setValue("")
    }
  return (
    <>
    <div className='input-container'>
        <input type='text' className='input' placeholder='Add New Task'
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
        />
        <button onClick={addItem} className='add-btn'>ADD</button>
    </div>
    </>
  )
}

export default Addtask