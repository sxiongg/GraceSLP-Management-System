import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popconfirm from '../feedback/popconfirm';
import Button from '../uielements/button';
import notification from '../notification';
import axios from 'axios';


export default class extends Component {

  render() {

    const { contact } = this.props;

    let name = '';
    if (contact.firstName) {
      name = `${contact.firstName} `;
    }
    if (contact.lastName) {
      name = `${name}${contact.lastName}`;
    }
    if (!name) {
      name = 'No Name';
    }
    return (
      <Link to="/dashboard">
        <Popconfirm
          title={`Sure to delete ${name}?`}
          okText="DELETE"
          cancelText="No"
          onConfirm={() => {

            notification('error', `${name} Deleted`, '');

            var found = false;

            if (contact.password) {
              console.log("employee");
              axios.delete('http://localhost:5000/api/employees/' + contact.id)
                .then((response) => {
                  console.log(response);
                })
              found = true;
            }
            else if (!found) {
              console.log("patient");
              axios.delete('http://localhost:5000/api/patients/' + contact.id)
                .then((response) => {
                  console.log(response);
                })
            }
          }
          }
        >
          <Button icon="close" type="button" className="isoDeleteBtn" />
        </Popconfirm ></Link>
    );



  }
}
