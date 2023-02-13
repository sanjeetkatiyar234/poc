import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import JSONFilter from './jsonfilter';

function App() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
    )
      .then((res) => res.json())
      .then((result) => {
        setCurrencies(result);
      });
  }, []);
  return (
    <div className="App">
        <JSONFilter currencies={currencies} />
    </div>
  );
}

export default App;
