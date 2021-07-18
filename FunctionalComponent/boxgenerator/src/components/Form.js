import React,{useState} from 'react';


function Form(props) {

    const [color, setColor] = useState("");
    const [number, setNumber] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleColor = (e) => {
        setColor(e.target.value);
    }
    const handleNumber = (e) => {
        setNumber(e.target.value);
    }
    const handleWidth = (e) => {
        setWidth(e.target.value);
    }
    const handleHeight = (e) => {
        setHeight(e.target.value);
    }
    const handleSubmit = (e) => {
        props.addColor({color, number});
        setColor("");
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                Color:
                <input type="text" value={color} onChange={handleColor} />
                Number of new boxes:
                <input type="number" value={number} onChange={handleNumber} />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form
