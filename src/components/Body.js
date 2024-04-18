import RestuarantList from "./RestuarantList";
import SearchBar from "./SearchBar";

import useRestuarantCard from "../utils/useRestuarantCard";
import useFilteredCard from "../utils/useFilteredCard";




const Body = () => {
  console.log("render");
  const [RealData, FilteredData, setFilteredData] =  useRestuarantCard();

  function onSearch(data) {
    useFilteredCard(data, setFilteredData);
  }



  return (
    <div className="p-5">
      <SearchBar RealData = {RealData} onSearch = {onSearch} />
      <RestuarantList resData={FilteredData} realData = {RealData} />
    </div>
  );
};

export default Body;
