import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error404 from "./components/404";
import ErrorAbout404 from "./components/About404";
import RestuarantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import useOnlineStatus from "./utils/useOnlineStatus";
import Offline from "./components/Offline";
import userContext from "./utils/userContext";
import Footer from "./components/Footer";

// root elemet
const root_elem = document.getElementById("root");
const root = ReactDOM.createRoot(root_elem);

const Instamart = lazy(() => import("./components/Instamart"));

const Layout = () => {
  console.log("layout");
  const[user, setUser] = useState({
      name:'anurag',
      email:'anurag@google.com',
  });
  const IsOnline = useOnlineStatus();
  if (!IsOnline) {
    return <Offline/>
  }
  return (
    <userContext.Provider value={{user:user, setUser}} >
      <React.Fragment >
          <Header />
          <Outlet />
          {/* <userContext.Provider value ={{user: {
            name: 'new anurag',
            email: 'new anurag@gmail.com'
          }}} > */}
          <Footer/>
          {/* </userContext.Provider> */}
      </React.Fragment>
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    errorElement : <Error404/>,
    children:[
      {
        path : '/',
        element: <Body/>,
        errorElement : <Error404/>,
      },
      {
        path : 'about',
        element: <About/>,
        exact :true,
        errorElement : <ErrorAbout404/>,
      },
      {
        path: 'resturant-menu/:res_id',
        element: <RestuarantMenu/>,
        errorElement : <ErrorAbout404/>,

      },
      {
        path: 'profile',
        element: <ProfileClass/>,
      },
      {
        path: 'instamart',
        element: <Suspense fallback = {<h1>Loading .....</h1>}>
                    <Instamart/>
                </Suspense>
      },
    ]
  },

]);

root.render(<RouterProvider router = {appRouter}/>);


