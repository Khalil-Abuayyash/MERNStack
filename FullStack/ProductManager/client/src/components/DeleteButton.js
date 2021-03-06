import React from 'react';
import axios from 'axios';

const DeleteButton = ({productId, successCallback}) => {

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/products/'+productId)
        .then(res => successCallback());
    }

    return (
        <button onClick={deleteProduct}>
            Delete  
        </button>
    )
}

export default DeleteButton
