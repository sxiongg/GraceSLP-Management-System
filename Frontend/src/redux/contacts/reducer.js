import { Map } from "immutable";
import fakeData from "../../containers/Contacts/fakeData";
import contactActions from "./actions";

const contacts = new fakeData(2).getAll();

const initState = new Map({
  contacts,
  selectedId: contacts[0].id,
  editView: false
});

export default function contactReducer(state = initState, action) {
  switch (action.type) {
    case contactActions.CHANGE_CONTACT:
      return state.set("selectedId", action.id).set("editView", false);
    case contactActions.ADD_CONTACT:
      return state
        .set("contacts", action.contacts)
        .set("selectedId", action.selectedId)
        .set("editView", true);
    case contactActions.EDIT_CONTACT:
      return state.set("contacts", action.contacts);
    case contactActions.DELETE__CONTACT:
      return state
        .set("contacts", action.contacts)
        .set("selectedId", action.selectedId);
    case contactActions.EDIT_VIEW:
      return state.set("editView", action.view);
    default:
      return state;
  }
}

export { contacts };
