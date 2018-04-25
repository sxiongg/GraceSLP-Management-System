
function ascendingSort(contact1, contact2) {
  const name1 = contact1.name ? contact1.name.toUpperCase() : '~';
  const name2 = contact2.name ? contact2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}


const employeeActions = {
  ADD_EMPLOYEE: 'ADD_EMPLOYEE',
  EDIT_EMPLOYEE: 'EDIT_EMPLOYEE',
  DELETE__EMPLOYEE: 'DELETE__EMPLOYEE',
  CHANGE_EMPLOYEE: 'CHANGE_EMPLOYEE',
  EDIT_VIEW: 'EDIT_VIEW',
  changeContact: (id) => ({
    type: employeeActions.CHANGE_EMPLOYEE,
    id,
  }),
  addContact: () => {
    const newContact = {
      id: new Date(),
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      email: '',
      dob: '',
      doctor: '',
      note: '',
    };
    return (dispatch, getState) => {
      dispatch({
        type: employeeActions.ADD_EMPLOYEE,
        contacts: [...getState().Contacts.get('contacts'), newContact],
        selectedId: newContact.id,
      });
    };
  },
  editContact: (newContact) => {
    return (dispatch, getState) => {
      const contacts = getState().Contacts.get('contacts');
      const newContacts = [];
      contacts.forEach(contact => {
        if (contact.id === newContact.id) {
          newContacts.push(newContact);
        } else {
          newContacts.push(contact);
        }
      });
      dispatch({
        type: employeeActions.EDIT_EMPLOYEE,
        contacts: newContacts.sort(ascendingSort),
      });
    }
  },
  deleteContact: (id) => {
    return (dispatch, getState) => {
      const contacts = getState().Contacts.get('contacts');
      const selectedId = getState().Contacts.get('selectedId');
      const newContacts = [];
      contacts.forEach(contact => {
        if (contact.id === id) {
        } else {
          newContacts.push(contact);
        }
      });
      dispatch({
        type: employeeActions.DELETE__EMPLOYEE,
        contacts: newContacts,
        selectedId: id === selectedId ? undefined : selectedId,
      });
    };
  },
  viewChange: (view) => ({
    type: employeeActions.EDIT_VIEW,
    view,
  }),
};

export default employeeActions;