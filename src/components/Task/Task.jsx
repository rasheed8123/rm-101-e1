import React from "react";
import styles from "./task.module.css";
import  Counter  from '../Counter/Counter'
import remove from '../../assets/remove.svg';

const Task = ({ task, handleUpdate, handleRemove }) => {
  console.log('data:', task)
  const tooggleStatus=()=>{
    handleUpdate({ ...task, done : !task.done })
  }

  const updateCount = (newCount) =>{
    if(newCount > 0){
      handleUpdate({ ...task, count : newCount });
    }
  }

  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" checked={task.done} onChange={tooggleStatus} data-testid="task-checkbox" />
      <div data-testid="task-text">{task.text}</div>
      <Counter taskId={task.id} count={task.count} updateCount={updateCount} />
      {/* Counter here */}
      <button data-testid="task-remove-button" onClick={()=>handleRemove(task.id)}> <img src={remove} alt="" /> </button>
    </li>
  );
};

export default Task;
