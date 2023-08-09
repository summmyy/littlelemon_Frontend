import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/restaurant/menu/menu-items/')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.error('Error fetching data', err);
      });
  }, []);


  return (
    <div>
      <h1>Today's Menu</h1>
      {data.map((value, index) => (
        <div key={index}>
          <h2>{value.title}</h2>
          <h3>{value.price}</h3>
          <h3>{value.description}</h3>
        </div>
        ))}
    </div>
  );
}

export default Menu;
