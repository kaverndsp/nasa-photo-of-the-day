import React, { useState, useEffect } from "react";
import CardInfo from './CardInfo';
import axios from "axios";

function Card() {
  const [info, getInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        // console.log(response.data);
        getInfo(response.data);
      })
      .catch(error => {
        console.log("There data was not returned", error);
      });
  }, []);
return (
    
        <CardInfo data={info}/>
    
)

}

export default Card;