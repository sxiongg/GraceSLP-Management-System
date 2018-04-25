import React, { Component } from "react";
import { connect } from "react-redux";
import contactAction from "../../redux/contacts/actions";
import { Layout, Icon } from "antd";
import Button from "../../components/uielements/button";
import ContactList from "../../components/contacts/contactList";
import SingleContactView from "../../components/contacts/singleView";
import EditContactView from "../../components/contacts/editView";
import DeleteButton from "../../components/contacts/deleteButton";
import { otherAttributes } from "./fakeData";
import IntlMessages from "../../components/utility/intlMessages";
import { ContactsWrapper } from "./contacts.style";
import Scrollbar from "../../components/utility/customScrollBar.js";
import axios from "axios";

const {
  changeContact,
  addContact,
  editContact,
  deleteContact,
  viewChange
} = contactAction;

const { Content } = Layout;
class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
        contacts: []
    }
}

componentDidMount() {
  axios.get('http://localhost:5000/api/patients')
  .then(response => {
      this.setState ({ contacts: response.data })
      console.log (response.data);
      for ( var e = 0; e < response.data.length; e++) {
        this.state.contacts[e].dob = response.data[e].dob.substring(0,10)
      }
  })
}

  render() {
    const {
      // contacts,
      selectedId,
      editView,
      changeContact,
      addContact,
      editContact,
      deleteContact,
      viewChange
    } = this.props;

    const selectedContact = selectedId
      ? this.state.contacts.filter(contact => contact.id === selectedId)[0]
      :null;
    const onVIewChange = () => viewChange(!editView);
    return (
      <ContactsWrapper
        className="isomorphicContacts"
        style={{ background: "none" }}
      >
        <div className="isoContactListBar">
          <ContactList
            contacts={this.state.contacts}
            selectedId={selectedId}
            changeContact={changeContact}
            deleteContact={deleteContact}
          />
        </div>
        <Layout className="isoContactBoxWrapper">
          {selectedContact ? (
            <Content className="isoContactBox">
              <div className="isoContactControl">
                <Button type="button" onClick={onVIewChange}>
                  {editView ? <Icon type="check" /> : <Icon type="edit" />}{" "}
                </Button>
                <DeleteButton
                  deleteContact={deleteContact}
                  contact={selectedContact}
                />
                <Button
                  type="primary"
                  onClick={addContact}
                  className="isoAddContactBtn"
                >
                  <IntlMessages id="contactlist.addNewContact" />
                </Button>
              </div>

              <Scrollbar className="contactBoxScrollbar">
                {editView ? (
                  <EditContactView
                    contact={selectedContact}
                    editContact={editContact}
                    otherAttributes={otherAttributes}
                  />
                ) : (
                  <SingleContactView
                    contact={selectedContact}
                    otherAttributes={otherAttributes}
                  />
                )}
              </Scrollbar>
            </Content>
          ) : (
            <div className="isoContactControl">
              <Button
                type="primary"
                onClick={addContact}
                className="isoAddContactBtn"
              >
                <IntlMessages id="contactlist.addNewContact" />
              </Button>
            </div>
          )}
        </Layout>
      </ContactsWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { contacts, selectedId, editView } = state.Contacts.toJS();
  return {
    contacts,
    selectedId,
    editView
  };
}
export default connect(mapStateToProps, {
  changeContact,
  addContact,
  editContact,
  deleteContact,
  viewChange
})(Contacts);
