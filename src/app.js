import React, { lazy, Suspense } from "react";
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

// root elemet
const root_elem = document.getElementById("root");
const root = ReactDOM.createRoot(root_elem);

const Instamart = lazy(() => import("./components/Instamart"));


const Layout = () => {
  const IsOnline = useOnlineStatus();
  if (!IsOnline) {
    return <Offline/>
  }
  return (
    <React.Fragment >
        <Header />
        <Outlet />
    </React.Fragment>
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


