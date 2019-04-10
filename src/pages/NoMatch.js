import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
    render() {
        return (
            <div>
                <h1>Error</h1>
                <h4>Something goes wrong.</h4>
                <Link to="/">Go back</Link>
            </div>
        );
    }
}

export default NoMatch;