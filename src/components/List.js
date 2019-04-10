import React, { Component } from 'react';

class List extends Component {

    state = {
        list: [{
            title: "item 1"
        }, {
            title: "item 2"
        }],
    }

    renderList = () => {
        const { list } = this.state;

        return list.map((todo, i) => <div key={i}>{todo.title}</div>)
    }

    render() {

        return (
            <div>
                <button>Add</button>
                {this.renderList()}
            </div>
        );
    }

}

export default List;