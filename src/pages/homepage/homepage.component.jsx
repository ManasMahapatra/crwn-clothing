import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';
import { connect } from 'react-redux';
import { hideDropdown } from '../../redux/cart/cart.actions'

const HomePage = ({ hideDropdown }) => (
  <div className="wrapper" onClick={hideDropdown}>
    <div className="homepage">
    <Directory />
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  hideDropdown : () => dispatch(hideDropdown())
})

export default connect(null,mapDispatchToProps)(HomePage);
