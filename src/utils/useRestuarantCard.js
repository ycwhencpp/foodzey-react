import { useEffect, useState } from "react";



const useRestuarantCard = () => {
    console.log("hook called");
    
    const [ResCards, setResCards] =  useState([]);
    const [FilteredData, setFilteredData] = useState(ResCards);
    useEffect(() => {
        console.log("effect");
        const getResturantData = async (card) => {
            try{
              const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
              const json_data = await data.json();
              const card_data = json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
              setResCards(card_data);
              setFilteredData(card_data);
            } catch (error){
              console.log(error);
            }
          
        }
        getResturantData();

    }, []);


    
    return [ResCards, FilteredData, setFilteredData];
};

export default useRestuarantCard;