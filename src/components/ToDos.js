import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './todos.css';

library.add(faTimes);

class ToDos extends Component {

    deleteHandler = (_id) => {
        const { todoDelete } = this.props;
        todoDelete(_id);
    }

    render() {
        const { todo } = this.props;

        return (
            <div className="todos-container">
                <div className="todos-titles">
                    <h2>{todo.title}</h2>
                    <h4>{todo.body}</h4>
                </div>
                <button className="todos-delete" onClick={() => this.deleteHandler(todo._id)}><FontAwesomeIcon icon="times" /></button>
                {/* <button className="todos-delete" onClick={() => this.deleteHandler(todo._id)}>Delete</button> */}
            </div>
        );
    }

}

export default ToDos;