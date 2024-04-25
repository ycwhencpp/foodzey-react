import { CLOUDINARY_IMAGE_URL } from "../constants";

const ResMenuItems = ({name = '', description = '', imageId = '', ratings = '', price ='', cartItems, HandelAddItem, HandelRemoveItem}) => {
    return (
        <div className="menu-item" >
            <img src = {CLOUDINARY_IMAGE_URL +  imageId}/>
            <h1>{name}</h1>
            <h2>{description}</h2>
            {ratings?.aggregatedRating?.rating ? <h3>Ratings: {ratings?.aggregatedRating?.rating} stars</h3> : '' }
            {price ? <h3>Price : {price/100}Rs </h3> : ''}
            {cartItems.includes(name) ?  <button data-testid = "remove-item-btn"  className="bg-red-400 p-2 m-2" onClick={ () => {
                HandelRemoveItem(name);
            }}>Remove from cart </button> : <button data-testid = "add-item-btn" className="bg-green-400 p-2 m-2" onClick={ () => {
                HandelAddItem(name);
            }}>Add to Cart</button> }
            
        </div>
    )
};

export default ResMenuItems;