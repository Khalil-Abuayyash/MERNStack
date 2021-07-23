import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';

const ProductList =  (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (e, productId) => {
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res => removeFromDom(productId));
    };

    return (
        <div>
            {
                props.products.map( (product, index) => {
                        return( 
                            <p key={product._id}>
                                <Link to={`/products/${product._id}`}>
                                    {product.title}
                                </Link>
                                <button onClick={(e) => deleteProduct(e, product._id)} >
                                    Delete
                                </button>
                            </p>
                        )
                })
            }
        </div>
    )
}

export default ProductList
