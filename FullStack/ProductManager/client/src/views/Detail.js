import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

const Detail =  ({id}) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => setProduct(err))
    }, []);

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
            <h3>
                <Link to={`/products/edit/${id}`}>
                    Edit
                </Link>
            </h3>
            <DeleteButton productId={id} successCallback={() => navigate('/products')} />         
        </div>
    )
}

export default Detail
