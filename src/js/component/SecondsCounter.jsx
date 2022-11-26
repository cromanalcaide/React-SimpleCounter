import React from "react";


//create your first component
const SecondsCounter = (props) => {

return (
<div className="counterFrame">
    <div className="counterDigit"> ⏰ </div>
    <div className="counterDigit"> {Math.floor(props.seconds / 1000) % 10} </div>
    <div className="counterDigit"> {Math.floor(props.seconds / 100) % 10} </div>
    <div className="counterDigit"> {Math.floor(props.seconds / 10) % 10} </div>
    <div className="counterDigit"> {props.seconds % 10}</div> 
</div>)


// Trying to make it work with the sec/min/hour format -->👇

/* <div className="counterFrame">
    <div className="counterDigit"> ⏰ </div>
    <div className="counterDigit"> {Math.floor(props.seconds / 1000) % 600} </div>
    <div className="counterDigit"> {Math.floor(props.seconds / 600) % 100} </div>
    <div className="counterDigit"> {Math.floor(props.seconds / 100) % 60} </div>
    <div className="counterDigit"> {Math.floor(props.seconds / 60) % 10} </div>
    <div className="counterDigit"> {Math.floor(props.seconds / 10) % 6} </div>
    <div className="counterDigit"> {props.seconds % 10}</div> 
</div>) */


};

export default SecondsCounter;

