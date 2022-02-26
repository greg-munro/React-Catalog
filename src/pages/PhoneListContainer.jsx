import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

export const PhoneListContainer = () => {
  const [phones, setPhones] = useState([]);
  const [sortBrand, setSortBrand] = useState([...phones]);
  const [sortPrice, setSortPrice] = useState([...phones]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3005/phones/")
      .then((response) => {
        setPhones(response.data);
        setTimeout(() => {}, 2000);
        setLoading(false);
      })
      .catch(console.log);
  }, []);

  const sortByBrand = () => {
    phones.sort((a, b) => {
      return a.brand < b.brand ? -1 : 1;
    });
    setSortBrand();
    
  };

  const sortByPrice = () => {
    phones.sort((a, b) => {
      return a.price < b.price ? -1 : 1;
    });
    setSortPrice();
    
  };

  return (
    <>
      {loading === true ? <Loader /> : loading === false}
      <h1>Zignaly Phone Catalog</h1>

      <button onClick={sortByBrand}>Sort by Brand</button>
      <button onClick={sortByPrice}>Sort by Price (lowest-highest)</button>

      {phones.map((phone) => {
        return (
          <div key={phone.id}>
            <h3>{phone.name}</h3>
            <img src={phone.image_url} alt={phone.name} height="200px" />
            <h6>Color: {phone.color}</h6>

            <h6>{phone.description}</h6>
            <h4>Price: {phone.price}</h4>
            <Link to={`/phones/${phone.id}`}>Details</Link>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
};
