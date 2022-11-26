//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";
let counter = 0;

//render your react application
setInterval(()=>{
ReactDOM.render(<SecondsCounter seconds={counter}/>, document.querySelector("#app"));
counter++;}
, 1000)
