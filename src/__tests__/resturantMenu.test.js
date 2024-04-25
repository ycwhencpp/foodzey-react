import { render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux";
import Store from "../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import RestuarantMenu from "../components/RestaurantMenu";

import {RestuarantMenuData} from "../mocks/ResData";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => Promise.resolve(RestuarantMenuData) // return
    });
})

test("Is menu rendering or not ", async ()=>{
    const ResMenuPage = render(
    <StaticRouter>    
        <Provider store = {Store}>
            <RestuarantMenu />
        </Provider>
    </StaticRouter>
    );

    await waitFor(()=> expect( ResMenuPage.getByTestId("menu-card")));

    const resMenucards = ResMenuPage.getByTestId("menu-card");

    expect(resMenucards.children.length).toBe(7);    
    
})

test("Is menu shimmer rendering or not ", ()=>{
    const ResMenuPage = render(
    <StaticRouter>    
        <Provider store = {Store}>
            <RestuarantMenu />
        </Provider>
    </StaticRouter>
    );


    const ShimmerResMenucards = ResMenuPage.getByTestId("shimmer-menu-item-container");

    expect(ShimmerResMenucards.children.length).toBe(4);    

})