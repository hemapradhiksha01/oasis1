import React, {Component} from 'react';
import Quote from './Quote';
import './Register.css';
import back from './Images/next.png'


export class Register extends Component {

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
                <h2 className="step">Step 01/03</h2>
                    <h2 className="topic">Personal Info</h2>
                    <div className="registerContent2">
                    <h1 className="Register1">Register Individual Account!</h1>
                        <h2 className="Register2">For the purpose of industry regulation, your details are required</h2>
                        <form className="registrationForm">
                            <label className="label">
                                Your Fullname*
                                <br></br>
                                <input className="fullname" type="text" name="name" placeholder="Enter your fullname"  onChange={handleChange('fullName')}
                                    defaultValue={values.fullName}/>   
                            </label>
                            <br></br>
                            <label className="label">
                                Email Address*
                                <br></br>
                                <input className="email" type="email" name="name" placeholder="Enter email address"  onChange={handleChange('email')}
                                    defaultValue={values.email} />
                            </label>
                            <br></br>
                            <label className="label">
                                Create Password*
                                <br></br>
                                <input className="password" type="password" name="name" placeholder="Enter password"  onChange={handleChange('password')}
                                    defaultValue={values.password} />
                            </label>
                            <label className="label4">
                                <br></br>
                                <input className="terms" type="checkbox" name="name" onChange={handleChange('password')}
                                    defaultValue={values.password} />
                                I agree to terms and conditions
                            </label>
                            <br></br>
                            <button className="RegisterButton" name="RegisterAccount" onClick={this.continue}>Register Account</button>
                        </form>   
                </div>
                </div>
                
                
                
            </div>
            
        )
    }
}
export default Register
