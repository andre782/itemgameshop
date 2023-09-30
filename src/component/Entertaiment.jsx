import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import CardDetail from './CardDetail';
import '../App.css';


import cardgames from '../image/unnamed.png';
import heat from "../image/entertaiment/hati.png"
import WeTv from "../image/entertaiment/weTV.jpg"
import iqiyi from "../image/entertaiment/iqiyi.png"
import bstaation from "../image/entertaiment/bstation.png"
import spotify from "../image/entertaiment/spotify.jpg"
import nimo from "../image/entertaiment/nimo.jpg"
import viu from "../image/entertaiment/viu.jpg"
import itunes from "../image/entertaiment/itun.webp"
import Like from "../image/entertaiment/Like.png"
import Tinder from "../image/entertaiment/png.png"
import turbo from  "../image/entertaiment/turbo.png"
import yumy from "../image/entertaiment/yumy.jpg"




const Cardx = () => {
  const [maxCardsToShow, setMaxCardsToShow] = useState(18);
  const [showAllCards, setShowAllCards] = useState(false);
  const navigate = useNavigate()// Gunakan useHistory untuk mendapatkan objek history



 




  const cardsData = [
    // Kartu 1
    {
      title: 'Heat up',
      imgSrc: heat,
    },
    // Kartu 2
    {
      title: 'WeTV',
      imgSrc: WeTv,
    },
    {
      title: 'IQIYI',
      imgSrc: iqiyi,
    },
    {
      title: 'Bstation',
      imgSrc: bstaation,
    },
    {
      title: 'Spotify Premium Voucher',
      imgSrc: spotify,
    },
    {
      title: 'Nimo TV',
      imgSrc: nimo,
    },
    {
      title: 'Viu (Direct Top-Up)',
      imgSrc: viu,
    },
     {
      title: 'Itunnes (US)',
      imgSrc: itunes,
    },
    {
      title: 'Likee',
      imgSrc: Like,
    },
    {
      title: 'Tinder',
      imgSrc: Tinder,
    },
    {
      title: 'Turbo VPN',
      imgSrc: turbo,
    },
    {
      title: 'Yumy',
      imgSrc: yumy,
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
  
    
    // ...Tambahkan data kartu lainnya di sini
  ];




  const handleCardClick = (cardId) => {
    navigate(`/card-detail/${cardId}`);  // Menggunakan navigate untuk navigasi
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
    <div className=" container-xxl" style={{ marginTop: '40px' }}>
    <h1 style={{ color: 'white' }}>ENTERTAIMENT</h1>
    <div  className="style carda d-flex flex-wrap p-3">
      {cardsData.slice(0, showAllCards ? cardsData.length : maxCardsToShow).map((card, index) => (
         <Link to={`/card-detail/${card.title}`} key={index} className="card-link">
<div className="jarak">
               <Card className='pdd' key={index} style={{ backgroundColor: '#3C1F42', borderRadius: '12px' }}>
          <Card.Img className='crd' variant="top" src={card.imgSrc} />
          <Card.Body className='body'>
          <Card.Title className="font" style={{ color: 'white' }}>
              {card.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
        </Link>
      ))}
    </div>
    
      <Routes>
        <Route path="/card-detail/:cardId" element={<CardDetail />} />
      </Routes>


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
        {maxCardsToShow === 12  ? 'Tampilkan Semua HP' : 'Tampilkan dan sembunyikan'} 
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

  </div>
  </>
  );
};
export default Cardx;
