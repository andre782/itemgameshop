import React, { useState } from "react";
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsQuestionLg } from "react-icons/bs";
import App from "../image/Product/app.png";
import Playstore from "../image/Product/google.png";
import pml from "../image/Product/pml.jpg";
import promo from "../image/Product/promo.svg";
import "./carddetail.css";
import Carditems from "./productgame/Carditems";
import Pembayaran from "../component/productgame/Pembayaran"
import Beli from "../component/Beli"
// product game


const Detail2 = () => {
  const { cardId } = useParams();
  const [isUserIdValid, setIsUserIdValid] = useState(true);
  const [isZoneIdValid, setIsZoneIdValid] = useState(true);

  const handleUserIdChange = (event) => {
    setIsUserIdValid(event.target.value.length > 0);
  };

  const handleZoneIdChange = (event) => {
    setIsZoneIdValid(event.target.value.length > 0);
  };

  const Detail2 = {
    "Free Fire": {
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
      Property13: `Twilight Pass:
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

  const selectedCard = Detail2[cardId];

  return (
    <>
    <div
      className="container-xxl"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {/* Left section */}
      <div style={{ width: "40%" }}>
        {selectedCard ? (
          <div className="container-xxl">
            <h2 style={{ color: "white" }}>{selectedCard.title}</h2>
            <p style={{ color: "white" }}>{selectedCard.description}</p>
            {/* Tambahkan elemen atau komponen sesuai kebutuhan */}
            {/* Contoh: */}
            <img
              className="img-bannerdetail"
              src={selectedCard.image}
              alt={selectedCard.title}
              style={{ color: "white", maxWidth: "100%" }}
            />
            <div
              className="detail-tulisandetail"
              style={{ color: "white", listStyle: "none" }}
            >
              <p className="nama-gamedetail"> {selectedCard.property1}</p>

              <div className="button-details">
                <button>
                  <AiOutlineStar className="icondetail" />
                  Pembayaran yang Aman
                </button>
                <button>
                  <TfiHeadphoneAlt className="icondetail" />
                  Layanan Pelanggan 24/7
                </button>
              </div>

              <p> {selectedCard.property2}</p>
              <p> {selectedCard.property3}</p>
              <p> {selectedCard.property4}</p>
              <p> {selectedCard.property5}</p>
              <h6>{selectedCard.property6}</h6>
              <ul>
                <li>{selectedCard.property7}</li>
              </ul>
              <div className="sing-indetail">
                <span>
                  <span style={{ color: "yellow", textDecoration: "underline" }}>
                    Sign in ke akun Codashop Kamu
                  </span>{" "}
                  dan dapatkan akses ke events & eksklusif promo Mobile Legends.
                  Belum punya akun Codashop?
                  <span style={{ color: "yellow", textDecoration: "underline" }}>
                    Daftar Sekarang!
                  </span>
                </span>
              </div>

              <p>{selectedCard.property8}</p>

              <div className="aplication-downloaddetail">
                <img src={App} alt="" />
                <img src={Playstore} alt="" />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2>Kartu tidak ditemukan</h2>
          </div>
        )}
      </div>

      {/* Right section */}
      <div className="margin-top" style={{ width: "60%" }}>
        <div className="banner-atasdetail" style={{ position: "relative" }}>
          <div
            className="Hemat-uangdetail"
            style={{ position: "absolute", top: "-20%" }}
          >
            <h6 style={{color: 'white'}}>HEMAT HINGGA 8%</h6>
          </div>
          <img src={promo} alt="" className="image-promodetail" />
          <p className="image-promo-tulisandetail">
            Beli voucher dan hemat hingga 8% dibandingkan dengan top up
            langsung! Hanya berlaku untuk akun Indonesia.
            <button>Beli voucher</button>
          </p>
        </div>

        <div className="button-promodetail">
          <button className="button-utamadetail">
            <div className="button-keduadetail">
              <button className="shopdetail">Shop</button>
              <button className="promodetail">PROMO</button>
            </div>
          </button>
        </div>

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

        <div className="container2detail">
          <div className="number-stepbystepdetail">
            <h3>3</h3>
          </div>
          <div className="Masukan-user-id2detail">
            <h4>Pilih Pembayaran</h4>
          </div>
            {/* card top up */}
              <Pembayaran/>
            {/* card top up end*/}
        </div>

        <div className="container2detail">
          <div className="number-stepbystepdetail">
            <h3>4</h3>
          </div>
          <div className="Masukan-user-id2detail">
            <h4>Beli</h4>
          </div>
            {/* card top up */}
              <Beli/>
            {/* card top up end*/}
        </div>

      </div>
    </div>
    <div className="keterangan-detail-produk">
          <div className="textketerangan container-xxl">
            <div className="text-keterangan-detail-produk">
            <p className="property1-10">{selectedCard.property10}</p>
            <p>{selectedCard.property11}<Link>Klik disini untuk memulai.</Link></p>
            <p>{selectedCard.property12}</p>
            <p>{selectedCard.Property13}</p>
            <p>{selectedCard.property14}</p>
          </div>
          </div>
    </div>
    </>
  );
};
export default Detail2;
