import {useParams} from "react-router-dom";
import NotFound from "./NotFound";
import ShimmerResturantMenu from "./ShimmerResturantMenu";
import useRestuarant from "../utils/useRestuarant";
import { addItem, removeItem } from "../utils/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import ResMenuItems from "./ResMenuItems";


// function 
const RestuarantMenuContainer  = ({itemCards, title , cartItems, HandelAddItem, HandelRemoveItem}) =>{
    if (itemCards) {

        return <div className="menu-card">
            <h1> <b>{title}</b></h1>
            <div className="menu-items">
                {
                    itemCards.map((item, index) => {
                        if (index < 3) {
                            return <ResMenuItems {...item.card.info} cartItems = {cartItems} HandelAddItem = {HandelAddItem} HandelRemoveItem = {HandelRemoveItem} key = {item.card.info.id} />
                        }
                    })
                }
            </div>
        </div>
    }

}




const RestuarantMenu = () => {
    console.log("render");
    const res_id = useParams();

    const [ResMenu, isMenuFound] = useRestuarant(res_id);
    const dispatch = useDispatch();
    function HandelAddItem (item){
        dispatch(addItem(item));
    }
    function HandelRemoveItem (item){
        dispatch(removeItem(item));
    }

    const cartItems = useSelector((state)=> state.cart.items);

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
                        return <RestuarantMenuContainer {...menu.card.card} cartItems = {cartItems} HandelAddItem={HandelAddItem} HandelRemoveItem = {HandelRemoveItem} key = {menu.card.card.title ?? index} />
                    }
                })}
            </div>
        </div>
    )
}

export default RestuarantMenu;