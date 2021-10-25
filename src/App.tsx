import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import GoogleScript from "./components/GoogleScript";
import SegmentScript from "./components/SegmentScript";
import TawkToScript from "./components/TawkToScript";

function RootApp() {
  return (
    <div className="rootReact">
      <Helmet>
        <meta charSet="utf-8" />
        <title>A Meaningful Page Title</title>
      </Helmet>
      <GoogleScript />
      <SegmentScript />
      <TawkToScript />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default RootApp;
