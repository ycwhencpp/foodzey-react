const ShimmerResturantMenu = () =>{
    return <div data-testid="Shimmer-menu-div" className="Shimmer-menu-div">
        <div className="title"></div>
        <div  data-testid = "shimmer-menu-item-container" className="shimmer-menu-item-container"> 

     {
        Array(4).fill('').map((item,index) => {
            return <div className="shimmer-menu-item" key ={index}> 
                <div className="category text"></div>
                <div className="image"> </div>
                <div className="name"> </div>
                <div className="desc"> </div>
                <div className="rating width"> </div>
                <div className="price width"> </div>
                <div className="divider"> </div>
            </div>
        })
    }
    </div>
    </div>
}

export default ShimmerResturantMenu;