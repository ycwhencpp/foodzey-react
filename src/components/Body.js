import { useState } from "react";
import RestuarantList from "./RestuarantList";
import SearchBar from "./SearchBar";
import { RestuarantCardData } from "../constants";

const Body = () => {
  const [RealData, setRealData] = useState(RestuarantCardData);
  return (
    <div className="body">
      <SearchBar setRealData={setRealData} />
      <RestuarantList resData={RealData} />
    </div>
  );
};

export default Body;
