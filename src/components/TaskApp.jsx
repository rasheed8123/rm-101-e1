import React from "react";
import { v4 } from "uuid";
import styles from "./taskApp.module.css";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";
import { TaskHeader } from "./TaskHeader";

const TaskApp = ({ data }) => {
  // NOTE: do not delete `data-testid` key value pair

  const [tasks, setTasks] = React.useState(data);

  const addTask = (newTask) => {
    if (newTask && !tasks.some((task) => task.text === newTask)) {
      const newTaskObj = {
        id: v4(),
        text: newTask,
        done: false,
        count: 1,
      };
      setTasks([...tasks, newTaskObj]);
    }
  };

  const handleRemoveTask = (taskId) => {
    let newTasks = tasks.filter((task) => task.id !== taskId);
    console.log(newTasks);
    setTasks(newTasks);
  };

  const handleUpdateTask = (updatedTask) => {
    let newTasks = tasks.reduce((acc, crr) => {
      if (crr.id === updatedTask.id) {
        acc.push(updatedTask);
      } else {
        acc.push(crr);
      }
      return acc;
    }, []);
    setTasks([...newTasks]);
  };

  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={tasks}/>
      {/* Add Task */}
      <AddTask addTask={addTask} />
      {/* Tasks */}
      <Tasks
            tasks={tasks}
            handleRemoveTask={handleRemoveTask}
            handleUpdateTask={handleUpdateTask}
          />
    </div>
  );
};

export default TaskApp;
