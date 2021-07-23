import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router';


const Detail =  (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res => setProduct(res.data))
        .catch(err => setProduct(err))
    }, []);

    const deleteProduct = (e, productId) => {
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res => navigate('/products'));
    };

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
            <h3>
                <Link to={`/products/edit/${props.id}`}>
                    Edit
                </Link>
            </h3>
            <button onClick={(e) => deleteProduct(e, product._id)} >
                Delete
            </button>
            
        </div>
    )
}

export default Detail
