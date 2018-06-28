import React, { Component } from 'react';
import { Grid, Statistic } from 'semantic-ui-react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Statistic>
                            <Statistic.Value>100</Statistic.Value>
                            <Statistic.Label>Suppliers</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic>
                            <Statistic.Value>300</Statistic.Value>
                            <Statistic.Label>Brands</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic>
                            <Statistic.Value>5000</Statistic.Value>
                            <Statistic.Label>Products</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Dashboard;