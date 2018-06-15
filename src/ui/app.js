import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Inventory Management</h1>
                {this.props.children}
            </div>
        )
    }
}

export default App;