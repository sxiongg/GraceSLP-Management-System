import React, { Component } from 'react';
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
      <Popconfirm
        title={`Sure to delete ${name}?`}
        okText="DELETE"
        cancelText="No"
        onConfirm={() => {

          notification('error', `${name} Deleted`, '');
          axios.delete('http://localhost:5000/api/patients/' + contact.id)
            .then((response) => {
              console.log(response);
            })
        }}
      >
        <Button icon="close" type="button" className="isoDeleteBtn"/>
      </Popconfirm >
    );



  }
}
