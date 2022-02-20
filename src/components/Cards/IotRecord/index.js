import React, { Component } from 'react';

import CardBasic from '../Basic';
import { Table } from 'react-bootstrap';
import { Button } from 'bootstrap';

class IotRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            title: this.props.title,
            icon: 'fas fa-calendar fa-2x text-gray-300',
            color: 'primary',
            cardClass: '',
            titleClass: '',
        };
    }

    componentDidMount() {

        this.setState({ cardClass: `card border-left-${this.props.color} shadow h-60 py-4` })
        this.setState({ icon: `fas fa-${this.props.icon} fa-2x text-${this.props.color}` })
        this.setState({ titleClass: `text-xs font-weight-bold text-${this.props.color} text-uppercase mb-1` })
    }

    render() {
        return (
            <CardBasic  title="IOT Record">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Iot Number</th>
                            <th>Temperature</th>
                            <th>Date</th>
                            <th>Statics</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>90008501</td>
                            <td>55℃</td>
                            <td>2022/01/25</td>
                            <td>
                                <button type="button" class="btn btn-success btn-sm">
                                    Safety
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>90008502</td>
                            <td>60℃</td>
                            <td>2022/01/27</td>
                            <td>
                                <button type="button" class="btn btn-warning btn-sm">
                                    Caution
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>90008503</td>
                            <td>55℃</td>
                            <td>2022/01/29</td>
                            <td>
                                <button type="button" class="btn btn-primary btn-sm">
                                    Danger
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </CardBasic>
        );
    }
}

export default IotRecord;
