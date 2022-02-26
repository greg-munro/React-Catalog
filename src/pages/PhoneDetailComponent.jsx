import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

export const PhoneDetailComponent = () => {
  const [phones, setPhones] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/phones/${id}`)
      .then((response) => {
        setPhones(response.data);
        setTimeout(() => {}, 2000);
        setLoading(false);
      })
      .catch(console.log);
  }, [id]);

  return (
    <div>
      {loading === true ? <Loader /> : loading === "false"}
      <h3>{phones.name}</h3>
      <img src={phones.image_url} alt={phones.name} height="200px" />
      <h6>Color: {phones.color}</h6>

      <h6>{phones.description}</h6>
      <h4>Price: {phones.price}</h4>
    </div>
  );
};
