import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type ChildrenType = {
  children: React.ReactNode;
};

const footerItems = [
  ["Home", "About", "Accounts", "Accessibility"],
  ["Contact", "Communities", "Center area", "Accessibility"],
  ["Privacy", "Policy", "Guidelines", "Commercial", "Official zone"],
  ["Help", "Addresses", "017xxxxxxx", "Payments", "Guidelines", "Center area"],
];

const Layout: React.FC<ChildrenType> = ({ children }) => {
  return (
    <div>
      <div
        style={{
          maxWidth: "90%",
          margin: "auto",
        }}
      >
        <Navbar />
        <div
          style={{
            minHeight: "90vh",
          }}
        >
          {children}
        </div>
      </div>
      <div
        style={{
          background: "lightgray",
          padding: "50px 0",
        }}
      >
        <Footer footerItems={footerItems} />
      </div>
    </div>
  );
};

export default Layout;
