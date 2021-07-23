import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';

const ProductList =  (props) => {
    return (
        <div>
            {
                props.products.map( (product, index) => {
                        return( 
                            <Link to={`/products/${product._id}`}>
                                <p key={product._id}> {product.title} </p>
                            </Link>)
                })
            }
        </div>
    )
}

export default ProductList
