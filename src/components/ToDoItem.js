import React from 'react'

function ToDoItem(props) {
    return (
        <div className='listItem'>
            <input type='checkbox' checked={props.todo.completed}/>
            <span> {props.todo.text}</span><br />
        </div>
    )
}

export default ToDoItem