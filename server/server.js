const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const stripe = require("stripe")(
  "sk_test_51MylV6Ans49T1zFVmXMZwjIfnrIKdY1fNYbsGbOeWkvM8gaoAVDUZTCKhBDCIUCZ9KPF0ATMtTgdAhCxXxLszgl400iJ3Eub4g"
);

const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};
//test
startApolloServer(typeDefs, resolvers);
