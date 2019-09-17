import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { hideDropdown } from '../../redux/cart/cart.actions';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const ShopPage = ({ hideDropdown, match }) => (
  <div className="shop-page" onClick={hideDropdown}>
      <Route exact path={`$(match.path)`}/>
  </div>
)

const mapDispatchToProps = dispatch => ({
  hideDropdown: () => dispatch(hideDropdown())
})

const mapStateToProps = state => ({
  collections: state.collections.collections
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
