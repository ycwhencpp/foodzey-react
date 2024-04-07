import { useState , useEffect} from "react";
import RestuarantList from "./RestuarantList";
import SearchBar from "./SearchBar";

async function getResturantData(setRealData, setFilteredData) {
  try{
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json_data = await data.json();
    setRealData(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredData(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  } catch (error){
    console.log(error);
  }

}


const Body = () => {
  const [RealData, setRealData] = useState([]);
  const [FilteredData, setFilteredData] = useState(RealData);
  useEffect(()=>{
    getResturantData(setRealData, setFilteredData);
  },[]);

  useEffect(()=>{
    setFilteredData(RealData);
  },[RealData]);

  function onSearch(data) {
      setFilteredData(data)
  }



  return (
    <div className="body">
      <SearchBar RealData = {RealData} onSearch = {onSearch} />
      <RestuarantList resData={FilteredData} realData = {RealData} />
    </div>
  );
};

export default Body;
