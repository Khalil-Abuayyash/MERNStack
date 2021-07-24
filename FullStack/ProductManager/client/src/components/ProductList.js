import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

const ProductList =  (props) => {
    const { removeFromDom } = props;

    return (
        <div>
            {
                props.products.map( (product, index) => {
                        return( 
                            <p key={product._id}>
                                <Link to={`/products/${product._id}`}>
                                    {product.title}
                                </Link>
                                <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                            </p>
                        )
                })
            }
        </div>
    )
}

export default ProductList
