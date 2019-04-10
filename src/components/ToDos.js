import React, { Component } from 'react';

class ToDos extends Component {

    state = {
        isDone: false,
        isLoaded: false
    }

    componentDidMount = () => {
        this.setState({ isLoaded: true });
    }

    render() {
        const { todo } = this.props;

        return (
            <div>
                {todo.title}
                <button>Delete</button>
            </div>
        );
    }

}

export default ToDos;