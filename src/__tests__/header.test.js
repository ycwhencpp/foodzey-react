import { render } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux";
import Store from "../utils/Store";
import { StaticRouter } from "react-router-dom/server";

test("Is Logo loading when header is rendered or not ", ()=>{
    const header = render(
    <StaticRouter>    
        <Provider store = {Store}>
            <Header />
        </Provider>
    </StaticRouter>
    );

    const logo = header.getByTestId("logo");

    expect(logo.src).toBe('https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj');
})

test("Is user Online Tag is visible or not ", ()=>{
    const header = render(
    <StaticRouter>    
        <Provider store = {Store}>
            <Header />
        </Provider>
    </StaticRouter>
    );

    const userOnlineStatus = header.getByTestId("online-status");

    expect(userOnlineStatus.innerHTML).toBe('✅');
})

test("Is cart value is 0 on header render", ()=>{
    const header = render(
    <StaticRouter>    
        <Provider store = {Store}>
            <Header />
        </Provider>
    </StaticRouter>
    );

    const userCart = header.getByTestId("cart");

    expect(userCart.innerHTML).toBe('🛒-2');
})