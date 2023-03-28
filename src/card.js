import React from "react";

function Card (props){
    console.log(props.d)
    return( 
    <p>{props.d.brand}</p>
    
    )
}

export default Card; 