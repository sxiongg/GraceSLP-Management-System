import clone from 'clone';
import { Map } from 'immutable';
import { newInvoice } from '../../containers/Invoice/config';
import actions from './actions';

const initState = new Map({
  invoices: [],
  initialInvoices: false,
  currentInvoice: {},
  editableInvoice: {},
  isNewInvoice: false,
  enableEditView: false
});

export default function cardReducer(state = initState, { type, ...action }) {
  switch (type) {
    case actions.UPDATE_INVOICE: {
      const currentInvoice = action.invoice
        ? action.invoice
        : state.get('currentInvoice');
      return state
        .set('invoices', action.invoices)
        .set('currentInvoice', clone(currentInvoice))
        .set('initialInvoices', true)
        .set('isNewInvoice', false)
        .set('enableEditView', false);
    }
    case actions.SELECT_CURRENT_INVOICE: {
      const invoices = state.get('invoices');
      const index = invoices.map(invoice => invoice.id).indexOf(action.id);
      const isNewInvoice = index === -1;
      const currentInvoice = isNewInvoice
        ? {
            id: action.id,
            number: `#${action.id}`,
            key: action.id,
            ...newInvoice
          }
        : invoices[index];
      const enableEditView = isNewInvoice;
      return state
        .set('currentInvoice', currentInvoice)
        .set('editableInvoice', clone(currentInvoice))
        .set('isNewInvoice', isNewInvoice)
        .set('enableEditView', enableEditView);
    }
    case actions.TOGGLE_VIEW:
      return state
        .set('enableEditView', action.view)
        .set('editableInvoice', clone(state.get('currentInvoice')));
    case actions.UPDATE_EDIT_INVOICE:
      return state.set('editableInvoice', clone(action.invoice));
    default:
      return state;
  }
}
