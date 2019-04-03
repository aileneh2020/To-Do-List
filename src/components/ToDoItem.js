import React, {Component} from 'react'

class ToDoItem extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const checkStatus = this.props.todo.completed

        return (
            <div className='listItem'>
                <input
                    type='checkbox' 
                    checked={checkStatus}
                    onChange={e => this.props.handleChange(this.props.todo.id)}
                />
                <span className={checkStatus ? 'done' : null}> {this.props.todo.text}</span><br />
            </div>
        )

    }
}

export default ToDoItem