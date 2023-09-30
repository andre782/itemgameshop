import React from 'react'

const cardSteam = ({selectedCard}) => {
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
        <img src={selectedCard.Diamond1} className="card-img-topitems" alt={selectedCard && selectedCard.title} />
        </div>
      <div className="bodycard">
        <h5 className="titlecard">{selectedCard.jumlahdiamond2}</h5>
        <p className="textcard">{selectedCard.property11}</p>
        <p className="textharga">{selectedCard.property12}</p> 
      </div>
    </div>
    <div className="carditems card" >
        <div className="imgcarditems">
        <img src={selectedCard.Diamond1} className="card-img-topitems" alt={selectedCard && selectedCard.title} />
        </div>
      <div className="bodycard">
        <h5 className="titlecard">{selectedCard.jumlahdiamond3}</h5>
        <p className="textcard">{selectedCard.property11}</p>
        <p className="textharga">{selectedCard.property12}</p> 
      </div>
    </div>
    <div className="carditems card" >
        <div className="imgcarditems">
        <img src={selectedCard.Diamond1} className="card-img-topitems" alt={selectedCard && selectedCard.title} />
        </div>
      <div className="bodycard">
        <h5 className="titlecard">{selectedCard.jumlahdiamond4}</h5>
        <p className="textcard">{selectedCard.property11}</p>
        <p className="textharga">{selectedCard.property12}</p> 
      </div>
    </div>
    <div className="carditems card" >
        <div className="imgcarditems">
        <img src={selectedCard.Diamond1} className="card-img-topitems" alt={selectedCard && selectedCard.title} />
        </div>
      <div className="bodycard">
        <h5 className="titlecard">{selectedCard.jumlahdiamond5}</h5>
        <p className="textcard">{selectedCard.property11}</p>
        <p className="textharga">{selectedCard.property12}</p> 
      </div>
    </div>
    </div>

   

    <div className="carditems-container">
    <div className="carditems card" >
        <div className="imgcarditems">
        <img src={selectedCard.Diamond1} className="card-img-topitems" alt={selectedCard && selectedCard.title} />
        </div>
      <div className="bodycard">
        <h5 className="titlecard">{selectedCard.jumlahdiamond6}</h5>
        <p className="textcard">{selectedCard.property11}</p>
        <p className="textharga">{selectedCard.property12}</p> 
      </div>
    </div>
    <div className="carditems card" >
        <div className="imgcarditems">
        <img src={selectedCard.Diamond1} className="card-img-topitems" alt={selectedCard && selectedCard.title} />
        </div>
      <div className="bodycard">
        <h5 className="titlecard">{selectedCard.jumlahdiamond7}</h5>
        <p className="textcard">{selectedCard.property11}</p>
        <p className="textharga">{selectedCard.property12}</p> 
      </div>
    </div>
    <div className="carditems card" >
        <div className="imgcarditems">
        <img src={selectedCard.Diamond1} className="card-img-topitems" alt={selectedCard && selectedCard.title} />
        </div>
      <div className="bodycard">
        <h5 className="titlecard">{selectedCard.jumlahdiamond8}</h5>
        <p className="textcard">{selectedCard.property11}</p>
        <p className="textharga">{selectedCard.property12}</p> 
      </div>
    </div>
    </div>

    </div>
  )
}

export default cardSteam;