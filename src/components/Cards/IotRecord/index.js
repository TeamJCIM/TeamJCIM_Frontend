import React from 'react';

import CardBasic from '../Basic';
import { Table } from 'react-bootstrap';

const IotRecord = (props) => {

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
                                <button type="button" class="btn btn-danger btn-sm">
                                    Danger
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </CardBasic>
        );
}

export default IotRecord;
