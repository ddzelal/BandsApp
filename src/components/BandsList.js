import React from "react";
import Band from "./Band";
import "./Band.css";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
// import debounce from "lodash.debounce";

function BandsList({ bands, changeCurrentBand, filterBends, setFilterBends }) {
  const [activePage, setActivePage] = useState(1);

  const rowsPerPage = 4;

  const pagesNum = Math.ceil(filterBends.length / rowsPerPage);

  let pagesItems = [];
  for (let number = 1; number <= pagesNum; number++) {
    pagesItems.push(
      <Pagination.Item
        activeLabel=""
        key={number}
        active={number === activePage}
        onClick={() => {
          setActivePage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  const start = rowsPerPage * (activePage - 1);
  const end = start + rowsPerPage;

  const allBands = filterBends.slice(start, end).map((band) => {
    return (
      <div className="col-6" key={band.id}>
        <Band band={band} changeCurrentBand={changeCurrentBand} />
      </div>
    );
  });

  const getFilterBends = (event) => {
    setActivePage(1);
    setFilterBends(
      bands.filter((b) =>
        b.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  // const debouncedChangeHandler = useCallback(debounce(getFilterBends, 300), []);

  return (
    <div className="container-fluid mt-3">
      <nav
        onChange={getFilterBends}
        className="navbar navbar-light bg-light justify-content-center"
      >
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">{allBands}</div>
          <div className="my-2">
            <Pagination className=" justify-content-center">
              {pagesItems}
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BandsList;
