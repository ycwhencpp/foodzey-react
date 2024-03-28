import React from "react";
import { useState } from "react";
import { RestuarantCardData } from "../constants";

function FilterRestuarantCard(FilteredRestuarantCardData, SearchText) {
  return RestuarantCardData.filter((restuarant) => restuarant.info.name.includes(SearchText));
}

const SearchBar = ({ setRealData }) => {
  const [SearchText, setSearchText] = useState("");
  const [FilteredRestuarantCardData, setFilteredRestuarantCardData] = useState(RestuarantCardData);
  return (
    <React.Fragment>
      <div className="search-bar">
        <input
          type="text"
          name="search-input"
          placeholder="Search For a Resturant"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const dataw = FilterRestuarantCard(FilteredRestuarantCardData, e.target.value);
            setFilteredRestuarantCardData(dataw);
            setRealData(dataw);
          }}
        />
        <button
          onClick={() => {
            const data = FilterRestuarantCard(RestuarantCardData, SearchText);
            setFilteredRestuarantCardData(data);
            setRealData(data);
          }}>
          Search
        </button>
      </div>
      <h1>{SearchText}</h1>
    </React.Fragment>
  );
};
export default SearchBar;
