import { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes, json} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const fromServer = await fetchTasks()
      setTasks(fromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Reminder of completion
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder: data.reminder} : task))
  }

  // Delete Task
  const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, 
    {method: 'DELETE'})

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Add Tasks
  const onAdd = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', 
    {method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }


  return (
    <Router> 
      <div className="container">
        <Header onShow= {() => setShowAdd(!showAdd)} showAddTask= {showAdd} title='Task Tracker' />
        <Routes>
          <Route path="/" element={
            <>
              {showAdd && <AddTask onAdd= {onAdd} />}
              {tasks.length > 0 ? 
              <Tasks onDelete= {deleteTask} onToggle= {toggleReminder} tasks= {tasks} /> : 
              'You have no more Reminders'}
            </>
          } 
          />
          <Route path="/about" element= {<About />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;