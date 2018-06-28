import React, { Component } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onChange(evt) {
        this.setState({ [evt.target.name]: evt.targe.value });
    }
    render() {
        return (
            <div>
                <Header>
                    Login Form
                </Header>
                <Form>
                    <Form.Field>
                        <label>Username:</label>
                        <input name='username' value={this.state.username} onChnage={this.onChange.bind(this)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input name='password' value={this.state.password} onChnage={this.onChange.bind(this)}/>
                    </Form.Field>
                </Form>
                <Button primary>Login</Button>
            </div>
        )
    }
}

export default Login;