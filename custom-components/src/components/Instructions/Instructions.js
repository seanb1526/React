import React, { Component } from 'react';
import './Instructions.css';
import logo from './INP-Logo.svg'

export default class Instructions extends Component {

    render() {
        return (
            <div className="instructions">
                <img alt="custom svg" src={logo} />
                <p>Click on an emoji to view the emoji short name.</p>
            </div>

        )
    }

}