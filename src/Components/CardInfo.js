import React from "react";



const CardInfo = props => {
   console.log(props)

    return(
        <div>
        <h1>{props.data.title}</h1>
        <p>Date: {props.data.date}</p>
        
        <img src={props.data.url} alt={props.data.title}></img>
        <h4>From {props.data.copyright}</h4>
        <p>{props.data.explanation}</p>
        
        </div>
    )
}
  

export default CardInfo;