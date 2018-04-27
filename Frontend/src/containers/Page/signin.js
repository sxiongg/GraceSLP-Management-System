import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';
import authAction from '../../redux/auth/actions';
import axios from 'axios';

const { login } = authAction;

class SignIn extends Component {
  state = {
    redirectToReferrer: false,
    username: "",
    password: ""
  };

  handleLogin = () => {
    if (this.state.username === "" || this.state.password === "") {
      alert("Enter user information!")
    }
    else {
      axios.post('http://localhost:5000/api/employees/verify/' + this.state.username + "/" + this.state.password)
        .then(response => {
          if (response.data === "failed") {
            alert("Login Failed");
          }
          else if (response.data === "success") {
            const { login } = this.props;
            login();
            this.props.history.push("/dashboard");
          }
          else {
            alert("Login Failed")
          }
        })
    }
  };

  render() {
    const from = { pathname: '/signin' };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} size="large" placeholder="Username" />
              </div>

              <div className="isoInputWrapper">
                <Input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} size="large" type="password" placeholder="Password" />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Button type="primary" onClick={this.handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>

                <Link to="/forgotpassword" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}
export default connect(
  state => ({
    isLoggedIn: state.Auth.get('idToken') !== null ? true : false,
  }),
  { login }
)(SignIn);
