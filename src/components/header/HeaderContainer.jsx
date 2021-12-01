import React from "react";
import { connect } from "react-redux";
import { logOutThCr } from "../../store/auth-reducer";
import { compose } from "redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  auth: state.auth,
});

let setDispatch = {
  logOutThCr,
};

export default compose(connect(mapStateToProps, setDispatch))(HeaderContainer);
