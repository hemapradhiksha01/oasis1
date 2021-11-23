import React, { Component } from 'react';
import Joinus from './Joinus';
import Register from './Register';
import PersonalDetails from './PersonalDetails'
import Complete from './Complete';
import Success from './Success';


export class Daddy extends Component {
  state = {
    step: 1,
      fullName: "",
      email: "",
      password: "",
      phoneNo: "",
      address: "",
      country: "",
      bvn: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { fullName, email, password, phoneNo, address, country, bvn } = this.state;
    const values = { fullName, email, password, phoneNo, address, country, bvn };

    switch (step) {
      case 1:
        return (
          <Joinus
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Register
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
          return (
            <Complete
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
      case 5:
        return (
          <Success
          nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}/>
        );
    }
  }
}

export default Daddy;