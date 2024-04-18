import React from "react";
import { useState} from "react";

function FilterRestuarantCard(realData, SearchText) {
  return realData.filter((restuarant) => restuarant.info.name.toLowerCase().includes(SearchText.toLowerCase()));
}

const SearchBar = ({RealData, onSearch}) => {

  const [SearchText, setSearchText] = useState("");
  return (
    <React.Fragment>
      <div className="mb-5">
        <input
        className="border border-violet-200 p-2 bg-green-200"
          type="text"
          name="search-input"
          placeholder="Search For a Resturant"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = FilterRestuarantCard(RealData, e.target.value);
            onSearch(data);
          }}
        />
        <button className="ml-5 border border-violet-200 p-2 px-4 rounded-2xl bg-violet-200"
          onClick={() => {
            const data = FilterRestuarantCard(RealData, SearchText);
            onSearch(data);
          }}>
          Search
        </button>
      </div>
      <h1>{SearchText}</h1>
    </React.Fragment>
  );
};
export default SearchBar;
