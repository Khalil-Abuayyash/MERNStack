import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Form from '../components/Form';
import ProductList from '../components/ProductList';

function Main() {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data);
            setLoaded(true);
        });
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createPerson = (product) => {
        axios.post('http://localhost:8000/api/products', product)
        .then(res => setProducts([...products, res.data]))
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Form onSubmitProp={createPerson} product={{title:"", price:0, description:""}} />
            <hr/>
            <h1>All Products:</h1>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main
