import { useEffect, useState } from "react"
import { CLOUDINARY_IMAGE_URL } from "../constants";
import {useParams} from "react-router-dom";
import NotFound from "./NotFound";
import ShimmerResturantMenu from "./ShimmerResturantMenu";

const getResturantMenu = async (res_id,setResMenu, setIsMenuFound) =>{
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${res_id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
    const data = await response.json();
    const card_data =  data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setResMenu(card_data);
    if (!card_data) {
        setIsMenuFound(false);
    }

}  
// function 
const RestuarantMenuContainer  = ({itemCards, title}) =>{
    if (itemCards) {

        return <div className="menu-card">
            <h1> <b>{title}</b></h1>
            <div className="menu-items">
                {
                    itemCards.map((item, index) => {
                        if (index < 3) {
                            return <ResMenuItems {...item.card.info} key = {item.card.info.id} />
                        }
                    })
                }
            </div>
        </div>
    }

}

const ResMenuItems = ({name, description, imageId, ratings, price =''}) => {
    return (
        <div className="menu-item" >
            <img src = {CLOUDINARY_IMAGE_URL +  imageId}/>
            <h1>{name}</h1>
            <h2>{description}</h2>
            {ratings?.aggregatedRating?.rating ? <h3>Ratings: {ratings?.aggregatedRating?.rating} stars</h3> : '' }
            {price ? <h3>Price : {price/100}Rs </h3> : ''}
        </div>
    )
};


const RestuarantMenu = () => {
    const res_id = useParams();
    const [ResMenu, setResMenu] = useState(null);
    const [IsMenuFound, setIsMenuFound] = useState(true);

    useEffect(()=>{
        getResturantMenu(res_id['res_id'],setResMenu, setIsMenuFound);  
    },[]);
    if (!IsMenuFound) {
        return <NotFound/>
    } 
    if (!ResMenu) {
        return <ShimmerResturantMenu/>
    }

    return (
        <div className="resturant-menu-details">
            <h1> Menu </h1>
            <div className="menu-cards">
                {ResMenu.map((menu, index)=>{
                    if (index !=0 && menu.card.card.title) {
                        return <RestuarantMenuContainer {...menu.card.card} key = {menu.card.card.title ?? index} />
                    }
                })}
            </div>
        </div>
    )
}

export default RestuarantMenu;