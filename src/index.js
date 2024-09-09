import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import LoginSlice from "./components/Auth/LoginSlice";

const store = configureStore({
  reducer: {
    auth: LoginSlice,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
