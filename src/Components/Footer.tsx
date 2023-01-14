import React from "react";

export default function Footer({ footerItems }: { footerItems: string[][] }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "90%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          padding: "0 10px",
        }}
      >
        {footerItems[0].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          padding: "0 10px",
        }}
      >
        {footerItems[1].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          padding: "0 10px",
        }}
      >
        {footerItems[2].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          padding: "0 10px",
        }}
      >
        {footerItems[3].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
