import React from 'react';
import { ProductsGridWrapper } from './styles';
import { ProductsTile } from '../ProductsTile';

export function ProductsGrid({ products }) {
    return (
        <ProductsGridWrapper>
            {products.map(product => (
                <ProductsTile
                    handle={product.handle}
                    minPrice={product.priceRange.minVariantPrice.amount}
                    description={product.description}
                    imageFluid={product.images[0].localFile.childImageSharp.fluid} 
                    key={product.shopifyId}
                    title={product.title}
                >
                    { product.title}
                </ProductsTile>
            ))}
        </ProductsGridWrapper>
    )
}