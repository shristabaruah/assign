import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals";
import { FilterProvider } from "./Context/Filter-context";
import { FavouriteProvider } from "./Context/Favourite-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FavouriteProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </FavouriteProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
