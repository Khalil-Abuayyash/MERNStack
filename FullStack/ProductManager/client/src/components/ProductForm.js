import React,{useState} from 'react';
import axios from 'axios';

function ProductForm() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <td>Product Manager</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Title</label></td>
                        <td><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Price</label></td>
                        <td><input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Description</label></td>
                        <td><input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Create a new Product" /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}

export default ProductForm
