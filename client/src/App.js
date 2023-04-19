import React from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import pages

import Profile from "../src/pages/Profile/Profile";
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
            <Route path="/" element={<Home />} />
            </Routes>
        <Footer />
      </Router>
    // // </ApolloProvider>
  );
}

export default App;
