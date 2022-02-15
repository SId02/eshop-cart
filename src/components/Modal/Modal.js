import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
   
        <div className="title">
          <h1>Are You Sure You Want to Continue Checkout Page</h1>
        </div>
        <div className="body">
          <p>Please Fill the shipping address and payment methods</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
