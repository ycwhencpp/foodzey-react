import { render } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux";
import Store from "../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import RestuarantList from "../components/RestuarantList";
import {RestuarantListData} from "../mocks/ResData";


test('Is shimmer loading or not', ()=>{
    const resList = render(    
    <StaticRouter>    
        <Provider store = {Store}>
            <RestuarantList  resData={[]} realData={[]}/>
        </Provider>
    </StaticRouter>)

    const ShimmerResList = resList.getByTestId("shimmer-res-list");
    expect(ShimmerResList.children.length).toBe(10);

});

test('Is Ressturant list loading or not', ()=>{
    const structuredData = RestuarantListData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;
    const resList = render(    
    <StaticRouter>    
        <Provider store = {Store}>
            <RestuarantList  resData={structuredData} realData={structuredData}/>
        </Provider>
    </StaticRouter>)

    const ResList = resList.getByTestId("res-list");
    expect(ResList.children.length).toBe(20);

});