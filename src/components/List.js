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

        return list.map((todo, i) => <ToDos key={i} todo={todo} />)
    }

    todoAdd = async (todo) => {
        try {
            
        } catch (error) {
            
        }
        const response = await todoService.add(todo)
        console.log(response)
    }

    render() {

        return (
            <div>

                {this.renderList()}
                <hr/>
                <AddTodo todoAdd={this.todoAdd} />
            </div>
        );
    }

}

export default List;