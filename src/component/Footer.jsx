import React from 'react'
import "../App.css"

import { AiFillFacebook } from "react-icons/ai";
import { BsYoutube, BsChatDots, BsUpload } from "react-icons/bs";
import { BsInstagram,BsGlobeAsiaAustralia } from "react-icons/bs";
import { FaTiktok, FaFlag } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='ftr-background' style={{background: 'yellow'}}>
        <div className='container-xl ftr'>
         <div className='marginz' style={{marginRight: '70px'}}>
        <h5>Butuh bantuan</h5>
        <button className='tulis'><BsChatDots  style={{ marginRight: '3px', marginTop: '-5px' }}/>Hubungi Kami<BsUpload style={{ marginLeft: '3px', marginTop: '-5px' }}/></button>
        </div>

        <div style={{marginRight: '70px', marginTop: '50px'}}>
        <h5>Area</h5>
        <button className='tulis'><FaFlag style={{ marginRight: '3px', marginTop: '-5px' }}/>Indoensia<BsGlobeAsiaAustralia style={{ marginLeft: '3px', marginTop: '-5px' }}/></button>
        </div>

        <div className='tulis' style={{ marginTop: '50px' }}>
    <h6>dapatkan berita coda di :</h6>
    <AiFillFacebook className='tulisx' style={{  marginRight: '10px', color: 'blue' }}/>
    <BsYoutube className='tulisx' style={{  marginRight: '10px', color: 'red' }}/>
    <BsInstagram className='tulisx' style={{  marginRight: '10px' }}/>
    <FaTiktok className='tulisx'/>
    </div>

    </div>    
    </div>

        <div className="paling-bawah" style={{ paddingTop: '20px', background: 'white'}}>
          <div className="tlsn">
        <p style={{ fontSize: '12px', color: 'black'}}>©Hak Cipta Coda Payments</p>
        <p style={{ cursor: 'pointer', fontSize: '12px', color: 'black'}}>pemasaran dan kemitraan</p>
        <p style={{ fontSize: '12px', color: 'black'}}>untuk penerbit game</p>
        <p style={{ fontSize: '12px',color: 'black'}}>syarat dan ketentuan</p>
        <p style={{ fontSize: '12px', color: 'black'}}>kebijakan privasi</p>

        <div className='CODASHOP' >
            <h1 className='CODASHOP' style={{ fontSize: '20px', color: 'black'}}>CODASHOP</h1>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer