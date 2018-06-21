import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../ui/app';
import Suppliers from '../ui/suppliers';
import Brands from '../ui/brands';
import Products from '../ui/products';
import Home from '../ui/home';

class InventoryManagementRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/home" component={Home}/>
                    <Route path="/suppliers" component={Suppliers}/>
                    <Route path="/brands" component={Brands}/>
                    <Route path="/products" component={Products}/>
                </Route>
            </Router>
        )
    }
}

export default InventoryManagementRouter;

