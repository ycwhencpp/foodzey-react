import { useEffect, useState } from "react";

const getResturantMenu =  async (res_id) => {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${res_id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
    const data = await response.json();
    const card_data =  data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    card_data ? setisMenuFound(true) : setisMenuFound(false);
    setrestrurant(card_data);
}

const useRestuarant = ({res_id}) => {
    console.log("hook called");
    [restrurant, setrestrurant] = useState(null);
    [isMenuFound, setisMenuFound] = useState(true);

    useEffect(()=>{
        console.log("effect");
        getResturantMenu(res_id);

    },[]);





    return [restrurant, isMenuFound];
}

export default useRestuarant;