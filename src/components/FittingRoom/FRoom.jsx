import React from "react"
import FittingRoom from "../FittingRoom/Froom.css"
import ButtonFroom from "../discount/ButtonFroom"
import { Card } from "react-bootstrap"

const Froom = () => {
  const cardInfo = [
    { 
      image: "public\images\category\jaket.png", 
      tittle: "jaket", 
      text: "ini jaket"
    },
    { 
      image: "public\images\category\kaos.png", 
      tittle: "kaos", 
      text: "ini kaos"
    },
    { 
      image: "public\images\category\kemeja.png", 
      tittle: "kemeja", 
      text: "ini kemeja"
    },
    { 
      image: "public\images\category\jeans.png", 
      tittle: "celana", 
      text: "ini celana"
    },
  ];

  const renderCard = (card, index) => {
    return(
      <Card style={{width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Tittle>{card.tittle}</Card.Tittle>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div className="grid">{cardInfo.map(renderCard)}</div>
  );
};

export default Froom;