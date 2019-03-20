import React, {Component} from 'react'

class ToDoItem extends Component {
    constructor(props) {
        super(props)
    }

    toggleCheckMark = () => {
        console.log('changed')
    }

    render() {
        return (
            <div className='listItem'>
                <input
                    type='checkbox' 
                    checked={this.props.todo.completed}
                    onChange={this.toggleCheckMark}
                />
                <span> {this.props.todo.text}</span><br />
            </div>
        )

    }
}

export default ToDoItem