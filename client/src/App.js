import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//import pages

import Profile from "../src/pages/Profile/Profile";
// import Page from ''
// import Page from ''
// import Page from ''

//middleware

//function app
function App() {
  return (
    // <ApolloProvider client={client}>
    <Router>
      <NavBar />

      <Footer />
    </Router>
    // </ApolloProvider>
  );
}

export default App;
