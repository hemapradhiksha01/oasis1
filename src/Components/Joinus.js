import React, {Component} from 'react'
import './Joinus.css'
import individual from './Images/individual.png';
import business from './Images/business.png';
import arrow from './Images/right-arrow.png';
import Register from './Register';
import { render } from 'react-dom';
import Quote from './Quote';

export class Joinus extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
    render() {

        const { values, handleChange } = this.props;
        return(
        <div className="joinus">
        <Quote className="quote" />   
                
        <div className="joinusContent">
            <h2 className="joinus1"> Already have an account? Sign In</h2>
            <h1 className="joinus2">Join Us!</h1>
            <h2 className="joinus3">To begin this journey, tell us what type of account you'd be opening.</h2>
            <div className="typeofaccount" onClick={this.continue}>
                <img className="individual" src={individual}></img>
                <h3 className="typeofaccount1">Individual</h3>
                <h4 className="description1">Personal account to manage all your activities.</h4>
                <img className="arrow" src={arrow}></img>
            </div>
            <div className="typeofaccount">
                <img className="business" src={business}></img>
                <h3 className="typeofaccount1">Business</h3>
                <h4 className="description2">Own or belong to a company, this is for you.</h4>
                <img className="arrow" src={arrow}></img>
            </div>
        </div>
    </div>
    )  
}
}

export default Joinus
