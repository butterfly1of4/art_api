import React, {Component} from "react";
import { Route, Link, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { response } from "express";

const url =
  "https://api.harvardartmuseums.org/object?q=culture:Italian&apikey=208241b1-775f-4706-8f78-b382d1981b11";

const hostURL = "https://rocky-hamlet-98173.herokuapp.com/record"
const serverURL = ""

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
let entry = [];

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      entry: [],
    };
    console.log(entry)
  }
  render() {
    return <div className="App">
      <div className="Entry">
        {this.state.entry}
      </div>
    </div>;
  }
  // componentDidMount() {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         entry: res.entry
  //       });
  //       console.log(res, entry)
  //       return this.state.entry;
  //     });
  // }
}

export default App;
