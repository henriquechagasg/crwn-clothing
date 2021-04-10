import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, ImageContainer, CollectionItemFooter,
FooterName, FooterPrice, AddButton } from './collection-item.styles'

const CollectionItem = ({item, addItem}) => {

    const { name, price, imageUrl } = item;
    
    return (
    <CollectionItemContainer>
        <ImageContainer
        style={{
            backgroundImage: `url(${imageUrl})`
            }}
        />
        <CollectionItemFooter className="collection-footer">
            <FooterName className="name">{name}</FooterName>
            <FooterPrice className="price">{price}</FooterPrice>
        </CollectionItemFooter>
        <AddButton onClick={() => addItem(item)} inverted> Add to cart </AddButton>
    </CollectionItemContainer>)
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);