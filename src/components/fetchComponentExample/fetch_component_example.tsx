// import * as React from 'react';
import "./fetchExample.css";

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export interface Item {
  id: number;
  name: string;
  price: number;
  type?: string;
}

export interface jsonType {
  key: any;
  value: any;
}

export interface DogData {
  url: string;
  breed?: string;
}

const dogApiAdress = "https://dog.ceo/api/breeds/image/random";
// const itemsApiAdress = "http://localhost:3000/api/item";
const itemsApiAdress =
  window.location.protocol + "//" + window.location.hostname + ":3000/api/item";

export default function FetchExample() {
  const [error, setError] = useState<null | { message: string }>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [dogData, setDogData] = useState<DogData>({ url: "", breed: "" });
  const [jsonData, setJsonData] = useState<null | any>("");
  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    refreshDog();
  }, []);

  const refreshDog = () => {
    fetch(dogApiAdress, { method: "GET" })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result : ");
          console.log(result);
          const dogurl = result.message;
          const breed = result.message.split("/breeds/")[1].split("/")[0];
          setIsLoaded(true);
          setDogData({ url: dogurl, breed: breed });
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const refreshItems = () => {
    console.log("Fetching : ", itemsApiAdress);
    fetch(itemsApiAdress, { method: "GET" })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result : ");
          console.log(result);
          setIsLoaded(true);
          setJsonData(result);
          setItems(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  const dispJson = () => {
    console.log("json data:");
    console.log(jsonData);
    if (jsonData) {
      return Object.entries(jsonData).map(([key, value]) => <p>{key}</p>);
    } else {
      return <p> No data </p>;
    }
  };

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <>
        <div
          className="fetchContainer"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>Data : {dispJson()}</div>
          <div>
            <Button onClick={refreshDog}> Change dog </Button>
            <Button onClick={refreshItems}> Fetch items </Button>
          </div>
          <div>
            <h1> {dogData.url ? dogData.breed : ""} </h1>
            <img src={dogData.url} className="dog" alt=""></img>
          </div>

          <table>
            <thead>
              <tr>
                <th colSpan={3}> Veg and fruit table </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> Name </td>
                <td> Price </td>
                <td> Type </td>
              </tr>
              {items.map((item: Item, index, list) => (
                <tr key={item.id}>
                  <td> {item.name} </td>
                  <td> {item.price} </td>
                  <td> {item.type} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
