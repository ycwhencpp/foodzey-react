import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// root elemet
const root_elem = document.getElementById("root");
const root = ReactDOM.createRoot(root_elem);

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};

root.render(<Layout />);
