import React, {Component} from 'react'

class ToDoItem extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className='listItem'>
                <input
                    type='checkbox' 
                    checked={this.props.todo.completed}
                    onChange={e => this.props.handleChange(this.props.todo.id)}
                />
                <span> {this.props.todo.text}</span><br />
            </div>
        )

    }
}

export default ToDoItem