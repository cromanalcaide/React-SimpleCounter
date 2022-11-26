import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//create your first component
const SecondsCounter = (props) => {

return (
<div className="counterFrame">

<div className="counterDigit"> clock </div>
<div className="counterDigit"> {Math.floor(props.seconds / 1000) % 600} </div>
<div className="counterDigit"> {Math.floor(props.seconds / 600) % 100} </div>
<div className="counterDigit"> {Math.floor(props.seconds / 100) % 60} </div>
<div className="counterDigit"> {Math.floor(props.seconds / 60) % 10} </div>
<div className="counterDigit"> {Math.floor(props.seconds / 10) % 6} </div>
<div className="counterDigit"> {props.seconds % 10}</div> 
</div>)

};

export default SecondsCounter;






