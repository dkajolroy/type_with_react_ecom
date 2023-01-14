import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from "react";
import Product from "./Components/Product";

type Data = {
  limit: number;
  products: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  }[];
  skip: number;
  total: number;
};

export default function App() {
  const [totalUser, setTotalUser] = useState<Data>();
  useEffect(() => {
    const reqUser = async (): Promise<void> => {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=20&skip=0&select=title,price,thumbnail"
      );
      setTotalUser(data);
    };
    reqUser();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {totalUser?.products.map((x, i) => (
        <Product item={x} key={i} />
      ))}
    </div>
  );
}
