import React, {Component} from 'react'
import ToDoItem from './components/ToDoItem'
import todoData from './data/todoData'
import './styles.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
    }
    
    render() {
        const todoComponents = this.state.todos.map(item => 
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
}

export default App