import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { hashHistory } from 'react-router';

export default class SupplierProductListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item } = this.props;
        return (
            <Table.Row>
                <Table.Cell>{item.product.name}</Table.Cell>
                <Table.Cell>{item.quantity}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
            </Table.Row>
        )
    }
}