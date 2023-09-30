import React from 'react'
import "../App.css"
import jamber from "../image/jam.jpg"
import dompet from "../image/images.png"
import persen from "../image/persen.webp"
import diamond from "../image/diamond.jpg"
import headphone from "../image/headphone.png"
import duaorang from "../image/2orang.jpg"

const Tentangkami = () => {
  return (
    <div className="tentang">
    <div className='container-xl' style={{ marginBottom: "200px", marginTop: '100px', color: 'white'}}>
        <h1 style={{marginBottom: '10px'}}>Codashop Indonesia</h1>
        <h5>Codashop: Website top-up terbesar, tercepat dan terpercaya di Indonesia</h5>
        <p>Setiap bulannya, jutaan gamers menggunakan Codashop untuk melakukan pembelian kredit game dengan lancar: tanpa registrasi ataupun log-in, dan kredit permainan akan ditambahkan secara instan. Top-up Mobile Legends, Free Fire, Ragnarok M, dan berbagai game lainnya!</p>

    <div className="layar"> 
        <div className='container'>
         <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
         <img src={jamber} className='gambar' alt="" style={{ borderRadius: '80px' }} />

        <div className='size' style={{ marginLeft: '20px', color: 'white' }}>
        <h6>Bayar dalam hitungan detik</h6>
         <p>Hanya dibutuhkan beberapa detik saja untuk menyelesaikan pembayaran di Codashop karena situs kami berfungsi dengan baik dan mudah untuk digunakan.</p>
        </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px'}}>
    <img src={dompet} className='gambar' alt="" style={{ borderRadius: '70px' }} />

         <div className='size' style={{ marginLeft: '20px', color: 'white' }}>
        <h6>Metode pembayaran terbaik</h6>
         <p>Kami menawarkan begitu banyak pilihan pembayaran mulai dari potong pulsa, e-wallet, bank transfer, dan pembayaran di mini market terdekat.</p>
        </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
         <img src={persen} className='gambar' alt="" style={{ borderRadius: '70px' }} />
         <div className='size' style={{ marginLeft: '20px', color: 'white' }}>
        <h6>Promosi-promosi menarik</h6>
         <p>Penggemar game dapat bergantung pada Codashop karena kami memberikan penawaran menarik, diskon dan kode item dari promosi game yang disukai kamu.</p>
        </div>
    </div>
    </div>

    <div className='container'>
         <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
         <img src={diamond} className='gambar' alt="" style={{ borderRadius: '70px' }} />

         <div className='size' style={{ marginLeft: '20px', color: 'white' }}>
        <h6>Pengiriman instan</h6>
         <p>Ketika kamu melakukan top-up di Codashop, item atau barang yang kamu beli akan selalu dikirim ke akun kamu secara instan dan cepat, tanpa tertunda.</p>
        </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
    <img src={headphone} className='gambar' alt="" style={{ borderRadius: '70px' }} />

         <div className='size' style={{ marginLeft: '20px', color: 'white' }}>
        <h6>Layanan Pelanggan Cepat & Ramahk</h6>
         <p>Tim CS terbaik kami selalu siap membantumu kapanpun, di manapun. Hubungi kami!</p>
        </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
    <img src={duaorang} className='gambar' alt="" style={{ borderRadius: '70px' }} />

         <div className='size' style={{ marginLeft: '20px', color: 'white' }}>
        <h6>
Dapatkan Lebih Banyak Keuntungan: Ikuti Program Referral Kami Sekarang!</h6>
         <p>Hanya dibutuhkan beberapa detik saja untuk menyelesaikan pembayaran di Codashop karena situs kami berfungsi dengan baik dan mudah untuk digunakan.</p>
        </div>
    </div>
    </div>
   

    </div>

    </div>
    </div>
  )
}

export default Tentangkami