import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../ui/app';
import Supplier from '../ui/supplier';

class InventoryManagementRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/supplier" component={Supplier}/>
                </Route>
            </Router>
        )
    }
}

export default InventoryManagementRouter;

