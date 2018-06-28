import React, { Component } from 'react';
import { Form, Header, Modal, Button } from 'semantic-ui-react';
import SupplierList from './supplier-list';
import { connect } from 'react-redux';
import { getProducts, getBrands, createSupplier, getSuppliers } from '../redux/modules';

export class Suppliers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addModal: false
        }
    }
    componentDidMount() {
        this.props.getSuppliers();
    }
    openAddModal() {
        this.setState({ addModal: true });
    }
    closeAddModal() {
        this.setState({ addModal: false });
    }
    handleInputChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    addSupplier() {
        console.log(this.state)
        this.props.createSupplier({
            name: this.state.name,
            email: this.state.email,
            address: this.state.address
        }, this.successCallback.bind(this))
    }
    successCallback() {
        this.setState({ addModal: false, email: '', name: '', address: '' })
    }
    errorCallback() {

    }
    render() {
        const { list } =this.props.supplier;
        return (
            <div>
                <Header>Suppliers</Header>
                <Button primary onClick={this.openAddModal.bind(this)}>Add Supplier</Button>
                <SupplierList list={list}/>
                <Modal open={this.state.addModal} size='small' onClose={this.closeAddModal.bind(this)}>
                    <Modal.Header>Add New Supplier</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <input name='name' value={this.state.name || ''} onChange={this.handleInputChange.bind(this)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input type='email' name='email' value={this.state.email || ''} onChange={this.handleInputChange.bind(this)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input name='address' value={this.state.address || ''} onChange={this.handleInputChange.bind(this)}/>
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.closeAddModal.bind(this)}>Cancel</Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Add Supplier' onClick={this.addSupplier.bind(this)}/>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
        brand: state.brand,
        supplier: state.supplier
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts()),
        getBrands: () => dispatch(getBrands()),
        getSuppliers: () => dispatch(getSuppliers()),
        createSupplier: (supplier, callback) => dispatch(createSupplier(supplier, callback)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);