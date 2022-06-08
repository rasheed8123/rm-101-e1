import React from "react";
import { useState } from 'react'
import { v4 } from 'uuid';
import  AddTask  from './AddTask/AddTask'
import styles from "./taskApp.module.css";
import  Tasks  from './Tasks/Tasks'
import  TaskHeader  from "./TaskHeader/TaskHeader";


const TaskApp = ({data}) => {
  const[task,setTask] = useState(data)
  const addTask = (newTask) =>{
    if(newTask && !task.some((e)=> e.text===newTask)){
      var newObj = {
        id: v4(2),
        text : newTask,
        done : false,
        count:1,
      };
      setTask([...task,newObj])
    }
    
  }

  const handleRemove=(taskId)=>{
    let newTask = task.filter((task)=> task.id !== taskId);
    setTask(newTask);
  }

  const handleUpdate = (updatedTask) =>{
    let newTask = task.reduce((acc,crr)=>{
      if(crr.id === updatedTask.id){
        acc.push(updatedTask);
      }else{
        acc.push(crr)
      }
      return acc;
    },[]);
    setTask([...newTask]);
  }

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader task={task}/>
      <AddTask addTask={addTask}/>
      {/* Add Task */}
      <Tasks task={task} handleRemove={handleRemove} handleUpdate={handleUpdate}/>
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
