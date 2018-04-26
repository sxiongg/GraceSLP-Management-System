import React, { Component } from 'react';
import { Link } from 'react-router-dom';import IntlMessages from '../../components/utility/intlMessages';
import SignUpStyleWrapper from '../Page/signup.style';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import axios from 'axios';
import Checkbox from '../../components/uielements/checkbox';
import Select, { SelectOption } from '../../components/uielements/select';
const Option = SelectOption;

class AddPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
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

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox value={this.state.isAdmin} onChange={(e) => this.setState({ isAdmin: true })}>Admin</Checkbox>
                <Select
                  defaultValue="Location"
                  onChange={(e) => this.setState({ locationId: e })}
                  style={{ width: '300px' }}
                >
                  <Option value="1">Location 1</Option>
                </Select>
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
        )
    }
}

export default AddPatient;