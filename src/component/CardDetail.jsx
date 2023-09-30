import React, { useState } from "react";
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";

// banner game
import pml from "../image/Product/pml.jpg";
import Freefire from "../image/Product/freefire.jpg";
import coc from "../image/Product/coc/logo_coc.png"
import Valorant from "../image/Product/Valorant/VALORANTB.jpg"
import Supersus from "../image/Product/supersus/Supersus.png" 
import Lol from "../image/Product/LOL/Lol.png"
import Cod from "../image/Product/COD/cod.jpg"
import Steam from "../image/Product/Steam/steam.png"
import PUBG from "../image/Product/PUBG/pubg.jpg"
import AOV from "../image/Product/AOV/aovB.png"
import Hogwarts from "../image/Product/Hogwarts/Hog.jpg"
import ClashR from "../image/Product/CS/CS.png"
// banner game end

import "./carddetail.css";
import Pembayaran from "../component/productgame/Pembayaran"
import Beli from "../component/Beli"
// product game
import CardML from "./cardgame/cardML.jsx"
import RightMl from "./cardgame/RightMl"
import FreeFire from "./cardgame/LeftFirefree"
import LeftFreeFire from "./cardgame/RightFreefire"
import LeftCoc from "./cardgame/LeftCod"
import Rightcoc from "./cardgame/RightCoc"
import LeftValornt from "./cardgame/LeftValorant"
import RightValorant from "./cardgame/RightValorant";
import LeftSupersus from "./cardgame/Leftsupersus"
import RightSupersus from "./cardgame/Rightsupersus."
import LeftLol from "./cardgame/LeftLol";
import RightLol from "./cardgame/RightLol";
import LeftCod from "./cardgame/LeftCod"
import RightCod from "./cardgame/RightCod"
import LeftPUBG from "./cardgame/LeftPUBG";
import RightPUBG from "./cardgame/RightPUBG"
import LeftAov from "./cardgame/AovLeft"
import RightAov from "./cardgame/RightAov";
import LeftHog from "./cardgame/LeftHog";
import RightHog from "./cardgame/RightHog";
import LeftCS from "./cardgame/LeftCS";
import RightCS from "./cardgame/RightCS"



const CardDetail = () => {
  const { cardId } = useParams();

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
    "Free Fire": {
      image: Freefire,
      property1: "Free Fire Top-up",
      property2:
        "Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu.",
      property3:
        "Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah di Codashop!",
      property4:
        "Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
      property5:
        "Download dan mainkan Free Fire sekarang!",
      property6: "PERINGATAN:",
      property9: "Untuk menemukan ID Anda, klik pada ikon karakter. User ID tercantum di bawah nama karakter Anda. Contoh: '5363266446'.",
      property10: "Beli Diamond Garena Free Fire (FF) hanya di Codashop Indonesia",
      property11: 'Tinggal selangkah lagi! Dengan membeli Diamond, Kamu bisa menikmati beragam fitur dalam game, seperti membeli skin terbaru, item in-game premium, karakter baru, event eksklusif, dan masih banyak lagi! ',
      property12: 'Nikmati pengalaman top up melalui Codashop, yang terjamin resmi, aman, dan mudah. Kami telah dipercaya sebagai platform top up pilihan oleh jutaan gamers & pengguna aplikasi di Indonesia. Klik di sini untuk memulai top up',
      Property13:"Mengapa memilih Codashop untuk top up Garena Free Fire (FF)?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: '',
    },
    "Clash of Clans": {
      image: coc,
      property1: "Clash of Clans",
      property2:
        "Harga sudah termasuk PPN",
      property3:
        "Beli COC Gold Pass & Gems dengan instan dan dapatkan bonus hingga 1,400 Gems di Codashop.",
      property4:
        "Tanpa perlu registrasi ataupun login. Bayarlah menggunakan Codacash, QRIS, GoPay, OVO, DANA, Bank Transfer, Telkomsel, Indosat, Tri, XL, Smartfren, ShopeePay, LinkAja, Kredivo, Alfamart, Indomaret, DOKU, atau kartu kredit.",
      property5:
        "Cukup masukkan tag akun Clash of Clans kamu, pilih item topup, lengkapi pembayaran dan topup akan dikirim secara instan ke akun Clash of Clans kamu.",
      property6: "Masuk ke akun Codashop kamu untuk dapatkan info terbaru Clash of Clans dan penawaran eksklusif. Belum punya akun Codashop? Daftar sekarang!",
      property8: "Unduh Clash of Clans sekarang!",
      property9: `1. Tekan tombol 'Profil' di pojok kiri atas layar permainan Anda.`,
      property99: `2. Lihat Tag Pemain Anda tepat di bawah nama permainan Anda.`,
      property10: "Top Up Clash of Clans Gold Pass & Gems in Indonesia",
      property11: 'Codashop adalah toko official untuk membeli kredit game dan aplikasi secara resmi. Kami telah dipercaya jutaan gamers dan app users di 50 negara termasuk Indonesia. Topup game tanpa registrasi dan login untuk menjaga privasi anda. Topup sekarang!',
      property12: 'Codashop Indonesia menawarkan Gold Pass dan Gems topup, dapatkan akses ke konten premium dan pengalaman Clash of Clans yang lebih menarik.',
      Property13:"Mengapa memilih Codashop untuk top up Clash of Clans?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: '',
    },
    "VALORANT": {
      image: Valorant,
      property1: "VALORANT",
      property2:
        "Harga sudah termasuk PPN",
      property3:
        "Codashop telah bekerja sama dengan Riot Games untuk menawarkan top up VALORANT Points yang mudah, aman, dan nyaman..",
      property4:
        "Beli VALORANT Points hanya dalam hitungan detik! Cukup masukkan ID riot ID, pilih jumlah VALORANT Points yang Kamu inginkan, selesaikan pembayaran, dan VALORANT Points tersebut akan langsung masuk ke akun VALORANT Kamu.",
      property5:
        "Bayarlah menggunakan GoPay, OVO, DANA, Bank Transfers, Codacash, Telkomsel, Indosat, Tri Indonesia, XL Axiata, Smartfren, Shopee Pay, LinkAja, Kredivo, Alfamart, Indomaret, DOKU, dan kartu kredit.",
      property7:
        "Sign in ke akun Codashop Kamu dan dapatkan akses ke event & promo VALORANT. Belum memiliki akun Codashop? Daftar sekarang!",
      property8: "Unduh dan mainkan VALORANT sekarang!", 
      property9: "Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot ID+Tag menggunakan tombol yang tersedia disamping Riot ID. (Contoh: Westbourne#SEA)", 
      property10: "Cara terbaik top up Valorant Points di Indonesia",
      property11: 'Hanya perlu beberapa detik untuk top up VALORANT Points di Codashop, tempat top up yang mudah, aman, dan nyaman. Kami dipercaya oleh para gamers dan pengguna aplikasi di Indonesia. Klik di sini untuk memulai.',
      property12: 'Dengan VALORANT Points, kamu bisa akses konten premium seperti Battle Pass, Weapon Skins, New Agents, dan Radianite Points. Kami juga bisa partisipasi di event eksklusif yang tersedia dalam game dan masih banyak benefir lainnya!',
      Property13:"Mengapa memilih Codashop untuk top up VALORANT?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: 'Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.',   
    },
    "Super Sus": {
      image: Supersus,
      property1: "Super Sus",
      property2:
        "Beli Golden Star Super Sus hanya dalam hitungan detik! Cukup masukkan ID Space Super Sus Kamu, pilih jumlah Golden Star yang Kamu inginkan, selesaikan pembayaran, dan Golden Star tersebut akan langsung masuk ke akun Super Sus Kamu.",
      property5:
        "Bayarlah menggunakan GoPay, OVO, DANA, Bank Transfers, Codacash, Telkomsel, Indosat, Tri Indonesia, XL Axiata, Smartfren, Shopee Pay, LinkAja, Kredivo, Alfamart, Indomaret, DOKU, dan kartu kredit.",
      property7:
        "Sign in ke akun Codashop Kamu dan dapatkan akses ke event & promo Super Sus.",
      property8: "Unduh Super Sus sekarang!", 
      property9: "Untuk menemukan ID Space Anda, login ke dalam akun permainan, klik tombol Avatar dan Anda dapat menemukan ID Space dibawah foto profile Anda.", 
      property10: "Cara terbaik top up Valorant Points di Indonesia",
      property11: 'Hanya perlu beberapa detik untuk top up VALORANT Points di Codashop, tempat top up yang mudah, aman, dan nyaman. Kami dipercaya oleh para gamers dan pengguna aplikasi di Indonesia. Klik di sini untuk memulai.',
      property12: 'Dengan VALORANT Points, kamu bisa akses konten premium seperti Battle Pass, Weapon Skins, New Agents, dan Radianite Points. Kami juga bisa partisipasi di event eksklusif yang tersedia dalam game dan masih banyak benefir lainnya!',
      Property13:"Mengapa memilih Codashop untuk top up VALORANT?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: 'Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.',   
    },
    "Leaguage of legend": {
      image: Lol,
      property1: "League of Legends: Wild Rift",
      property2:
        "Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu.",
      property3:
        "Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah di Codashop!",
      property4:
        "Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
      property5:
        "Download dan mainkan Free Fire sekarang!",
      property6: "PERINGATAN:",
      property9: "Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot ID+Tag menggunakan tombol yang tersedia disamping Riot ID. (Contoh: Westbourne#SEA)",
      property10: "Beli Diamond Garena Free Fire (FF) hanya di Codashop Indonesia",
      property11: 'Tinggal selangkah lagi! Dengan membeli Diamond, Kamu bisa menikmati beragam fitur dalam game, seperti membeli skin terbaru, item in-game premium, karakter baru, event eksklusif, dan masih banyak lagi! ',
      property12: 'Nikmati pengalaman top up melalui Codashop, yang terjamin resmi, aman, dan mudah. Kami telah dipercaya sebagai platform top up pilihan oleh jutaan gamers & pengguna aplikasi di Indonesia. Klik di sini untuk memulai top up',
      Property13:"Mengapa memilih Codashop untuk top up Garena Free Fire (FF)?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: '',
    },
    "Call of duty: Mobile": {
      image: Cod,
      property1: "League of Legends: Wild Rift",
      property2:
        "Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu.",
      property3:
        "Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah di Codashop!",
      property4:
        "Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
      property5:
        "Download dan mainkan Free Fire sekarang!",
      property6: "PERINGATAN:",
      property9: "Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot ID+Tag menggunakan tombol yang tersedia disamping Riot ID. (Contoh: Westbourne#SEA)",
      property10: "Beli Diamond Garena Free Fire (FF) hanya di Codashop Indonesia",
      property11: 'Tinggal selangkah lagi! Dengan membeli Diamond, Kamu bisa menikmati beragam fitur dalam game, seperti membeli skin terbaru, item in-game premium, karakter baru, event eksklusif, dan masih banyak lagi! ',
      property12: 'Nikmati pengalaman top up melalui Codashop, yang terjamin resmi, aman, dan mudah. Kami telah dipercaya sebagai platform top up pilihan oleh jutaan gamers & pengguna aplikasi di Indonesia. Klik di sini untuk memulai top up',
      Property13:"Mengapa memilih Codashop untuk top up Garena Free Fire (FF)?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: '',
    },
    "steam wallet Code": {
      image: Steam,
      property1: "League of Legends: Wild Rift",
      property2:
        "Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu.",
      property3:
        "Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah di Codashop!",
      property4:
        "Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
      property5:
        "Download dan mainkan Free Fire sekarang!",
      property6: "PERINGATAN:",
      property9: "Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot ID+Tag menggunakan tombol yang tersedia disamping Riot ID. (Contoh: Westbourne#SEA)",
      property10: "Beli Diamond Garena Free Fire (FF) hanya di Codashop Indonesia",
      property11: 'Tinggal selangkah lagi! Dengan membeli Diamond, Kamu bisa menikmati beragam fitur dalam game, seperti membeli skin terbaru, item in-game premium, karakter baru, event eksklusif, dan masih banyak lagi! ',
      property12: 'Nikmati pengalaman top up melalui Codashop, yang terjamin resmi, aman, dan mudah. Kami telah dipercaya sebagai platform top up pilihan oleh jutaan gamers & pengguna aplikasi di Indonesia. Klik di sini untuk memulai top up',
      Property13:"Mengapa memilih Codashop untuk top up Garena Free Fire (FF)?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: '',
    },
    "PUBG mobile": {
      image: PUBG,
      property1: "PUBG mobile",
      property2:
        "Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu.",
      property3:
        "Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah di Codashop!",
      property4:
        "Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
      property5:
        "Download dan mainkan Free Fire sekarang!",
      property6: "PERINGATAN:",
      property9: "Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot ID+Tag menggunakan tombol yang tersedia disamping Riot ID. (Contoh: Westbourne#SEA)",
      property10: "Beli Diamond Garena Free Fire (FF) hanya di Codashop Indonesia",
      property11: 'Tinggal selangkah lagi! Dengan membeli Diamond, Kamu bisa menikmati beragam fitur dalam game, seperti membeli skin terbaru, item in-game premium, karakter baru, event eksklusif, dan masih banyak lagi! ',
      property12: 'Nikmati pengalaman top up melalui Codashop, yang terjamin resmi, aman, dan mudah. Kami telah dipercaya sebagai platform top up pilihan oleh jutaan gamers & pengguna aplikasi di Indonesia. Klik di sini untuk memulai top up',
      Property13:"Mengapa memilih Codashop untuk top up Garena Free Fire (FF)?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: '',
    },
    "Arena of valor": {
      image: AOV,
      property1: "PUBG mobile",
      property2:
        "Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu.",
      property3:
        "Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah di Codashop!",
      property4:
        "Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
      property5:
        "Download dan mainkan Free Fire sekarang!",
      property6: "PERINGATAN:",
      property9: "Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot ID+Tag menggunakan tombol yang tersedia disamping Riot ID. (Contoh: Westbourne#SEA)",
      property10: "Beli Diamond Garena Free Fire (FF) hanya di Codashop Indonesia",
      property11: 'Tinggal selangkah lagi! Dengan membeli Diamond, Kamu bisa menikmati beragam fitur dalam game, seperti membeli skin terbaru, item in-game premium, karakter baru, event eksklusif, dan masih banyak lagi! ',
      property12: 'Nikmati pengalaman top up melalui Codashop, yang terjamin resmi, aman, dan mudah. Kami telah dipercaya sebagai platform top up pilihan oleh jutaan gamers & pengguna aplikasi di Indonesia. Klik di sini untuk memulai top up',
      Property13:"Mengapa memilih Codashop untuk top up Garena Free Fire (FF)?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: '',
    },
    "Hogwarst Legacy": {
      image: Hogwarts,
      property1: "PUBG mobile",
      property2:
        "Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu.",
      property3:
        "Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah di Codashop!",
      property4:
        "Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
      property5:
        "Download dan mainkan Free Fire sekarang!",
      property6: "PERINGATAN:",
      property9: "Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot ID+Tag menggunakan tombol yang tersedia disamping Riot ID. (Contoh: Westbourne#SEA)",
      property10: "Beli Diamond Garena Free Fire (FF) hanya di Codashop Indonesia",
      property11: 'Tinggal selangkah lagi! Dengan membeli Diamond, Kamu bisa menikmati beragam fitur dalam game, seperti membeli skin terbaru, item in-game premium, karakter baru, event eksklusif, dan masih banyak lagi! ',
      property12: 'Nikmati pengalaman top up melalui Codashop, yang terjamin resmi, aman, dan mudah. Kami telah dipercaya sebagai platform top up pilihan oleh jutaan gamers & pengguna aplikasi di Indonesia. Klik di sini untuk memulai top up',
      Property13:"Mengapa memilih Codashop untuk top up Garena Free Fire (FF)?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: '',
    },
    "Clash Royale": {

      image: ClashR,
      property1: "Clash Royale",
      property2:
        "Beli Diamond Free Fire (FF) hanya dalam hitungan detik! Cukup masukkan Player ID Free Fire Kamu, pilih jumlah Diamond yang Kamu inginkan, selesaikan pembayaran, dan Diamond tersebut akan langsung masuk ke akun Free Fire Kamu.",
      property3:
        "Tanpa registrasi atau login, Kamu bisa langsung top up Diamond Free Fire hari ini dengan mudah di Codashop!",
      property4:
        "Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak",
      property5:
        "Download dan mainkan Free Fire sekarang!",
      property6: "PERINGATAN:",
      property9: "Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot ID+Tag menggunakan tombol yang tersedia disamping Riot ID. (Contoh: Westbourne#SEA)",
      property10: "Beli Diamond Garena Free Fire (FF) hanya di Codashop Indonesia",
      property11: 'Tinggal selangkah lagi! Dengan membeli Diamond, Kamu bisa menikmati beragam fitur dalam game, seperti membeli skin terbaru, item in-game premium, karakter baru, event eksklusif, dan masih banyak lagi! ',
      property12: 'Nikmati pengalaman top up melalui Codashop, yang terjamin resmi, aman, dan mudah. Kami telah dipercaya sebagai platform top up pilihan oleh jutaan gamers & pengguna aplikasi di Indonesia. Klik di sini untuk memulai top up',
      Property13:"Mengapa memilih Codashop untuk top up Garena Free Fire (FF)?",
      property14:"Mudah & cepat Kamu hanya perlu hitungan detik untuk menyelesaikan pembelian di Codashop.",
      property15: '',
    },

    // ... tambahkan detail kartu lainnya
  };

  const selectedCard = cardDetails[cardId];

  const isMobileLegends = cardId === "Mobile Legends 1";
  const isFreeFire = cardId === "Free Fire";
  const isClashOfClans = cardId === "Clash of Clans";
  const isValorant = cardId === "VALORANT";
  const isSuperSus = cardId === "Super Sus";
  const isLol = cardId === "Leaguage of legend";
  const isCODM = cardId === "Call of duty: Mobile";
  const isSteam = cardId === "steam wallet Code";
  const isPUBG = cardId === "PUBG mobile";
  const isAov = cardId === "Arena of valor";
  const isHogwarts = cardId === "Hogwarst Legacy";
  const isCS = cardId === "Clash Royale";



  









  return (
    
    <>
    <div
      className="besar container-xxl"
      style={{   marginTop: '58px' }}
    >
      {/* Left section */}
      <div className="kiri">
        {selectedCard ? (
          <div className="container-xxl">


            <h2 style={{ color: "white" }}>{selectedCard.title}</h2>
            <p style={{ color: "white" }}>{selectedCard.description}</p>
            {isMobileLegends && <CardML selectedCard={selectedCard} />}
            {isFreeFire && <FreeFire selectedCard={selectedCard} />}
            {isClashOfClans && <LeftCoc selectedCard={selectedCard} />}
            {isValorant && <LeftValornt selectedCard={selectedCard} />}
            {isSuperSus && <LeftSupersus selectedCard={selectedCard} />}
            {isLol && <LeftLol selectedCard={selectedCard} />}
            {isCODM && <LeftCod selectedCard={selectedCard} />}
            {isSteam && <LeftCod selectedCard={selectedCard} />}
            {isPUBG && <LeftPUBG selectedCard={selectedCard} />}
            {isAov && <LeftAov selectedCard={selectedCard} />}
            {isHogwarts && <LeftHog selectedCard={selectedCard} />}
            {isCS && <LeftCS selectedCard={selectedCard} />}


          </div>
        ) : (
          <div>
            <h2>Kartu tidak ditemukan</h2>
          </div>
        )}
      </div>

      {/* Right section */}
      <div className="kanan">


        {isMobileLegends && <RightMl selectedCard={selectedCard} />}
        {isFreeFire && <LeftFreeFire selectedCard={selectedCard} />}
        {isClashOfClans && <Rightcoc selectedCard={selectedCard} />}
        {isValorant && <RightValorant selectedCard={selectedCard} />}
        {isSuperSus && <RightSupersus selectedCard={selectedCard} />}
        {isLol && <RightLol selectedCard={selectedCard} />}
        {isCODM && <RightCod selectedCard={selectedCard} />}
        {isSteam && <RightCod selectedCard={selectedCard} />}
        {isPUBG && <RightPUBG selectedCard={selectedCard} />}
        {isAov && <RightAov selectedCard={selectedCard} />}
        {isHogwarts && <RightHog selectedCard={selectedCard} />}
        {isCS && <RightCS selectedCard={selectedCard} />}

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
            <p style={{fontFamily:'bold'}}>{selectedCard.Property13}</p>
            <p>{selectedCard.property14}</p>
          </div>
          </div>
    </div>
    </>


  );
};

export default CardDetail;


