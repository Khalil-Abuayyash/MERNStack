import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from '../components/Form'

const Update = (props) => {
    const {id} = props;
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+id)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        });        
    }, []);

    const updateProduct = (product) => {
        axios.put('http://localhost:8000/api/products/'+id, product)
        .then(res => navigate(`/products/${id}`));
    };

    return (
        <div>
           {loaded && <Form onSubmitProp={updateProduct} product={product} />}
        </div>
    )
}

export default Update
