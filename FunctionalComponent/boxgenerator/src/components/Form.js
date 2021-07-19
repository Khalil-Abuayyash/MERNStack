import React,{useState} from 'react';
import styles from './../styles/form.module.css';

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
        props.addBox({color, number, width, height});
        setColor("");
        setWidth(0);
        setHeight(0);
        setNumber(0);
        e.preventDefault();
    }

    return (
            <form onSubmit={handleSubmit}>
                <label for="color" >Color:</label>
                <input type="text" id="color" value={color} onChange={handleColor} />
                <label for="number"  >Number of new boxes:</label>
                <input type="number" id="number" value={number} onChange={handleNumber} />
                <label for="width"  >Width:</label>
                <input type="width" id="width" value={width} onChange={handleWidth} />
                <label for="height"  >Height:</label>
                <input type="height" id="height" value={height} onChange={handleHeight} />
                <input type="submit" value="Add" />
            </form>
    )
}

export default Form
