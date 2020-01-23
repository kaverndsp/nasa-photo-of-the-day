import React from "react";
import "./Card.css";
import styled from 'styled-components'
import { Jumbotron, Button, Container } from 'reactstrap';

const BigImage = styled.img`
max-width:1280px;
max-height:100%;
margin-bottom:3%;

`;

const NewDiv = styled.div`
max-width:800px;
display:flex;
justify-content: space-between;
margin-left:28%;

`;

const TwoDiv = styled.div`

`;




function CardInfo (props){
   console.log(props)
   
    return(
        <div>
         <Jumbotron fluid>
             <Container fluid>
                 <TwoDiv>
        <h1 className="display-2">NASA PHOTO OF THE DAY</h1>
        <p className="display-4">{props.data.title}</p>
        </TwoDiv>
        <NewDiv>
            <h5>Photo taken by: {props.data.copyright}</h5>
            <h5>Date:{props.data.date}</h5>
            
        </NewDiv>

        
        <BigImage src={props.data.hdurl}/>
        <hr className="my-2" />
        <p>{props.data.explanation}</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        </Container>
      </Jumbotron>
        </div>
        
    )
    
}
  

export default CardInfo;