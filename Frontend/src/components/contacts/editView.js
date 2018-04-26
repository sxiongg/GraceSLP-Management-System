import React, { Component } from 'react';
import Input, { Textarea } from '../uielements/input';
import { ContactCardWrapper } from './contactCard.style';
import { Link } from 'react-router-dom';
import Button from '../../components/uielements/button';
import './upload.css';
import axios from 'axios';


export default class extends Component {

  saveChanges = () => {
    alert("Changes Saved");

    var found = false;

    for (var i = 0; i < this.props.otherAttributes.length; i++) {

      if (this.props.otherAttributes[i].title === "Position") {
        console.log('found employee')
        console.log(this.props.contact)
        axios.put('http://localhost:5000/api/employees/' + this.props.contact.id, this.props.contact)
        found = true;
      }
      else if (!found) {
        console.log('found patient')
        axios.put('http://localhost:5000/api/patients/' + this.props.contact.id, this.props.contact)
        break;
      }
    }
  }

  render() {
    const { contact, otherAttributes } = this.props;
    const extraInfos = [];
    const names = [
      { value: 'firstName', title: 'First Name' },
      { value: 'lastName', title: 'Last Name' }
    ];
    [...names, ...otherAttributes].forEach(attribute => {
      const value = contact[attribute.value];
      const editContact = event => {
        contact[attribute.value] = event.target.value;
        let name = '';
        if (contact.firstName) {
          name = `${contact.firstName} `;
        }
        if (contact.lastName) {
          name = `${name}${contact.lastName}`;
        }
        contact.name = name;
        this.props.editContact(contact);
      };
      if (attribute.value === 'note') {
        extraInfos.push(
          <div className="isoContactCardInfos" key={attribute.value}>
            <p className="isoInfoLabel">{`${attribute.title}`}</p>
            <Textarea
              placeholder={`${attribute.title}`}
              value={value}
              type="textarea"
              rows={5}
              onChange={event => editContact(event)}
            />
          </div>
        );
      } else {
        extraInfos.push(
          <div className="isoContactCardInfos" key={attribute.value}>
            <p className="isoInfoLabel">{`${attribute.title}`}</p>
            <Input
              placeholder={`${attribute.title}`}
              value={value}
              onChange={event => editContact(event)}
            />
          </div>
        );
      }
    });
    return (
      <ContactCardWrapper className="isoContactCard">
        <div className="isoContactCardHead">
          <h1 className="isoPersonName">{contact.firstName} {contact.lastName}</h1>
          <Link to="/dashboard"><Button style={{ marginTop: "25px" }} type="primary" onClick={this.saveChanges}> Submit Changes
          </Button></Link>
        </div>
        <div className="isoContactInfoWrapper">{extraInfos}</div>
      </ContactCardWrapper>
    );
  }
}
