import React from 'react'
import ToDoItem from './components/ToDoItem'
import todoData from './todoData'
import './styles.css'

function App() {
    const todoComponents = todoData.map(item => 
        <ToDoItem 
            key={item.id}
            todo={item}
        />
    )
    return (
        <div className='container'>
            <h1>To Do List</h1>
            {todoComponents}
        </div>
    )
}

export default App