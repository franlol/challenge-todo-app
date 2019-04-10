import React, { Component } from 'react';

import todoService from '../services/todo-service';

import ToDos from '../components/ToDos';
import AddTodo from '../components/AddTodo';

import './list.css'

class List extends Component {

    state = {
        list: []
    }

    componentDidMount = async () => {
        this.updateList();
    }

    updateList = async () => {
        try {
            const response = await todoService.get();

            this.setState({
                list: response.data,
            });
        } catch (error) {
            // TODO REDIRECT NoMatch
        }
    }

    renderList = () => {
        const { list } = this.state;
        console.log(this.state)
        return list.map((todo, i) => <ToDos key={i} todo={todo} todoDelete={this.todoDelete} />);
    }

    todoAdd = async (todo) => {
        try {
            const response = await todoService.add(todo)
            const data = { _id: response.data._id, title: response.data.title, body: response.data.body };

            this.setState({
                list: [...this.state.list, data],
            });
        } catch (error) {
            // TODO REDIRECT NoMatch
        }
    }

    todoDelete = async (id) => {
        try {
            await todoService.delete(id);
            this.updateList();
        } catch (err) {
            // TODO REDIRECT NoMatch
        }
    }

    render() {

        return (
            <div className="list-container">
                {this.renderList()}
                <hr />
                <AddTodo todoAdd={this.todoAdd} todoDelete={this.todoDelete} />
            </div>
        );
    }

}

export default List;