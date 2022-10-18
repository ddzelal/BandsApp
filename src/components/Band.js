import React from "react";
import styles from "./Band.module.css";

function Band({ band, changeCurrentBand }) {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h3>{band.name}</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <img src={band.img_url} alt="" className={styles.mainThumb}></img>
          </div>
          <div className="col-6">
            <p>{band.info.substr(0, 200)}...</p>
          </div>
        </div>
        <div className="card-footer">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              changeCurrentBand(band);
            }}
          >
            Launch demo modal
          </button>
        </div>
      </div>
    </div>
  );
}

export default Band;
