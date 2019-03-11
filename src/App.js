import React from 'react'
import ToDoItem from './components/ToDoItem.js'
import './styles.css'

function App() {
    return (
        <div className='container'>
            <h1>To Do List</h1>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default App