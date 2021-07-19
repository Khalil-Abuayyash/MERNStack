import React, {useState} from 'react';


function Divs(props) {

    
    return (
        <div style={{display:'flex'}}>
            {props.boxes.map(
                (item, index) => {
                    let arr = [];
                    for(let i = 1; i <= item.number; i++) {
                        arr.push(<div style={{width:item.width+ 'px', height: item.height+'px', backgroundColor: item.color, margin:3+'px'}}></div>)
                    }
                    return arr;
                } 
            )}
        </div>
    )
}


export default Divs
