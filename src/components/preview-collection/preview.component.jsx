import React from 'react';
import './preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title,items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
        //filter has index as second argument to callback
        .filter((item,index) => index<4)
        .map((item) => (
          //always pass key while mapping
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;
