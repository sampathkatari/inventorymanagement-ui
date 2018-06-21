import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import AppHeader from './header';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <AppHeader />
                <Container className='sticky'>
                    {this.props.children}
                </Container>
            </div>
        )
    }
}

export default App;