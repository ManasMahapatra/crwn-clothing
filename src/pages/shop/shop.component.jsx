import React from 'react';
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/preview-collection/preview.component';

class ShopPage extends React.Component {
  constructor(props){
    super();
    this.state={
      collections: SHOP_DATA
    }
  }
  render(){
    const {collections} = this.state;
    return(
      <div className="shop-page">
        {
          //... is the spread operator. It means it will retrieve props in destructured style,
          //and return an object in the same name attribute.
          collections.map(({id,...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}
export default ShopPage;
