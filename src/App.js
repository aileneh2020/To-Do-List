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
        this.toggleCheck = this.toggleCheck.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    toggleCheck = (selected) => {
        if (selected.completed) {
            return false
        } else {
            return true
        }
    }

    handleChange = (id) => {
        // Find the item that has the same id. Filter returns an array.
        const filterSelected = this.state.todos.filter(todo => todo.id===id)
        
        // Get the first item in the array. There should only be 1 match.
        const selected = filterSelected[0]
        
        // Change the status of the clicked item
        const newStatus = this.toggleCheck(selected)
        selected.completed = newStatus

        // Create new array of items including selected item with updated status
        const newTodo = this.state.todos.map(item =>
            (item.id === selected.id ? selected : item) 
        )

        // Update state with the new array of items
        this.setState(prevState => {
            return {
                todos: newTodo
            }
        })
    }

    render() {
        const todoComponents = this.state.todos.map(item => 
            <ToDoItem 
                key={item.id}
                todo={item}
                handleChange={this.handleChange}
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