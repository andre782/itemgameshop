import React from "react";
import { useParams } from "react-router-dom";
import "../carditems.css"
// mobile legends
import Diamond from "../../image/productgame/mobilelegend/Diamonds.png"
import Diamond2 from "../../image/productgame/mobilelegend/Diamond2.png"
import Diamond3 from "../../image/productgame/mobilelegend/Diamond3.png"
import Diamond4 from "../../image/productgame/mobilelegend/Diamond4.png"
import Diamond5 from "../../image/productgame/mobilelegend/Diamond5.png"
import Diamond6 from "../../image/productgame/mobilelegend/Diamond6.png"
// freeFire
import DimondFreefire from "../../image/productgame/Freefire/Freefire_diamonds.png"
// gems coc
import gems from "../../image/Product/coc/Gems.png"
import gems2 from "../../image/Product/coc/Gems2.png"
import gems3 from "../../image/Product/coc/Gems3.png"
import gems4 from "../../image/Product/coc/Gems4.png"
import gems5 from "../../image/Product/coc/Gems5.png"
import gems6 from "../../image/Product/coc/Gems6.png"
// radiant valorant 
import Radiant from "../../image/Product/coc/Gems6.png"
// supersus
import Goldstar from "../../image/Product/supersus/Goldstar.png"
import Goldstar2 from "../../image/Product/supersus/Goldstar2.png"
// LOL
import Lol1 from "../../image/Product/LOL/WildCore.png"
import Lol2 from "../../image/Product/LOL/WildCore2.png"
import Lol3 from "../../image/Product/LOL/WildCore3.png"
// COD
import Cod from "../../image/Product/COD/Cod.png"
// pubg
import PUBGE from "../../image/Product/PUBG/UC.png"
// AOV
import Aov from "../../image/Product/AOV/AOV.png"
// Hogwarts
import Hog from "../../image/Product/Hogwarts/Hog.jpg"
import Hog2 from "../../image/Product/Hogwarts/Hog2.jpg"
// Clash royale
import CSDM from "../../image/Product/CS/CSDM.png"
import CSDM1 from "../../image/Product/CS/DM2.png"
import CSDM2 from "../../image/Product/CS/DM3.png"
import CSDM3 from "../../image/Product/CS/DM4.png"
import CSDM4 from "../../image/Product/CS/DM5.png"
import CSDM5 from "../../image/Product/CS/DM6.png"


// end product game





import Lol from "../Isi produk card game/cardLol"
import ML from "../Isi produk card game/CardML"
import FF from "../Isi produk card game/CardML"
import COC from "../Isi produk card game/cardCOC"
import Steam from "../Isi produk card game/CardSteam"
import PUBG from "../Isi produk card game/cardPUBG"
import AOV from "../Isi produk card game/cardAov"
import Hogwarts from "../Isi produk card game/cardHog"
import CSR from "../Isi produk card game/CardCS"



const Carditems = () => {
  const { cardId } = useParams();

  const cardItems = {
    "Mobile Legends 1": {
      // diamond
      Diamond1: Diamond,
      Diamond2: Diamond2,
      Diamond3: Diamond3,
      Diamond4: Diamond4,
      Diamond5: Diamond5,
      Diamond6: Diamond6,

      // diamond end
      jumlahdiamond1: '3 Diamonds',
      jumlahdiamond2: '5 Diamonds',
      jumlahdiamond3: '11 Diamonds + 1 Bonus',
      jumlahdiamond4: '17 Diamonds + 2 Bonus',
      jumlahdiamond5: '25 Diamonds + 3 Bonus',
      jumlahdiamond6: '40 Diamonds + 4 Bonus',
      jumlahdiamond7: '53 Diamonds + 6 Bonus',
      jumlahdiamond8: '77 Diamonds + 8 Bonus',
      jumlahdiamond9: '154 Diamonds + 16 Bonus',
      jumlahdiamond10: '217 Diamonds + 23 Bonus',
      jumlahdiamond11: '256 Diamonds + 40 Bonus',
      jumlahdiamond12: '367 Diamonds + 41 Bonus',
      jumlahdiamond13: '503 Diamonds + 65 Bonus',
      jumlahdiamond14: '774 Diamonds + 101 Bonus',
      jumlahdiamond15: '1708 Diamonds + 302 Bonus',
      jumlahdiamond16: '4003 Diamonds + 827 Bonus',

      property11: 'Dari',
    //   harga
      property12: 'Rp. 1.514',
      property13: 'Rp. 1.579',
      property14: 'Rp. 3.688',
      property15: 'Rp. 5.797',
      property16: 'Rp. 8.436',
      property17: 'Rp. 12.654',
      property18: 'Rp. 16.872',
      property19: 'Rp. 24.254',
      property120: 'Rp. 48.507',
    // harga end
    }, 

    "Free Fire": {
      // diamond
      Diamond1: DimondFreefire,
      Diamond2: DimondFreefire,
      Diamond3: DimondFreefire,
      Diamond4: DimondFreefire,
      Diamond5: DimondFreefire,
      Diamond6: DimondFreefire,

      // diamond end
      jumlahdiamond1: '5 Diamonds',
      jumlahdiamond2: '12 Diamonds',
      jumlahdiamond3: '50 Diamonds',
      jumlahdiamond4: '70 Diamonds',
      jumlahdiamond5: '140 Diamonds',
      jumlahdiamond6: '355 Diamonds',
      jumlahdiamond7: '720 Diamonds',
      jumlahdiamond8: '1450 Diamonds',
      jumlahdiamond9: '2180 Diamonds',
      jumlahdiamond10: '3640 Diamonds',
      jumlahdiamond11: '7290 Diamonds',
      jumlahdiamond12: '36500 Diamonds',
      jumlahdiamond13: '73100 Diamonds',
      jumlahdiamond14: '73100 Diamonds',
      jumlahdiamond15: '73100 Diamonds',
      jumlahdiamond16: '73100 Diamonds',

      property11: 'Dari',
    //   harga
      property12: 'Rp. 1.514',
      property13: 'Rp. 1.579',
      property14: 'Rp. 3.688',
      property15: 'Rp. 5.797',
      property16: 'Rp. 8.436',
      property17: 'Rp. 12.654',
      property18: 'Rp. 16.872',
      property19: 'Rp. 24.254',
      property120: 'Rp. 48.507',
    // harga end
    }, 

    "Clash of Clans": {
      // diamond
      Diamond1: gems,
      Diamond2: gems2,
      Diamond3: gems3,
      Diamond4: gems4,
      Diamond5: gems5,
      Diamond6: gems6,

      // diamond end
      jumlahdiamond1: '5 Diamonds',
      jumlahdiamond2: '12 Diamonds',
      jumlahdiamond3: '50 Diamonds',
      jumlahdiamond4: '70 Diamonds',
      jumlahdiamond5: '140 Diamonds',
      jumlahdiamond6: '355 Diamonds',
      jumlahdiamond7: '720 Diamonds',
      jumlahdiamond8: '1450 Diamonds',
      jumlahdiamond9: '2180 Diamonds',
      jumlahdiamond10: '3640 Diamonds',
      jumlahdiamond11: '7290 Diamonds',
      jumlahdiamond12: '36500 Diamonds',
      jumlahdiamond13: '73100 Diamonds',
      jumlahdiamond14: '73100 Diamonds',
      jumlahdiamond15: '73100 Diamonds',
      jumlahdiamond16: '73100 Diamonds',

      property11: 'Dari',
    //   harga
      property12: 'Rp. 1.514',
      property13: 'Rp. 1.579',
      property14: 'Rp. 3.688',
      property15: 'Rp. 5.797',
      property16: 'Rp. 8.436',
      property17: 'Rp. 12.654',
      property18: 'Rp. 16.872',
      property19: 'Rp. 24.254',
      property120: 'Rp. 48.507',
    // harga end
    }, 

    "VALORANT": {
      // diamond
      Diamond1: Radiant,
      Diamond2: Radiant,
      Diamond3: Radiant,
      Diamond4: Radiant,
      Diamond5: Radiant,
      Diamond6: Radiant,

      // diamond end
      jumlahdiamond1: '125 Points',
      jumlahdiamond2: '420 Points',
      jumlahdiamond3: '700 Points',
      jumlahdiamond4: '1375 Points',
      jumlahdiamond5: '2400 Points',
      jumlahdiamond6: '4000 Points',
      jumlahdiamond7: '8150 Points',
      jumlahdiamond8: '8150 Points',
      jumlahdiamond9: '8150 Points',
      jumlahdiamond10: '8150 Points',
      jumlahdiamond11: '8150 Points',
      jumlahdiamond12: '8150 Points',
      jumlahdiamond13: '8150 Points',
      jumlahdiamond14: '8150 Points',
      jumlahdiamond15: '8150 Points',
      jumlahdiamond16: '8150 Points',

      property11: 'Dari',
    //   harga
      property12: 'Rp. 15.000',
      property13: 'Rp. 50.000',
      property14: 'Rp. 80.000',
      property15: 'Rp. 150.000',
      property16: 'Rp. 250.000',
      property17: 'Rp. 400.000',
      property18: 'Rp. 800.000',
      property19: 'Rp. 800.000',
      property120: 'Rp. 800.000',
    // harga end
    }, 

    "Super Sus": {
      // diamond
      Diamond1: Goldstar,
      Diamond2: Goldstar,
      Diamond3: Goldstar,
      Diamond4: Goldstar2,
      Diamond5: Goldstar2,
      Diamond6: Goldstar2,

      // diamond end
      jumlahdiamond1: '125 Points',
      jumlahdiamond2: '420 Points',
      jumlahdiamond3: '700 Points',
      jumlahdiamond4: '1375 Points',
      jumlahdiamond5: '2400 Points',
      jumlahdiamond6: '4000 Points',
      jumlahdiamond7: '8150 Points',
      jumlahdiamond8: '8150 Points',
      jumlahdiamond9: '8150 Points',
      jumlahdiamond10: '8150 Points',
      jumlahdiamond11: '8150 Points',
      jumlahdiamond12: '8150 Points',
      jumlahdiamond13: '8150 Points',
      jumlahdiamond14: '8150 Points',
      jumlahdiamond15: '8150 Points',
      jumlahdiamond16: '8150 Points',

      property11: 'Dari',
    //   harga
      property12: 'Rp. 15.000',
      property13: 'Rp. 50.000',
      property14: 'Rp. 80.000',
      property15: 'Rp. 150.000',
      property16: 'Rp. 250.000',
      property17: 'Rp. 400.000',
      property18: 'Rp. 800.000',
      property19: 'Rp. 800.000',
      property120: 'Rp. 800.000',
    // harga end
    }, 

    "Leaguage of legend": {
      // diamond
      Diamond1: Lol1,
      Diamond2: Lol1,
      Diamond3: Lol2,
      Diamond4: Lol2,
      Diamond5: Lol3,
      Diamond6: Lol3,

      // diamond end
      jumlahdiamond1: '105 Wild Cores',
      jumlahdiamond2: '350 Wild Cores',
      jumlahdiamond3: '585 Wild Cores',
      jumlahdiamond4: '1135 Wild Cores',
      jumlahdiamond5: '1660 Wild Cores',
      jumlahdiamond6: '3010 Wild Cores',
      jumlahdiamond7: '6210 Wild Cores',
      jumlahdiamond8: '6210 Wild Cores',
      jumlahdiamond9: '6210 Wild Cores',
      jumlahdiamond10: '6210 Wild Cores',
      jumlahdiamond11: '6210 Wild Cores',
      jumlahdiamond12: '6210 Wild Cores',
      jumlahdiamond13: '6210 Wild Cores',
      jumlahdiamond14: '6210 Wild Cores',
      jumlahdiamond15: '6210 Wild Cores',
      jumlahdiamond16: '6210 Wild Cores',

      property11: 'Dari',
    //   harga
      property12: 'Rp. 15.000',
      property13: 'Rp. 50.000',
      property14: 'Rp. 80.000',
      property15: 'Rp. 150.000',
      property16: 'Rp. 250.000',
      property17: 'Rp. 400.000',
      property18: 'Rp. 800.000',
      property19: 'Rp. 800.000',
      property120: 'Rp. 800.000',
    // harga end
    }, 
    "Call of duty: Mobile": {
      // diamond
      Diamond1: Cod,
      Diamond2: Cod,
      Diamond3: Cod,
      Diamond4: Cod,
      Diamond5: Cod,
      Diamond6: Cod,

      // diamond end
      jumlahdiamond1: '31 CP',
      jumlahdiamond2: '62 CP',
      jumlahdiamond3: '127 CP',
      jumlahdiamond4: '38280 CP',
      jumlahdiamond5: '76560 CP',
      jumlahdiamond6: '800 CP',
      jumlahdiamond7: '1373 CP',
      jumlahdiamond8: '2059 CP',
      jumlahdiamond9: '2749 CP',
      jumlahdiamond10: '3564 CP',
      jumlahdiamond11: '5618 CP',
      jumlahdiamond12: '7656 CP',
      jumlahdiamond13: '15312 CP',
      jumlahdiamond14: '38280 CP',
      jumlahdiamond15: '76560 CP',
      jumlahdiamond16: '76560 CP',

      property11: 'Dari',
    //   harga
      property12: 'Rp. 15.000',
      property13: 'Rp. 50.000',
      property14: 'Rp. 80.000',
      property15: 'Rp. 150.000',
      property16: 'Rp. 250.000',
      property17: 'Rp. 400.000',
      property18: 'Rp. 800.000',
      property19: 'Rp. 800.000',
      property120: 'Rp. 800.000',
    // harga end
    }, 
    "steam wallet Code": {
      // diamond end
      jumlahdiamond1: 'IDR 12.000 Wallet Code',
      jumlahdiamond2: 'IDR 45.000 Wallet Code',
      jumlahdiamond3: 'IDR 60.000 Wallet Code',
      jumlahdiamond4: 'IDR 90.000 Wallet Code',
      jumlahdiamond5: 'IDR 120.000 Wallet Code',
      jumlahdiamond6: 'IDR 250.000 Wallet Code',
      jumlahdiamond7: 'IDR 400.000 Wallet Code',
      jumlahdiamond8: 'IDR 600.000 Wallet Code',

      property11: 'Dari',
    //   harga
      property12: 'Rp. 15.000',
      property13: 'Rp. 50.000',
      property14: 'Rp. 80.000',
      property15: 'Rp. 150.000',
      property16: 'Rp. 250.000',
      property17: 'Rp. 400.000',
      property18: 'Rp. 800.000',
      property19: 'Rp. 800.000',
      property120: 'Rp. 800.000',
    // harga end
    }, 
    "PUBG mobile": {
      // diamond
      Diamond1: PUBGE,
      Diamond2: PUBGE,
      Diamond4: PUBGE,
      Diamond5: PUBGE,
      Diamond6: PUBGE,

      // diamond end
      jumlahdiamond1: 'IDR 12.000 Wallet Code',
      jumlahdiamond2: 'IDR 45.000 Wallet Code',
      jumlahdiamond3: 'IDR 60.000 Wallet Code',
      jumlahdiamond4: 'IDR 90.000 Wallet Code',
      jumlahdiamond5: 'IDR 120.000 Wallet Code',
      jumlahdiamond6: 'IDR 250.000 Wallet Code',
      jumlahdiamond7: 'IDR 400.000 Wallet Code',
      jumlahdiamond8: 'IDR 600.000 Wallet Code',

      property11: 'Dari',
    //   harga
      property12: 'Rp. 15.000',
      property13: 'Rp. 50.000',
      property14: 'Rp. 80.000',
      property15: 'Rp. 150.000',
      property16: 'Rp. 250.000',
      property17: 'Rp. 400.000',
      property18: 'Rp. 800.000',
      property19: 'Rp. 800.000',
      property120: 'Rp. 800.000',
    // harga end
    }, 
    "Arena of valor": {
      // diamond
      Diamond1: Aov,
      Diamond2: Aov,
      Diamond4: Aov,
      Diamond5: Aov,
      Diamond6: Aov,

      // diamond end
      jumlahdiamond1: '40 Vouchers',
      jumlahdiamond2: '90 Vouchers',
      jumlahdiamond3: '230 Vouchers',
      jumlahdiamond4: '470 Vouchers',
      jumlahdiamond5: '950 Vouchers',
      jumlahdiamond6: '1430 Vouchers',
      jumlahdiamond7: '2390 Vouchers',
      jumlahdiamond8: 'IDR 600.000 Wallet Code',

      property11: 'Dari',
    //   harga
      property12: 'Rp. 15.000',
      property13: 'Rp. 50.000',
      property14: 'Rp. 80.000',
      property15: 'Rp. 150.000',
      property16: 'Rp. 250.000',
      property17: 'Rp. 400.000',
      property18: 'Rp. 800.000',
      property19: 'Rp. 800.000',
      property120: 'Rp. 800.000',
    // harga end
    },
    "Hogwarst Legacy": {
      // diamond
      Diamond1: Hog,
      Diamond2: Hog2,
     

      // diamond end
      jumlahdiamond1: 'Hogwarts Legacy - Steam',
      jumlahdiamond2: 'Hogwarts Legacy Deluxe Edition - Steam',
    

      property11: 'Dari',
    //   harga
      property12: 'Rp. 711.550',
      property13: 'Rp. 830.300',
    // harga end
    },
    "Clash Royale": {
      // diamond
      Diamond1: CSDM,
      Diamond2: CSDM1,
      Diamond4: CSDM2,
      Diamond5: CSDM3,
      Diamond6: CSDM4,
      Diamond7: CSDM5,

     

      // diamond end
      jumlahdiamond1: '24 Gems + 3 bonus',
      jumlahdiamond2: '24 Gems + 3 bonus',
      jumlahdiamond3: '24 Gems + 3 bonus',
      jumlahdiamond4: '24 Gems + 3 bonus',
      jumlahdiamond5: '24 Gems + 3 bonus',
      jumlahdiamond6: '24 Gems + 3 bonus',
      jumlahdiamond7: '24 Gems + 3 bonus',
      jumlahdiamond8: '24 Gems + 3 bonus',
    

      property11: 'Dari',
    //   harga
      property12: 'Rp. 711.550',
      property13: 'Rp. 830.300',
    // harga end
    },
    
    

    

  }
  const selectedCard = cardItems[cardId] || {};

  const isML = cardId === "Mobile Legends 1";
  const isLol = cardId === "Leaguage of legend";
  const isFF = cardId === "Free Fire";
  const isCOC = cardId === "Clash of Clans";
  const isVALORANT = cardId === "VALORANT";
  const isSuperSus = cardId === "Super Sus";
  const isCod = cardId === "Call of duty: Mobile";
  const isSteam = cardId === "steam wallet Code";
  const isPUBG = cardId === "PUBG mobile";
  const isAOV = cardId === "Arena of valor";
  const isHOG = cardId === "Hogwarst Legacy";
  const iscsr = cardId === "Clash Royale";













  return (
    <div className="container-card">
            {isML && <ML selectedCard={selectedCard} />}
            {isLol && <Lol selectedCard={selectedCard} />}
            {isFF && <FF selectedCard={selectedCard} />}
            {isCOC && <COC selectedCard={selectedCard} />}
            {isVALORANT && <COC selectedCard={selectedCard} />}
            {isSuperSus && <FF selectedCard={selectedCard} />}
            {isCod && <FF selectedCard={selectedCard} />}
            {isSteam && <Steam selectedCard={selectedCard} />}
            {isPUBG && <PUBG selectedCard={selectedCard} />}
            {isAOV && <AOV selectedCard={selectedCard} />}
            {isHOG && <Hogwarts selectedCard={selectedCard} />}
            {iscsr && <CSR selectedCard={selectedCard} />}
    </div>
  );
};

export default Carditems;


