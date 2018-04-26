import React, { Component } from "react";
import { connect } from "react-redux";
import contactAction from "../../redux/contacts/actions";
import { Layout, Icon } from "antd";
import Button from "../../components/uielements/button";
import ContactList from "../../components/contacts/contactList";
import SingleContactView from "../../components/contacts/singleView";
import EditContactView from "../../components/contacts/editView";
import { otherAttributes } from "./fakeData";
import { ContactsWrapper } from "./contacts.style";
import Scrollbar from "../../components/utility/customScrollBar.js";
import axios from "axios";

const {
  changeContact,
  // addContact,
  editContact,
  deleteContact,
  viewChange
} = contactAction;

const { Content } = Layout;
class Employees extends Component {

  constructor(props) {
    super(props);
    this.state = {
        employees: []
    }
}

componentDidMount() {
  axios.get('http://localhost:5000/api/employees')
  .then(response => {
      console.log (response.data);

      this.setState ({ employees: response.data })
  })
}


  render() {
    const {
      selectedId,
      editView,
      changeContact,
      // addContact,
      editContact,
      deleteContact,
      viewChange
    } = this.props;

    const selectedContact = selectedId
      ? this.state.employees.filter(contact => contact.id === selectedId)[0]
      :null;
    const onVIewChange = () => viewChange(!editView);
    return (
      <ContactsWrapper
        className="isomorphicContacts"
        style={{ background: "none" }}
      >
        <div className="isoContactListBar">
          <ContactList
            contacts={this.state.employees}
            selectedId={selectedId}
            changeContact={changeContact}
            deleteContact={deleteContact}
          />
        </div>
        <Layout className="isoContactBoxWrapper">
          {selectedContact ? (
            <Content className="isoContactBox">
              <div className="isoContactControl">
                  {editView ? <div></div> : <Button type="button" onClick={onVIewChange}><Icon type="edit" />}</Button>}{" "}
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


export default connect(mapStateToProps,{
  changeContact,
  // addContact,
  editContact,
  deleteContact,
  viewChange
} )(Employees);
