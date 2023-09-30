import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Promo1 from "../image/promo/promo1.jpg"
import Promo2 from "../image/promo/PROMO2.jpg"

import "../App.css"

const Bannerpromo = () => {
  return (
    <div className="container-xxl promo">
    <div className='Banner-promo ' style={{ marginTop: '50px', marginBottom: '50px' }}>
    <h1 style={{ color: 'white', padding: '15px' }}>PROMO</h1>
        <div className="promo d-flex" style={{ marginLeft: '15px' }}>
          <Card className='bannerpromo' style={{  borderRadius: '15px' }}>
      <Card.Img variant="top" src={Promo1} />
      <Card.Body>
        <Card.Title className='title'>MENANGKAN SKIN EPIC PAKAI GOPAY</Card.Title>
        <Card.Text className='fontz' style={{color: 'black'}}>
        Masukan kode promo 'CODAMLBB9' di setiap transaksi kamu, dan dapatkan kesempatan memenangkan SKIN EPIC dengan top up Mobile Legends dan bayar pakai GoPay. Periode : 15-24 September 2023. *S&K Berlaku
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='bannerpromo' style={{  borderRadius: '15px', marginLeft: '10px' }}>
      <Card.Img variant="top" src={Promo2} />
      <Card.Body>
        <Card.Title className='title'>UNDDAWN_ID</Card.Title>
        <Card.Text className='fontz' style={{color: 'black'}}>
        Jelajahi dunia Undawn, beradaptasi dan bertahan dari serangan para zombie. Buat karakter sesuai dengan keinginanmu serta upgrade dan top up Raven Card makin hemat di Codashop karena ada BONUS.
        </Card.Text>
      </Card.Body>
    </Card>

   
    </div>
    </div>
    </div>
  )
}

export default Bannerpromo