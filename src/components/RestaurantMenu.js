import { CLOUDINARY_IMAGE_URL } from "../constants";
import {useParams} from "react-router-dom";
import NotFound from "./NotFound";
import ShimmerResturantMenu from "./ShimmerResturantMenu";
import useRestuarant from "../utils/useRestuarant";


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
    console.log("render");
    const res_id = useParams();

    const [ResMenu, isMenuFound] = useRestuarant(res_id);
    console.log(ResMenu);

    if (!isMenuFound) {
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