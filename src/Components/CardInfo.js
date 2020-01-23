import React from "react";
import "./Card.css";
import styled from 'styled-components'
import { Jumbotron, Container, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const BigImage = styled.img`
max-width:1000px;
max-height:100%;
margin-bottom:3%;
&:hover{
    max-width:100%;
   max-height:100%;
}

`;

const NewDiv = styled.div`
max-width:800px;
display:flex;
justify-content: space-between;
margin-left:28%;

`;

const TwoDiv = styled.div`

`;

const Para = styled.p`
`;

const HeaderOne = styled.h1`
text-shadow:10px 4px 30px #000000;
margin-bottom:2%;
`;

const Border = styled.p`
border-top: 1.5px solid lightgrey;
margin-bottom: 4rem;

`;

function CardInfo (props){
   console.log(props)
   
    return(
        <div>
         <Jumbotron fluid>
             <Container fluid>
                 <TwoDiv>
        <HeaderOne className="display-2">NASA PHOTO OF THE DAY</HeaderOne>
        <Border className="display-4">{props.data.title}</Border>
        </TwoDiv>
        <NewDiv>
            
            <h5>Photo taken by: {props.data.copyright}</h5>
            <h5>Date: {props.data.date}</h5>
            
        </NewDiv>
        {/* <Card>
        <CardBody>
          
          
         
        </CardBody>
        <CardImg bottom width="100%" src={props.data.url} alt="Card image cap" /> 
        <CardText>
    <small className="text-muted">Last updated {props.data.date}</small>
          </CardText>
      </Card> */}
        
        <BigImage src={props.data.hdurl}/>
        <hr className="my-2" />
        <p>{props.data.explanation}</p>
        <p className="lead">
          {/* <Button color="primary">Learn More</Button> */}
        </p>
        </Container>
      </Jumbotron>
        </div>
        
    )
    
}
  

export default CardInfo;