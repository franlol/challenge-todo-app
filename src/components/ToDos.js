import React, { Component } from 'react';

class ToDos extends Component {

    state = {
        isDone: false,
        isLoaded: false
    }

    componentDidMount = () => {
        this.setState({ isLoaded: true });
    }

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