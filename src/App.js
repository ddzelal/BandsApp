import React from "react";
import { useState, useEffect } from "react";
import BandsList from "./components/BandsList";
import NavBar from "./components/NavBar";
import ModalDialog from "./components/Modal";

function App() {

  const [bands, setBands] = useState([]);
  const [filterBends, setFilterBends] = useState([])
  const [currentBand, setCurrentBand] = useState({});
  const [show, setShow] = useState(false);


  const changeCurrentBand = (band) => {
    setCurrentBand(band);
    handleShow();
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ddzelal/BandsJSON/master/Bands.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBands(data);
        setFilterBends(data)
      });
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <NavBar />
      <BandsList bands={bands} filterBends={filterBends} setFilterBends={setFilterBends} changeCurrentBand={changeCurrentBand} />
      <ModalDialog
        handleClose={handleClose}
        show={show}
        currentBand={currentBand}
      />
    </>
  );
}

export default App;
