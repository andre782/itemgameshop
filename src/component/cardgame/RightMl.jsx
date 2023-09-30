import React, { useState } from "react";

import pml from "../../image/Product/pml.jpg";
import { BsQuestionLg } from "react-icons/bs";
import promo from "../../image/Product/promo.svg";
import Carditems from "../productgame/Carditems";


const cardDetails = {
    "Mobile Legends 1": {
      title: "Mobile Legends 1",
      description: "Deskripsi untuk Mobile Legends 1.",
      image: pml,
      property1: "Mobile Legends: Bang Bang",
      property2:
        "Codashop telah bekerja sama dengan Moonton untuk menawarkan top up Mobile Legends dengan mudah, aman dan nyaman.",
      property3:
        "Top up ML Diamond, Twilight Pass and Weekly Pass hanya dalam hitungan detik! Cukup masukan User ID dan Zone ID MLBB Anda, pilih jumlah Diamond yang Anda inginkan, selesaikan pembayaran, dan Diamond akan secara langsung ditambahkan ke akun Mobile Legends Anda.",
      property4:
        "Bayarlah menggunakan Codacash, GoPay, ShopeePay, Dana, OVO, LinkAja, Telkomsel, Indosat, Tri, XL, Bank Transfer, QRIS, Indomaret, Alfamart, Kredivo, Kartu Kredit, dan Doku Wallet.",
      property5:
        "Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
      property6: "PERINGATAN:",
      property7:
        "Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
      property8: "Unduh dan mainkan Mobile Legends: Bang Bang sekarang!",
      property9: "Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri atas pada menu utama game. User ID akan terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan transaksi. Contoh : 12345678(1234).",
      property10: "Top Up ML Diamonds, Twilight Pass & Weekly Diamond Pass di Indonesia",
      property11: 'Hanya butuh beberapa detik saja untuk beli Diamond, Twilight Pass and Weekly Diamond Pass di Codashop, top-up menjadi mudah, aman, dan praktis. Codashop dipercaya oleh jutaan gamers & pengguna aplikasi di Asia Tenggara termasuk Indonesia. Caranya mudah, tanpa perlu registrasi ataupun log-in! ',
      property12: 'Dengan ML Diamonds kamu bisa mengakses konten premium dari hero terbaru hingga berbagai pilihan skin hero dan lainnya. Untuk mendapatkan nilai terbaik dari uang kamu, berikut manfaat Twilight Pass & Weekly Diamond Pass di bawah ini.',
      property13: `Twilight Pass:
      Instant Reward: 200 Tickets, 1 Glorious General Trial Card, 1 Diamond Hero Trial Card Pack (1-Day)
      Level 8: 200 Tickets, Eudora's “Flame Red Lips” Skin, 2 Diamond Hero Trial Card Pack (1-Day)
      Level 10: 300 Tickets, 1 Star Protection Card, 2 Deluxe Skin Trial Card Pack (1-Day)
      Level 12: 350 Tickets, 1 Double EXP Card (3-Days), 5 Luxury Ticket
      Level 15: 350 Tickets, Miya's Exclusive “Suzuhime” Skin, 2 Epic Skin Trial Card (1-Day)
      Level 20: 500 Tickets, Twilight Pass Avatar Border, 10 Luxury Ticket`,
      property14: `Weekly Diamond Pass:
        - 210 diamonds
        - 210 Starlight Member points
        - 7 Choice Bundle`,
      property15: '',
    },
    // ... tambahkan detail kartu lainnya
  };


const cardML = ({ selectedCard }) => {
   const [isUserIdValid, setIsUserIdValid] = useState(true);
  const [isZoneIdValid, setIsZoneIdValid] = useState(true);
  
    const handleUserIdChange = (event) => {
    setIsUserIdValid(event.target.value.length > 0);
  };
    const handleZoneIdChange = (event) => {
    setIsZoneIdValid(event.target.value.length > 0);
  };

  return (
    <>
    <div className="righ-detail">
       

        <div className="containerdetail">
          <div className="number-stepbystepdetail">
            <h3>1</h3>
          </div>

          <div className="Masukan-user-iddetail">
            <h4>Masukan user ID</h4>
          </div>

          <div className="formiddetaail">
            <div className="col-md-4">
              <input
                type="text"
                className={`form-control ${!isUserIdValid ? "is-invalid" : ""}`}
                id="validationCustom01"
                placeholder="Masukan user ID"
                onChange={handleUserIdChange}
                required
              />
              {!isUserIdValid && (
                <span className="text-danger">Bagian ini harus diisi</span>
              )}
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className={`form-control ${!isZoneIdValid ? "is-invalid" : ""}`}
                id="validationCustom02"
                placeholder="Zone ID"
                onChange={handleZoneIdChange}
                required
              />
              {!isZoneIdValid && (
                <span className="text-danger">Bagian ini harus diisi</span>
              )}
              <div className="valid-feedback">Looks good!</div>
            </div>
            <BsQuestionLg style={{ fontSize: "35px", cursor: "pointer" }} />
          </div>

          <div className="tutorialmemasukanIDdannama">
            <p>{selectedCard.property9}</p>
          </div>
        </div>

        <div className="container2detail">
          <div className="number-stepbystepdetail">
            <h3>2</h3>
          </div>
          <div className="Masukan-user-id2detail">
            <h4>Pilih Nominal Top Up</h4>
          </div>
            {/* card top up */}
              <Carditems/>
            {/* card top up end*/}
        </div>


    </div>
    </>
  )
}

export default cardML;
