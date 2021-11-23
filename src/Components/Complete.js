import React, {Component} from 'react';
import Quote from './Quote';
import './Register.css';
import back from './Images/next.png'
import './PersonalDetails.css'


export class Complete extends Component {

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
                <h2 className="step">Step 03/03</h2>
                    <h2 className="topic">Bank Verification</h2>
                    <div className="registerContent2">
                    <h1 className="Register1">Complete Your Profile!</h1>
                        <h2 className="Register2">For the purpose of industry regulation, your details are required</h2>
                        <form className="registrationForm">
                            <label className="label">
                                Bank verification number(BVN)*
                                <br></br>
                                <input className="fullname" type="text" name="phoneno" placeholder="Enter your BVN number"  onChange={handleChange('bvn')}
                                    defaultValue={values.bvn}/>   
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
export default Complete
