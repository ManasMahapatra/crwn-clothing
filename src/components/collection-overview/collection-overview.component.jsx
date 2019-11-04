import React from 'react';
import { connect } from 'react-redux';
import './collection-overview.styles.scss';
import CollectionPreview from '../preview-collection/preview.component';

const CollectionOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ) )
        }
    </div>
)

const mapStateToProps = state => ({
    collections: state.collections.collections
})
export default connect(mapStateToProps)(CollectionOverview);