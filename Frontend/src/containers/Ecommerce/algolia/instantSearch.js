import React, { Component } from "react";
import { connect } from "react-redux";
import ecommerceActions from "../../../redux/ecommerce/actions";
import DesktopView from "./desktopView";
import MobileView from "./mobileView";

class InstantSearch extends Component {
  render() {
    const { view } = this.props;
    const View = view !== "MobileView" ? DesktopView : MobileView;
    return (
      <div style={{ height: "100%" }}>
        <View {...this.props} />
      </div>
    );
  }
}
export default connect(
  state => ({
    view: state.App.toJS().view,
    ecommerceView: state.Ecommerce.toJS().view,
    productQuantity: state.Ecommerce.toJS().productQuantity
  }),
  { ...ecommerceActions }
)(InstantSearch);
