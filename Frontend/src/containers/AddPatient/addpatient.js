import React, { Component } from 'react';
import { Link } from 'react-router-dom'; import IntlMessages from '../../components/utility/intlMessages';
import SignUpStyleWrapper from '../Page/signup.style';
import Input from '../../components/uielements/input';
import Button from '../../components/uielements/button';
import axios from 'axios';
import Select, { SelectOption } from '../../components/uielements/select';
const Option = SelectOption;

class AddPatient extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    doctorNotes: [],
    dob: "",
    doctorId: 0,
    locationId: 0,
    appointments: []
  };

  postPatient = () => {
    let newPatient = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address,
      dob: this.state.dob,
      doctorId: this.state.doctorId,
      locationId: this.state.locationId,
      doctorNotes: this.state.doctorNotes,
      appointments: this.state.appointments,
    }

    let headers = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }

    console.log(newPatient);

    axios.post('http://localhost:5000/api/patients', newPatient, headers)
      .then(
        response => {
          if (response.status === 200) {
            alert("Added new patient.")
          }
          else {
            alert("Patient was not added. Please try again.")
          }
        })

  }
  render() {
    return (
      <SignUpStyleWrapper className="isoSignUpPage">
        <div className="isoSignUpContentWrapper">
          <div className="isoSignUpContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.newPatient" />
              </Link>
            </div>

            <div className="isoSignUpForm">
              <div className="isoInputWrapper isoLeftRightComponent">
                <Input value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} size="large" placeholder="First name" />
                <Input value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} size="large" placeholder="Last name" />
              </div>

              <div className="isoInputWrapper">
                <Input value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} size="large" placeholder="Phone" />
              </div>

              <div className="isoInputWrapper">
                <Input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} size="large" placeholder="Email" />
              </div>

              <div className="isoInputWrapper">
                <Input value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} size="large" placeholder="Address" />
              </div>

              <div className="isoInputWrapper">
                <Input
                  value={this.state.dob} onChange={(e) => this.setState({ dob: e.target.value })}
                  size="large" placeholder="DOB YYYY-MM-DD"
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Select
                  defaultValue="Doctor"
                  onChange={(e) => this.setState({ doctorId: e })}
                  style={{ width: '100%' }}
                >
                  <Option value="1">Dr. Grace</Option>
                </Select>
              </div>

              <div className="isoInputWrapper">
                <Select
                  defaultValue="Location"
                  onChange={(e) => this.setState({ locationId: e })}
                  style={{ width: '100%' }}
                >
                  <Option value="1">Location 1</Option>
                </Select>
              </div>

              <div className="isoInputWrapper">
                <Link to="/dashboard/patients">
                  <Button onClick={this.postPatient} type="primary">
                    <IntlMessages id="sidebar.addPatient" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignUpStyleWrapper>
    )
  }
}

export default AddPatient;