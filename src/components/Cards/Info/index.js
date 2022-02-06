import React, { Component } from 'react';

class CardInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
            title: this.props.title,
            icon: 'fas fa-calendar fa-2x text-gray-300',
            color: 'primary',
            cardClass: '',
            titleClass:''
        }
    }

    componentDidMount() {
        this.setState({cardClass: `card border-left-${this.props.color} shadow h-60 py-4`})
        this.setState({icon: `fas fa-${this.props.icon} fa-2x text-${this.props.color}`})
        this.setState({titleClass: `text-xs font-weight-bold text-${this.props.color} text-uppercase mb-1`})
    }

    render() {
        return (
            <div className="col-xl-3 col-md-6 mb-4">
                <div className={this.state.titleClass}>{this.state.title}</div>
                
                <div className={this.state.cardClass}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            
                            <div className="col mr-2 align">
                                <i className={this.state.icon}></i>
                            </div>

                            <div className="col-auto">
                                {/* <div className={this.state.titleClass}>{this.props.title}</div> */}
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.value}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardInfo;