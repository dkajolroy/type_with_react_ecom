import React from "react";

const navigation = ["Home", "Product", "Cart", "Account"];

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
      }}
    >
      <div
        style={{
          padding: " 0 10px",
        }}
      >
        Logo
      </div>
      <div>
        {navigation.map((x, i) => (
          <span
            style={{
              margin: "0 20px",
            }}
            key={i}
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
