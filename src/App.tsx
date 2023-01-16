import axios from "axios";
import "./App.css";
import useSwr from "swr";
import Product from "./Components/Product";
import Layout from "./Components/Layout";

type ProductType = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}[];
interface GetResponse {
  limit: number;
  products: ProductType;
  skip: number;
  total: number;
}

async function fetcher(url: string) {
  const { data } = await axios.get(url);
  return data;
}

export default function App() {
  const api =
    "https://dummyjson.com/products?limit=20&skip=0&select=title,price,thumbnail";

  const { data, error, isLoading } = useSwr<GetResponse, Error>(api, fetcher);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {isLoading ? (
          <div
            style={{
              fontSize: "30px",
              height: "95vh",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <span>Loading...</span>
          </div>
        ) : error ? (
          <div
            style={{
              fontSize: "30px",
              height: "95vh",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <span>Something Error </span>
          </div>
        ) : (
          data?.products.map((x, i) => <Product item={x} key={i} />)
        )}
      </div>
    </Layout>
  );
}
