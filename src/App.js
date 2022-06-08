import Taskapp from "./components/TaskApp"
import tasks from "./data/tasks.json";
import React from "react";
function App() {
  return <div>
  <Taskapp data={tasks}></Taskapp>
  
  </div>;
}

export default App;
