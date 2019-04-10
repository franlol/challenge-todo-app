import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddTodo extends Component {

    state = {
        title: '',
        description: '',
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
            description: this.state.description,
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
                        <label htmlFor="form-description">Description:</label>
                        <input name="description" value={this.state.description} onChange={e => this.inputHandler(e)} type="text" id="form-description" />
                    </div>

                    <div className="form-input-field">
                        <button onClick={e => this.submitHandler(e)}>Add</button>
                    </div>

                </form>
                <Link to="/">Go back</Link>
            </div>
        );
    }

}

export default AddTodo;