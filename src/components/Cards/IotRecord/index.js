import React from 'react';

import CardBasic from '../Basic';
import { Table } from 'react-bootstrap';

const IotRecord = (props) => {
        console.log('time', props.time)
        return (
            <CardBasic title="IOT Record">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Iot Number</th>
                            <th>Temperature</th>
                            <th>Time</th>
                            <th>Statics</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.iotnum}</td>
                            <td>{Math.floor(Math.random() * (60 - 40)) + 40 + '℃'}</td>
                            <td>{props.time[3]}</td>
                            <td>
                                <button type="button" className="btn btn-warning btn-sm">
                                    Caution
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>{props.iotnum}</td>
                            <td>{Math.floor(Math.random() * (60 - 40)) + 40 + '℃'}</td>
                            <td>{props.time[2]}</td>
                            <td>
                                <button type="button" className="btn btn-warning btn-sm">
                                    Caution
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>{props.iotnum}</td>
                            <td>{Math.floor(Math.random() * (60 - 40)) + 40 + '℃'}</td>
                            <td>{props.time[1]}</td>
                            <td>
                                <button type="button" className="btn btn-warning btn-sm">
                                    Caution
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>{props.iotnum}</td>
                            <td>{Math.floor(Math.random() * (60 - 40)) + 40 + '℃'}</td>
                            <td>{props.time[0]}</td>
                            <td>
                                <button type="button" className="btn btn-warning btn-sm">
                                    Caution
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </CardBasic>
        );
}

export default IotRecord;
