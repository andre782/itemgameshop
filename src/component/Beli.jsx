import React from 'react'
import "./carddetail.css"

const Beli = () => {
  return (
    <div className='pembayaran-container'>
        <form>
      <div className="edit mb-3 jus">
        <label htmlFor="exampleInputEmail1" className="Addres form-label">Optional: Jika anda ingin mendapatkan bukti pembayaran atas pembelian anda, harap mengisi alamat emailnya</label>
        <input type="email" placeholder='Alamat E-mail' className="form-beli form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Ya, Saya ingin menerima berita dan promosi melalui SMS atau Whatsapp</label>
      </div>
      </form>
      <div className="button-beli">
      <button type="submit" className="btnsubmit btn-primary">Submit</button>
      </div>
    </div>
  )
}

export default Beli