import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

// const apiAdress = 'https://jsonplaceholder.typicode.com/posts';
const apiAdress = "http://localhost:3000/api/item";

interface Item {
  id: number;
  name: string;
  price: number;
  type?: string;
}

export default function PostRequestHooks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    refreshData();
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const listData = (data: Item[]) => {
    if (data) {
      return data.map((it: Item) => (
        <p>
          {" "}
          {it.name} {it.type ? "(" + it.type + ")" : ""} : {it.price}{" "}
        </p>
      ));
    } else {
      return "  No Data  ";
    }
  };

  const refreshData = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    fetch(apiAdress, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data.items);
      });
  };

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">POST Request with React Hooks</h5>
      <div className="card-body"> Data: {listData(data)} </div>
      <Button block size="lg" onClick={refreshData}>
        Refresh
      </Button>
    </div>
  );
}
