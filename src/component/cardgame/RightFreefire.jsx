import React, { useState } from "react";

import pml from "../../image/Product/pml.jpg";
import { BsQuestionLg } from "react-icons/bs";

import Carditems from "../productgame/Carditems";



const Rightcoc = ({ selectedCard }) => {
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
    <div>
        

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
                placeholder="Masukan Player ID"
                style={{width: '120%'}}
                onChange={handleUserIdChange}
                required
              />
              {!isUserIdValid && (
                <span className="text-danger">Bagian ini harus diisi</span>
              )}
              <div className="valid-feedback">Looks good!</div>
            </div>
            <BsQuestionLg style={{ fontSize: "35px", cursor: "pointer", marginLeft: "50px" }} />
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

export default Rightcoc;
