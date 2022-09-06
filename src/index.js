import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

library.add(faMagnifyingGlass, faStar, emptyStar);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
