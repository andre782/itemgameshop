import React from 'react'
import App from "../../image/Product/app.png";
import Playstore from "../../image/Product/google.png";
import pml from "../../image/Product/pml.jpg";
import { AiOutlineStar } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsQuestionLg } from "react-icons/bs";


const cardDetails = {
    "Mobile Legends 1": {
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


const cardML = ({ selectedCard }) => {
  return (
    <>
    <div>
        <img
              className="img-bannerdetail"
              src={selectedCard.image}
              alt={selectedCard.title}
              style={{ color: "white" }}
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

                <div className="konten-kiri">
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
                  <p style={{ color: "yellow", textDecoration: "underline" }}>
                    Sign in ke akun Codashop Kamu
                  </p>{" "}
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




    </div>
    </>
  )
}

export default cardML