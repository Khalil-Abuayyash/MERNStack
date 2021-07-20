import React from 'react'

function Var(props) {
    const {variable, color, backgroundColor} = props;
    const wordStyle = {
        color: color,
        backgroundColor: backgroundColor
    }

    return (
        <div>
            {isNaN(variable)? <h1 style={wordStyle}>The word is: {variable}</h1>: <h1>The number is: {variable}</h1>}
        </div>
    )
}

export default Var
