const express = require("express");
const graphqlHTTP = require("express-graphql");
// const expressGraphQL = require('express-graphql');
const schema = require("./schema.js");
// const cors = require('cors');

const app = express();

// enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *
// app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.POST || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
