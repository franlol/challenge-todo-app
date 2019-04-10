import React, { Component } from 'react';

import List from '../components/List';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>My task list:</h1>
                <List />
            </div>
        );
    }
}

export default Home;