import React from "react";
import styles from "./tasks.module.css";
import { Task } from "../Task";
const Tasks = ({ tasks, handleUpdateTask, handleRemoveTask }) => {
  // NOTE: do not delete `data-testid` key value pair
  if (tasks.length > 0) {
  return (
  
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}

        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleRemoveTask={handleRemoveTask}
          />
        ))}
      </ul>
      );
      }
      return (
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <p>
        <b>Empty list</b>
      </p>
      <p>Add a new task </p>
      </div>
   
  );
};

export default Tasks;
