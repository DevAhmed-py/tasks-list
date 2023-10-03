import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please enter a Task')
            return
        } 

        onAdd({text, day, reminder})
        
        setText('')
        setDay('')
        setReminder(false)
    }

  return (

    <form className='add-form' onSubmit={submitForm}>
        <div className='form-control'> 
            <label>Task</label>
            <input type="text" placeholder='Add Text'
            value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label htmlFor="Task">Day & Time </label>
            <input type="text" placeholder='Add Day & Time'
            value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label htmlFor="Task"> Set Reminder of completion (click for the completed tasks) </label> 
            <input type="checkbox" checked={reminder} value={reminder} 
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value="Save Task" className='btn btn-block' />
    </form>
  )
}

export default AddTask