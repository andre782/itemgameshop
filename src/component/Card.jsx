import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import CardDetail from './CardDetail';
import Freefire from "./Freefire"
import '../App.css';

import cardgames from '../image/unnamed.png';
import FreeFire from "../image/itemsgame/coc.png"
import coc from"../image/itemsgame/freefire.jpg"
import vlorun from "../image/itemsgame/valorun.jpg"
import supersus from "../image/itemsgame/supersus.jpg"
import lol from "../image/itemsgame/lol.jpg"
import cod from "../image/itemsgame/cod.jpg"
import steam from "../image/itemsgame/steamx.jpg"
import PUBG from "../image/itemsgame/pubg.jpg"
import AOV from "../image/itemsgame/OV.jpg"
import hogwarst from "../image/itemsgame/hogwarts.webp"
import cr from "../image/itemsgame/clashroyal.png"

const Cardx = () => {
  const [maxCardsToShow, setMaxCardsToShow] = useState(18);
  const [showAllCards, setShowAllCards] = useState(false);
  const navigate = useNavigate(); // Gunakan useHistory untuk mendapatkan objek history

  
    // Kartu 1
    const cardsData = [
      // Kartu 1
      {
        title: 'Mobile Legends 1',
        imgSrc: cardgames,
      },
      // Kartu 2
      {
        title: 'Free Fire',
        imgSrc: coc,
      },
      {
        title: 'Clash of Clans',
        imgSrc: FreeFire,
      },
      {
        title: 'VALORANT',
        imgSrc: vlorun,
      },
      {
        title: 'Super Sus',
        imgSrc: supersus,
      },
      {
        title: 'Leaguage of legend',
        imgSrc: lol,
      },
      {
        title: 'Call of duty: Mobile',
        imgSrc: cod,
      },
       {
        title: 'steam wallet Code',
        imgSrc: steam,
      },
      {
        title: 'PUBG mobile',
        imgSrc: PUBG,
      },
      {
        title: 'Arena of valor',
        imgSrc: AOV,
      },
      {
        title: 'Hogwarst Legacy',
        imgSrc: hogwarst,
      },
      {
        title: 'Clash Royale',
        imgSrc: cr,
      },
      {
        title: 'Mobile Legends 14',
        imgSrc: cardgames,
      },
      {
        title: 'Mobile Legends 15',
        imgSrc: cardgames,
      },
      {
        title: 'Mobile Legends 16',
        imgSrc: cardgames,
      },
      {
        title: 'Mobile Legends 17',
        imgSrc: cardgames,
      },
      {
        title: 'Mobile Legends 18',
        imgSrc: cardgames,
      },
      {
        title: 'Mobile Legends 19',
        imgSrc: cardgames,
      },
      {
        title: 'Mobile Legends 20',
        imgSrc: cardgames,
      },
      // ... Kartu lainnya
    ];
    // ... Kartu lainnya


    const handleCardClick = (cardTitle) => {
      navigate(`/card-detail/${encodeURIComponent(cardTitle)}`);
    };

  const toggleMaxCardsToShow = () => {
    if (window.innerWidth <= 768) {
      setMaxCardsToShow((prevMaxCards) =>
        prevMaxCards === 6 ? 22 : 6
      );
    } else {
      setMaxCardsToShow((prevMaxCards) =>
        prevMaxCards === 12 ? 22 : 12
      );
    }
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setMaxCardsToShow(showAllCards ? 18 : 6);
    } else {
      setMaxCardsToShow(showAllCards ? 18 : 12);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="container-xxl" style={{ marginTop: '40px' }}>
        <h1 style={{ color: 'white' }}>LEBIH HEMAT PAKAI CODASHOP</h1>
        <div className="style carda d-flex flex-wrap p-3">
      {cardsData.slice(0, showAllCards ? cardsData.length : maxCardsToShow).map((card, index) => (
        <div key={index} className="jarak" onClick={() => handleCardClick(card.title)}>
          <Card className='pdd' style={{ backgroundColor: '#3C1F42', borderRadius: '12px' }}>
            <Card.Img className='crd' variant="top" src={card.imgSrc} />
            <Card.Body className='body'>
              <Card.Title className="font" style={{ color: 'white' }}>
                {card.title}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
        <Routes>
          <Route path="/card-detail/:cardId" element={<CardDetail />} />
          {/* Tambahkan rute untuk setiap kartu */}
          <Route path="/card-detail/Mobile%20Legends%201" element={<CardDetail cardId="Mobile Legends 1" />} />
          <Route path="/card-detail/Free%20Fire" element={<Freefire cardId="Free Fire" />} />
          {/* Tambahkan rute untuk kartu-kartu lain di sini */}
        </Routes>
      </div>
      <div className="button-bawah" style={{ display: 'flex', justifyContent: 'center' }}>
        {window.innerWidth <= 700 ? (
          <button
            className='btn'
            style={{
              backgroundColor: 'transparent',
              color: 'yellow',
              fontSize: '10px',
              display: maxCardsToShow === 12 ? 'none' : 'flex',
            }}
            onClick={toggleMaxCardsToShow}
          >
            {maxCardsToShow === 12 ? 'Tampilkan Semua HP' : 'Tampilkan dan sembunyikan'}
          </button>
        ) : (
          <button
            className='btn'
            style={{
              backgroundColor: 'transparent',
              color: 'yellow',
              fontSize: '15px',
              display: maxCardsToShow === 6 ? 'none' : 'flex',
            }}
            onClick={toggleMaxCardsToShow}
          >
            {maxCardsToShow === 6 ? 'Tampilkan Semua DESK' : 'Tampilkan dan sembunyikan'}
          </button>
        )}
      </div>
    </>
  );
};

export default Cardx;
