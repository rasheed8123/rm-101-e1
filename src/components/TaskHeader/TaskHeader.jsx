import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // // sample values to be replaced
  // let totalTask = 0;
  // let unCompletedTask = 0;

  let unCompletedTask = tasks.filter((task) => !task.done).length;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">Total number of tasks : {unCompletedTask}</b>
      <b data-testid="header-total-task">{tasks.length}</b>
    </div>
  );
};

export default TaskHeader;
