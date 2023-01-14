import React from "react";
import Navbar from "./Navbar";

type ChildrenType = {
  children: React.ReactNode;
};

const Layout: React.FC<ChildrenType> = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "90%",
        margin: "auto",
      }}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
