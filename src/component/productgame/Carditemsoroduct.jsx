import React from 'react';
import { useParams } from 'react-router-dom';
import '../carditems.css';
// mobile legend
import Diamond from "../../image/productgame/mobilelegend/Diamonds.png"
import Diamond2 from "../../image/productgame/mobilelegend/Diamond2.png"
import Diamond3 from "../../image/productgame/mobilelegend/Diamond3.png"
import Diamond4 from "../../image/productgame/mobilelegend/Diamond4.png"
import Diamond5 from "../../image/productgame/mobilelegend/Diamond5.png"
import Diamond6 from "../../image/productgame/mobilelegend/Diamond6.png"
// mobile legend end


const cardsData = [
    {
      id: 1,
      diamondImage: Diamond,
      jumlahdiamond: '3 Diamonds',
      property11: 'Dari',
      property12: 'Rp. 1.514',
    },
    {
        id: 1,
        diamondImage: Diamond2,
        jumlahdiamond: '3 Diamonds',
        property11: 'Dari',
        property12: 'Rp. 1.514',
      },
      {
        id: 1,
        diamondImage: Diamond3,
        jumlahdiamond: '3 Diamonds',
        property11: 'Dari',
        property12: 'Rp. 1.514',
      },
      {
        id: 1,
        diamondImage: Diamond4,
        jumlahdiamond: '3 Diamonds',
        property11: 'Dari',
        property12: 'Rp. 1.514',
      },
      {
        id: 1,
        diamondImage: Diamond5,
        jumlahdiamond: '3 Diamonds',
        property11: 'Dari',
        property12: 'Rp. 1.514',
      },
      {
        id: 1,
        diamondImage: Diamond6,
        jumlahdiamond: '3 Diamonds',
        property11: 'Dari',
        property12: 'Rp. 1.514',
      },
    // ... definisi kartu lainnya
  ];
  
  const Carditems = () => {
    const { cardId } = useParams();
    const selectedCard = cardsData.find(card => card.id === parseInt(cardId, 10));
  
    return (
      <div className="container-card">
        <div className="carditems-container">
          {selectedCard && (
            <div className="carditems card">
              <div className="imgcarditems">
                <img src={selectedCard.diamondImage} className="card-img-topitems" alt="Diamond" />
              </div>
              <div className="bodycard">
                <h5 className="titlecard">{selectedCard.jumlahdiamond}</h5>
                <p className="textcard">{selectedCard.property11}</p>
                <p className="textharga">{selectedCard.property12}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Carditems;