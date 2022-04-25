import React, { Component } from 'react';

class CardBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
        };
    }

    render() {
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-4">
                    <h6 className="m-0 font-weight-bold text-primary">
                        {this.state.title}
                    </h6>
                </div>
                <div className="iot-card-body">{this.props.children}</div>
            </div>
        );
    }

    
}

export default CardBasic;
