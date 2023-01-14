import React from "react";

type ProductType = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function Product(props: { item: ProductType }) {
  const { item } = props;
  return (
    <div
      style={{
        width: "25%",
      }}
    >
      <div
        style={{
          margin: "10px",
          backgroundColor: "tomato",
          padding: "10px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
          src={item.thumbnail}
          alt={item.title}
        />
        <p>{item.price}</p>
        <span>{item.title}</span>
      </div>
    </div>
  );
}
