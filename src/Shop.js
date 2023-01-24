import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import "./index.css";
import useFetch from "./useFetch.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const { get, loader } = useFetch();

  const getItems = async () => {
    try {
      const data = await get("https://learn.guidedao.xyz/api/student/products");
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="shop">
      {loader
        ? "...loading"
        : items.flat(2).map((item) => <Item key={item.id} info={item} />)}
    </div>
  );
}
