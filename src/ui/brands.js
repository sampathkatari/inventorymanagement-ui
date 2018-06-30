import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Header, Modal, Button, Dropdown } from 'semantic-ui-react';
import BrandList from './brand-list';
import { getBrands, createBrand } from '../redux/modules';

export class Brands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addModal: false,
            error: false
        }
    }
    componentDidMount() {
        this.props.getBrands();
    }
    openAddModal() {
        this.setState({ addModal: true });
    }
    closeAddModal() {
        this.setState({ addModal: false });
    }
    handleNameChange(evt) {
        const { list } = this.props.brand;
        const value = evt.target.value;
        const existing = list.filter(brand => {
            return brand.name === value
        });
        this.setState({ name: value, error: existing.length > 0 });
    }
    addBrand() {
        console.log(this.state)
        this.props.createBrand({name: this.state.name}, this.successCallback.bind(this))
    }
    successCallback() {
        this.setState({ addModal: false, name: '' })
    }
    errorCallback() {

    }
    render() {
        const { list } = this.props.brand;
        return (
            <div>
                <Header>Brands</Header>
                <Button primary onClick={this.openAddModal.bind(this)}>Add Brand</Button>
                <BrandList list={list}/>
                <Modal open={this.state.addModal} size='small' onClose={this.closeAddModal.bind(this)}>
                    <Modal.Header>Add New Brand</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <input name='name' value={this.state.name || ''} onChange={this.handleNameChange.bind(this)}/>
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
                        <Button positive icon='checkmark' labelPosition='right' content='Add Brand' disabled={this.state.error} onClick={this.addBrand.bind(this)}/>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        brand: state.brand
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBrands: () => dispatch(getBrands()),
        createBrand: (brand, callback) => dispatch(createBrand(brand, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands);