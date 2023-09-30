import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import './navbar.css'
import '../App.css'
import { IconContext } from 'react-icons';
import { BsFillXDiamondFill } from "react-icons/bs";


const Navbr = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className='navbar-atas'>
   <IconContext.Provider value={{ color: '#fff' }}>
    
    <div className='navbar'>
        <Link to="#" className='menu-bars'>
            
            <FaBars onClick={showSidebar} className='bar'/>
           
        </Link>
        <div className='navbar-title'>
          <div className="CODA d-flex">
          <BsFillXDiamondFill className='diamond'/>
            <span className='CODASOP'> CODASHOPING</span>
            <p>Website top-up terbesar, tercepat dan terpercaya untuk pembelian kredit game dan entertainment</p>
          </div>
            <div className='iconn'>
                <AiOutlineSearch  className='cari'/>
                <IoMdNotifications className='cari'/>
                <button className='daftar'>Daftar</button>
            </div>
        </div>
    </div>

    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' >
           
            {/* Tambahkan teks ke dalam nav-menu */}
            <li>
                <h4 className='menu-text'>Daftar Codashop sekarang!</h4>
            </li>
            <li className='d-flex'>
            <IoMdNotifications className='icon-sidebar1'/>
                <p className='menu-text1'>Jadilah yang pertama mengetahui promo dan penawaran ekslusif!</p>
            </li>
            <li className='d-flex'>
            <IoMdNotifications className='icon-sidebar'/>
                <p className='menu-text2'>Akses riwayat pesanan anda dengan mudah</p>
            </li>
            <li className='d-flex'>
            <IoMdNotifications className='icon-sidebar3'/>
                <p className='menu-text3'>Lebih cepat dan aman</p>
            </li>

            <div className='tombol-sidebar'>
            <button className='dftrskrg'>Daftar Sekarang Gratis</button>
            <button className='masuk'>Masuk</button>
            </div>
            {/* ...Tambahkan menu lainnya sesuai kebutuhan Anda */}
        </ul>
        
          
    </nav>
</IconContext.Provider>

    </div>
  )
}

export default Navbr