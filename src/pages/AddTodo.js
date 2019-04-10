import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddTodo extends Component {

    state = {
        title: '',
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
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
                        <button type="submit">Add</button>
                    </div>

                </form>
                <Link to="/">Go back</Link>
            </div>
        );
    }

}

export default AddTodo;