import React from "react";

const Modal = ({ currentBand }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {currentBand.name}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-4">
                <img src={currentBand.thumb1} width="140px" height="85px" alt=""></img>
              </div>
              <div className="col-4">
                <img src={currentBand.thumb2} width="140px" height="85px" alt=""></img>
              </div>
              <div className="col-4">
                <img src={currentBand.thumb3} width="140px" height="85px"alt=""></img>
              </div>
            </div>
            <div className="row">
              <p className="p-2">{currentBand.info}</p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
