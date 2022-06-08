import React from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter";

const Task = ({ task, handleUpdateTask, handleRemoveTask }) => {
  // NOTE: do not delete `data-testid` key value pair

  function toggleStatus() {
    handleUpdateTask({
      ...task,
      done: !task.done,
    });
  }

  const updateCount = (newCount) => {
    if (newCount > 0) {
      handleUpdateTask({
        ...task,
        count: newCount,
      });
    }
  };

  return (
    <li data-testid="task" className={`${styles.task} ${task.done ? styles.done : ""}`}>
      <input type="checkbox" data-testid="task-checkbox" 
      onChange={toggleStatus}
      checked={task.done}/>
      <div data-testid="task-text" className={styles.data}> {task.text}</div>
      {/* Counter here */}
      <Counter taskId={task.id} count={task.count} updateCount={updateCount} />
      <button data-testid="task-remove-button" className={styles.btn}  onClick={() => handleRemoveTask(task.id)}>delete</button>
    </li>
  );
};

export default Task;
