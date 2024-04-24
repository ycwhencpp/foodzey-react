import { useDispatch, useSelector } from "react-redux";
import { clearAll, removeItem } from "../utils/CartSlice";

const Cart = () => {
    const cartItems  = useSelector((state) => state.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch(); 
    function HandelRemoveItem (item){
        dispatch(removeItem(item));
    }
    function HandelClearCart(){
        console.log("r");
        dispatch(clearAll());
    }
    return (
        <div>
            <div className=" flex justify-between">
            <h1 className=" font-bold text-xl p-2 m-2 text-black" >Cart</h1>
            <button className=" font-bold text-xl p-2 m-2 text-white bg-red-900" onClick={()=>{HandelClearCart()}} >Clear all</button>

            </div>
            <h1 className=" p-3 m-2 text-xl">Items in cart - {cartItems.length}</h1>

            
            <div className="flex gap-3 flex-wrap p-3 m-3">
                {cartItems.map((item, index)=>{

                    return (<div key={index} className="border border-voilet-100 p-3 ">
                    <div>{item}</div>
                    <button className="bg-red-400 p-2 m-2" onClick ={()=>{
                        HandelRemoveItem(item)
                    }}>Remove From cart </button>
                    </div>)
})}
            </div>
        </div>
        )
}
export default Cart;