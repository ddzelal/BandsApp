import React from "react";
import { useState, useEffect } from "react";
import BandsList from "./components/BandsList";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";

function App() {
  //STIGO DO 6:43!!!!!

  const [bands, setBands] = useState([]);
  const [currentBand, setCurrentBand] = useState({});

  const changeCurrentBand = (band) => {
    setCurrentBand(band);
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

  return (
    <>
      <NavBar />
      <BandsList bands={bands} changeCurrentBand={changeCurrentBand} />
      <Modal currentBand={currentBand} />
    </>
  );
}

export default App;
