import { Map } from 'immutable';
import clone from 'clone';
import actions from './actions';

const initState = new Map({
  loadingInitData: false,
  view: 'gridView',
  viewTopbarCart: false,
  productQuantity: [],
  products: {}
});
export default (state = initState, action) => {
  switch (action.type) {
    case actions.INIT_DATA:
      return state
        .set('productQuantity', action.payload.productQuantity)
        .set('products', action.payload.products)
        .set('loadingInitData', true);
    case actions.CHANGE_VIEW:
      return state.set('view', action.view);
    case actions.VIEW_TOPBAR_CART:
      return state.set('viewTopbarCart', action.viewTopbarCart);

    case actions.UPDATE_DATA:
      return state
        .set('products', clone(action.products))
        .set('productQuantity', clone(action.productQuantity));
    default:
      return state;
  }
};
