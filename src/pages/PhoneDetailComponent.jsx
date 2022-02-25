import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const PhoneDetailComponent = () => {
  const [phones, setPhones] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3005/phones/${id}`)
      .then((response) => {
        setPhones(response.data);
      })
      .catch(console.log);
  }, [id]);

  return (
    <div>
      <h3>{phones.name}</h3>
      <img src={phones.image_url} alt={phones.name} height="200px" />
      <h6>Color: {phones.color}</h6>

      <h6>{phones.description}</h6>
      <h4>Price: {phones.price}</h4>
    </div>
  );
};
