import React, { Component } from 'react';

import List from '../components/List';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>My Todo List</h1>
                <List />
            </div>
        );
    }
}

export default Home;