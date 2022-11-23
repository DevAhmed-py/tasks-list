import React from 'react'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title, onShow, showAddTask}) => {

  const location = useLocation()

  return (
    <div>
        <header className='header'>
            <h1> {title} </h1>
            { location.pathname === '/' && <Button onShow= {onShow} 
            color={showAddTask ? 'red' : 'green'} 
            text={showAddTask ? 'Close' : 'Add'} /> }
        </header>
    </div>
  )
}

export default Header