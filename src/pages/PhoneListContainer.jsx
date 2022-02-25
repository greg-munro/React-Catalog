import { useState, useEffect } from "react";
import axios from "axios";

export const PhoneListContainer = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/phones")
      .then((response) => {
        setPhones(response.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <h1>Zignaly Phone Catalog</h1>
      {phones.map((phone) => {
        return (
          <div key={phone.id}>
            <h3>{phone.name}</h3>
            <img src={phone.image_url} alt={phone.name} height="200px" />
            <h6>Color: {phone.color}</h6>

            <h6>{phone.description}</h6>
            <h4>Price: {phone.price}</h4>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
};
