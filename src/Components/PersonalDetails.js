import React, {Component} from 'react';
import Quote from './Quote';
import './Register.css';
import back from './Images/next.png'
import './PersonalDetails.css'


export class PersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    
    render() {

        const { values, handleChange } = this.props;
        return (
            <div className="Register">
                <Quote className="quote" />
                <div className="registerContent" onClick={this.back}>
                    <img className="back" src={back}  />
                    <h3 className="backText">Back</h3>
                    
                </div>
                <div className="Topic">
                <h2 className="step">Step 02/03</h2>
                    <h2 className="topic">Residency Info.</h2>
                    <div className="registerContent2">
                    <h1 className="Register1">Complete Your Profile!</h1>
                        <h2 className="Register2">For the purpose of industry regulation, your details are required</h2>
                        <form className="registrationForm">
                            <label className="label">
                                Phone Number*
                                <br></br>
                                <input className="fullname" type="text" name="phoneno" placeholder="Enter your number"  onChange={handleChange('phoneNo')}
                                    defaultValue={values.phoneNo}/>   
                            </label>
                            <br></br>
                            <label className="label">
                                Your Address*
                                <br></br>
                                <input className="address" type="text" name="address"name placeholder="Please enter address"  onChange={handleChange('address')}
                                    defaultValue={values.address} />
                            </label>
                            <br></br>
                            <label className="label">
                                Country of Residence*
                                <br></br>
                                <input className="country" type="text" name="country" placeholder="Enter Country"  onChange={handleChange('country')}
                                    defaultValue={values.country} />
                            </label>
                            <br></br>
                            <button className="RegisterButton" name="RegisterAccount" onClick={this.continue}>Save & Continue</button>
                        </form>   
                </div>
                </div>
                
                
                
            </div>
            
        )
    }
}
export default PersonalDetails
