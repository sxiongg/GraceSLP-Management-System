import { Map } from "immutable";
import fakeData from "../../containers/Contacts/fakeData";
import employeeActions from "./actions";

const employees = new fakeData(2).getAll();



const initState = new Map({
  employees,
  selectedId:'',
  editView: false
});

export default function contactReducer(state = initState, action) {


  switch (action.type) {
    case employeeActions.CHANGE_EMPLOYEE:
      return state.set("selectedId", action.id).set("editView", false);
    case employeeActions.ADD_EMPLOYEE:
      return state
        .set("employees", action.employees)
        .set("selectedId", action.selectedId)
        .set("editView", true);
    case employeeActions.EDIT_EMPLOYEE:
      return state.set("employees", action.employees);
    case employeeActions.DELETE__EMPLOYEE:
      return state
        .set("employees", action.employees)
        .set("selectedId", action.selectedId);
    case employeeActions.EDIT_VIEW:
      return state.set("editView", action.view);
    default:
      return state;
  }
}

export { employees };
