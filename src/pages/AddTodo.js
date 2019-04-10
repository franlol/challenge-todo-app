import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddTodo extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                
                    <div className="form-input-field">
                        <label htmlFor="form-title">Title:</label>
                        <input type="text" id="form-title" />
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