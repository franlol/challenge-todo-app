import React, { Component } from 'react';

import todoService from '../services/todo-service';

import ToDos from '../components/ToDos';
import AddTodo from '../components/AddTodo';

class List extends Component {

    state = {
        list: [{
            title: "item 1"
        }, {
            title: "item 2"
        }],
    }

    componentDidMount = async () => {
        const response = await todoService.get();

        this.setState({
            list: response.data,
        });

    }

    renderList = () => {
        const { list } = this.state;
        return list.map((todo, i) => <ToDos key={i} todo={todo} todoDelete={this.todoDelete} />);
    }

    todoAdd = async (todo) => {
        try {
            const response = await todoService.add(todo)
            const data = { title: response.data.title, description: response.data.body };

            this.setState({
                list: [...this.state.list, data]
            })
        } catch (error) {

        }
    }

    todoDelete = async (id) => {
        try {
            const response = await todoService.delete(id);
            if (response.data) {
                console.log(response)
            }
        } catch (err) {
            
        }
    }

    render() {

        return (
            <div>
                {this.renderList()}
                <hr />
                <AddTodo todoAdd={this.todoAdd} todoDelete={this.todoDelete}/>
            </div>
        );
    }

}

export default List;