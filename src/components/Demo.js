import React from "react";

const Demo=(props) =>{
    const handleClick=()=>{
        alert("Button clicked")
    }
    return <div>
        <h2>New component</h2>
        <h3> Hello, {props.para}</h3> 
        <button onClick={handleClick}>BUTTON</button>
        
        </div>
};

export default Demo;