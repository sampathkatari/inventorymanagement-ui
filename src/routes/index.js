import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../ui/app';
import Suppliers from '../ui/suppliers';
import Brands from '../ui/brands';
import Products from '../ui/products';
import Home from '../ui/home';
import Login from '../ui/login';
import Dashboard from '../ui/dashboard';
import SupplierDetails from '../ui/supplier-details';
import Checkout from '../ui/checkout';

class InventoryManagementRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Login}/>
                    <Route path='/dashboard'>
                        <IndexRoute component={Dashboard}/>
                        <Route path="/dashboard/home" component={Home}/>
                        <Route path="/dashboard/suppliers">
                        <IndexRoute component={Suppliers} />
                            <Route path="/dashboard/suppliers/:supplierId" component={SupplierDetails}/>
                        </Route>
                        <Route path="/dashboard/brands" component={Brands}/>
                        <Route path="/dashboard/products" component={Products}/>
                        <Route path="/dashboard/checkout" component={Checkout} />
                    </Route>
                </Route>
            </Router>
        )
    }
}

export default InventoryManagementRouter;

