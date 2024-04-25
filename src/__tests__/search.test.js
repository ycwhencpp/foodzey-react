import { fireEvent, render, waitFor } from "@testing-library/react"
import Body from "../components/Body"
import { Provider } from "react-redux";
import Store from "../utils/Store";
import { StaticRouter } from "react-router-dom/server";
import {RestuarantListData} from "../mocks/ResData";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => RestuarantListData
    })
})

test("Is Search working properly or not", async ()=>{
    const body = render(
    <StaticRouter>    
        <Provider store = {Store}>
            <Body />
        </Provider>
    </StaticRouter>
    );
    const searchBtn = body.getByTestId('search-btn');
    await waitFor(() => expect(searchBtn));

    const searchInput = body.getByTestId('search-input');
    act(()=>{
        fireEvent.change(searchInput,{
            target:{
                value: 'pIzZa'
            }
        })
    });
    act(()=>{
        fireEvent.click(searchBtn);
    });

    expect(body.getByTestId('res-list').children.length).toBe(2);


});