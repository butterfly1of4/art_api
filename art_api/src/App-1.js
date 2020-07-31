import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { response } from "express";

const url =
  "https://api.harvardartmuseums.org/object?q=culture:Italian&apikey=208241b1-775f-4706-8f78-b382d1981b11";

const entryGet = {
  method: "GET",
  headers: {
    Accept: "data/json",
  },
};
const entryPut = {
  method: "PUT",
  headers: {
    Accept: "data/json",
  },
};
const entryPost = {
  method: "POST",
  headers: {
    Accept: "data/json",
  },
};
const entryDelete = {
  method: "DELETE",
  headers: {
    Accept: "data/json",
  },
};

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      entry: [],
    };
  }
  componentDidMount() {
    fetch(url, entryGet)
      .then((res) => res.json())
      .then((res) => {
        this.state({
          entry: res.entry,
        });
        return this.state.entry;
      });
  }
  render() {
    return <div></div>;
  }
}

export default App;
