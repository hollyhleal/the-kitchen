import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

//import pages

import Profile from "./pages/Profile/Profile";
import Booking from "./pages/Booking/Booking";
// import Page from ''
// import Page from ''
// import Page from ''

//middleware

//function app
function App() {
  return (
    // // <ApolloProvider client={client}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
    // // </ApolloProvider>
  );
}

export default App;
