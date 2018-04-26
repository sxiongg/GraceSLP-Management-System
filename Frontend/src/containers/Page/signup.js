import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
// import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
// import authAction from '../../redux/auth/actions';
// import Auth0 from '../../helpers/auth0/index';
// import Firebase from '../../helpers/firebase';
// import  FirebaseLogin from '../../components/firebase';
import IntlMessages from '../../components/utility/intlMessages';
import SignUpStyleWrapper from './signup.style';
import axios from 'axios';
import Checkbox from '../../components/uielements/checkbox';
import Select, { SelectOption } from '../../components/uielements/select';
const Option = SelectOption;


// const { login } = authAction;

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    verifyPassword: "",
    email: "",
    position: "",
    daysAvailable: "",
    startTime: "",
    endTime: "",
    isAdmin: false
  };

  handleLogin = () => {
    console.log(this.state);
    if (this.state.password === this.state.verifyPassword) {
      let newAccount = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        position: this.state.position,
        isAdmin: this.state.isAdmin,
        daysAvailable: this.state.daysAvailable,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
      };

      axios.post('http://localhost:5000/api/employees', newAccount, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
      })
    //   ).then(
    //     response => {
    //       if (response.status === 200) {
    //         alert("Account created.")
    //       }
    //       else {
    //         alert("Account was not created. Please try again.")
    //       }
    //     }
    //   )
    // }
    //   else {
    //     alert("Passwords do not match.");
    //   }

    //   axios({
    //     method: 'post',
    //     url: 'http://localhost:5000/api/employees',
    //     data: {
    //       firstName: this.state.firstName,
    //       lastName: this.state.lastName,
    //       email: this.state.email,
    //       username: this.state.username,
    //       position: this.state.position,
    //       isAdmin: this.state.isAdmin,
    //       daysAvailable: this.state.daysAvailable,
    //       startTime: this.state.startTime,
    //       endTime: this.state.endTime,
    //     },
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(
    //     response => {
    //       if (response.status === 200) {
    //         alert("Account created.")
    //       }
    //       else {
    //         alert("Account was not created. Please try again.")
    //       }
    //     }
    //   )
    // }
    // else {
    //   alert("Passwords do not match.");
    // }
  }};

  render() {
    return (
      <SignUpStyleWrapper className="isoSignUpPage">
        <div className="isoSignUpContentWrapper">
          <div className="isoSignUpContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signUpTitle" />
              </Link>
            </div>

            <div className="isoSignUpForm">
              <div className="isoInputWrapper isoLeftRightComponent">
                <Input value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} size="large" placeholder="First name" />
                <Input value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} size="large" placeholder="Last name" />
              </div>

              <div className="isoInputWrapper">
                <Input value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} size="large" placeholder="Username" />
              </div>

              <div className="isoInputWrapper">
                <Input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} size="large" placeholder="Email" />
              </div>

              <div className="isoInputWrapper">
                <Input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} size="large" type="password" placeholder="Password" />
              </div>

              <div className="isoInputWrapper">
                <Input
                  value={this.state.verifyPassword} onChange={(e) => this.setState({ verifyPassword: e.target.value })}
                  size="large"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="isoInputWrapper">
                <Input value={this.state.position} onChange={(e) => this.setState({ position: e.target.value })} size="large" placeholder="Position" />
              </div>

              <div className="isoInputWrapper">
                <Checkbox value={this.state.isAdmin} onChange={(e) => this.setState({ isAdmin: true })}>Admin</Checkbox>
              </div>

              <p>Schedule</p>
              <div className="isoInputWrapper">
                <Input
                  value={this.state.daysAvailable} onChange={(e) => this.setState({ daysAvailable: e.target.value })}
                  size="large"
                  placeholder="Days Available"
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <p>Start Time</p>
                <Input value={this.state.startTime} onChange={(e) => this.setState({ startTime: e.target.value })} size="large" type="time" placeholder="Start Time" />
                <p>End Time</p>
                <Input value={this.state.endTime} onChange={(e) => this.setState({ endTime: e.target.value })} size="large" type="time" placeholder="End Time" />
              </div>

              <div className="isoInputWrapper">
                <Button onClick={this.handleLogin} type="primary">
                  <IntlMessages id="page.signUpButton" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SignUpStyleWrapper>
    );
  }
}

export default SignUp;
