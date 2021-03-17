import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./pages/App";
import DemoHtml from "./pages/DemoHtml";

const AppWithRouter = () => {
  return (
    <Router>
      {/* Deklarasi Komponen, Load CSS */}
      {/* domain/main/dashboard state.address = dashboard */}
      {/* domain/v1/activity state.address = activity */}
      {/* domain/ => menampilkan App.js*/}
      <Route path="/" exact component={App} />
      {/* domain/demo => menampilkan DemoHtml.js */}
      <Route path="/demo/:content" component={DemoHtml} />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppWithRouter />
    {/* <DemoHtml /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
