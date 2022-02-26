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
      <div class="card text-center">
        <div class="card-header">{phones.name}</div>
        <div class="card-body">
          <img src={phones.image_url} alt={phones.name} height="220px" />
          <p class="card-text">{phones.detailed_description}</p>
          <h5>Color: {phones.color}</h5>
          <h5>Rating: {phones.rating}</h5>
          <h5>In Stock: {phones.in_stock}</h5>
          <h4>Price: {phones.price}</h4>
        </div>
        <div class="card-footer text-muted">
          <a href="/" class="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>

      {loading === true ? <Loader /> : loading === "false"}
    </div>
  );
};
