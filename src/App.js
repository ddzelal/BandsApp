import React from "react";
import { useState, useEffect } from "react";
import BandsList from "./components/BandsList";
import NavBar from "./components/NavBar";
import ModalDialog from "./components/Modal";

function App() {
  //STIGO DO 6:43!!!!!

  const [bands, setBands] = useState([]);
  const [currentBand, setCurrentBand] = useState({});
  const [show, setShow] = useState(false)

  const changeCurrentBand = (band) => {
    setCurrentBand(band);
    handleShow();
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBands(data);
      });
  }, []);

  const handleClose = () => {
    setShow(false )
  }

  const handleShow = () =>{
    setShow(true)
  }

  return (
    <>
      <NavBar />
      <BandsList  bands={bands} changeCurrentBand={changeCurrentBand} />
      <ModalDialog handleClose={handleClose} show={show} currentBand={currentBand}  />
    </>
  );
}

export default App;
