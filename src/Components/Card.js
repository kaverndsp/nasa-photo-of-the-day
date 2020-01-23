import React, { useState, useEffect } from "react";
import CardInfo from './CardInfo';
import axios from "axios";
import "./Card.css";





function Card() {
  const [info, getInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=ifkKjIejleSl0G7vTSqEa1MW9TVgfhmjn5RhzfOW")
      .then(response => {
        // console.log(response.data);
        getInfo(response.data);
      })
      .catch(error => {
        console.log("There data was not returned", error);
      });
  }, []);
return (
    <div>
    
    
        <CardInfo data={info}/>
       </div>
    
)

}

export default Card;