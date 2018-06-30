import React, { Component } from 'react';
import { Form, Header, Modal, Button, Dropdown } from 'semantic-ui-react';
import ProductList from './product-list';
import { getProducts, createProduct, getBrands } from '../redux/modules';
import { connect } from 'react-redux';

export class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addModal: false,
            error: false
        }
    }
    componentDidMount() {
        this.props.getProducts();
        if(this.props.brand.list.length === 0) {
            this.props.getBrands();
        }
    }
    openAddModal() {
        this.setState({ addModal: true });
    }
    closeAddModal() {
        this.setState({ addModal: false });
    }
    handleNameChange(evt) {
        const { list } = this.props.product;
        const value = evt.target.value;
        const existing = list.filter(product => {
            return product.name === value
        });
        this.setState({ name: value, error: existing.length > 0 });
    }
    addProduct() {
        console.log(this.state)
        this.props.createProduct({ name: this.state.name, brandId: this.state.brandId }, this.successCallback.bind(this))
    }
    onBrandChange(evt, data) {
        this.setState({ brandId: data.value });
    }
    successCallback() {
        this.setState({ addModal: false, name: '', address: '', brandId: '' })
    }
    errorCallback() {

    }
    render() {
        const brandsList = this.props.brand.list;
        let stateOptions = brandsList.map(brand => {
            return {
                key: brand.id,
                value: brand.id,
                text: brand.name
            }
        });
        let { list } = this.props.product;
        return (
            <div>
                <Header>Products</Header>
                <Button primary onClick={this.openAddModal.bind(this)}>Add Product</Button>
                <ProductList list={list}/>
                <Modal open={this.state.addModal} size='small' onClose={this.closeAddModal.bind(this)}>
                    <Modal.Header>Add New Product</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <input name='name' value={this.state.name || ''} onChange={this.handleNameChange.bind(this)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <Dropdown placeholder='Brand' search selection options={stateOptions} onChange={this.onBrandChange.bind(this)}/>
                            </Form.Field>
                        </Form>
                        {
                            this.state.error === true && 
                            <label>
                                This brand already exists
                            </label>
                        }
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.closeAddModal.bind(this)}>Cancel</Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Add Product'  disabled={this.state.error} onClick={this.addProduct.bind(this)}/>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
        brand: state.brand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts()),
        getBrands: () => dispatch(getBrands()),
        createProduct: (product, callback) => dispatch(createProduct(product, callback)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);