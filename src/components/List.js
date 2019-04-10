import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import todoService from '../services/todo-service';

class List extends Component {

    state = {
        list: [{
            title: "item 1"
        }, {
            title: "item 2"
        }],
    }

    componentDidMount = async () => {
        // const { list } = this.state;

        const response = await todoService.get();

        this.setState({
            list: response.data,
        });
        
    }

    renderList = () => {
        const { list } = this.state;

        return list.map((todo, i) => <div key={i}>{todo.title}</div>)
    }

    render() {

        return (
            <div>
                <Link to="/add">Add</Link>
                {/* {this.renderList()} */}
            </div>
        );
    }

}

export default List;