import React from 'react'

const cardHog = ({selectedCard}) => {
  return (
    <div className="container-card">

    <div className="carditems-container">
    <div className="carditems card" >
        <div className="imgcarditems">
        <img src={selectedCard.Diamond1} className="card-img-topitems" alt={selectedCard && selectedCard.title} />
        </div>
      <div className="bodycard">
        <h5 className="titlecard">{selectedCard.jumlahdiamond1}</h5>
        <p className="textcard">{selectedCard.property11}</p>
        <p className="textharga">{selectedCard.property12}</p> 
      </div>
    </div>
    <div className="carditems card" >
        <div className="imgcarditems">
        <img src={selectedCard.Diamond2} className="card-img-topitems" alt={selectedCard && selectedCard.title} />
        </div>
      <div className="bodycard">
        <h5 className="titlecard">{selectedCard.jumlahdiamond2}</h5>
        <p className="textcard">{selectedCard.property11}</p>
        <p className="textharga">{selectedCard.property13}</p> 
      </div>
    </div>
    </div>

    </div>
  )
}

export default cardHog