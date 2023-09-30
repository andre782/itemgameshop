import React from 'react'
import App from "../../image/Product/app.png";
import Playstore from "../../image/Product/google.png";

import { AiOutlineStar } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsQuestionLg } from "react-icons/bs";





const FreeFire = ({ selectedCard }) => {
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

export default FreeFire