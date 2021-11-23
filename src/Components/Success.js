import React, { Component } from 'react'
import Quote from './Quote'
import './Success.css'

export class Success extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="Success">
                <Quote className="quote" />
                
                <div className="SuccessContent">
                    <h1 className="title">Successfully Registered</h1>
                    <button className="Button1" name="RegisterAccount" onClick={this.back}>Edit details</button>
                </div>
            </div>
        )
    }
}

export default Success
