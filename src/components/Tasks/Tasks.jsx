import React from "react";
import styles from "./tasks.module.css";
import  Task  from '../Task/Task'
import empty from '../../assets/empty.svg'


const Tasks = ({ task, handleUpdate, handleRemove }) => {
  // NOTE: do not delete `data-testid` key value pair
  if(task.length>0){
    return (
      <>
        <ul data-testid="tasks" className={styles.tasks}>
          {/* Task List */}
          { task.map((e)=>(
            <Task key={e.id} task={e} handleUpdate={handleUpdate} handleRemove={handleRemove}/>
          )) }
        </ul>
      </>
    );
  }
  return(
    <div data-testid="tasks-empty" className={styles.empty}>
          {/* Show when No Tasks are present */}
          <img src={empty} alt="" />
          <b>Empty List</b>
        </div>
  )
};

export default Tasks;
