import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import { SHOP_DATA } from '../../data/shop.data';

class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...CollectionProps }) => (
                            <CollectionPreview key={id} {...CollectionProps}/>
                        ))
                }
            </div>
        );
    }
}

export default Shop;