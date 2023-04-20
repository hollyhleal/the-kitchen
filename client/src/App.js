import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import NavBar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

//import pages

import Profile from "./pages/Profile/Profile";
import Booking from "./pages/Booking/Booking";

//middleware
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
        {/* <Route path="/payment" element={<Payment />} /> */}
      </Routes>
      <Footer />
    </Router>
    // // </ApolloProvider>
  );
}

export default App;
