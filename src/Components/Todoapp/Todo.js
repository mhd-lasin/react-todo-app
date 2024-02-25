import React, { useEffect, useState } from 'react'
import './Todo.css'
import Addtask from './Addtask'
import Listtask from './Listtask'

const Todo = () => {
    const[tasks,setTask] =useState([])
    useEffect(()=>{
        document.title = `you have ${tasks.length} pending task(s)`
    })
    const addTask = (title)=>{
        const newTask = [...tasks,{title}]
        setTask(newTask)
    }

    const removeTask=(index)=>{
        const newTask =[...tasks]
        newTask.splice(index,1)
        setTask(newTask)
      }
  return (
    <>
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'>
                <Addtask addTask={addTask} />
            </div>
            <div className='tasks'>
                {tasks.map((task,index)=>(
                      <Listtask task={task} removeTask = {removeTask} index= {index} key={index} />
                ))}
              
            </div>
        </div>
    </>
  )
}

export default Todo