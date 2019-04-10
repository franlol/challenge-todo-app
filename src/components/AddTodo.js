import React, { Component } from 'react';

import './addtodo.css';

class AddTodo extends Component {

    state = {
        title: '',
        body: '',
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitHandler = async (e) => {
        e.preventDefault();
        const { todoAdd } = this.props;

        const todo = {
            title: this.state.title,
            body: this.state.body,
        }

        todoAdd(todo);        
    }

    render() {

        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <div className="form-input-field">
                        <label htmlFor="form-title">Title:</label>
                        <input name="title" value={this.state.title} onChange={e => this.inputHandler(e)} type="text" id="form-title" />
                    </div>

                    <div className="form-input-field">
                        <label htmlFor="form-body">Descrition:</label>
                        <input name="body" value={this.state.body} onChange={e => this.inputHandler(e)} type="text" id="form-body" />
                    </div>

                    <div className="form-input-field">
                        <button onClick={e => this.submitHandler(e)}>Add</button>
                    </div>

                </form>
            </div>
        );
    }

}

export default AddTodo;