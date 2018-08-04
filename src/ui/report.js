import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReports } from '../redux/modules';
import { Table, Header, Form, Button } from 'semantic-ui-react';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value });
    }
    getReports() {
        this.props.getReports(this.state.startDate, this.state.endDate);
    }
    render() {
        const { reports } = this.props;
        return (
            <div>
                <Header>
                    <Header.Content>
                        Reports
                    </Header.Content>
                </Header>
                <Form>
                    <Form.Field>
                        <label>Start Date(DD/MM/YYYY)</label>
                        <input name='startDate' value={this.state.startDate} onChange={this.handleChange.bind(this)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>End Date(DD/MM/YYYY)</label>
                        <input name='endDate' value={this.state.endDate} onChange={this.handleChange.bind(this)}/>
                    </Form.Field>
                </Form>
                <Button onClick={this.getReports.bind(this)}>Get Reports</Button>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Product Name</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {
                    reports.map(report => {
                        return (
                            <Table.Row>
                                <Table.Cell >{report.supplierEmail}</Table.Cell>
                                <Table.Cell>{report.productName}</Table.Cell>
                                <Table.Cell>{report.quantity}</Table.Cell>
                                <Table.Cell>{report.quantity}</Table.Cell>
                            </Table.Row>
                        )
                    })
                }
                
                </Table.Body>
            </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reports: state.supplier.reports
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReports: (startDate, endDate) => dispatch(getReports(startDate, endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report);