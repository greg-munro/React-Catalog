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
          </div>
        );
      })}
    </>
  );
};
