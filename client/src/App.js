import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//import pages

// import Page from ''
// import Page from ''
// import Page from ''
// import Page from ''

//middleware

//function app
function App() {
  return (
    <>
      <Router>
        <NavBar />
      </Router>
    </>
  );
}

export default App;
