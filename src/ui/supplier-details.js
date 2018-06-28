import React, { Component } from 'react';
import { Form, Header, Modal, Button, Dropdown } from 'semantic-ui-react';
import SupplierList from './supplier-list';
import { connect } from 'react-redux';
import { getProducts, getBrands, createSupplier, getSuppliers, getSupplierProducts, createSupplierProducts, createSupplierProduct } from '../redux/modules';
import SupplierProductList from './supplier-product-list';

export class SupplierDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addProductsModal: false
        }
    }
    componentDidMount() {
        this.props.getSuppliers();
        this.props.getProducts();
        this.props.getSupplierProducts(this.props.params.supplierId);
    }
    openAddProductModal() {
        this.setState({ addProductsModal: true })
    }
    closeAddProductModal() {
        this.setState({ addProductsModal: false });
    }
    handleInputChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    onProductChange(evt, data) {
        this.setState({ productId: data.value });
    }
    addSupplierProduct() {
        console.log(this.state)
        this.props.createSupplierProduct({
            supplierId: parseInt(this.props.params.supplierId),
            productId: this.state.productId,
            quantity: this.state.quantity

        }, this.successCallback.bind(this))
    }
    successCallback() {
        this.setState({ addProductsModal: false, supplierId: '', productId: '', quantity: 0 })
    }
    errorCallback() {

    }
    render() {
        console.log(this.props)
        const supplierDetail = this.props.supplier.list.filter(supplier => {
            return supplier.id === parseInt(this.props.params.supplierId)
        }) || [{}];
        const productOptions = this.props.product.list.map(product => {
            return {
                key: product.id,
                value: product.id,
                text: product.name
            }
        })
        return (
            <div>
                <Header>{supplierDetail.length > 0 ? supplierDetail[0].name : ''}</Header>
                <Button primary onClick={this.openAddProductModal.bind(this)}>Add Products To Supplier</Button>

                <SupplierProductList list={this.props.supplier.supplierProducts}/>
                <Modal open={this.state.addProductsModal} size='small' onClose={this.closeAddProductModal.bind(this)}>
                    <Modal.Header>Add Products To Supplier</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Product</label>
                                <Dropdown placeholder='Product' search selection options={productOptions} onChange={this.onProductChange.bind(this)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Quantity</label>
                                <input name='quantity' value={this.state.quantity || ''} onChange={this.handleInputChange.bind(this)}/>
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.closeAddProductModal.bind(this)}>Cancel</Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Add Supplier' onClick={this.addSupplierProduct.bind(this)}/>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
        supplier: state.supplier
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts()),
        getBrands: () => dispatch(getBrands()),
        getSuppliers: () => dispatch(getSuppliers()),
        getSupplierProducts: (supplierId) => dispatch(getSupplierProducts(supplierId)),
        createSupplierProduct: (supplierProduct, callback) => dispatch(createSupplierProduct(supplierProduct, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierDetails);