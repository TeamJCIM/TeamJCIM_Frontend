import React, { Component } from 'react';

import CardBasic from '../Basic';

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
            <CardBasic  title="Iot Record">
                <div className='row'>
                    <div className='col-3 card-subtitle'>
                        Iot Number
                    </div>

                    <div className='col-3 card-subtitle'>
                        Temperature
                    </div>

                    <div className='col-3 card-subtitle'>
                        Date
                    </div>

                    <div className='col-3 card-subtitle'>
                        Statics
                    </div>

                </div>

            </CardBasic>
        );
    }
}

export default IotRecord;
