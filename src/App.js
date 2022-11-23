import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [showAdd, setShowAdd] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's visit",
      day: "April 10th at 4pm",
      reminder: false
    },
    {
      id: 2,
      text: "Travelling",
      day: "July 25th at 12pm",
      reminder: false
    }
  ])

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder: !task.reminder} : task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const onAdd = (task) => {
    const max = 100;
    const min = 3;
    const id = Math.trunc(Math.random() * (max - min + 1) + min)

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }


  return (
    <div className="container">
      <Header onShow= {() => setShowAdd(!showAdd)} showAddTask= {showAdd} title='Task Tracker' />
      {showAdd && <AddTask onAdd= {onAdd} />}
      {tasks.length > 0 ? 
      <Tasks onDelete= {deleteTask} onToggle= {toggleReminder} tasks= {tasks}/> : 
      'You have no more Reminders'}
    </div>
  );
}

export default App;