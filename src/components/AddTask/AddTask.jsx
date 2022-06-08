import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";


const AddTask = ({addTask}) => {
  const[newTask, setTask] = useState('');

  const handleAdd=()=>{
    addTask(newTask);
    setTask('');
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" value={newTask} placeholder="Add task..." onChange={(e)=>setTask(e.target.value)} />
      <button data-testid="add-task-button" onClick={handleAdd}>+</button>
    </div>
  );
};

export default AddTask;
