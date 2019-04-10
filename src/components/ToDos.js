import React, { Component } from 'react';

class ToDos extends Component {

    deleteHandler = (_id) => {
        const { todoDelete } = this.props;
        todoDelete(_id);
    }

    render() {
        const { todo } = this.props;

        return (
            <div>
                {todo.title} - {todo.body}
                <button onClick={() => this.deleteHandler(todo._id)}>Delete</button>
            </div>
        );
    }

}

export default ToDos;