import React from "react";
import task from './data/tasks.json'
import TaskApp from './components/TaskApp'
function App() {
  return <div>
    <TaskApp data={task}/>
    {/* Code Here */}
    </div>;
}

export default App;
