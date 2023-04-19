import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

//import pages

import Profile from "./pages/Profile/Profile";
import Booking from "./pages//Booking/Booking";
// import Page from ''
// import Page from ''
// import Page from ''

//middleware

//function app
function App() {
  return (
    // // <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
    // // </ApolloProvider>
  );
}

export default App;
