import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Car(props) {
  return (
    <h2>
      {" "}
      Car Brand:{props.cardetails.name} year:{props.cardetails.year} fuel:
      {props.cardetails.fuel}{" "}
    </h2>
  );
}

function Garage() {
  ////usage of rest opeartor in Introduction Component
  const Details = { name: "Ford", year: "2000", fuel: "petrol" }; //object
  //child component
  return (
    <>
      {" "}
      <h2> Garage Componet </h2>;
      <Car cardetails={Details} />
      <Promotion name={Details.name} />
      <Introduction {...Details} />
      <CarEvent />
      <CarBrands />
    </>
  );
}

function Introduction({ name, year, fuel }) {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{year}</p>
      <p>fuel:{fuel}</p>
    </div>
  );
}

function CarEvent() {
  //<> </> //React Fragment //react useState() hook usage using counter
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 5);
        }}
      >
        -5
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          if (count >= 0) {
            setCount(count + 5);
          }
        }}
      >
        +5
      </button>
    </div>
  );
}

function Promotion({ name }) {
  return <h2> Introducing {name} </h2>;
}

function CarBrands() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Car Brand"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setValue("");
        }}
      >
        clear
      </button>
      <ul>{value}</ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);

reportWebVitals();
