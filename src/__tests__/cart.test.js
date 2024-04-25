import { fireEvent, render, waitFor } from "@testing-library/react"
import Header from "../components/Header"
import RestuarantMenu from "../components/RestaurantMenu";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import {RestuarantMenuData} from "../mocks/ResData";


global.fetch =  jest.fn(()=>{
    return Promise.resolve({
        json : () => Promise.resolve(RestuarantMenuData)
    })
})
test('Is cart updating on clicking add item or not', async ()=>{
    const app = render(
        <StaticRouter>
            <Provider store = {Store}>
                <RestuarantMenu/>
                <Header/>
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(app.getAllByTestId('add-item-btn')));


    const addItemBtn = app.getAllByTestId('add-item-btn');

    fireEvent.click(addItemBtn[0]);
    fireEvent.click(addItemBtn[1]);
    fireEvent.click(addItemBtn[2]);

    await waitFor(() => expect( app.getAllByTestId('remove-item-btn')));
    const removeItemBtn = app.getAllByTestId('remove-item-btn');
    fireEvent.click(removeItemBtn[0]);
    fireEvent.click(removeItemBtn[1]);

    //cart already have 2 item 
    expect(app.getByTestId('cart').innerHTML).toBe('🛒-3');
});