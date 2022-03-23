import React, { useState, useEffect } from 'react';

function CardInfo (props) {
    // title, icon, value, color
    /* constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            title: this.props.title,
            icon: 'fas fa-calendar fa-2x text-gray-300',
            color: 'primary',
            cardClass: '',
            titleClass: '',
        };
    } */

    const [fontsize, setFontsize] = useState('6')
    const [cardClass, setCardClass] = useState()
    const [icon, setIcon] = useState()
    const [titleClass, setTitleClass] = useState()

    useEffect(() => {
        setCardClass(`card border-left-${props.color} shadow h-60 py-4`)
        setIcon(`fas fa-${props.icon} fa-2x text-${props.color}`)
        setTitleClass(`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`)

        if (props.fontsize) {
            setFontsize(props.fontsize)
        }
    })
        

        return (
            <div>

                <div className={cardClass}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={titleClass}>
                                    {props.title}
                                </div>
                                <div className={"h" + fontsize + " mb-0 font-weight-bold text-gray-800"}>
                                    {props.value}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className={icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default CardInfo;
