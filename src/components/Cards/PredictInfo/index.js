import React, { useState, useEffect } from 'react';

export default function PredictInfo(props) {
    const [state, setState] = useState({
        value: props.value,
        title: props.title,
        icon: 'fas fa-calendar fa-2x text-gray-300',
        color: 'primary',
        cardClass: '',
        titleClass: '',
    });
    useEffect(() => {
        setState({
            cardClass: `card border-left-${props.color} shadow h-60 py-4`,
            icon: `fas fa-${props.icon} fa-2x text-${props.color}`,
            titleClass: `text-xs font-weight-bold text-${props.color} text-uppercase mb-1`,
        });
    }, [props]);
    return (
        <div>
            <div className={state.titleClass}>{state.title}</div>
            <div className={state.cardClass}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={state.titleClass}>
                                {props.title}
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {props.value}
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className={state.icon}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
