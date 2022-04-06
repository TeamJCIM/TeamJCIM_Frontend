import React from 'react';
import axios from 'axios';

export default function TextBox(props) {
    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <nav class="navbar navbar-expand navbar-light bg-light mb-4">
            <div class="col-auto">
                <i class={props.img}></i>
            </div>
            <input
                onChange={handleChange}
                type="text"
                class="form-control bg-light border-0"
                placeholder={props.text}
                disabled={props.state}
            />
        </nav>
    );
}
